import client from './client';

export const login = ({ email, password }) =>
  client.post('/auth/signin', { email, password });

export const register = ({ email, password }) =>
  client.post('auth/signup', { email, password });

export const check = () => client.get('/auth/signin');
