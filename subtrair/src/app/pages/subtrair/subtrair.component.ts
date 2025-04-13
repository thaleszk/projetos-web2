import { Component, OnInit } from '@angular/core';
import { SubtrairService } from '../../services';

@Component({
  selector: 'app-subtrair',
  imports: [],
  templateUrl: './subtrair.component.html',
  styleUrl: './subtrair.component.css'
})
export class SubtrairComponent implements OnInit{
  private result: number = 0;

  constructor(private subtrairService: SubtrairService) { }
  ngOnInit(): void { throw new Error('Method not implemented.'); }

  subtrairBtn(number1: string, number2: string) {
    let n1: number = parseInt(number1);
    let n2: number = parseInt(number2);

    this.result = this.subtrairService.subtrair(n1, n2);
  }

  get resultado() {
    return this.result;
  }
}
