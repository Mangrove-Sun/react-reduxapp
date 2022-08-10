import store from './modules';
import { Provider } from 'react-redux';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
  );
}

export default App;
