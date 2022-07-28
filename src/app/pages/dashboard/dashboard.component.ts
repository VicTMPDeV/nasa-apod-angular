import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PictureDto } from 'src/app/models/pictureDto.interface';
import { NasaApiService } from '../../shared/services/nasa-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private readonly today: Date = new Date();
  public picturesList: PictureDto[] = [];

  constructor(private _nasaApiServices: NasaApiService) { }

  ngOnInit(): void {
    this._nasaApiServices.getPicturesList(this.today, 5) //PUT CONSTANTS 5
    .pipe(tap(console.log))  
    .subscribe(response => {
        this.picturesList = response;
      });
  }

}
