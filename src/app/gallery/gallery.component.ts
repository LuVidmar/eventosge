import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { PhotoVisualizerComponent } from '../photo-visualizer/photo-visualizer.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  //Images
  urls: img[] = [];
  loadNumber: number = 10;
  loadedImages: string[] = [];
  loadedall: Promise<boolean>;

  //Other vars
  titles = {
    boxes: 'Boxes',
    ambientacion: 'Ambientación',
    eventos: 'Eventos'
  }
  title;


  constructor(private modalService: MDBModalService, private route: ActivatedRoute, private storage: AngularFireStorage, analytics: AngularFireAnalytics, private afs: AngularFirestore) {

    // Getting ID
    var id = this.route.snapshot.paramMap.get('id');
    this.title = this.titles[id];

    // Setting analytics
    analytics.logEvent(id);

    //Creating array promise

    // Get all images   
    this.loadedall = new Promise((resolvebool, rejectbool) => {

      storage.ref('galeria/' + id).listAll().forEach(ref => {

        var i = 1;
        ref.items.forEach(item => { //for each image

          var name = item.name.split('.').slice(0, -1).join('.'); //take out extension
          name = name.split('(').slice(0, -1).join('('); //takeout renumeration
          var date = new Date(name);

          item.getDownloadURL().then(url => { //get download

            this.urls.push({ data: url, date: date });
            if (i == ref.items.length) {
              resolvebool(true); //finish loading
            }
            else {
              i++;
            }

          })
            .catch(reason => {
              rejectbool(false);
            })
        });

      });

    });

    this.loadedall.then(loaded => {
      if (loaded == true) {
        var sorted = this.urls.sort((a, b) => +new Date(b.date) - +new Date(a.date));
        this.urls = sorted;
        this.addMore(10);
      }
    })

  }

  //Add more images
  addMore(n: number) {
    var prev: number = this.loadedImages.length;
    for (let i = prev; i < (n + prev); i++) {
      this.loadedImages.push(this.urls[i].data);
    }
  }

  ngOnInit() {
  }

  //Modal visualizer
  modalRef: MDBModalRef;

  modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: 'modal-fluid modal-full-height modal-dialog-centered',
    containerClass: '',
    animated: true,
    data: {
      imglink: './../../assets/grayloading.jpg'
    }
  }

  openModal(img: any) {
    this.modalOptions.data.imglink = img;
    this.modalRef = this.modalService.show(PhotoVisualizerComponent, this.modalOptions)
  }

}

export interface img {
  data: string,
  date: Date
}