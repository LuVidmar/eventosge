import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Notfound404Component } from './notfound404/notfound404.component';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { AdminModule } from './admin/admin.module';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../secrets';
import { InConstructionComponent } from './in-construction/in-construction.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoVisualizerComponent } from './photo-visualizer/photo-visualizer.component';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
    FooterComponent,
    InConstructionComponent,
    AboutComponent,
    GalleryComponent,
    PhotoVisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MaterialModule,
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
  ],
  providers: [
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
