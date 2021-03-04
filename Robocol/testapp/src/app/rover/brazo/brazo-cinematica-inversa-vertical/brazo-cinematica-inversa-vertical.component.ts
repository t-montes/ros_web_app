import { Component, OnInit } from '@angular/core';
import { BrazoService } from '../brazo.service';

@Component({
  selector: 'app-brazo-cinematica-inversa-vertical',
  templateUrl: './brazo-cinematica-inversa-vertical.component.html',
  styleUrls: ['./brazo-cinematica-inversa-vertical.component.css']
})
export class BrazoCinematicaInversaVerticalComponent implements OnInit {
  
  imageSrc:String;

  imageButtons = [
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/VERTICAL inicial.png', name: 'VERTICAL inicial'},
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/U activado.png', name: 'U activado'}, 
  {src:'/static/assets/Brazo/Cinematica Inversa/Vertical/D activado.png', name: 'D activado'}
  ];

  constructor(private brazoService: BrazoService) { }

  ngOnInit(): void {
    this.imageSrc = this.imageButtons[0].src;
  }

  change_value(imageNameObject, action: String) {
    this.imageSrc = imageNameObject.src;
    this.brazoService.change_value('inverse_vertical', action);
  }

  stop_changing_value(){
    this.imageSrc = this.imageButtons[0].src;
    this.brazoService.stop_changing_value();
  }

}
