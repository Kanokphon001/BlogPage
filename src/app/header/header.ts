import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header', 
  templateUrl: './header.html',
  styleUrls: ['./header.css']    
})
export class Header { 
  constructor(private router: Router){}

  scroll(elementId: string): void {
    this.router.navigate(['/'], { fragment: elementId }).then(() =>{

    });
  }
}