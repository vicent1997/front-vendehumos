export class Vendehumos{
    nombre: string = ''
    descripcion: string = ''
    categorias: Array<string> | null = null
    fechaAlta: Date = new Date()
    usuarioId: number = 0
    votadoPor: Array<number> = []
    urlImagen: string = ''

    constructor() { }

}