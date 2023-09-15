import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup
  snackbar: MatSnackBar
  loading=false
green: any;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar) {

    this.form = this.fb.group(
      {
        user: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]]
      }
    )

    this.snackbar = this._snackBar

    // Agrega un oyente al control de formulario user
    this.form.get('user')?.valueChanges.subscribe(value => {
      if (this.form.get('user')?.errors && this.form.get('user')?.dirty) {
        this.openSnackBar("El campo es obligatorio")
      }
    })

    // Agrega un oyente al control de formulario password
    this.form.get('password')?.valueChanges.subscribe(
      value => {     
      if (this.form.get('password')?.errors && this.form.get('password')?.dirty) {
        this.openSnackBar("La contraseña es obligatoria y debe contener al menos 6 caracteres")
      }
    }
    )

  }

  login() {
    console.log(this.form)
    console.log(this.form.value.user)   
    this.fakeLoading()
    this.loginTestOk()
    
  }

  openSnackBar(message:string) {
    this.snackbar.open(message, '', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 2500
    })   
  }

  fakeLoading () {
    this.loading = true,
    setTimeout( () => {
      this.loading = false

    }, 1000
    )
  }

  loginTestOk () {
    if(this.form.value.user = "celeste" && this.form.value.password == "celeste") {
       window.location.assign('/dashboard') 
    }else{
      this.openSnackBar("Ingrese un usuario y/o contraseña válidos");
    }
     
    
  }

  


}