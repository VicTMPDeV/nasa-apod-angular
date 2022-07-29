import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { CardDetailModule } from '../../components/card-detail/card-detail.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    FlexLayoutModule,
    CardDetailModule,
    MatProgressSpinnerModule
  ]
})
export class DetailModule { }
