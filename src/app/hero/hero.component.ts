import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goDown() {
    $('img').click(function () {
      $('html,body').animate(
        {
          scrollTop: $('#artists').offset().top,
        },
        'slow'
      );
    });
  }
}
