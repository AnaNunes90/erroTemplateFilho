import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponentUmComponent } from './teste-component-um.component';

describe('TesteComponentUmComponent', () => {
  let component: TesteComponentUmComponent;
  let fixture: ComponentFixture<TesteComponentUmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteComponentUmComponent]
    });
    fixture = TestBed.createComponent(TesteComponentUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
