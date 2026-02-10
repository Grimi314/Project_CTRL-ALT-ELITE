import axios from 'axios';

export async function getAlbums(id) {
  if (!id) throw new Error('Oops...something wrong :(');
  const { data } = await axios.get(
    `https://sound-wave.b.goit.study/api/artists/${id}/albums`
  );
  return data;
}
