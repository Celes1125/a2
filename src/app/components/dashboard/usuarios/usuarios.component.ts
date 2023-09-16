import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'; 
import { Usuario } from 'src/app/interfaces/usuario';

const ELEMENT_DATA: Usuario[] = [
  {id: 1, nombre: 'María Celeste', apellido: 'Colautti', sexo: 'femenino'},
  {id: 2, nombre: 'Guillermo Adrián', apellido: 'Flores', sexo: 'masculino'},
  {id: 3, nombre: 'Antonio', apellido: 'Flores Colautti', sexo: 'masculino'},
  
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent {
  
    displayedColumns: string[] = ['id', 'nombre', 'apellido', 'sexo', 'actions'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
