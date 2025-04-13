import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DividirService {

  constructor() { }

  divide(n1: number, n2: number): number {
    return n1/n2
  }
}
