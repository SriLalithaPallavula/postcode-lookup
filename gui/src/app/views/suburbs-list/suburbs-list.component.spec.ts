import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuburbsListComponent } from './suburbs-list.component';

describe('SuburbsListComponent', () => {
  let component: SuburbsListComponent;
  let fixture: ComponentFixture<SuburbsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuburbsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuburbsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
