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
  deleteData(data: Trainee){
    this.http.delete(this.url + "/" + data.id).toPromise();
  }
  editData(data: Trainee){
     return this.http.get<Trainee>(this.url + "/" + data.id);
  }
  updateData(data: Trainee){
    console.log(data)
    this.http.put(this.url + "/" + data.id, data).toPromise();
 }
  getAll(){
    return this.http.get<Trainee>(this.url);
  }

  
}
