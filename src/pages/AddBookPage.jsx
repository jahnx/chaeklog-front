// import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import BookDetail from 'components/BookDetail';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import { useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useCallback } from 'react';

const AddBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const book = location.state.data;
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const getStartDate = (startDate) => {
    setStartDate(startDate);
  };

  const getEndDate = (endDate) => {
    setEndDate(endDate);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let bookData = {
        title: book.title,
        authors: book.authors[0],
        thumbnail: book.thumbnail,
        startDate: startDate,
        endDate: endDate,
      };

      axios
        .post('/books', bookData)
        .then((response) => {
          console.log(response);
          navigate('/books');
        })
        .catch((error) => console.log(error.response));
    },
    [book, startDate, endDate, navigate],
  );

  return (
    <Container>
      <BtnWrapper>
        <form onSubmit={onSubmit}>
          <button type="submit">추가하기</button>
        </form>
      </BtnWrapper>
      <BookDetail
        book={book}
        getStartDate={getStartDate}
        getEndDate={getEndDate}
        type="add"
      />
    </Container>
  );
};

export default AddBook;

const Container = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
  margin: 20px 0;
  padding: 50px 0;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.08));
`;

const BtnWrapper = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  display: flex;
  justify-content: right;
  margin-bottom: 50px;

  button {
    margin-right: 100px;
    background-color: ${palette.gray[3]};
    border-radius: 5px;
    width: 80px;
    height: 30px;
    font-size: 15px;
    font-weight: bold;

    &:hover {
      background-color: ${palette.cyan[2]};
    }
  }
`;
