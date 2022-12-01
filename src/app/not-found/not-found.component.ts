import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit{

  timer: number;

  constructor(private router: Router) {
    this.timer = 0;
  };

  ngOnInit(): void {
    setInterval(() => {
      this.timer++;
    }, 1000)
    setTimeout(() => {
      this.router.navigate(['tasks']);
    }, 5000);  //5s
  }

}
