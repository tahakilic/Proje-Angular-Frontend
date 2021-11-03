import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WorkerService} from "../worker-service";
import {WorkerModel} from "../../model/worker-model";

@Component({
  selector: 'app-worker-my-profile',
  templateUrl: './worker-my-profile.component.html',
  styleUrls: ['./worker-my-profile.component.scss']
})
export class WorkerMyProfileComponent implements OnInit {

  profile!:WorkerModel.WorkerItem;

  constructor(private activatedRoute:ActivatedRoute,
              private workerService:WorkerService) {}

  ngOnInit() {
    const params=this.activatedRoute.snapshot.params;
    const profileId=params.id;
    this.workerService.getByWorker(profileId).subscribe(profile=>this.profile=profile)
  }

}
