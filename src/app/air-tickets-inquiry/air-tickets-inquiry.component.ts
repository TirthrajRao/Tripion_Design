import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-air-tickets-inquiry',
  templateUrl: './air-tickets-inquiry.component.html',
  styleUrls: ['./air-tickets-inquiry.component.scss'],
})
export class AirTicketsInquiryComponent implements OnInit {

  formUrl: any = [];
  constructor(public route: Router) {
    this.formUrl = JSON.parse(localStorage.getItem('formId'));
    this.formUrl.splice(0, 1)
    localStorage.setItem('formId', JSON.stringify(this.formUrl));
  }
  ngOnInit() { }

  // open next form function
  nextForm() {
      this.route.navigate(['/home/' + this.formUrl[0]])
  }


}
