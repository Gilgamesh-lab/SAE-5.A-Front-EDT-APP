import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { th } from 'date-fns/locale';
import { set } from 'date-fns';
import { timeout } from 'rxjs';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrl: './semestre.component.css'
})
export class SemestreComponent {
  allSemestres: any 
  showModalCreateSemestre : boolean = false;
  showModalModifSemestre : boolean = false;
  idChangeSemestre : any;

  constructor( private http: HttpClient ) {}




  loadSemestre() {
    const token = localStorage.getItem('token');
    const header = { 'Authorization': `Bearer ${token}` };
    this.http.get('http://localhost:5050/semestre/getAll', { headers: header }).subscribe((res: any) => {
      this.allSemestres = res;
    });

  }


  toggleCreateSemestre(){
    this.showModalCreateSemestre = !this.showModalCreateSemestre;
  }


  addSemestre(){
    const token = localStorage.getItem('token');
    const header = { 'Authorization': `Bearer ${token}` };
    const num  = document.getElementById('imputNumeroSemestre') as HTMLInputElement;
    this.http.post('http://localhost:5050/semestre/add',{"Numero":num.value},{ headers: header }).subscribe((res: any) => {
      this.loadSemestre();
    });
  }


  chargerRessource(id : any){
    this.toggleModalModifSemestre();
    //time out pour attendre que le modal soit afficher
    this.idChangeSemestre = id;
     setTimeout(() => {
     
      const s : any = this.allSemestres.find((r : any) => r.idressource == id);
      
      const numSemestre : any = document.getElementById('modifNomRessource')
     
     nomRessource.setAttribute('value', ressource.titre);
      numeroRessource.setAttribute('value', ressource.numero);
      nbrHeureRessource.setAttribute('value', ressource.nbrheuresemestre);
      ressourceSelect.value = ressource.idsemestre;
      ColorRessource.setAttribute('value', ressource.codecouleur);
      


     } , 0  );
    
  }


  changerRessource(){

  }

  toggleModalModifSemestre(){
    this.showModalModifSemestre = !this.showModalModifSemestre;
  }

  ngOnInit(): void {
    this.loadSemestre();
  }

  

}