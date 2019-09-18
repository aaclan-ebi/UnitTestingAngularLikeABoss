import {HeroComponent} from './hero.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Hero} from '../hero';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Hero Component', () => {
  let fixture: ComponentFixture<HeroComponent>;
  let spiderman: Hero;

  beforeEach(() => {
    spiderman = {id: 1, name: 'Spiderman', strength: 13};
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);

  });
  it('should have the correct hero', () => {
    fixture.componentInstance.hero = spiderman;
    expect(fixture.componentInstance.hero).toBe(spiderman);
  });

  it('should render out the hero name', () => {
    fixture.componentInstance.hero = spiderman;
    fixture.detectChanges(); // if model changed but view has not been updated
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('Spiderman');
  });
});

