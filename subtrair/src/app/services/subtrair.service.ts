import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubtrairService {

  constructor() { }

  subtrair(number1: number, number2: number): number {
    return number1 - number2;
  }
}
