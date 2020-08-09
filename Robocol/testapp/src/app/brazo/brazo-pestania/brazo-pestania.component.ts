import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BrazoService } from '../brazo.service';

@Component({
  selector: 'app-brazo-pestania',
  templateUrl: './brazo-pestania.component.html',
  styleUrls: ['./brazo-pestania.component.css']
})
export class BrazoPestaniaComponent implements OnInit, OnDestroy {
  
  //Define the variables that will contain the joint's current value, which will be display in the html's labels

  joint_1_value: number;
  joint_2_value: number;
  joint_3_value: number;
  joint_4_value: number;
  joint_5_value: number;
  joint_6_value: number;
  joint_7_value: number;

  //Define the variables that will play as Subscribers to the BrazoService's variables, so that when they (BrazoService variables) change, these variables (Component) will change too

  private _joint_1_Sub: Subscription;
  private _joint_2_Sub: Subscription;
  private _joint_3_Sub: Subscription;
  private _joint_4_Sub: Subscription;
  private _joint_5_Sub: Subscription;
  private _joint_6_Sub: Subscription;
  private _joint_7_Sub: Subscription;

  constructor(private brazoService: BrazoService) { }

  ngOnInit(): void {

  	//Define initial values for the variables

  	this.joint_1_value = 0;
  	this.joint_2_value = 0;
  	this.joint_3_value = 0;
  	this.joint_4_value = 0;
  	this.joint_5_value = 0;
  	this.joint_6_value = 0;
  	this.joint_7_value = 0;

  	//Make the subscribers subscribe to their correspondent BrazoService variable

  	this._joint_1_Sub = this.brazoService.joint_1_value.subscribe(value_received => this.joint_1_value = value_received);
  	this._joint_2_Sub = this.brazoService.joint_2_value.subscribe(value_received => this.joint_2_value = value_received);
  	this._joint_3_Sub = this.brazoService.joint_3_value.subscribe(value_received => this.joint_3_value = value_received);
  	this._joint_4_Sub = this.brazoService.joint_4_value.subscribe(value_received => this.joint_4_value = value_received);
  	this._joint_5_Sub = this.brazoService.joint_5_value.subscribe(value_received => this.joint_5_value = value_received);
  	this._joint_6_Sub = this.brazoService.joint_6_value.subscribe(value_received => this.joint_6_value = value_received);
  	this._joint_7_Sub = this.brazoService.joint_7_value.subscribe(value_received => this.joint_7_value = value_received);

  	//We ask for the values of the joints to start the labels

  	this.get_joint_value('1');
  	this.get_joint_value('2');
  	this.get_joint_value('3');
  	this.get_joint_value('4');
  	this.get_joint_value('5');
  	this.get_joint_value('6');
  	this.get_joint_value('7');
  }

  ngOnDestroy() {

  	//When this component is destroyed, the subscribers must unsubscribe

    this._joint_1_Sub.unsubscribe();
    this._joint_2_Sub.unsubscribe();
    this._joint_3_Sub.unsubscribe();
    this._joint_4_Sub.unsubscribe();
    this._joint_5_Sub.unsubscribe();
    this._joint_6_Sub.unsubscribe();
    this._joint_7_Sub.unsubscribe();
  }


  //This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the joint

  get_joint_value(joint_number: string){
    this.brazoService.get_joint_value(joint_number);  
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the joint

  change_joint_value(joint_number: string, order: string){
    this.brazoService.change_joint_value(joint_number, order);
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the joint

  stop_changing_joint_value(joint_number: string){
    this.brazoService.stop_changing_joint_value(joint_number);
  }

}
