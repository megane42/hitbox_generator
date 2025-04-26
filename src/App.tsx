import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from '@/pages/AboutPage';
import HomePage from '@/pages/HomePage';
import '@/App.css';

function App() {
  return (
    <BrowserRouter basename="/hitbox_generator">
      <Routes>
        <Route path="/"      element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
