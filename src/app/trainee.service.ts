import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainee } from 'src/model/Trainee.model';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor(private http : HttpClient) { }
  
  url : string = "http://localhost:3000/trainee";

  saveData(data: Trainee){
    this.http.post(this.url, data).toPromise();
  }
  getAll(){
    return this.http.get<Trainee>(this.url);
  }

  
}
