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
  gripper_value: number;

  min_value:number = -150;
  max_value:number = 150;

  //Define the variables that will play as Subscribers to the BrazoService's variables, so that when they (BrazoService variables) change, these variables (Component) will change too

  private _joint_1_Sub: Subscription;
  private _joint_2_Sub: Subscription;
  private _joint_3_Sub: Subscription;
  private _joint_4_Sub: Subscription;
  private _joint_5_Sub: Subscription;
  private _joint_6_Sub: Subscription;
  private _joint_7_Sub: Subscription;
  private _gripper_Sub: Subscription;

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
    this.gripper_value = 0;

    //Make the subscribers subscribe to their correspondent BrazoService variable

    this._joint_1_Sub = this.brazoService.joint_1_value.subscribe(value_received => this.joint_1_value = value_received);
    this._joint_2_Sub = this.brazoService.joint_2_value.subscribe(value_received => this.joint_2_value = value_received);
    this._joint_3_Sub = this.brazoService.joint_3_value.subscribe(value_received => this.joint_3_value = value_received);
    this._joint_4_Sub = this.brazoService.joint_4_value.subscribe(value_received => this.joint_4_value = value_received);
    this._joint_5_Sub = this.brazoService.joint_5_value.subscribe(value_received => this.joint_5_value = value_received);
    this._joint_6_Sub = this.brazoService.joint_6_value.subscribe(value_received => this.joint_6_value = value_received);
    this._joint_7_Sub = this.brazoService.joint_7_value.subscribe(value_received => this.joint_7_value = value_received);
    this._gripper_Sub = this.brazoService.gripper_value.subscribe(value_received => this.gripper_value = value_received);

    //We ask for the values of the joints to start the labels

    this.get_value('joint_1');
    this.get_value('joint_2');
    this.get_value('joint_3');
    this.get_value('joint_4');
    this.get_value('joint_5');
    this.get_value('joint_6');
    this.get_value('joint_7');
    this.get_value('gripper');


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
    this._gripper_Sub.unsubscribe();
  }


  //This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object

  get_value(object: string){
    this.brazoService.get_value(object);  
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object

  change_value(object: string, action: string){
    this.brazoService.change_value(object, action);
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object

  stop_changing_value(){
    this.brazoService.stop_changing_value();
  }

}
