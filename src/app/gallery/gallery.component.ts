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
  urls: Promise<string>[] = [];
  loadNumber: number = 10;
  loadedImages: string[] = [];

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

    // Get all images
    storage.ref('galeria/' + id).listAll().forEach(ref => {
      ref.items.forEach(item => {
        var promUrl = item.getDownloadURL();
        this.urls.push(promUrl);
      });
      this.addMore(10);

    });
  }

  //Add more images
  addMore(n: number) {
    var prev: number = this.loadedImages.length;
    if (prev + n < this.urls.length) {
      for (let i = prev; i < (prev + n); i++) {
        
        this.urls[i].then(url => {
          this.loadedImages.push(url);
        });

      }
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
