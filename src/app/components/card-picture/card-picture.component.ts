import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-picture',
  templateUrl: './card-picture.component.html',
  styleUrls: ['./card-picture.component.scss']
})
export class CardPictureComponent {

  @Input('pictureData')
  public picture!:any; //TODO  -> borrar any y sustituir por el modelo una vez creado

}
