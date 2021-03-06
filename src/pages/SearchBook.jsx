import styled from 'styled-components';
import axios from 'axios';
import { useState, useCallback } from 'react';
import Book from 'components/Book';

const SearchBook = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSearch = useCallback(
    (e) => {
      axios
        .get(`/books/search/`, {
          params: {
            keyword: keyword,
          },
        })
        .then((response) => setSearchedBooks(response.data))
        .catch((error) => {
          console.log(error);
        });
    },
    [keyword],
  );

  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Container>
      <SearchContainer>
        <input
          type=""
          name="keyword"
          placeholder="찾으시는 책 제목을 입력해주세요."
          onChange={onChange}
          onKeyPress={onEnterPress}
        />
        <button type="button" onClick={onSearch}>
          검색
        </button>
      </SearchContainer>
      <SearchResultContainer>
        {searchedBooks.map((book) => (
          <li key={book.isbn}>
            <Book type="search" book={book} />
          </li>
        ))}
      </SearchResultContainer>
    </Container>
  );
};

export default SearchBook;

SearchBook.defaultProps = {
  id: 1,
  title: 'default title',
  authors: 'default author',
  thumbnail:
    'https://image.aladin.co.kr/product/29537/51/cover500/k162837952_1.jpg',
  startDate: '2022-01-01',
  endDate: '2022-12-12',
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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

const SearchContainer = styled.div`
  display: flex;
  margin: 20px 0;

  input {
    width: 500px;
    height: 30px;
    margin-right: 20px;
    border: none;
    filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.08));

    @media screen and (max-width: 400px) {
      width: 230px;
    }
  }

  button {
    width: 100px;
    background-color: white;
    border-radius: 5px;
    filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.08));

    @media screen and (max-width: 400px) {
      width: 70px;
    }
  }
`;

const SearchResultContainer = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
