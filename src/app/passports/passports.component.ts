import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-passports',
  templateUrl: './passports.component.html',
  styleUrls: ['./passports.component.scss'],
})
export class PassportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
    $('#add-password').click(function () {
      $('#add-passport-modal').fadeIn();
    });
    $('#add-passport-modal .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#add-passport-modal').click(function(){
      $(this).fadeOut();
    });
    
  }


}

