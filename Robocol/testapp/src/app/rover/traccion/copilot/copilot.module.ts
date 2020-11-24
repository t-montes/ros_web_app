import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopilotComponent } from './copilot.component';
import { TelemetryComponent } from './telemetry/telemetry.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CopilotComponent,
    TelemetryComponent,
  ],
  bootstrap: [CopilotModule]
})
export class CopilotModule { }
