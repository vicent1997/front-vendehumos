import { Component, OnInit } from '@angular/core';
import { Vendehumos } from '../models/Vendehumos';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-vendehumos-detail',
  templateUrl: './vendehumos-detail.component.html',
  styleUrls: ['./vendehumos-detail.component.css']
})
export class VendehumosDetailComponent implements OnInit {
  vendehumo: Vendehumos = new Vendehumos
  user: Usuario = new Usuario
  
  constructor() { }

  ngOnInit(): void {
    
    this.mockVendehumo();

  }
  private mockVendehumo(){
    this.vendehumo.nombre = ''
    this.vendehumo.descripcion = ''
    this.vendehumo.fechaAlta = new Date
    this.vendehumo.categorias  = []
    this.vendehumo.urlImagen = ''
    this.vendehumo.usuarioId = 0
    this.vendehumo.votadoPor = []
  }

  votar(usuarioId: number):void {
    this.vendehumo.votadoPor.push(usuarioId);
    /* Añadir servicio para actualizar la bbdd */
  }
}
