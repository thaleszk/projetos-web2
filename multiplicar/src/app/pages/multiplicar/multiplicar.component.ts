import { Component, OnInit } from '@angular/core';
import { MultiplicarService } from '../../services';

@Component({
  selector: 'app-multiplicar',
  imports: [],
  templateUrl: './multiplicar.component.html',
  styleUrl: './multiplicar.component.css'
})
export class MultiplicarComponent implements OnInit {
  private result: number = 0;

  constructor(private multiplicarService: MultiplicarService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  multiplyBtn(number1: string, number2: string) {
    this.result = this.multiplicarService.multiply(parseFloat(number1), parseFloat(number2));
  }

  get resultado() {
    return this.result;
  }

}
