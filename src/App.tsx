import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/LandingPage';
import { PrimeReactProvider } from 'primereact/api';
import FormPage from './pages/FormPage';

const Layout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/form', element: <FormPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </>
  );
}

export default App;
