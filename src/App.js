import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './redux/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideoPage from "../src/pages/WatchVideoPage";

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch/:id",
        element: <WatchVideoPage />,
      },
    ]
  }])

  return (
    <>
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </>

  );
}

export default App;
