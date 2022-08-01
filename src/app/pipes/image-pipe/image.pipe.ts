import { Pipe, PipeTransform } from '@angular/core';
import { PictureDto } from '@models/pictureDto.interface';
import { MediaType } from "@models/media-type.interface";

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  public readonly noImage: string = 'assets/img/no_image_available.jpg';

  transform(picture: PictureDto): string {
    if(picture.media_type === MediaType.Image){
      return picture?.url || this.noImage;
    }else if(picture.media_type === MediaType.Video){
      return picture?.thumbnail_url || this.noImage; 
    }else{
      return this.noImage;
    }
  }

}
