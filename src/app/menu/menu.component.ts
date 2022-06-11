import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  panelOpenState = false;
  disableSelect = new FormControl(false);
  constructor() { }

  ngOnInit(): void {
  }


  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
