import { Component } from '@angular/core';
import staticContent from 'raw-loader!./static.html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  staticContent = staticContent;
}
