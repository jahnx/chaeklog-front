import styled from 'styled-components';

const BookDetail = (props) => {
  const { title, authors, thumbnail, startDate, endDate } = props.book;
  const onChangeStartDate = (e) => {
    props.getStartDate(e.target.value);
  };

  const onChangeEndDate = (e) => {
    props.getEndDate(e.target.value);
  };

  return (
    <BookWrapper>
      <Thumbnail>
        <img src={thumbnail} alt={`${title}의 표지`} />
      </Thumbnail>
      <Content>
        <h1>{title}</h1>
        <h2>{authors}</h2>
        <h3>독서 기간</h3>
        {props.type !== 'detail' ? (
          <>
            <input
              type="date"
              name="startDate"
              id="startDate"
              onChange={onChangeStartDate}
            />
            <span>~</span>
            <input
              type="date"
              name="startDate"
              id="startDate"
              onChange={onChangeEndDate}
            />
          </>
        ) : (
          <>
            <span>{startDate}</span>
            <span>{endDate}</span>
          </>
        )}
      </Content>
    </BookWrapper>
  );
};

export default BookDetail;

// BookDetail.defaultProps = {
//   book: {
//     title: 'default title',
//     authors: 'default author',
//     thumbnail:
//       'https://image.aladin.co.kr/product/29537/51/cover500/k162837952_1.jpg',
//   },
// };

const BookWrapper = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  margin-bottom: 50px;
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
  width: auto;

  h1,
  h2,
  h3 {
    margin-bottom: 6px;
  }

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 13px;
  }

  input {
    font-size: 13px;
  }

  p {
    margin: 0 6px;
  }

  & span {
    font-size: 15px;

    &:last-child::before {
      content: ' ~ ';
    }
  }
`;
