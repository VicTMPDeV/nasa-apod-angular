import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { CardPictureModule } from '../../components/card-picture/card-picture.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    CardPictureModule
  ]
})
export class DetailModule { }
