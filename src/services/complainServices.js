import http from './httpServices';
import config from '../config.json';

export async function complain(data) {
  if (data._id) {
    const body = { ...data };
    delete body._id;
    return await http.put('/complains/' + data._id, body, config.header);
  }

  return await http.post('/complains', data, config.header);
}

export async function complains() {
  const { data } = await http.get('/complains');
  return data;
}

export async function resolveComplain(id) {
  return await http.put('/complains/resolve/' + id);
}

export async function getComplain(id) {
  const { data } = await http.get('/complains/' + id);
  return data;
}

export async function deleteComplain(id) {
  return await http.delete('/complains/' + id);
}
export async function updateComplain(id) {
  return await http.put('/complains/' + id);
}
