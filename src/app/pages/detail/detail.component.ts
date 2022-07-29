import { Component, OnInit } from '@angular/core';
import { PictureDto } from '../../models/pictureDto.interface';
import { NasaApiService } from '../../shared/services/nasa-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {

  public pictureDetail!: PictureDto;

  constructor(private _nasaApiService: NasaApiService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this._nasaApiService.getPictureById(this._activatedRoute.snapshot.paramMap.get('id')!)
      .subscribe((response: PictureDto) => {
        this.pictureDetail = response;
      })
  }

}
