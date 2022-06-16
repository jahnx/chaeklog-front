import Cookies from 'js-cookie';

const isLogin = () => !!Cookies.get('user');

export default isLogin;
