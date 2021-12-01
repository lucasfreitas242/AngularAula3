import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    MasterPageComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NavbarComponent
    
  ],
  exports: [
    MasterPageComponent,
  ]
})
export class SharedModule { }
