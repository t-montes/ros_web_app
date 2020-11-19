import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SensoricaService } from '../sensorica.service';
// import { SocketService } from "../../../socket.service";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent
{
  //Define the variables that will contain current values, which will be display in the html's labels
  measurements_value: number;
  //Define the variables that will play as Subscribers to variables
  // private _temperature_Sub: Subscription;
  // Constructor
  constructor(private sensoricaService: SensoricaService)//,private socketService: SocketService)
  {
    console.log('JAJAJAJA es el measurements component')
  }
  // On Init
  ngOnInit(): void
  {
    console.log('Que bueno que es iniciar');
    // Define initial values for the variables
    this.measurements_value = -1;
    // Make the subscribers subscribe to their correspondent SensoricaService variable
    // this._temperature_Sub = this.sensoricaService.measurements_value.subscribe(value_received => this.measurements_value = value_received);
    // console.log('Num');
    // data => this.temperature_value = data
    // console.log(this.sensoricaService.measurements_value);
    // We ask for the values of the joints to start the labels
    // this.change_value('Measurements','get');
  }
  // On Destroy
  ngOnDestroy()
  {
    // When this component is destroyed, the subscribers must unsubscribe
    // this._temperature_Sub.unsubscribe();
    console.log(':( Me destruí')
    this.sensoricaService.close();
  }

  sendMessage()
  {
    console.log('Chateando...');
    this.sensoricaService.sendMessage("Test");
  }
  // This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object
  // get_value(object: string)
  // {
  //   this.sensoricaService.get_value(object);
  // }
  // This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object
  // change_value(object: string, action: string)
  // {
  //   this.sensoricaService.change_value(object, action);
  //   // value_received => this.temperature_value = this.sensoricaService.temperature_value
  //   // this.temperature_value = this.sensoricaService.temperature_value;
  // }
  // This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object
  // stop_changing_value()
  // {
  //   this.sensoricaService.stop_changing_value();
  // }



}

// public chartType: string = 'line';
//
// public chartDatasets: Array<any> = [
//   { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
//   { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
// ];
//
// public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//
// public chartColors: Array<any> = [
//   {
//     backgroundColor: 'rgba(105, 0, 132, .2)',
//     borderColor: 'rgba(200, 99, 132, .7)',
//     borderWidth: 2,
//   },
//   {
//     backgroundColor: 'rgba(0, 137, 132, .2)',
//     borderColor: 'rgba(0, 10, 130, .7)',
//     borderWidth: 2,
//   }
// ];
//
// public chartOptions: any = {
//   responsive: true
// };
// public chartClicked(e: any): void { }
// public chartHovered(e: any): void { }

// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-measurements',
//   templateUrl: './measurements.component.html',
//   styleUrls: ['./measurements.component.css']
// })
// export class MeasurementsComponent implements OnInit
// {
//   public chartType: string = 'line';
//
//   constructor() { }
//
//   ngOnInit() {
//     public chartDatasets: Array<any> = [
//       { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
//       { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
//     ];
//
//     public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//
//     public chartColors: Array<any> =
//     [
//       {
//         backgroundColor: 'rgba(105, 0, 132, .2)',
//         borderColor: 'rgba(200, 99, 132, .7)',
//         borderWidth: 2,
//       },
//       {
//         backgroundColor: 'rgba(0, 137, 132, .2)',
//         borderColor: 'rgba(0, 10, 130, .7)',
//         borderWidth: 2,
//       }
//     ];
//
//     public chartOptions: any = {responsive: true};
//     public chartClicked(e: any): void { }
//     public chartHovered(e: any): void { }
//   }
// }
// export class MeasurementsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit()
//   {
//   }
//
// }
