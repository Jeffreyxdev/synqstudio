import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { Pricing } from './pages/Pricing';
import Book from './pages/Book';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      
    </div>
  );
};

export default App;