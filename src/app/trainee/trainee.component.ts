import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainee } from 'src/model/Trainee.model';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {
  option = "Save";
  trainees : Trainee;
  trainee : Trainee = new Trainee;

  mydata :string = "";
  constructor(private traineeService : TraineeService) { }

  ngOnInit() {
    this.getData();
  }

  save(data :Trainee){
    if(this.trainee.id > 0){
      console.log(data)
      this.traineeService.updateData(data);
      alert("updated")
      this.getData();
    }else{
      this.traineeService.saveData(data);
      alert("saved")
    }
    //this.traineeService.saveData(data);
  }
  delete(data :Trainee){
    this.traineeService.deleteData(data);
    alert("deleted")
  }
  edit(data :Trainee){
    this.option = "Update";
    this.traineeService.editData(data).subscribe((response) => {
      this.trainee = response;
      console.log(response);
    });
  }
  getData(){
    this.traineeService.getAll().subscribe((response) => {
      this.trainees = response;
    });
  }

  

}

