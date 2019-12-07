import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController) {}
  
  closeMenu() {
    this.menu.close()
  }
  ngOnInit() {
    $(document).ready(function(){
      $(window).on('load resize', function(){
        var menuHeight = $(".menu_content").innerHeight();
        var listLength = $(".menu_content").find(".menu_list").length;
        $(".menu_content .menu_list").css({'line-height': (menuHeight / listLength)+'px'});
      });
    });
  }
}

