import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainee } from 'src/model/Trainee.model';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor(private http : HttpClient) { }
  
  url : string = "http://localhost:3000/trainee";
  url2 : string = "http://localhost:8080/student/getAll";

  map : string = "http://localhost:8080/trainee";

  saveData(data: Trainee){
    this.http.post(this.map + "/save", data).toPromise();
  }
  deleteData(data: Trainee){
    this.http.delete(this.map + "/delete/" + data.id).toPromise();
  }
  editData(data: Trainee){
     return this.http.get<Trainee>(this.map + "/edit/" + data.id);
  }
  updateData(data: Trainee){
    console.log(data)
    this.http.put(this.url + "/" + data.id, data).toPromise();
 }
  getAll(){
    // console.log("calling.....")
    // this.http.get(this.map).subscribe((response) => {
    //   console.log(response);
    // });
    return this.http.get<Trainee>(this.map + "/getAll");
  }

  
}
