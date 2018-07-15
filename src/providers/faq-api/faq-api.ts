import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";

@Injectable()
export class FaqApiProvider {
private baseUrl: string = "../../assets/api/faq.json";

 faqs;

  constructor(
  private readonly http: HttpClient,
  private readonly platform: Platform)
  {
    console.log('Hello FaqApiProvider Provider');
  }

  getFaqs(): Observable {
  console.log("ici c faq.api" +this.http.get(`${this.baseUrl}`));
    return this.http.get(`${this.baseUrl}`);
  }

}
