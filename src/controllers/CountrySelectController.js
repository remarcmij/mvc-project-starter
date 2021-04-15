function CountrySelectController(dom, model) {
  dom.countrySelect.addEventListener('change', (event) => {
    if (event.target.value !== '') {
      model.getCountryDetails(event.target.value);
    }
  });
}

export default CountrySelectController;
