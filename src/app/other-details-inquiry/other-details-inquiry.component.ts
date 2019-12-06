import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-details-inquiry',
  templateUrl: './other-details-inquiry.component.html',
  styleUrls: ['./other-details-inquiry.component.scss'],
})
export class OtherDetailsInquiryComponent implements OnInit {
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
