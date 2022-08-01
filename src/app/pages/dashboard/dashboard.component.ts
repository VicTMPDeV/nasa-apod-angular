import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PictureDto } from '@models/pictureDto.interface';
import { NasaApiService } from '@services/nasa-api.service';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  private readonly today: Date = new Date();
  public picturesList: PictureDto[] = [];
  public hasError: boolean = false;
  public errorMessage: string = '';

  constructor(private _nasaApiService: NasaApiService,
              private _navigationService: NavigationService) { }

  ngOnInit(): void {
    this._nasaApiService.getPicturesList(this.today, 5) //PUT CONSTANTS 5
      .subscribe({
        next: (response: PictureDto[]) => {
          response.forEach((element: PictureDto) => {
            this.picturesList.unshift(element);
          });
        },
        error: (err: HttpErrorResponse) => {
          this.hasError = true;
          this.errorMessage = err.error.msg;
          this.goToErrorPage();
          this.showErrorMessage();
        }
      })
  }

  public showErrorMessage(): void {
    alert(this.errorMessage);
  }

  public goToErrorPage(): void{
    this._navigationService.getErrorPage();
  }

}
