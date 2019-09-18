import {HeroesComponent} from './heroes.component';
import {Hero} from '../hero';
import {TestBed} from '@angular/core/testing';
import {HeroService} from '../hero.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs/internal/observable/of';
import {HeroComponent} from '../hero/hero.component';

describe('Heroes Integration Component', () => {
  let mockService;
  let HEROES: Hero[];

  describe('delete method', () => {
    let fixture, heroFixture;
    let heroesComponent, heroComponent;

    beforeEach(() => {
      HEROES = [
        {id: 1, name: 'Superman', strength: 50},
        {id: 2, name: 'Batman', strength: 30},
        {id: 3, name: 'Flash', strength: 9}
      ];
      mockService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
      mockService.getHeroes.and.returnValue(of(HEROES));
      mockService.addHero.and.returnValue(of(HEROES[0]));
      mockService.deleteHero.and.returnValue(of(true));

      TestBed.configureTestingModule({
        declarations: [HeroesComponent, HeroComponent],
        providers: [{provide: HeroService, useValue: mockService}],
        schemas: [NO_ERRORS_SCHEMA]
      });

      fixture = TestBed.createComponent(HeroesComponent);
      // heroFixture = TestBed.createComponent(HeroComponent);
      heroesComponent = fixture.componentInstance;
      // heroComponent = heroFixture.componentInstance;

    });

    it('should add a new hero when add button is clicked', () => {
      const input = fixture.nativeElement.querySelector('input');
      input.value = 'Iron Man';
      fixture.detectChanges();
      const addButton = fixture.debugElement.query(By.css('button'));
      addButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(fixture.componentInstance.heroes.length).toBe(4);
      expect(fixture.debugElement.queryAll(By.css('app-hero')).length).toBe(4);

      const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
      // const deleteButton = heroComponents[0].query(By.css('button');
      const deleteButton = heroComponents[0].query(By.css('button'));
      heroComponents[0].triggerEventHandler('delete', null);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).not.toContain('Superman');
    });
  });
});
