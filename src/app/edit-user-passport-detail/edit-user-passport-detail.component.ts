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
    $('.make_folder').click(function () {
      $('#add-visa-modal').css("display", 'none');
    });
  }

}
