import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  ngOnInit() {
    $(window).scroll(function (event) {
      const scroll = $(window).scrollTop();
      const header = $('.main-header');
      if (!header.hasClass('alone')) {
        if (scroll >= 545) {
          header.addClass('invert');
        } else {
          header.removeClass('invert');
        }
      }
    });
  }
}
