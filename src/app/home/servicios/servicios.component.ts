import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios = [
    {
      img: '../../../assets/boxes.jpg',
      title: 'Boxes',
      shortdesc: 'A medida',
      longdesc: '¿Queres sorprender a alguien especial? \n Nuestras boxes explosivas son un regalo único y diferente, pensado y creado en función de los gustos, intereses o temática para el homenajeado. \n ¡Juntos ideamos un regalo original y sorprendente!',
      router: 'boxes'
    },
    {
      img: '../../../assets/ambientacion.jpg',
      title: 'Ambientación',
      shortdesc: 'Todo tipo de eventos',
      longdesc: 'Adaptamos y decoramos un espacio, conjugando elementos, mobiliario, sonido e iluminación, para así crear una atmósfera, un entorno que refleje la personalidad de los protagonistas y que transmita imágenes, sensaciones, emociones… \n Resultado: la construcción de la escenografía perfecta de tu fiesta.',
      router: 'ambientacion'
    },
    {
      img: '../../../assets/evento.jpg',
      title: 'Eventos',
      shortdesc: 'Planificación y organización',
      longdesc: 'Nuestra meta es el diseño, desarrollo y supervisión del evento social o empresarial, a través de la selección y realización de presupuestos, la búsqueda del espacio y los servicios que cumplan con las aspiraciones y expectativas de nuestros clientes. \n La coordinación integral, la creatividad, la meticulosidad en cada detalle, la búsqueda de las mejores propuestas y presupuestos y la capacidad de improvisación para resolver imponderables, hacen que las tareas para la ejecución de tu evento sean un éxito.',
      router: 'eventos'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
