import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrazoPestaniaComponent } from './brazo-pestania/brazo-pestania.component';



@NgModule({
  declarations: [BrazoPestaniaComponent],
  imports: [
    CommonModule
  ],
  exports: [BrazoPestaniaComponent]
})
export class BrazoModule { }
