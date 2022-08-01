import { Component, Input } from '@angular/core';
import { Constants } from '@constants/constants';
import { PictureDto } from '@models/pictureDto.interface';
import { MediaType } from "@models/media-type.interface";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {

  @Input()
  public picture!:PictureDto;

  public image:string = MediaType.Image;

  public CONST = Constants;
  
}
