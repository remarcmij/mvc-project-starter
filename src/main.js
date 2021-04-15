import getDOM from './lib/getDOM.js';
import AppModel from './model/AppModel.js';
import CountrySelectView from './views/CountrySelectView.js';
import CountryDetailView from './views/CountryDetailView.js';
import LoggerView from './views/LoggerView.js';
import CountrySelectController from './controllers/CountrySelectController.js';

async function main() {
  const dom = getDOM();

  const model = AppModel();

  model.subscribe(CountrySelectView(dom));
  model.subscribe(CountryDetailView(dom));
  model.subscribe(LoggerView());

  CountrySelectController(dom, model);

  model.getCountryList();
}

window.addEventListener('load', main);
