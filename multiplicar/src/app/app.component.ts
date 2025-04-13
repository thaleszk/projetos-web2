import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiplicarComponent } from './pages/multiplicar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MultiplicarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiplicar';
}
