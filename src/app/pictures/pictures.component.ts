import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    // modal for upload new pictures 

    $('#upload-pictures').click(function () {
      $('#add-pictures').fadeIn();
    });
    $('#add-pictures .modal_body').click(function (event) {
      event.stopPropagation();
    });
    $('#add-pictures').click(function () {
      $(this).fadeOut();
    });
    $('.make_folder button').click(function () {
      $('#add-pictures').fadeOut();
    });


  }

}
