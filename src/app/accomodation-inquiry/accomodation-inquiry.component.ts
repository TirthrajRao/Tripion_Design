import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accomodation-inquiry',
  templateUrl: './accomodation-inquiry.component.html',
  styleUrls: ['./accomodation-inquiry.component.scss'],
})
export class AccomodationInquiryComponent implements OnInit {

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
