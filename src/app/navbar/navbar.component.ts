import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  onSubmit(){
    window.alert('signed out!!!!!!!!!!!');
    this.router.navigate(['/signup'])
    
  }

  ngOnInit(): void {
  }

}
