import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-service-inquiry',
  templateUrl: './service-inquiry.component.html',
  styleUrls: ['./service-inquiry.component.scss'],
})
export class ServiceInquiryComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  next_form(){
    console.log("====");
    $('.all_service_details').css('display','none');
    $('. visa_form').css('display','block');
   }

}
