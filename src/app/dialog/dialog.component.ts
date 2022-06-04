import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  data: any;

  constructor(private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) {firstName, lastName, birthday, address, income, cellphone, homephone, profession, gender}) {
      this.data = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        address: address,
        income: income,
        cellphone: cellphone,
        homephone: homephone,
        profession: profession,
        gender: gender
      };
  }

  ngOnInit() {
  }

  close() {
      this.dialogRef.close();
  }

}
