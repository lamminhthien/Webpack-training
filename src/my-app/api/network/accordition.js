import axiosClient from '../axiosClient';

export function find() {
  return axiosClient.get('/accorditions');
}

export function findOne(id) {
  return axiosClient.get(`/accorditions/${id}`);
}
