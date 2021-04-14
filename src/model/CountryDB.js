import restCountries from './rest-countries.js';

function CountryDB(model) {
  return {
    getCountryList() {
      const countries = restCountries.map(({ name, alpha3Code }) => ({
        name,
        alpha3Code,
      }));
      model.setState({ ...model.getState(), countries });
    },
    getCountryDetails(alpha3Code) {
      const country = restCountries.find((c) => c.alpha3Code === alpha3Code);
      model.setState({ ...model.getState(), country });
    },
  };
}

export default CountryDB;
