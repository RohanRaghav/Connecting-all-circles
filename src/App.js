import './App.css';
import Contact from './Components/Contact';
import Hero from './Components/Hero';

function App() {
  return (
    <>
    <Hero />
      <footer style={{ background: 'white' }}>
        <Contact />
        <div style={{ display: 'flex', zIndex: 50, justifyContent: 'center', paddingBottom: '10px' }}>
          © 2024 Copyright: Connecting All Circles
        </div>
      </footer>
    </>
  );
}

export default App;
