import jwtDecode from 'jwt-decode';
import http from './httpServices';
import config from '../config.json';

const token = 'token';

export async function login(data) {
  const { data: jwt } = await http.post('/auth', data, config.header);
  localStorage.setItem(token, jwt);
}

export async function loginAsAdmin(data) {
  const { data: jwt } = await http.post('/auth/admin', data, config.header);
  localStorage.setItem(token, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(token, jwt);
}

export function logout() {
  localStorage.removeItem(token);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(token);
    return jwtDecode(jwt);
  } catch (err) {
    return null;
  }
}
export function getJwt() {
  try {
    return localStorage.getItem(token);
  } catch (err) {
    return null;
  }
}

http.setJwt(getJwt());

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt
};
