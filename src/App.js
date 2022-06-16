import { GlobalStyle } from 'lib/styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NavBar from 'components/NavBar';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mybooks" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
