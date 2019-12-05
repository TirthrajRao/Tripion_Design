import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-visa-inquiry',
  templateUrl: './visa-inquiry.component.html',
  styleUrls: ['./visa-inquiry.component.scss'],
})
export class VisaInquiryComponent implements OnInit {
  formUrl: any = [];
  constructor(public route: Router) {

  }

  ngOnInit() {
    this.formUrl = JSON.parse(localStorage.getItem('formId'));
    this.formUrl.splice(0, 1);
    localStorage.setItem('formId', JSON.stringify(this.formUrl));
  }

  nextForm() {
    this.route.navigate(['/home/' + this.formUrl[0]])
  }
}
