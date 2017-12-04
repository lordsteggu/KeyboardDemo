import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Slides } from 'ionic-angular';
import { FormGroup, FormControl } from "@angular/forms";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class Observation {
  Notes: string;
  FormGroup: FormGroup;
  ObservationType: any;
  AuditItemReason: any;

  constructor(){
    this.FormGroup = new FormGroup({});
    this.Notes = '';
    this.ObservationType = { Name: 'Test', Type: 1};
    this.AuditItemReason = { Name: 'Test', Type: 1 };

    this.FormGroup.addControl('Notes', new FormControl(this.Notes))
    this.FormGroup.addControl('ObservationType', new FormControl(this.ObservationType))
    this.FormGroup.addControl('AuditItemReason', new FormControl(this.AuditItemReason))

  }
}

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  @ViewChild(Slides) slides: Slides;

  currentObservation: Observation;
  observationList = new Array<Observation>();
  currentIndex = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
    
    this.observationList.push(new Observation())
    this.observationList.push(new Observation())
    this.observationList.push(new Observation())
    this.observationList.push(new Observation())
    this.observationList.push(new Observation())

    this.currentObservation = this.observationList[0];


  }
  
  compareFn(option1: any, option2: any) {
    if (option1.Type && option2.id)
      return option1.Type === option2.id;
    else if (option1.Type)
      return option1.Type === option2.Type;
    else if (option1.id)
      return option1.id === option2.id;

    return false;

  }

  dismiss() {
    this.viewController.dismiss()
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();

    this.currentObservation = this.observationList[this.currentIndex];


    if (this.currentObservation.FormGroup.controls.Notes.value.length == 0)
      this.slides.lockSwipeToNext(true);
    else
      this.slides.lockSwipeToNext(false);
  }

  onNotesChanged() {
    this.slides.lockSwipeToNext(false);
    this.slides.longSwipes = false;
  }

  SlideNext() {
    this.slides.slideNext();
  }

  SlidePrev() {
    this.slides.slidePrev();

  }

  SkipSlide() {
    this.slides.lockSwipeToNext(false);
    this.SlideNext();
  }

  ionViewDidLoad() {
    //this.slides.lockSwipeToNext(true);
  }

  onFocus() {
    //debugger;
  }

}
