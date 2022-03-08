import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraccionCopilotoComponent } from './traccion-copiloto/traccion-copiloto.component';
import { TraccionPilotoComponent } from './traccion-piloto/traccion-piloto.component';
import { TraccionLiveComponent } from './traccion-live/traccion-live.component';
// import { NgxJoystickModule } from 'ngx-joystick';
import { TraccionJoystickComponent } from './traccion-joystick/traccion-joystick.component';

@NgModule({
  declarations: [
    TraccionCopilotoComponent,
    TraccionPilotoComponent,
    TraccionLiveComponent,
    TraccionJoystickComponent,
  ],
  // imports: [CommonModule, NgxJoystickModule ],
  exports: [
    TraccionCopilotoComponent,
    TraccionPilotoComponent,
    TraccionLiveComponent,
    TraccionJoystickComponent
  ],
})
export class TraccionModule {}
