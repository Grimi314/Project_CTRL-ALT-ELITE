export const artistsList = document.querySelector('.artists-list');

const placeholderArtist = 'https://placehold.co/640x393';
import iconsPath from '../../img/icon.svg';
export function renderArtistsList(artists) {
  const currentCount =
    artistsList.querySelectorAll('.artists-card-item').length;
  const markup = artists
    .map((artist, idx) => {
      const {
        _id: id,
        strArtist: name,
        strBiographyEN: biography,
        strArtistThumb: image,
        genres: genres = [],
      } = artist;

      const genresMarkup = genres
        .map(genre => `<li class="artists-genres-item">${genre}</li>`)
        .join('');

      const absoluteIndex = currentCount + idx;
      const loadingAttr = absoluteIndex < 4 ? 'eager' : 'lazy';

      return `<li class="artists-card-item">
          <img class="artists-image" src="${image || placeholderArtist}" alt="${name}" loading="${loadingAttr}"
        decoding="async"/>
          <ul class="artists-genres-list">
            ${genresMarkup}
          </ul>
          <p class="artists-name">${name}</p>
          <p class="artists-information">
            ${biography}
          </p>
          <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${id}">
            Learn More
            <svg class="caret-right-icon" width="8" height="16">
              <use href="${iconsPath}#icon-button-artists"></use>
            </svg>
          </button>
        </li>`;
    })
    .join('');

  artistsList.insertAdjacentHTML('beforeend', markup);

  setTimeout(() => {
    artistsList
      .querySelectorAll('.artists-information')
      .forEach(previewBiography);
  }, 0);
}
function previewBiography(element) {
  const text = element.dataset.fulltext || element.textContent.trim();
  element.dataset.fulltext = text;
  element.textContent = text;
  if (element.scrollHeight <= element.clientHeight) {
    return;
  }
  const words = text.split(' ');
  while (words.length && element.scrollHeight > element.clientHeight) {
    words.pop();
    element.textContent = words.join(' ') + '...';
  }
}
