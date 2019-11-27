import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-service-inquiry',
  templateUrl: './service-inquiry.component.html',
  styleUrls: ['./service-inquiry.component.scss'],
})
export class ServiceInquiryComponent implements OnInit {

  visa;
  isVisa: boolean = false;

  airticket;
  isAirticket: boolean = false;

  accomodation;
  isAccomodation: boolean = false;

  tours;
  isTours: boolean = false;

  transfer;
  isTransfer: boolean = false;

  constructor() { }

  visaFormOpen() {
    var checkBox = document.getElementById("visa") as HTMLInputElement;
    console.log("checkbox========>", checkBox);
    var visa_form = document.getElementById("visa_form");
    this.visa = true;
    // checkBox.checked = true;
    // console.log("visa========>", visa_form,checkBox.checked);
    // if (checkBox.checked == true) {
    //   console.log("in if")
    //   visa_form.style.display = "block";
    // } else {
    //   console.log("in else")
    //   visa_form.style.display = "none";
    // }
  }

  airTicketOpen() {
    var checkBox = document.getElementById("air-ticket") as HTMLInputElement;
    var air_form = document.getElementById("air_ticket_form");
    this.airticket = true;
  }

  accomodationOpen() {
    var checkBox = document.getElementById("accomodation") as HTMLInputElement;
    var accomodation_form = document.getElementById("accomodation_form");
    this.accomodation = true;
  }

  toursOpen() {
    var checkBox = document.getElementById("tours") as HTMLInputElement;
    var tours_form = document.getElementById("tours_form");
    this.tours = true;
  }

  transferOpen() {
    var checkBox = document.getElementById("tranfer") as HTMLInputElement;
    var tours_form = document.getElementById("tranfer_form");
    this.transfer = true;
  }

  next() {
    this.isVisa = this.visa
    this.isAirticket = this.airticket
    this.isAccomodation = this.accomodation
    this.isTours = this.tours
    console.log("open visa form =====>", this.isVisa);
    console.log("open air ticket form +++++>", this.isAirticket)
  }

  ngOnInit() {
  }

}
