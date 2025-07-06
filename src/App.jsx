import { Routes, Route } from 'react-router-dom';
import './App.css';

import Landingpage from './Component/Landingpage';
import ExploreProducts from './Component/ExploreProducts';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
      {/* Navbar can stay outside routes if it's global */}
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/explore" element={<ExploreProducts />} />
      </Routes>
    </>
  );
}

export default App;
