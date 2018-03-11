import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesmenuComponent } from './tilesmenu.component';

describe('TilesmenuComponent', () => {
  let component: TilesmenuComponent;
  let fixture: ComponentFixture<TilesmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
