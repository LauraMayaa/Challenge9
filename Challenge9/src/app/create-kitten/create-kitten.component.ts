import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Kitten } from '../kitten.model';
import { KittenService } from '../kitten.service';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {



  kittenForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    race: ['', Validators.required],
    birthdate: ['', Validators.required],
    imgUrl: ['', Validators.required]
  });


  isValid: boolean = false



  constructor(private fb: FormBuilder, public kittenService: KittenService) { }

  public sendKitten(): Observable<FormGroup> {
    return of(this.kittenForm)
  }

  onSubmit() {


    let newCat: Kitten = new Kitten();
    newCat.name = this.kittenForm.value.name;
    newCat.race = this.kittenForm.value.race;
    newCat.birthdate = this.kittenForm.value.birthdate;
    newCat.image = this.kittenForm.value.imgUrl;

    console.log(newCat)



    // il faut envoyer le chaton rentré dans list 
    if (this.kittenForm.valid) {
      this.isValid = !this.isValid
      this.kittenService.addKitten(newCat)


    } else {

      console.log('Formulaire invalide, veuillez remplir tous les champs.');
    }


  }

}


