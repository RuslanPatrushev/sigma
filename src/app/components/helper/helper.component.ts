import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Pages} from "../../constants/pages";
import {Helper} from "../../constants/helper";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss'],
  animations: [
    trigger('helper', [
      transition(':enter', [
        style({opacity: '0', transform: 'translateX(-100%)'}),
        animate('0.5s ease-out',
          style({opacity: '1', transform: 'translateX(0px)'})),
      ]),
    ]),
  ]
})
export class HelperComponent implements OnInit {
  @Input() numberPage: number = 0;
  pages = Pages;
  textHelper: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.textHelper = Helper[this.numberPage];
  }

  navigate(side: string) {
    if (side == 'prev') {
      this.router.navigate([this.pages[--this.numberPage]]);
    } else {
      this.router.navigate([this.pages[++this.numberPage]]);
    }
  }
}
