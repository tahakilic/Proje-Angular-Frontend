import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WorkerService} from "../worker-service";
import {WorkerModel} from "../../model/worker-model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";

@Component({
  selector: 'app-worker-my-profile',
  templateUrl: './worker-my-profile.component.html',
  styleUrls: ['./worker-my-profile.component.scss']
})
export class WorkerMyProfileComponent implements OnInit {

  profile:WorkerModel.WorkerItem | undefined;
  form!: FormGroup;


  constructor(private activatedRoute:ActivatedRoute,
              private workerService:WorkerService,
              private fb:FormBuilder,
              private router:Router
          ) {}

  ngOnInit() {
    const params=this.activatedRoute.snapshot.params;
    const profileId=params.id;
    this.workerService.getByWorker(profileId).pipe(err=> err).subscribe(profile=>{this.profile=profile})


    this.form=this.fb.group({
      firstName:[""],
      lastName:[""],
      email:[""],
      telNumber:[""],
      password:[""],
      age:[""],
      address:[""],
      areaOfInterest:[""],
      description:[""],
      price:[""],
      workInLocations:[""],
    })

  }

  edit(userProfile:WorkerModel.WorkerItem|undefined){
    this.form = this.fb.group({
      id:[userProfile?.id],
      firstName:[userProfile?.firstName,[Validators.required]],
      lastName:[userProfile?.lastName,[Validators.required]],
      email:[userProfile?.email,[Validators.required]],
      telNumber:[userProfile?.telNumber,[Validators.required]],
      password:[userProfile?.password,[Validators.required]],
      age:[userProfile?.age,[Validators.required]],
      address:[userProfile?.address,[Validators.required]],
      areaOfInterest:[userProfile?.areaOfInterest,[Validators.required]],
      description:[userProfile?.description,[Validators.required]],
      price:[userProfile?.price,[Validators.required]],
      workInLocations:[userProfile?.workInLocations,[Validators.required]]
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
      this.profile=user
    })
  }
  }

  delete(id?:number){
    this.workerService.deleteWorker(id).subscribe(err=>console.log(err))
    location.reload()
  }



}
