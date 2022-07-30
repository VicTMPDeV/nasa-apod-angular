import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PictureDto } from '../../models/pictureDto.interface';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private APODEndpoint: string = 'apod'; 
  private queryParams: HttpParams = new HttpParams();
  private readonly thumbValue: boolean = true;

  constructor( private _utils: UtilsService,
               private _http: HttpClient ) { }

  public getPicturesList(date: Date, daysBefore: number): Observable<PictureDto[]> {
    const currentDate: string = this._utils.APIFormatDate(date, 'yyyy-MM-dd');
    const beforeDate: string = this._utils.APIFormatDate(date, 'yyyy-MM-dd', daysBefore);
    return this._http.get<PictureDto[]>(`${environment.API_URL}${this.APODEndpoint}`, 
                                          {params: this.queryParams
                                            .set('api_key',environment.API_KEY)
                                            .set('start_date', beforeDate)
                                            .set('end_date', currentDate)
                                            .set('thumbs', this.thumbValue) 
                                          })
  }

  public getPictureById( pictureDateId: string ): Observable<PictureDto> {
    return this._http.get<PictureDto>(`${environment.API_URL}${this.APODEndpoint}`, 
                                        {params: this.queryParams
                                          .set('api_key',environment.API_KEY)
                                          .set('date', pictureDateId)
                                          .set('thumbs', this.thumbValue) 
                                        });                          
  }
  
}
