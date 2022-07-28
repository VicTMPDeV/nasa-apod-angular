import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { CardPictureComponent } from './card-picture.component';
import { ImagePipeModule } from 'src/app/shared/pipes/image-pipe/image.module';
import { TruncateTextModule } from '../../shared/pipes/truncate-text-pipe/truncate-text.module';



@NgModule({
  declarations: [
    CardPictureComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    ImagePipeModule,
    TruncateTextModule
  ],
  exports: [
    CardPictureComponent
  ]
})
export class CardPictureModule { }
