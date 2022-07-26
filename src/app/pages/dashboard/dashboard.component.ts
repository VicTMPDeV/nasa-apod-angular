import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PictureDto } from '@models/pictureDto.interface';
import { NasaApiService } from '@services/nasa-api.service';
import { NavigationService } from '@services/navigation.service';
import { Constants } from '@constants/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  private readonly today: Date = new Date();
  public picturesList: PictureDto[] = [];
  public CONST = Constants;

  constructor(private _nasaApiService: NasaApiService,
              private _navigationService: NavigationService) { }

  ngOnInit(): void {
    this._nasaApiService.getPicturesList(this.today, Constants.FIVE)
      .subscribe({
        next: (response: PictureDto[]) => {
          response.forEach((element: PictureDto) => {
            this.picturesList.unshift(element);
          });
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse.error.msg);
          this._navigationService.getErrorPage();
        }
      })
  }

}
