import styled from 'styled-components';

const Book = (props) => {
  const { id, title, author, imgURL, startDate, endDate } = props;
  return (
    <a href={`/books/${id}`}>
      <Container>
        <Thumbnail>
          <img src={imgURL} alt={`${title}의 표지`} />
        </Thumbnail>
        <Content>
          <h1>{title}</h1>
          <h2>{author}</h2>
          <span>{startDate}</span>
          <span>{endDate}</span>
        </Content>
      </Container>
    </a>
  );
};

export default Book;

Book.defaultProps = {
  id: 1,
  title: 'default title',
  author: 'default author',
  imgURL:
    'https://image.aladin.co.kr/product/29537/51/cover500/k162837952_1.jpg',
  startDate: '2022-01-01',
  endDate: '2022-12-12',
};

const Container = styled.div`
  width: 330px;
  height: 180px;
  /* border: 1px solid red; */
  border-radius: 10px;
  background-color: white;
  display: flex;
  filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.08));
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 150px;
  margin: auto 15px;

  & img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  /* border: 1px solid blue; */
  margin: 15px 0;
  width: 180px;
  color: #797979;

  h1 {
    font-size: 30px;
    margin-bottom: 6px;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 6px;
  }

  & span {
    font-size: 15px;

    &:not(:last-child)::after {
      content: ' ~ ';
    }
  }
`;
