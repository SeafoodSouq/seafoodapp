import { Component } from '@angular/core';
import { Router, NavigationEnd   } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  router: string;

  
  constructor(public _router: Router){
    this.router = _router.url;
<<<<<<< HEAD

=======
    this._router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        (<any>window).gtag('config', 'GA_TRACKING_ID', {'page_path': event.urlAfterRedirects});        
      }
    } )
>>>>>>> 7f47bae... adding tracking code
  }
  
  
}
