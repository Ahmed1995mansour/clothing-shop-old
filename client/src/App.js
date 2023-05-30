import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/Authentication.component';
import HomePage from './routes/home-page/HomePage.component';
import Navigation from './routes/navigation/Navigation.component';

const Shop = () => {
  return <h1>Shop Here</h1>;
};
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
