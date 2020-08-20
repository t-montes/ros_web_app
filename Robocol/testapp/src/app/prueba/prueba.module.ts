import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [PruebaComponent],
  imports: [
  	BrowserModule,
    CommonModule
  ],
  exports: [PruebaComponent]
})
export class PruebaModule { }
