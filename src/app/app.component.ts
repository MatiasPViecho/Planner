import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PLANNER';

  currentRoute!: string;

  constructor(private router: Router){
    console.log(router.url);

    router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    )
        .subscribe(event => {
          this.currentRoute = (event as NavigationEnd).url;
          console.log("cambiamos de ruta! => " + this.currentRoute );
          
        })
  }
}
