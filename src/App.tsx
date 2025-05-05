import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AboutPage from '@/pages/AboutPage';
import HomePage from '@/pages/HomePage';
import theme from '@/theme';
import '@/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter basename="/hitbox_generator">
      <Routes>
        <Route path="/"      element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
