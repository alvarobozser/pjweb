import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = {
    "navitems": [
      {
        "linkText": "About",
        "parentLink": "/about",
        "menu": false,
        "submenu": []
      },
      {
        "linkText": "Codepens",
        "parentLink": "",
        "menu": false,
        "submenu": [
          {
            "childtext": "Link 1",
            "link": "www.google.es"
          },
          {
            "childtext": "Link 2",
            "link": "www.google.es"
          },
          
        ]
      },
      {
        "linkText": "Navigation",
        "parentLink": "",
        "menu": false,
        "submenu": [
          {
            "childtext": "Pure CSS Menu",
            "link": "www.google.es"
          },
          {
            "childtext": "User Selection",
            "link": "www.google.es"
          }
        ]
      },
    ]
  }

  result: any = [];

  constructor() {
    for (let key in this.menu.navitems) {
      if (this.menu.navitems.hasOwnProperty(key)) {
        this.result.push(this.menu.navitems[key]);
      }
    }
  }

  ngOnInit() {}

  ddToggle(i: string | number) {
    this.result[i].menu = !this.result[i].menu;
    console.log(this.result[i].menu);
  }

}
