
//Article
export interface galleryimg{
    desc: string;
    imglink: string;
}

export function createGalImg (desc: string, imglink: string){
    var newGalleryImg: galleryimg;
    newGalleryImg = {desc,imglink};
    return newGalleryImg;
}

//Enum 
export enum states {
  products,
  users
}

//User
export interface userData{
  name: string;
  surname: string;
  email: string;
  phone: number;
}

export function createUser (name: string, surname: string, email: string, phone: number){
  var newUser: userData;
  newUser = {name,surname,email,phone};
  return newUser;
}
