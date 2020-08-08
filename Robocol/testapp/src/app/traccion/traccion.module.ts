import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraccionComponent } from './traccion.component';
import { JoystickComponent } from './joystick/joystick.component';
import { TelemetryComponent } from './telemetry/telemetry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TraccionComponent,
    JoystickComponent,
    TelemetryComponent  
  ]
})
export class TraccionModule { }
