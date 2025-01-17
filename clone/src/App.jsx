import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Impact from './components/pages/Impact';
import DleR from './components/pages/DleR';
import Team from './components/pages/Team';
import Investors from './components/pages/Investors';
import Contact from './components/pages/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/dler" element={<DleR />} />
          <Route path="/team" element={<Team />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;