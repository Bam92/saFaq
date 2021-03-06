import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  findQuestions() {
  this.navCtrl.push(QuestionPage);
  }

  getAbout() {
  this.navCtrl.push(AboutPage);
  }
}
