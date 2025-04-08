import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css'],
    standalone: false
})
export class DefaultComponent implements OnInit {

  title = 'Default Component'
  constructor() { }

  ngOnInit(): void {
  }

}
