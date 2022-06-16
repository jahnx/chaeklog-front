import AddBtn from 'components/AddBtn';
import Book from 'components/Book';
import Note from 'components/Note';
import styled from 'styled-components';

const BookDetail = () => {
  return (
    <Container>
      <Book />
      <AddBtn text="필사 추가" />
      <Note />
    </Container>
  );
};

export default BookDetail;

const Container = styled.div``;
