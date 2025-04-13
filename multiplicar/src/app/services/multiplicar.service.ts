import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplicarService {

  constructor() { }

  multiply(n1: number, n2: number): number {
    return n1 * n2;
  }
}
