import styled from 'styled-components';
import palette from 'lib/styles/palette';
import BookDetail from 'components/BookDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Note from 'components/Note';
import axios from 'axios';

const DetailPage = () => {
  const bookId = useParams().id;
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    axios
      .get(`${bookId}`)
      .then((response) => setBookData(response.data))
      .catch((error) => console.log(error));
  }, [bookId, setBookData]);

  return (
    <Container>
      <BtnWrapper>
        <form>
          <button type="submit">수정하기</button>
        </form>
      </BtnWrapper>
      <BookDetail book={bookData} type="edit" />
      <Note note={bookData.notes} />
    </Container>
  );
};

export default DetailPage;

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
