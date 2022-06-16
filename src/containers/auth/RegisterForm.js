import AuthForm from 'components/auth/AuthForm';
import { useState, useCallback } from 'react';
import axios from '../../../node_modules/axios/index';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPwHandler = (e) => {
    setPassword(e.target.value);
  };

  const onPwConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const form = {
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordConfirm) {
        return alert('비밀번호와 비밀번호 확인이 다릅니다.');
      }

      let body = {
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      };

      axios
        .post('/auth/signup', body)
        .then((response) => {
          console.log(response);
          navigate('/login');
        })
        .catch((error) => console.log(error.response))
        .finally(() => {});
    },
    [email, password, passwordConfirm, navigate],
  );

  return (
    <AuthForm
      type="register"
      form={form}
      onSubmit={onSubmit}
      onEmailHandler={onEmailHandler}
      onPwHandler={onPwHandler}
      onPwConfirmHandler={onPwConfirmHandler}
    />
  );
};

export default RegisterForm;
