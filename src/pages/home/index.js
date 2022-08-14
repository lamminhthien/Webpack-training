import 'bootstrap/scss/bootstrap';

import 'Partials/main-menu';

import './style';

class PageHome {
  constructor() {
    console.log('Page:: Home');

    this.btnLoadReactApp = document.querySelector('.btn-load-react-app');
    this.btnLoadReactApp.addEventListener('click', this.initReactApp);
  }

  initReactApp() {
    const myApp = import(
      /* webpackChunkName: "bundle.my-app" */
      '../../my-app'
    );

    Promise.all([myApp]).then(() => {
      console.log('React App Loaded');
    });
  }
}

new PageHome();
