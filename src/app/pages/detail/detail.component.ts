import { Component, OnInit } from '@angular/core';
import { PictureDto } from '../../models/pictureDto.interface';
import { NasaApiService } from '../../shared/services/nasa-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public pictureDetail!: PictureDto;

  constructor(private _nasaApiService: NasaApiService) { }

  ngOnInit(): void { //usar activated route para obtener el id del url activo y peticionar
    // this._nasaApiService.getPicture().subscribe(console.log);
  }

}
