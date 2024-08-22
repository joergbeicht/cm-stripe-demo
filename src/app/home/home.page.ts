import { Component, OnInit } from '@angular/core';

// https://therightsw.com/angular-stripe-integration/
// https://akhilabhinav.medium.com/integrating-stripe-payment-gateway-in-angular-stripe-payment-checkout-example-502776d5eb07

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('Stripe Elements:');
  }
}
