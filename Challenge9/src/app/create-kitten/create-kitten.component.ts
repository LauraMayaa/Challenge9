import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {



  kittenForm = this.fb.group({
    name: ['', Validators.required],
    race: ['', Validators.required],
    birthdate: ['', Validators.required],
    imgUrl: ['', Validators.required]
  });

  isValid: boolean = false

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // il faut envoyer le chaton rentré dans list 
    if (this.kittenForm.valid) {
      this.isValid = !this.isValid

      console.log('Formulaire valide, envoyez le chaton à la liste.');
    } else {

      console.log('Formulaire invalide, veuillez remplir tous les champs.');
    }
  }

}
