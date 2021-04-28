export class Bateria {
  url:string //para la imagen
  voltios: string
  amperios: string
  corriente: string
  nombre : string

  public constructor(
    url:string,
    voltios: string ,
    amperios: string,
    corriente: string ,
    nombre : string
  ){
    this.url=url;
    this.voltios=voltios
    this.amperios=amperios
    this.corriente =corriente
    this.nombre= nombre
  }
}
