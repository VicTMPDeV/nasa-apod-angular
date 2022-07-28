import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private readonly mainUrl: string[] = ['/','/dashboard']; 
  public onDashBoardPage: boolean = JSON.parse(localStorage.getItem('onDashBoardPage')!) ?? true;

  constructor(private _navigationService: NavigationService){}

  ngOnInit(): void {
    this._navigationService.getCurrentUrl()
      .subscribe((currentUrl: string) => {
        (this.mainUrl.includes(currentUrl)) ? this.onDashBoardPage = true : this.onDashBoardPage = false;
        localStorage.setItem('onDashBoardPage', JSON.stringify(this.onDashBoardPage));
      });
  }

  public goBack(): void {
    this._navigationService.getBackLocation();
  }

}
