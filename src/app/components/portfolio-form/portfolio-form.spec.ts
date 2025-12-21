import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioForm } from './portfolio-form';

describe('PortfolioForm', () => {
  let component: PortfolioForm;
  let fixture: ComponentFixture<PortfolioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PortfolioForm,
        // Provide router testing utilities for directives like RouterLink
        (await import('@angular/router/testing')).RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
