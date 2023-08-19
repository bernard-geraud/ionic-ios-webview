import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {
    this.openInAppBrowser();
  }

  openInAppBrowser() {
    const browser = this.iab.create(
      'https://jcprestigefe.hosting180258.ae8ac.netcup.net',
      '_blank',
      {
        location: 'no',
        hidden: 'no',
        hardwareback: 'yes'
      }
    );
  }

}
