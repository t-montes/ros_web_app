export class Wheel {
  speed:string 
  current: string
  enable:boolean

  public constructor(
    speed:string,
    current: string,
    enable:boolean
  ){
    this.speed=speed;
    this.current=current;
    this.enable=enable;
  }
}
