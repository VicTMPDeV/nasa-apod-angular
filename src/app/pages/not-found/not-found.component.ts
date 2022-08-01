import { Component } from '@angular/core';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private _navigationService: NavigationService) { }

  public goToHomePage(): void{
    this._navigationService.getHomePage();
  }

}
