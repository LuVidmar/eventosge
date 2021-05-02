import { Component, OnInit } from '@angular/core';
import { galleryimg, createGalImg } from 'src/app/data-types';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Variables
  editField: string;
  itemList: Array<any> = [ { desc: 'Desc del articulo', imglink: 'Link de imagen'} ]; //Placeholder till it loads (shouldnt see this ever)

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    //Loading Table from firebase
    this.db.getItemsArray(this.itemList);
  }

  test(){
    console.log('testing');
  }

  refreshPage(){
    window.location.reload();
  }

  // Before uploading
  updateList(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    this.itemList[id][property] = this.editField;
    console.log('Updated List Locally');
  }

  remove(id: any) {
    this.itemList.splice(id, 1);
  }

  add() {
    var newItem: galleryimg;
    newItem = createGalImg('Desc','Imagen Link');
    this.itemList.push(newItem);
  }

  changeValue(event: any) {
    this.editField = event.target.textContent;
  }

  // Uploading and downloading
  submit(){
    this.db.update(this.itemList);
    this.db.getItemsArray(this.itemList);
  }

}
