import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Card from './Pages/Card';
import './index.css';

function App() {
  return (
    <div className="bg-transparent h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
