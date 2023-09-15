import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  snackbar : MatSnackBar
  menu : Menu[] = []

  constructor (
    private _snackbar:MatSnackBar,
    private menuService : MenuService
  ){
    this.snackbar = this._snackbar

  }

  openSnackBar(message:string) {
    this.snackbar.open(message, '', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 2500
    })  
  } 

  logout() {    
    this.openSnackBar("Su sesión ha sido cerrada exitosamente");
    window.location.assign('login');
  }

  chargeMenu(){
    this.menuService.getMenu().subscribe(data =>      
      this.menu = data)
  }

  ngOnInit() : void {
    this.chargeMenu()
  }

}
