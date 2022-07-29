import { Component, Input } from '@angular/core';
import { PictureDto } from 'src/app/models/pictureDto.interface';
import { MediaType } from "src/app/models/media-type.interface";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {

  @Input('pictureData')
  public picture!:PictureDto;

  public video:string = MediaType.Video;
  
}
