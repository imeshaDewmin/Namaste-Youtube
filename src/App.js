import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './redux/appStore';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Body />
      </Provider>
    </>

  );
}

export default App;
