import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import SearchInitiator from '../utils/search-initiator';

class App {
  constructor({ button, drawer, content, searchForm }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._searchForm = searchForm;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    SearchInitiator.init({ form: this._searchForm });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
