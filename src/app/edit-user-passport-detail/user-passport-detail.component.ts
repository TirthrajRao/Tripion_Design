import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-user-passport-detail',
  templateUrl: './user-passport-detail.component.html',
  styleUrls: ['./user-passport-detail.component.scss'],
})
export class UserPassportDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.passport_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      draggable: true,
      fade: false,
      prevArrow: '<button class="prevarrow" ><img src="../assets/images/left.png"></button>',
      nextArrow: '<button class="nextarrow"><img src="../assets/images/r1.png"></button>',
    });

    $('.passport_slider1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      draggable: true,
      fade: false,
      prevArrow: '<button class="prevarrow" ><img src="../assets/images/prev.png"></button>',
      nextArrow: '<button class="nextarrow"><img src="../assets/images/next.png"></button>',
    });

    
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
