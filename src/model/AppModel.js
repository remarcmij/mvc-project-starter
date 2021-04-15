import restCountries from './rest-countries.js';
import Model from '../lib/Model.js';

function AppModel() {
  const initialState = {
    countries: null,
    country: null,
  };

  const { getState, setState, subscribe } = Model(initialState);

  const getCountryList = () => {
    const countries = restCountries.map(({ name, alpha3Code }) => ({
      name,
      alpha3Code,
    }));
    setState({ ...getState(), countries });
  };

  const getCountryDetails = (alpha3Code) => {
    const country = restCountries.find((c) => c.alpha3Code === alpha3Code);
    setState({ ...getState(), country });
  };

  return {
    getState,
    setState,
    subscribe,
    getCountryList,
    getCountryDetails,
  };
}

export default AppModel;
