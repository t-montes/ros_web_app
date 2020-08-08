import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './views/home/home.component';
import { BrazoPestaniaComponent } from './brazo/brazo-pestania/brazo-pestania.component';
import {PruebaComponent} from './prueba/prueba/prueba.component';
import { TraccionComponent } from './traccion/traccion.component'

@NgModule({
  declarations: [ 
    HomeViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent },
      { path: 'brazo', component: BrazoPestaniaComponent },
      { path: 'traccion', component: TraccionComponent },
      { path: 'prueba', component: PruebaComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}