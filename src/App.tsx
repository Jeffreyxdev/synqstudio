import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { Pricing } from './pages/Pricing';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <div className="p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;