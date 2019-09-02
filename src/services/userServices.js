import http from './httpServices';
import config from '../config.json';

//register tenant
export async function register(data) {
  return await http.post('/users', data, config.header);
}

//register admin
export async function registerAdmin(data) {
  return await http.post('/admins', data, config.header);
}
