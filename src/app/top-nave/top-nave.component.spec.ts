import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNaveComponent } from './top-nave.component';

describe('TopNaveComponent', () => {
  let component: TopNaveComponent;
  let fixture: ComponentFixture<TopNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
