import { Pipe, PipeTransform } from '@angular/core';
import { PictureDto } from 'src/app/models/pictureDto.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  //TODO-> Desarrollar lógica entorno al mediaType que es un enum
  transform(picture: PictureDto): string {
    if(picture.url && picture.media_type === 'image'){
      return picture.url;
    }else{
      
    }
    return (picture.url) ? picture.url : 'assets/images/no_image_available.jpg';
  }

}
