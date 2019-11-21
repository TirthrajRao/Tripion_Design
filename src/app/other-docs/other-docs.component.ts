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
    $('#folder-modal .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#folder-modal').click(function(){
      $(this).fadeOut();
    });
      }

}
