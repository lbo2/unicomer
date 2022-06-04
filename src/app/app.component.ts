import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from '../app/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  maxDate: Date;
  urlGithub: string = "https://github.com/lbo2/unicomer";

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.form = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(20)]],
      lastName: [null, [Validators.required, Validators.maxLength(20)]],
      birthday: [null, [Validators.required]],
      address: [null, [Validators.required]],
      income: [null, [Validators.required]],
      cellphone: [null, [Validators.required]],
      homephone: [null, [Validators.required]],
      profession: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    });
  }
  
  openDialog() {
    const dob = new Date(this.form.get('birthday').value);
    const date = `${dob.getMonth()+1}/${dob.getDate()}/${dob.getFullYear()}`;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      birthday: date,
      address: this.form.get('address').value,
      income: this.form.get('income').value,
      cellphone: this.form.get('cellphone').value,
      homephone: this.form.get('homephone').value,
      profession: this.form.get('profession').value,
      gender: this.form.get('gender').value,
    };
    const dialogRef = this.dialog.open(DialogComponent,
      dialogConfig);
    dialogRef.afterClosed().subscribe();
  }

  onFormSubmit(form:NgForm) {  
    const dob = new Date(this.form.get('birthday').value);
    const date = `${dob.getMonth()+1}/${dob.getDate()}/${dob.getFullYear()}`;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      birthday: date,
      address: this.form.get('address').value,
      income: this.form.get('income').value,
      cellphone: this.form.get('cellphone').value,
      homephone: this.form.get('homephone').value,
      profession: this.form.get('profession').value,
      gender: this.form.get('gender').value,
    };
    const dialogRef = this.dialog.open(DialogComponent,
      dialogConfig);
    dialogRef.afterClosed().subscribe();
  }  
}
