import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor( private fb: FormBuilder){}
monFormulaire!:FormGroup;
ngOnInit(): void {
    this.monFormulaire = this.fb.group({
      titre:['hfhfh', [Validators.required,Validators.minLength(5)]],
      prix:['hfhfh', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern(/^\d{2}\.\d{2}$/) // Pattern for xx.xx format
     ]]
    })
}
valider(){
  console.log(this.monFormulaire.value);
}
}
