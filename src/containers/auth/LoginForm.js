import AuthForm from 'components/auth/AuthForm';
import { useState, useCallback } from 'react';
import axios from '../../../node_modules/axios/index';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPwHandler = (e) => {
    setPassword(e.target.value);
  };

  const form = {
    email: email,
    password: password,
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let body = {
        email: email,
        password: password,
      };

      axios
        .post('/auth/signin', body)
        .then((response) => {
          const { accessToken } = response.data;
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${accessToken}`;
          localStorage.setItem('token', accessToken);
          navigate('/books');
        })
        .catch((error) => {
          error.response.data.message === 'login failed'
            ? alert('이메일이나 비밀번호를 다시 확인해주세요.')
            : console.log(error.response);
        })
        .finally(() => {});
    },
    [email, password, navigate],
  );

  return (
    <AuthForm
      type="login"
      form={form}
      onSubmit={onSubmit}
      onEmailHandler={onEmailHandler}
      onPwHandler={onPwHandler}
    />
  );
};

export default LoginForm;
