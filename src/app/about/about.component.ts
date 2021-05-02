import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  texts = [
    'Mi nombre es Giselle Espinguinha, soy la mayor de cinco hermanos y de niña organizaba y ambientaba sus cumpleaños.',
    'Mi nombre es Giselle Espinguinha, soy la mayor de cinco hermanos y de niña organizaba y ambientaba sus cumpleaños.',
    'Hace 22 años con pocos recursos, organice mi boda en un quinta “al aire libre” con fuegos artificiales y I Dont Want to Miss a Thing (Aerosmith) de fondo enmarcando un evento original y diferente para la época.',
    'Con la llegada de mis hijos, fui desarrollando la creatividad para planear cada evento importante en sus vidas.',
    'Con la llegada de mis hijos, fui desarrollando la creatividad para planear cada evento importante en sus vidas.',
    'En 2018 comencé a capacitarme y prepararme profesionalmente en distintas áreas sumando a mis capacidades y experiencias las herramientas para la producción de eventos únicos.',
  ]

  i = 0;

  constructor(analytics: AngularFireAnalytics) {
    analytics.logEvent('about');
  }

  ngOnInit(): void {
  }

  source = interval(5000);
  subscription: Subscription = this.source.subscribe(val => this.next());

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  next(){
    if( this.i < this.texts.length - 1){
      this.i++;
    }
    else if ( this.i = this.texts.length - 1){
      this.i = 0;
    }
  }

  prev(){
    if ( this.i > 0) {
      this.i--;
    }
  }

  move(event: any) {
    switch (event.keyCode){
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        break;
    }
  }

}
