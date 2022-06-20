import AddBtn from 'components/AddBtn';
import Book from 'components/Book';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  if (!token) {
    navigate('/');
  }

  useEffect(() => {
    axios
      .get('books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <AddBtn text="새 책 기록" api="search" />
      <ListWrapper>
        <ListContainer>
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} type="default" />
            </li>
          ))}
        </ListContainer>
      </ListWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const ListWrapper = styled.div`
  @media screen and (max-width: 400px) {
    width: 400px;
  }

  @media (min-width: 401px) and (max-width: 700px) {
    width: 700px;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    width: 1000px;
  }
`;

const ListContainer = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 5px;

  li {
    width: 330px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 401px) and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
