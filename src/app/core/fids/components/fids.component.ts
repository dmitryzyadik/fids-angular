import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fids',
  templateUrl: './fids.component.html',
  styleUrls: ['./fids.component.scss']
})
export class FidsComponent implements OnInit {
  
  counter = 0
  upAt?: number;

  get cannotDec(): boolean {
    return this.counter <= 0;
  }

  constructor() { }

  ngOnInit(): void {

  }


  inc(): void {
    this.upAt = Date.now()
    this.counter++
  }
  dec(): void {
    this.upAt = Date.now()
    this.counter--
  }
  zero(): void {
    this.upAt = Date.now()
    this.counter=0
  }

}
