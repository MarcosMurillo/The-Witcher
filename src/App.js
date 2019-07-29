import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import Loader from './components/loader';

import GlobalStyle from './styles/global';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        {loading && <Loader />}
        {!loading && <Routes />}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
