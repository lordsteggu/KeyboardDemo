import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from "../modal/modal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalController: ModalController) {
    this.ShowModal();

  }

  ShowModal() {
    var modal = null;
    modal = this.modalController.create(ModalPage, {});
    modal.onDidDismiss(data => {

    });
    modal.present();
  }
}
