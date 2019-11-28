import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours-inquiry',
  templateUrl: './tours-inquiry.component.html',
  styleUrls: ['./tours-inquiry.component.scss'],
})
export class ToursInquiryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const colorStopMap = {
      pink: 0,
      blue: 20,
      red: 40,
      green: 60
    };
    let gradientRange = document.querySelector(".gradient-range");
    gradientRange.classList.add(Object.entries(colorStopMap)[0][0]);
    gradientRange.addEventListener("input", () => {
      for (const colorStop of Object.entries(colorStopMap)) {
        let [colorClass, colorStopValue] = colorStop;
        if (Number((gradientRange as HTMLInputElement).value) >= colorStopValue) {
          gradientRange.classList.add(colorClass);
        } else {
          gradientRange.classList.remove(colorClass);
        }
      }
    });

  }

}
