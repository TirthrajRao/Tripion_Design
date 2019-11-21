import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-edit-user-passport-detail',
  templateUrl: './edit-user-passport-detail.component.html',
  styleUrls: ['./edit-user-passport-detail.component.scss'],
})
export class EditUserPassportDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#add-visa').click(function () {
      $('#add-visa-modal').fadeIn();
    });
    $('#add-visa-modal .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#add-visa-modal').click(function(){
      $(this).fadeOut();
    });
  }

}
