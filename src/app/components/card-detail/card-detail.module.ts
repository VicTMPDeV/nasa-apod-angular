import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from '@angular/material/tabs';
import { ImagePipeModule } from 'src/app/shared/pipes/image-pipe/image.module';
import { CardDetailComponent } from './card-detail.component';


@NgModule({
  declarations: [
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    ImagePipeModule
  ],
  exports: [
    CardDetailComponent
  ]
})
export class CardDetailModule { }
