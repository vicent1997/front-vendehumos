export interface VendehumosModel {
  nombre: string;
  descripcion: string;
  categorias: Array<string> | null;
  fechaAlta: Date;
  usuarioId: number;
  votadoPor: Array<number>;
  urlImagen: string;
}
