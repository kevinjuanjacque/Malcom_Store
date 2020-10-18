import React from 'react';
import { Routers } from './routers/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {

  return (
    <Provider store={store}>
      <Routers />

    </Provider>
  );
}

export default App;
