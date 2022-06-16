import AddBtn from 'components/AddBtn';
// import Book from 'components/Book';
import axios from 'axios';

const Home = () => {
  axios
    .get('books')
    .then((response) => {
      const result = response.data;
      console.log(result);
      const bookList = result.map((book) => (
        <li key={book.id}>
          {book.title}
          {book.author}
        </li>
      ));
      return (
        <>
          <AddBtn text="새 책 기록" />
          {/* <ol>{bookList}</ol> */}
        </>
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Home;
