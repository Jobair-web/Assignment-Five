import React from 'react';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fafafa]">
      <div>
        <Navbar />
        <Home />
      </div>
      <Footer />
      <ToastContainer autoClose={2500} hideProgressBar={false} />
    </div>
  );
}

export default App;