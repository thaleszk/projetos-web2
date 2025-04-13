import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditarUsuarioComponent } from './editar-usuario';
import { InserirUsuarioComponent } from './inserir-usuario';
import { ListarUsuarioComponent } from './listar-usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EditarUsuarioComponent, InserirUsuarioComponent, ListarUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-usuarios';
}
