import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import isLogin from 'lib/isLogin';

const NavBar = () => {
  const navigate = useNavigate();
  const user = isLogin();

  const logoutHandler = () => {
    Cookies.set('user', false, {
      maxAge: 0,
    });
    navigate('/');
  };

  return (
    <Container>
      <Link to="/mybooks">책로그</Link>
      {user ? (
        <button onClick={logoutHandler}>로그아웃</button>
      ) : (
        <div>로그인 해주세요</div>
      )}
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  border: 1px solid black;
  border-radius: 10px;

  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
`;
