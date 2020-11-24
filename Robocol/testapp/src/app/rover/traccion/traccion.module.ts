import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraccionComponent } from './traccion.component';
import { LiveComponent } from './live/live.component';
import { TelemetryComponent } from './copilot/telemetry/telemetry.component';
import { JoystickComponent } from './pilot/joystick/joystick.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TraccionComponent, 
    LiveComponent,

    //Pilot
    JoystickComponent,

    //Copilot
    TelemetryComponent
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TraccionModule { }
