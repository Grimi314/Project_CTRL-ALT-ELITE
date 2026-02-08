import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchArtists } from './artists-api';
import { artistsList, renderArtistsList } from './artists-render';
import { openMoreInfoById } from './artists-helpers';

const perPage = 8;
let pageNumber = 1;
const loadMoreBtn = document.querySelector('.artists-load-more-btn');
const loader = document.querySelector('.loader');

artistsList.addEventListener('click', openMoreInfoById);
loadMoreBtn.addEventListener('click', loadMoreResults);

async function initArtists(pageNumber, perPage) {
  try {
    const data = await fetchArtists(pageNumber, perPage);
    renderArtistsList(data.artists);
    return data.artists || [];
  } catch (error) {
    iziToast.error({ message: 'Failed to load artists. Please try again.' });
    return [];
  }
}

initArtists(pageNumber, perPage);

async function loadMoreResults() {
  pageNumber += 1;
  loadMoreBtn.classList.add('artists-visually-hidden');

  loader.classList.remove('artists-visually-hidden');
  try {
    const artists = await initArtists(pageNumber, perPage);
    loader.classList.add('artists-visually-hidden');

    if (artists.length === 0) {
      iziToast.warning({
        message: "You've load all available artists.There're nomore results.",
      });
      return;
    }
    if (artists.length < perPage) {
      iziToast.warning({
        message: `You've load last ${artists.length} artists`,
      });
      return;
    }
    loadMoreBtn.classList.remove('artists-visually-hidden');
  } catch (error) {
    pageNumber -= 1;
    loader.classList.add('artists-visually-hidden');
    iziToast.error({
      message:
        'Something went wrong while trying to load artists. Please try again',
    });
    loadMoreBtn.classList.remove('artists-visually-hidden');
  }
}
