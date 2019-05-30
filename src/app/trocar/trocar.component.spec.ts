import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocarComponent } from './trocar.component';

describe('TrocarComponent', () => {
  let component: TrocarComponent;
  let fixture: ComponentFixture<TrocarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
