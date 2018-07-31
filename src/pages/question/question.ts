import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaqApiProvider } from '../../providers/faq-api/faq-api';
import { FaqDetailPage } from '../faq-detail/faq-detail';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
faqs = new Array();

  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  private faqApiProvider: FaqApiProvider
  ) {}

  ionViewDidLoad() {
    console.log("ici c question.ts" +this.faqs);
    this.faqApiProvider.getFaqs().subscribe(data =>{
      this.faqs = data;
    })
  }
  goToDetail(faq) {
  this.navCtrl.push(FaqDetailPage, faq);
  }

  goToAbout(faq) {
    this.navCtrl.push(AboutPage, faq);
  }

}
