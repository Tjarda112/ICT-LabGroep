import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  this.menuCtrl.enable(true);
  }
}