import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-amendments',
  templateUrl: './amendments.component.html',
  styleUrls: ['./amendments.component.scss'],
})
export class AmendmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $("#open_attachment").click(function(){
        $(".attechments").slideToggle();
      });
    });

  }

}
