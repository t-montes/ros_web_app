import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotComponent } from './pilot.component';
import { JoystickComponent } from './joystick/joystick.component';
import { NgxJoystickModule } from 'ngx-joystick';
import { LiveComponent } from './../live/live.component';

@NgModule({
  imports: [CommonModule, NgxJoystickModule],
  declarations: [PilotComponent, JoystickComponent, LiveComponent],
  exports: [PilotComponent, JoystickComponent, LiveComponent],
  bootstrap: [PilotModule],
})
export class PilotModule {}
