import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs';
import {Component, Input} from '@angular/core';
import {HeroService} from '../hero.service';

describe('HeroesComponent (shallow tests)', () => {
  let mockHeroService;
  let fixture: ComponentFixture<HeroesComponent>;
  let HEROES;

  @Component({
    selector: 'app-hero',
    template: '<div></div>'
  })
  class FakeHeroComponent {
    @Input() hero;
  }

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];
    mockHeroService = jasmine.createSpyObj('heroService', ['getHeroes', 'addHero', 'deleteHero']);

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        FakeHeroComponent
      ],
      providers: [
        {provide: HeroService,
          useValue: mockHeroService
        }
      ]
    });


    fixture = TestBed.createComponent(HeroesComponent);
  });

  it(`should set heroes correctly from service`, () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();

    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

  // test 2
  // it('should have the right count of li tags', () => {
  //   mockHeroService.getHeroes.and.returnValue(of(HEROES))
  //   fixture.detectChanges();
  //
  //   expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  // });

});
