import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeagueTableComponent } from './view-league-table.component';

describe('ViewLeagueTableComponent', () => {
  let component: ViewLeagueTableComponent;
  let fixture: ComponentFixture<ViewLeagueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeagueTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeagueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
