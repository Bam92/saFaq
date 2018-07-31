import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaqApiProvider } from '../../providers/faq-api/faq-api';
//import { QuestionPage } from '../question/question';

@IonicPage()
@Component({
  selector: 'page-faq-detail',
  templateUrl: 'faq-detail.html',
})
export class FaqDetailPage {
faq;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //private 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqDetailPage ' + this.faq);
    this.faq = this.navParams.data;
  }

}
