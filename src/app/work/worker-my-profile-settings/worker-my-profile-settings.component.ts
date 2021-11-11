import { Component, OnInit } from '@angular/core';
import {WorkerModel} from "../../model/worker-model";
import {WorkerService} from "../worker-service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-worker-my-profile-settings',
  templateUrl: './worker-my-profile-settings.component.html',
  styleUrls: ['./worker-my-profile-settings.component.scss']
})
export class WorkerMyProfileSettingsComponent implements OnInit {

  profile:WorkerModel.WorkerItem |undefined ;
  id!:number;

  form!:FormGroup;

  constructor(  private workerService:WorkerService,
                private activatedRoute:ActivatedRoute,
                private fb:FormBuilder,
                private router:Router) { }

  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    const profileId=params.id;
    this.id=profileId;

    this.workerService.getByWorker(profileId).pipe(err=> err).subscribe(user=>{
      this.form = this.fb.group({
        id:[user.id],
        firstName:[user.firstName,[Validators.required]],
        lastName:[user.lastName,[Validators.required]],
        email:[user.email,[Validators.required]],
        telNumber:[user.telNumber,[Validators.required]],
        password:[user.password,[Validators.required]],
        age:[user.age,[Validators.required]],
        address:[user.address,[Validators.required]],
        areaOfInterest:[user.areaOfInterest,[Validators.required]],
        description:[user.description,[Validators.required]],
        price:[user.price,[Validators.required]],
        workInLocations:[user.workInLocations,[Validators.required]]
      })})

    this.form=this.fb.group({
      firstName:[],
      lastName:[],
      email:[],
      telNumber:[],
      password:[],
      age:[],
      address:[],
      areaOfInterest:[],
      description:[],
      price:[],
      workInLocations:[],
    })



  }

  update(){
    if(this.form?.valid) {
      let payload = {
        id: this.form?.controls['id'].value,
        firstName: this.form?.controls['firstName'].value,
        lastName: this.form?.controls['lastName'].value,
        age: this.form?.controls['age'].value,
        email: this.form?.controls['email'].value,
        telNumber: this.form?.controls['telNumber'].value,
        password: this.form?.controls['password'].value,
        address: this.form?.controls['address'].value,
        areaOfInterest: this.form?.controls['areaOfInterest'].value,
        description: this.form?.controls['description'].value,
        price: this.form?.controls['price'].value,
        workInLocations: this.form?.controls['workInLocations'].value
      }
      this.workerService.updateWorker(payload).subscribe(user=> {
        this.router.navigate(["workers/profile/"+user.id])
      })
    }
  }

  close(){
    this.router.navigate(["workers/profile/"+this.id])
  }


}
