import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PictureDto } from '@models/pictureDto.interface';
import { NasaApiService } from '@services/nasa-api.service';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {

  public pictureDetail!: PictureDto;
  public errorMessage: string = '';

  constructor(private _nasaApiService: NasaApiService,
              private _activatedRoute: ActivatedRoute,
              private _navigationService: NavigationService) { }

  ngOnInit(): void { 
    this._nasaApiService.getPictureById(this._activatedRoute.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (response: PictureDto) => {
          this.pictureDetail = response;
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse.error.msg);
          this._navigationService.getErrorPage();
        }
      })
  }


}
