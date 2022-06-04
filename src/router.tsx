import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Notfound from './pages/notfound';
import Welcome from './pages/welcome';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default Router;
