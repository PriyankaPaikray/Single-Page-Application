
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  team = [
    { name: 'John Doe', role: 'CEO', photo: 'assets/team1.jpg' },
    { name: 'Jane Smith', role: 'CTO', photo: 'assets/team2.jpg' },
    { name: 'James Brown', role: 'COO', photo: 'assets/team3.jpg' },
  ];
}
