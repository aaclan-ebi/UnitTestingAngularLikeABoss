import {HeroesComponent} from './heroes.component';
import {Hero} from '../hero';

describe('Heroes Component', () => {
  let heroesComponent: HeroesComponent;
  let mockService, mockObservable;
  let HEROES: Hero[];

  describe('delete method', () => {

    beforeEach(() => {
      HEROES = [
        {id: 1, name: 'Superman', strength: 50},
        {id: 2, name: 'Batman', strength: 30},
        {id: 3, name: 'Flash', strength: 9}
      ];
      mockService = jasmine.createSpyObj(['deleteHero']);
      mockObservable = jasmine.createSpyObj(['subscribe']);
      mockService.deleteHero.and.returnValue(mockObservable);
      heroesComponent = new HeroesComponent(mockService);
    });
    it('should remove the selected hero from the list', () => {
      heroesComponent = new HeroesComponent(mockService);
      heroesComponent.heroes = HEROES;
      heroesComponent.delete(heroesComponent.heroes[1]);
      expect(heroesComponent.heroes).toEqual([{id: 1, name: 'Superman', strength: 50},
        {id: 3, name: 'Flash', strength: 9}]);
    });

    it('should call deleteHero on the service', () => {
      heroesComponent = new HeroesComponent(mockService);
      heroesComponent.heroes = HEROES;
      heroesComponent.delete(HEROES[1]);
      expect(mockService.deleteHero).toHaveBeenCalled();
    });

    it('should call deleteHero on the service with correct param', () => {
      heroesComponent = new HeroesComponent(mockService);
      heroesComponent.heroes = HEROES;
      heroesComponent.delete(HEROES[1]);
      expect(mockService.deleteHero).toHaveBeenCalledWith(HEROES[1]);
    });

    it('should call deleteHero.subscribe on the service', () => {
      heroesComponent = new HeroesComponent(mockService);
      heroesComponent.heroes = HEROES;
      heroesComponent.delete(HEROES[1]);
      expect(mockObservable.subscribe).toHaveBeenCalled();
    });
  });
});
