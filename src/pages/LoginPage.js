import AuthTemplate from 'components/auth/AuthTemplate';
import LoginForm from 'containers/auth/LoginForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/books');
    }
  }, [token, navigate]);

  return (
    <div>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </div>
  );
};

export default LoginPage;
