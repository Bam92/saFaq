import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  faq;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage ' + this.faq);
    this.faq = this.navParams.data;
  }

}
