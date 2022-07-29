import { Component, OnInit } from '@angular/core';
import { PictureDto } from 'src/app/models/pictureDto.interface';
import { NasaApiService } from '../../shared/services/nasa-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  private readonly today: Date = new Date();
  public picturesList: PictureDto[] = [];

  constructor(private _nasaApiService: NasaApiService) { }

  ngOnInit(): void {
    this._nasaApiService.getPicturesList(this.today, 5) //PUT CONSTANTS 5
      .subscribe((response: PictureDto[]) => {
        response.forEach(element => {
          this.picturesList.unshift(element);
        });
      });
  }

}
