import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-telco-menues',
  templateUrl: './telco-menues.component.html',
  styleUrls: ['./telco-menues.component.css']
})
export class TelcoMenuesComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  navigateToSmartServicesHome(): void {
    this._route.navigate(['/tabs/smartService']);
  }

  navigateToValueIntegrationHome(): void {
    this._route.navigate(['/tabs/valueIntegraion']);
  }

  navigateToDigitalExperianceHome(): void {
    this._route.navigate(['/tabs/digitalExperiance']);
  }

}
