import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { QuestionPageModule } from '../pages/question/question.module';
/*import { WelcomePage } from '../pages/welcome/welcome';
import { QuestionPage } from '../pages/question/question';*/


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FaqApiProvider } from '../providers/faq-api/faq-api';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    QuestionPageModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    //ListPage,
    //WelcomePage,
    //QuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FaqApiProvider
  ]
})
export class AppModule {}
