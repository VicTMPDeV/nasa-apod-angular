import { Component, Input } from '@angular/core';
import { PictureDto } from 'src/app/models/pictureDto.interface';
import { MediaType } from "src/app/models/media-type.interface";

@Component({
  selector: 'app-card-picture',
  templateUrl: './card-picture.component.html',
  styleUrls: ['./card-picture.component.scss']
})
export class CardPictureComponent {

  @Input('pictureData')
  public picture!:PictureDto;

  public video:string = MediaType.Video;

}
