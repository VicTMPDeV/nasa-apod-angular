import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public navServSubscription!: Subscription;
  private readonly mainUrl: string[] = ['/','/dashboard']; 
  public onDashBoardPage!: boolean;
  public logoImage: string = 'assets/img/nasa-favicon.png';

  constructor(private _navigationService: NavigationService){}

  ngOnInit(): void {
    this.navServSubscription = this._navigationService.getCurrentUrl()
      .subscribe((currentUrl: string) => {
        (this.mainUrl.includes(currentUrl)) ? this.onDashBoardPage = true : this.onDashBoardPage = false;
      });
  }

  public goBack(): void {
    this._navigationService.getBackLocation();
  }

  ngOnDestroy(): void {
    this.navServSubscription.unsubscribe();
  }

}
