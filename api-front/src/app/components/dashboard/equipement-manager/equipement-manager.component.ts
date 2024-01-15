import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { th } from 'date-fns/locale';
import { set } from 'date-fns';
import { timeout } from 'rxjs';
import { SearchService } from '../services/search.service';
import { validateEvents } from 'angular-calendar/modules/common/util/util';
@Component({
  selector: 'app-equipement-manager',
  templateUrl: './equipement-manager.component.html',
  styleUrl: './equipement-manager.component.css'
})
export class EquipementManagerComponent {
  allEquipements: any ;
  showModalCreateEquipement : boolean = false;
  
  
  constructor( private http: HttpClient ) {}


  loadEquipements():any {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    this.http.get("http://localhost:5050/equipement/getAll", { headers }).subscribe((res: any) => 
    {
      this.allEquipements = res;
      ;
    });
  }

  chargerEquipement(id: any):any {
  }

  toggleCreateEquipement():any {
    this.showModalCreateEquipement = !this.showModalCreateEquipement;
  }


  ngOnInit(): void {
    this.loadEquipements();
  } 


  createEquipement():any {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    const nom = document.getElementById("inputNomEquipement") as HTMLInputElement;
    console.log(nom.value)
    this.http.post("http://localhost:5050/equipement/add", {"data" : [{"Nom" : nom.value}]}, { headers }).subscribe((res: any) => 
    {
      this.loadEquipements();
      
    });
  }

}