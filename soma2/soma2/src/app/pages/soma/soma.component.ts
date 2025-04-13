import { Component, OnInit } from '@angular/core';
import { SomaService } from '../../service';

@Component({
  selector: 'app-soma',
  imports: [],
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})
export class SomaComponent implements OnInit{
  private result: number = 0;
  constructor(private somaService: SomaService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  somarBtn(number1: string, number2: string) {
    let n1: number;
    let n2: number;

    n1 = parseFloat(number1);
    n2 = parseFloat(number2);

    this.result = this.somaService.somar(n1, n2);
  }

  get resultado(): string {
    return this.result.toString();
  }
}
