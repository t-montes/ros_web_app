import { BrazoService } from '../brazo.service';
import { WebsocketService } from '../../../websocket.service';
import { Component, Input, OnInit } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-brazo-cinematica-directa',
  templateUrl: './brazo-cinematica-directa.component.html',
  styleUrls: ['./brazo-cinematica-directa.component.css'],
  providers: [WebsocketService, BrazoService],
})
export class BrazoCinematicaDirectaComponent implements OnInit {
  @Input() brazoService: BrazoService; // decorate the property with @Input()
  //Define the variables that will contain the joint's current value, which will be display in the html's labels

  //Define the variables for the maximum and minimun values of the joints
  joint_1_value = 0;
  joint_2_value = 0;
  joint_3_value = 0;
  joint_4_value = 0;
  joint_5_value = 0;
  joint_6_value = 0;
  joint_7_value = 0;
  gripper_value = 0;
  percentage_value = 0;

  min_value_joint: number = 0;
  max_value_joint: number = 100;

  //Define the variables for the maximum and minimun values of the gripper

  min_value_gripper: number = 0;
  max_value_gripper: number = 100;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.brazoService);
    this.brazoService.messages.subscribe((msg) => {
      console.log('Response from websocket: ' + msg);
      if (msg['id'] == 'inverse_kinematics_motors') {
        console.log("Recibí en el front de kinematics motors");
        this.joint_1_value = Number(msg['joint_1']);
        this.joint_2_value = Number(msg['joint_2']);
        this.joint_3_value = Number(msg['joint_3']);
        this.joint_4_value = Number(msg['joint_4']);
        this.joint_5_value = Number(msg['joint_5']);
        this.joint_6_value = Number(msg['joint_6']);
        this.gripper_value = Number(msg['gripper']);
      }
    });
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object

  change_value(pMotor: string, pAction: string) {
    const message = {
      id: 'inverse_kinematics_motors',
      motor: pMotor,
      action: pAction,
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }

  //This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object

  stop_changing_value(pMotor: string) {
    const message = {
      id: 'inverse_kinematics_motors',
      motor: pMotor,
      action: 'stop',
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }

  update_percentage(pPercentage: number) {
    this.percentage_value = pPercentage;
    console.log(this.percentage_value)
  }

  change_value_percentage(pPercentage: number) {
    const message = {
      id: 'inverse_kinematics_percentage',
      percentage: pPercentage,
    };
    console.log('new message from brazo to websocket: ', message);
    this.brazoService.messages.next(message);
  }
}
