import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import palette from 'lib/styles/palette';
import BookDetail from 'components/BookDetail';
import { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useCallback } from 'react';

const DetailPage = () => {
  const params = useParams();
  const [bookData, setBookData] = useState();

  console.log(bookData);

  return (
    <Container>
      <BtnWrapper>
        <form>
          <button type="submit">수정하기</button>
        </form>
      </BtnWrapper>
      <BookDetail book={bookData} type="edit" />
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
