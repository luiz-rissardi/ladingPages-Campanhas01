import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PixSlipCampaign } from 'src/app/core/models/pix-slip.contract';

@Injectable({
  providedIn: 'root'
})
export class PaymentService{

  private urlService = "";
  private headers = {
    'Content-Type': 'application/json'
  }


  constructor(private http: HttpClient) {
  }

  execPayment(bodyRequest: PixSlipCampaign) {
    try {
      const url = this.urlService + "/campaing/pix-slip/payment";
      const options = { headers: this.headers };
      return this.http.post(url, bodyRequest, options);
    } catch (error) {
      console.log(error);
      return 0;
    }
  }
}
