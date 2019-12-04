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

    // modal for create new folfer 
    $('#open-folder').click(function () {
      $('#folder-modal').fadeIn();
    });
    $('#folder-modal .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#folder-modal').click(function(){
      $(this).fadeOut();
    });
    $('.make_folder button').click(function(){
      $('#folder-modal').fadeOut();
    });

     // modal for upload new documents 

     $('#upload-documents').click(function () {
      $('#add-documents').fadeIn();
    });
    $('#add-documents .modal_body').click(function(event){
      event.stopPropagation();
    });
    $('#add-documents').click(function(){
      $(this).fadeOut();
    });
    $('.make_folder button').click(function(){
      $('#add-documents').fadeOut();
    });

      }

}
