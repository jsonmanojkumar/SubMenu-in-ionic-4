import { Component, OnInit, ViewChild } from '@angular/core';
 

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss'],
})
export class SubjectDetailComponent implements OnInit {
  public selectedIndex = 0;
  showSubmenu: boolean = false;
  submenus: any;

  constructor() {
    this.submenus = [{
      id: 1,
      menu: 'Menu 1',
    }, {
      id: 1,
      menu: 'Menu 2',
    }
      , {
      id: 3,
      menu: 'Menu 3  ',
    }
    ];

  }

  ngOnInit() { }


  menuItemHandler(val) {
    document.getElementById('showSubmenu' + val).classList.toggle('visible');
  }



}
