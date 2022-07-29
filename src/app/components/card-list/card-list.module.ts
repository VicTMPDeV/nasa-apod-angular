import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { CardListComponent } from './card-list.component';
import { ImagePipeModule } from 'src/app/shared/pipes/image-pipe/image.module';
import { TruncateTextPipeModule } from 'src/app/shared/pipes/truncate-text-pipe/truncate-text.module';
import { I18nDatePipeModule } from 'src/app/shared/pipes/i18n-date-pipe/i18n-date.module';


@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ImagePipeModule,
    I18nDatePipeModule,
    TruncateTextPipeModule
  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
