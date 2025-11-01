import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './routes/Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
