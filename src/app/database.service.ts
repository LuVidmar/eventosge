import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { galleryimg, createGalImg } from 'src/app/data-types';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //----------Variables----------
  private itemsCollection: AngularFirestoreCollection<galleryimg>;
  items: Observable<galleryimg[]>;
  retrievedIDs: Array<string> = [];

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<galleryimg>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  //----------Methods----------
  addItem(item: galleryimg) {
    this.itemsCollection.add(item);
  }

  test() {
    console.log('test');
  }

  getItemsArray(list: Array<any>) {

    list.length = 0; //empty placeholder
    
    this.afs.collection('gallery').get().subscribe( dbitems => { //get from firestore
      dbitems.docs.forEach( doc => {
        var newGalItem: galleryimg;        
        newGalItem = createGalImg(doc.data()['desc'],doc.data()['imglink']);
        console.log('Recieved Data');
        list.push(newGalItem);
        this.retrievedIDs.push(doc.id); //adding id to list for deletion
      })
    });

  }

  update(list: Array<any>) {

    console.log('Updating');
    console.log(this.retrievedIDs);
    

    this.retrievedIDs.forEach( identif => { //delete all old docs
      this.afs.collection('gallery').doc(identif).delete(); 
    });

    this.retrievedIDs.length = 0; //reset

    this.upload(list);

  }

  upload(list: Array<any>) {

    console.log('Uploading');    

    list.forEach( item => { //add new docs
      this.afs.collection('gallery').add(item);
    });

  }

}
