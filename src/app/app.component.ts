import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version: string;
  title = 'caro-examen-fisio';

  constructor() {
    this.version = environment.appVersion;
  }
}
