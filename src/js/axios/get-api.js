import axios from 'axios';

export function getDatoFromApi(endPoint, params) {
  const data = axios.get(
    `https://sound-wave.b.goit.study/api${endPoint}?${params}`
  );
  return data;
}
