import {Component} from "@angular/core";
import {WorkerService} from "../worker-service";
import {ActivatedRoute} from "@angular/router";
import {WorkerModel} from "../../model/worker-model";

@Component({
  selector:'worker-detail',
  templateUrl:'./worker-profile.component.html',
  styleUrls:['./worker-profile.component.scss']

})
export class WorkerProfileComponent {
  title!:"bi bi-star";

  worker:WorkerModel.WorkerItem | undefined;
  constructor(private workerService:WorkerService,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(){
    const params=this.activatedRoute.snapshot.params;
    const workerId=params.id;

    this.workerService.getByWorker(workerId).subscribe(worker=>this.worker=worker)
  }




}
