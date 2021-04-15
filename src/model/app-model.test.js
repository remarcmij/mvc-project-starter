import AppModel from './AppModel.js';

describe('AppModel', () => {
  describe('getCountryList', () => {
    it('should update the state with a non-empty array of countries', () => {
      const model = AppModel();
      model.subscribe((state) => {
        expect(Array.isArray(state.countries)).toBe(true);
        expect(state.countries.length).toBeGreaterThan(0);
      });
      model.getCountryList();
    });

    it('the country array elements should have `name` and `alpha3Code` properties', () => {
      const model = AppModel();
      model.subscribe((state) => {
        const country = state.countries[0];
        expect(Object.keys(country)).toHaveLength(2);
        expect(country).toHaveProperty('name');
        expect(country).toHaveProperty('alpha3Code');
      });
      model.getCountryList();
    });
  });
});
