import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerMyProfileComponent } from './worker-my-profile.component';

describe('WorkerMyProfileComponent', () => {
  let component: WorkerMyProfileComponent;
  let fixture: ComponentFixture<WorkerMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerMyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
