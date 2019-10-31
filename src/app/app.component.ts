import { Component } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colors = [
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',

  ];

  name = "Nessrine"

  colorSelected = 'red';

  source = timer(1000, 500);

constructor() {
    
    this.source.subscribe(val  => {
         this.colorSelected = this.colors[val];                    
    });

}

}
