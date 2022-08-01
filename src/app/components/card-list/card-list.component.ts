import { Component, Input } from '@angular/core';
import { Constants } from '@constants/constants';
import { PictureDto } from '@models/pictureDto.interface';
import { MediaType } from "@models/media-type.interface";

@Component({
  selector: 'app-card-picture',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input('pictureData')
  public picture!:PictureDto;

  public video:string = MediaType.Video;

  public CONST = Constants;

}
