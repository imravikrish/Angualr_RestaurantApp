import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-design',
  templateUrl: './home-design.component.html',
  styleUrls: ['./home-design.component.css']
})
export class HomeDesignComponent implements OnInit {

  aboutImg = "../assets/images/img1.jpg";

  firstImg = "../assets/images/testi1.jpg";
  secondImg = "../assets/images/testi2.jpg";
  thirdImg = "../assets/images/testi3.jpg";

  expert_firstImg = "./assets/images/expert1.jpg";
  expert_secondImg = "./assets/images/expert2.jpg";
  expert_thirdImg = "./assets/images/expert3.jpg";
  expert_fourthImg = "./assets/images/expert4.jpg";

  menu_firstImg = "./assets/images/menu1.jpg";
  menu_secondImg = "./assets/images/menu2.jpg";
  menu_thirdImg = "./assets/images/menu3.jpg";
  menu_fourthImg = "./assets/images/menu4.jpg";
  menu_fifthImg = "./assets/images/menu5.jpg";
  menu_sixthImg = "./assets/images/menu6.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
