import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { CardDetailComponent } from './card-detail.component';
import { ImagePipeModule } from 'src/app/shared/pipes/image-pipe/image.module';
import { I18nDatePipeModule } from 'src/app/shared/pipes/i18n-date-pipe/i18n-date.module';



@NgModule({
  declarations: [
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ImagePipeModule,
    I18nDatePipeModule
  ],
  exports: [
    CardDetailComponent
  ]
})
export class CardDetailModule { }
