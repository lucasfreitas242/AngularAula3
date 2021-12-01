import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './pages//not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    MasterPageComponent,
    NavbarComponent,
    NotFoundPageComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    
  ],
  exports: [
    MasterPageComponent,
  ]
})
export class SharedModule { }
