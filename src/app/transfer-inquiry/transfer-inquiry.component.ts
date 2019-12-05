import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-inquiry',
  templateUrl: './transfer-inquiry.component.html',
  styleUrls: ['./transfer-inquiry.component.scss'],
})
export class TransferInquiryComponent implements OnInit {

  formUrl:any = [];
  constructor(public route: Router) {
    this.formUrl = JSON.parse(localStorage.getItem('formId'));
    this.formUrl.splice(0, 1);
    localStorage.setItem('formId',JSON.stringify(this.formUrl));
    console.log(this.formUrl)
   }

  ngOnInit() {}
  
  // open next form function

  nextForm(){
    this.route.navigate(['/home/' + this.formUrl[0]])
  }

}
