import axiosClient from '../axiosClient';

export function find() {
  return axiosClient.get('/posts');
}

export function findOne(id) {
  return axiosClient.get(`/posts/${id}`);
}
