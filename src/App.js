import { GlobalStyle } from 'lib/styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NavBar from 'components/NavBar';
import SearchBook from 'pages/SearchBook';
import AddBook from 'pages/AddBookPage';
import DetailPage from 'pages/DetailPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/books" element={<Home />} />
        <Route path="/books/:id" element={<DetailPage />} />
        <Route path="/books/search" element={<SearchBook />} />
        <Route path="/books/add" element={<AddBook />} />
      </Routes>
    </>
  );
};

export default App;
