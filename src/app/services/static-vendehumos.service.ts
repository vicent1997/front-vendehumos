import { Injectable } from '@angular/core';
import { VendehumosModel } from '../models/vendehumos.model';

@Injectable({
  providedIn: 'root',
})
export class StaticVendehumosService {
  constructor() {}

  public vendehumos: VendehumosModel[] = [
    {
      nombre: 'Test',
      descripcion: 'dww',
      categorias: null,
      fechaAlta: new Date(),
      usuarioId: 0,
      votadoPor: [1],
      urlImagen: '',
    },
  ];
}
