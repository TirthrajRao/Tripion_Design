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
    // add visa modal start here 
    $('#add-visa').click(function () {
      $('#add-visa-modal').fadeIn();
    });
    $('#add-visa-modal .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#add-visa-modal').click(function(){
      $(this).fadeOut();
    });

    // edit name in passport modal start 

    $('#edit-name-icon').click(function () {
      $('#edit-name').fadeIn();
    });
    $('#edit-name .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#edit-name').click(function(){
      $(this).fadeOut();
    });

    // edit  date of expiry  modal start 
    $('#edit-expiry-icon').click(function () {
      $('#edit-expiry-date').fadeIn();
    });
    $('#edit-expiry-date .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#edit-expiry-date').click(function(){
      $(this).fadeOut();
    });

    // edit passport number modal start 
    $('#edit-pnumber-icon').click(function () {
      $('#edit-passport-number').fadeIn();
    });
    $('#edit-passport-number .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#edit-passport-number').click(function(){
      $(this).fadeOut();
    });

  }

}
