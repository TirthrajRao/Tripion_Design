import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-frequent-flyer',
  templateUrl: './frequent-flyer.component.html',
  styleUrls: ['./frequent-flyer.component.scss'],
})
export class FrequentFlyerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#add_passport').click(function () {
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
