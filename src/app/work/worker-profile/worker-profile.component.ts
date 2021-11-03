import {Component} from "@angular/core";
import {WorkerService} from "../worker-service";
import {ActivatedRoute, Router} from "@angular/router";
import {WorkerModel} from "../../model/worker-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector:'worker-detail',
  templateUrl:'./worker-profile.component.html',
  styleUrls:['./worker-profile.component.scss']

})
export class WorkerProfileComponent {

  worker:WorkerModel.WorkerItem | undefined;
  form!:FormGroup;
  userId!:number;

  constructor(private workerService:WorkerService,
              private activatedRoute:ActivatedRoute,
              private formBuilder:FormBuilder,
              private router:Router) {
  }

  ngOnInit(){
    const params=this.activatedRoute.snapshot.params;
    const workerId=params.id;
    this.workerService.getByWorker(workerId).subscribe(worker=>this.worker=worker)

    this.userId=workerId;

    this.form=this.formBuilder.group({
      firstName:["",[Validators.required]],
      lastName:["",[Validators.required]],
      workName:["",[Validators.required]],
      comment:["",[Validators.required]]
    })

  }

  comment(){
    let payload={
      firstName:this.form.controls["firstName"].value,
      lastName:this.form.controls["lastName"].value,
      workName:this.form.controls["workName"].value,
      comment:this.form.controls["comment"].value,
    }

    this.workerService.comment(payload,this.userId).subscribe(res=>res)

    location.reload()

  }




}
