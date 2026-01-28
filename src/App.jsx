import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToHash from './components/ScrollToHash';
import HomePage from './pages/HomePage';
import ServicesDetailPage from './pages/ServicesDetailPage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hizmetler" element={<ServicesDetailPage />} />
            <Route path="/hizmetler/:id" element={<ServicesDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
