import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaqApiProvider } from '../../providers/faq-api/faq-api';

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
    /*this.items = [
      {title: 'C\'est quoi ecole moderne', description: 'test1'},
      {title: 'Qui est deriere ce projet', description: 'test2'},
      {title: 'Quel en sont les modules', description: 'test3'}
    ];*/
  }

}
