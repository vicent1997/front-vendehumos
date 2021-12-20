import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { VendehumosModel } from '../models/vendehumos.model';

@Component({
  selector: 'app-vendehumos-detail',
  templateUrl: './vendehumos-detail.component.html',
  styleUrls: ['./vendehumos-detail.component.css'],
})
export class VendehumosDetailComponent implements OnInit {
  public vendehumo: VendehumosModel;
  public user: UsuarioModel;

  constructor() {}

  ngOnInit(): void {
    this.mockVendehumo();
  }

  private mockVendehumo() {
    this.vendehumo = {
      nombre: '',
      descripcion: '',
      fechaAlta: new Date(),
      categorias: [],
      urlImagen: '',
      usuarioId: 0,
      votadoPor: [],
    };
  }

  votar(usuarioId: number): void {
    this.vendehumo.votadoPor.push(usuarioId);
    /* Añadir servicio para actualizar la bbdd */
  }
}
