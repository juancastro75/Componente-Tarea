import { Component } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['../app.component.scss'],
})
export class HomePage {

  constructor(private menuCtrl: MenuController) {}

  openSideMenu(){
    this.menuCtrl.open();
  }
}
