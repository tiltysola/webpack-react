import { Outlet } from 'react-router-dom';

import './style.less';

const Index = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};

export default Index;
