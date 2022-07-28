import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { CardPictureComponent } from './card-picture.component';
import { ImagePipeModule } from 'src/app/shared/pipes/image-pipe/image.module';
import { TruncateTextPipeModule } from '../../shared/pipes/truncate-text-pipe/truncate-text.module';
import { I18nDatePipeModule } from 'src/app/shared/pipes/i18n-date-pipe/i18n-date.module';


@NgModule({
  declarations: [
    CardPictureComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    ImagePipeModule,
    I18nDatePipeModule,
    TruncateTextPipeModule
  ],
  exports: [
    CardPictureComponent
  ]
})
export class CardPictureModule { }
