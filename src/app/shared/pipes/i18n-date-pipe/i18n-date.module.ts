import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nDatePipe } from './i18n-date.pipe';


@NgModule({
  declarations: [
    I18nDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    I18nDatePipe
  ]
})
export class I18nDatePipeModule { }
