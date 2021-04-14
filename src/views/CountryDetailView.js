function CountryView(dom) {
  return ({ country }) => {
    if (!country) {
      return;
    }

    dom.countryDetailsContainer.removeAttribute('hidden');

    dom.countryName.textContent = country.name;
    dom.subregion.textContent = country.subregion;
    dom.population.textContent = country.population;
  };
}

export default CountryView;
