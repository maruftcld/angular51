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

  trainees : Trainee;
  mydata :string = "";
  constructor(private traineeService : TraineeService) { }

  ngOnInit() {
    this.traineeService.getAll().subscribe((response) => {
      this.trainees = response;
    });
  }

  save(data :Trainee){
    this.traineeService.saveData(data);
  }
  getData(){
    
  }

}
