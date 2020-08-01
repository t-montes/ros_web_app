import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './views/home/home.component';
import { BrazoViewComponent } from './views/brazo/brazo.component';
import {PruebaComponent} from './prueba/prueba/prueba.component';

@NgModule({
  declarations: [ 
    HomeViewComponent, BrazoViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent },
      { path: 'brazo', component: BrazoViewComponent },
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