import { Pipe, PipeTransform } from '@angular/core';
import { PictureDto } from 'src/app/models/pictureDto.interface';
import { MediaType } from "src/app/models/media-type.interface";

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  transform(picture: PictureDto): string {
    if(picture.media_type === MediaType.Image){
      return picture?.url || '../../../../assets/img/no_image_available.jpg';
    }else if(picture.media_type === MediaType.Video){
      return picture?.thumbnail_url || '../../../../assets/img/no_image_available.jpg'; 
    }else{
      return '../../../../assets/img/no_image_available.jpg';//mover a constantes de ruta
    }
  }

}
