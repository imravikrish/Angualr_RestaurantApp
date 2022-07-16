import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks-comp',
  templateUrl: './drinks-comp.component.html',
  styleUrls: ['./drinks-comp.component.css']
})
export class DrinksCompComponent implements OnInit {

  logoImg = "../assets/drinksImages/logo.png";
  firstImg = "../assets/drinksImages/pepsi001.png";
  secondImg = "../assets/drinksImages/pepsi002.png";
  thirdImg = "../assets/drinksImages/pepsi003.png";
  fbImg = "../assets/drinksImages/facebook.png";
  twitterImg = "../assets/drinksImages/twitter.png";
  instagramImg = "../assets/drinksImages/instagram.png";

  constructor() { }

  ngOnInit(): void {
  }

}
