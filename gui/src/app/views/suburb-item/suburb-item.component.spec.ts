import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuburbItemComponent } from './suburb-item.component';

describe('SuburbItemComponent', () => {
  let component: SuburbItemComponent;
  let fixture: ComponentFixture<SuburbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuburbItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuburbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
