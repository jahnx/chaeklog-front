import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import palette from 'lib/styles/palette';

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Container>
      <Link to={!token ? '/' : '/books'}>책로그</Link>
      {!token ? (
        <span>로그인 후 이용하실 수 있습니다.</span>
      ) : (
        <button onClick={logOut}>로그아웃</button>
      )}
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 1000px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px 20px;

  span {
    font-size: 15px;
    color: ${palette.gray[8]};
  }

  @media screen and (max-width: 400px) {
    width: 400px;
  }

  @media (min-width: 401px) and (max-width: 700px) {
    width: 700px;
  }
`;
