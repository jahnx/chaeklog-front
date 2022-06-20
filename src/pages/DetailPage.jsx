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
  const [editable, setEditable] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const editOnOff = () => {
    setEditable(!editable);
  };

  const getStartDate = (startDate) => {
    setStartDate(startDate);
  };

  const getEndDate = (endDate) => {
    setEndDate(endDate);
  };

  useEffect(() => {
    axios
      .get(`books/${bookId}`)
      .then((response) => setBookData(response.data))
      .catch((error) => console.log(error));
  }, [bookId, setBookData]);

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      startDate: startDate,
      endDate: endDate,
    };

    axios
      .patch(`books/${bookId}`, body)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    window.location.replace(`${bookId}`);
  };

  const handleDeleteNote = (e) => {
    e.preventDefault();
    axios
      .delete(`${bookId}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    window.location.replace('/');
  };

  return (
    <Container>
      {editable ? (
        <>
          <BtnWrapper>
            <form
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <button type="submit">수정완료</button>
            </form>
          </BtnWrapper>
          <BookDetail
            book={bookData}
            getStartDate={getStartDate}
            getEndDate={getEndDate}
            type="edit"
          />
        </>
      ) : (
        <>
          <BtnWrapper>
            <button type="button" onClick={(e) => editOnOff(e)}>
              수정하기
            </button>
            <button type="button" onClick={(e) => handleDeleteNote(e)}>
              삭제하기
            </button>
          </BtnWrapper>
          <BookDetail book={bookData} type="detail" />
        </>
      )}

      <Note note={bookData.notes} />
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
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

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-right: 100px;
  margin-bottom: 50px;

  button {
    /* margin-right: 100px; */
    background-color: ${palette.gray[3]};
    border-radius: 5px;
    width: 80px;
    height: 30px;
    font-size: 15px;
    font-weight: bold;

    &:hover {
      background-color: ${palette.red[2]};
    }

    &:first-child {
      margin-right: 10px;

      &:hover {
        background-color: ${palette.cyan[2]};
      }
    }
  }
`;
