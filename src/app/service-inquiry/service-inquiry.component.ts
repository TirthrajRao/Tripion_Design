import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-service-inquiry',
  templateUrl: './service-inquiry.component.html',
  styleUrls: ['./service-inquiry.component.scss'],
})
export class ServiceInquiryComponent implements OnInit {
  checkBoxValue: any = [];
  constructor(public route: Router) { }

  ngOnInit() {
  }

  // open next form function
  nextForm() {
    const formRoute = this.checkBoxValue[0];
    this.route.navigate(['/home/' + formRoute])
  }
  // select id from checkbox 
  selectMember(data) {
    console.log('data=====>', data);
    console.log(this.checkBoxValue.includes(data));
    if (!this.checkBoxValue.includes(data)) {
      this.checkBoxValue.push(data);
    } else {
      var index = this.checkBoxValue.indexOf(data);
      console.log("index", index);
      this.checkBoxValue.splice(index, 1);
    }
    console.log("tjhis ==>", this.checkBoxValue);
    localStorage.setItem('formId', JSON.stringify(this.checkBoxValue))
  }

}
