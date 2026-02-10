import { getDatoFromApi } from '../axios/get-api';

const END_POINT = {
  artists_list: '/artists',
};

export async function fetchArtists(page = 1, limit = 8) {
  const params = `page=${page}&limit=${limit}`;
  const response = await getDatoFromApi(END_POINT.artists_list, params);
  return response.data;
}
