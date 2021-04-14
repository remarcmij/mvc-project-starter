function CountrySelectController(dom, db) {
  dom.countrySelect.addEventListener('change', (event) => {
    if (event.target.value !== '') {
      db.getCountryDetails(event.target.value);
    }
  });
}

export default CountrySelectController;
