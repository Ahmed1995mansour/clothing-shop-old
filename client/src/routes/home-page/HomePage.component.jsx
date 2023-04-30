import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/Directory.component';
import { categories } from '../../data/data';

const HomePage = () => {
  return (
    <div className="home-page">
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default HomePage;
