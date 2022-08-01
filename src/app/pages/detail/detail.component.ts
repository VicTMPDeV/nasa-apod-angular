import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PictureDto } from '../../models/pictureDto.interface';
import { NasaApiService } from '../../shared/services/nasa-api.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {

  public pictureDetail!: PictureDto;
  public hasError: boolean = false;
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
        error: (err: HttpErrorResponse) => {
          this.hasError = true;
          this.errorMessage = err.error.msg;
          this.goToErrorPage();
          this.showErrorMessage();
          console.log(err.error.msg);
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
