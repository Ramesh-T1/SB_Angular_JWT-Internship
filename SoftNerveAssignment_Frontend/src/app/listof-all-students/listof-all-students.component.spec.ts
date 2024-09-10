import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofAllStudentsComponent } from './listof-all-students.component';

describe('ListofAllStudentsComponent', () => {
  let component: ListofAllStudentsComponent;
  let fixture: ComponentFixture<ListofAllStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofAllStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
