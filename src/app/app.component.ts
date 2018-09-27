import { Component } from '@angular/core';

import { Usage } from './usage';
import { AppService } from './app.service';

const ips = [];
let arr = [];
for (let i = 0; i < 256; i++) {
  arr.push(i);
  if (i % 32 === 31) {
    ips.push(arr);
    arr = [];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IP Usage';
  addresses = ips;
}

console.log();
