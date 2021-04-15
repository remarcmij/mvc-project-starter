import createAndAppend from '../lib/createAndAppend.js';

function CountrySelectView(dom) {
  return ({ countries }) => {
    if (!countries) {
      return;
    }

    const { countrySelect } = dom;
    if (countrySelect.children.length > 1) {
      return;
    }

    countries.forEach((country) => {
      createAndAppend('option', countrySelect, {
        value: country.alpha3Code,
        text: country.name,
      });
    });
  };
}

export default CountrySelectView;
