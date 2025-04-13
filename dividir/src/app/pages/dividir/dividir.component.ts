import { Component, OnInit } from '@angular/core';
import { DividirService } from '../../services';

@Component({
  selector: 'app-dividir',
  imports: [],
  templateUrl: './dividir.component.html',
  styleUrl: './dividir.component.css'
})
export class DividirComponent implements OnInit {
  private result: number = 0;

  constructor(private dividirService: DividirService){ }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  divideBtn(number1: string, number2: string) {
    this.result = this.dividirService.divide(parseFloat(number1), parseFloat(number2));
  }

  get resultado() {
    return this.result;
  }
}
