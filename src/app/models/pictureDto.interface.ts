import { MediaType } from "./media-type.interface";

export interface PictureDto {

    date:            string;
    title:           string;
    url:             string;
    hdurl?:          string; 
    thumbnail_url?:  string;
    media_type:      MediaType; //TODO-> GESTIONARLO, SI VIENE UN VIDEO QUE HACER -> HAY UN PARAMETRO PARA EL THUMBNAIL
    explanation:     string;
    service_version: string;
    copyright?:      string;
    
}