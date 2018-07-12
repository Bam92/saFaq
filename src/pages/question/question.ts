import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    this.items = [
      {title: 'C\'est quoi ecole moderne', description: 'test1'},
      {title: 'Qui est deriere ce projet', description: 'test2'},
      {title: 'Quel en sont les modules', description: 'test3'}
    ];
  }

}
