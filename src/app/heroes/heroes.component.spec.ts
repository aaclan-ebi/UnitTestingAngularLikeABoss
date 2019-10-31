import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs/internal/observable/of';

describe('Heroes Component', () => {
  describe('get heroes function', () => {
    let mockHeroSvc, heroesComponent;
    const HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];

    beforeEach(() => {
      mockHeroSvc = jasmine.createSpyObj(['getHeroes', 'deleteHero']);
      const mockObservable = of(HEROES);
      mockHeroSvc.getHeroes.and.returnValue(mockObservable);

    });

    it('should get heroes from heroes service and set heroes in the component', () => {
      heroesComponent = new HeroesComponent(mockHeroSvc);
      heroesComponent.getHeroes();
      expect(heroesComponent.heroes).toBe(HEROES);
    });

  });
});
