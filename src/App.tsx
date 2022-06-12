import { Provider } from 'react-redux';

import { Router } from './router';
import store from './store/store';

import './styles/index.scss';

const App: React.VFC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
