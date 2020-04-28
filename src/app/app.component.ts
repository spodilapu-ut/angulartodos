import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Sagar';

  constructor() {
    this.changeName('Podilapu');
  }

  changeName(title: string) {
    this.title = title;
  }
}
