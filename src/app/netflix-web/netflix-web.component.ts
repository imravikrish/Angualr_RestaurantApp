import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netflix-web',
  templateUrl: './netflix-web.component.html',
  styleUrls: ['./netflix-web.component.css']
})
export class NetflixWebComponent implements OnInit {

  logoImg = "../assets/netflixImages/logo.png";
  bannerImg = "../assets/netflixImages/bg.jpg";
  nameImg = "../assets/netflixImages/name.png";
  playImg = "../assets/netflixImages/play.png";

  constructor() { }

  ngOnInit(): void {
  }

}
