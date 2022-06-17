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
    <>
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
    </>
  );
};

export default Home;

const ListWrapper = styled.div`
  /* background-color: pink; */
`;

const ListContainer = styled.ol`
  /* border: 1px solid blue; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;

  li {
    /* border: 1px solid red; */
    width: 330px;
  }
`;
