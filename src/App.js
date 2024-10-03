import './App.css';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports
import Hersosection from './Components/Hersosection';
import Navbar from './Components/Navbar';
import DiaryHolder from './Components/DiaryHolder';

function App() {
  return (
    <>
      <Router> {/* Wrap everything in Router */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Hersosection />} />
          <Route path='/Diary' element={<DiaryHolder />} />
        </Routes>
      </Router>
      <footer style={{ background: 'white' }}>
        <Contact />
        <div style={{ display: 'flex', zIndex: 50, justifyContent: 'center', paddingBottom: '10px' }}>
          © 2024 Copyright: Rohan Raghav
        </div>
      </footer>
    </>
  );
}

export default App;
