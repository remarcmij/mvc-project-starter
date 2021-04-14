import getDOM from './utils/getDOM.js';
import Model from './model/Model.js';
import CountryDB from './model/CountryDB.js';
import CountrySelectView from './views/CountrySelectView.js';
import CountryDetailView from './views/CountryDetailView.js';
import LoggerView from './views/LoggerView.js';
import CountrySelectController from './controllers/CountrySelectController.js';

const initialState = {
  countries: null,
  country: null,
};

async function main() {
  const dom = getDOM();

  const model = Model(initialState);
  const db = CountryDB(model);

  model.subscribe(CountrySelectView(dom));
  model.subscribe(CountryDetailView(dom));
  model.subscribe(LoggerView());

  CountrySelectController(dom, db);

  db.getCountryList();
}

window.addEventListener('load', main);
