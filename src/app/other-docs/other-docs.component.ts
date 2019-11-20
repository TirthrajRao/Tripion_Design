import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-other-docs',
  templateUrl: './other-docs.component.html',
  styleUrls: ['./other-docs.component.scss'],
})
export class OtherDocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#open-folder').click(function () {
      $('#folder-modal').fadeIn();
    });
    $('.make_folder').click(function () {
      $('#folder-modal').css("display", 'none');
    });
      }

}
