import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterSelector, decrease, increase, zero } from '../fids.action';

@Component({
  selector: 'app-fids',
  templateUrl: './fids.component.html',
  styleUrls: ['./fids.component.scss']
})
export class FidsComponent implements OnInit {
  

  upAt?: number;
  counter$ = this.store.select(counterSelector)

  get cannotDec(): boolean {
    return false
  }

  constructor(private store: Store) { }

  ngOnInit(): void {

  }


  inc(): void {
    this.upAt = Date.now()
   
    this.store.dispatch(increase())
  }
  dec(): void {
    this.upAt = Date.now()
    
    this.store.dispatch(decrease())
  }
  zero(): void {
    this.upAt = Date.now()
    
    this.store.dispatch(zero())
  }

}
