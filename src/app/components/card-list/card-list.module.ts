import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImagePipeModule } from 'src/app/shared/pipes/image-pipe/image.module';
import { TruncateTextPipeModule } from 'src/app/shared/pipes/truncate-text-pipe/truncate-text.module';
import { CardListComponent } from './card-list.component';


@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    ImagePipeModule,
    TruncateTextPipeModule
  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
