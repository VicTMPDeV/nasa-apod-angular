import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { CardPictureComponent } from './card-picture.component';



@NgModule({
  declarations: [
    CardPictureComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CardPictureComponent
  ]
})
export class CardPictureModule { }
