import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // edit name modal start 

    $('#edit-name-icon').click(function () {
      $('#edit-name').fadeIn();
    });
    $('#edit-name .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#edit-name').click(function(){
      $(this).fadeOut();
    });

    // edit birth date modal start 
    $('#edit-birth-icon').click(function () {
      $('#edit-birth-date').fadeIn();
    });
    $('#edit-birth-date .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#edit-birth-date').click(function(){
      $(this).fadeOut();
    });

    // edit email modal start 
    $('#edit-email-icon').click(function () {
      $('#edit-email').fadeIn();
    });
    $('#edit-email .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#edit-email').click(function(){
      $(this).fadeOut();
    });

  }

}
