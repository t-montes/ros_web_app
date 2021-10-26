export class Wheel {
  speed:string 
  current: string
  next_order:string

  public constructor(
    speed:string,
    current: string,
    next_order:string
  ){
    this.speed=speed;
    this.current=current;
    this.next_order=next_order;
  }
}
