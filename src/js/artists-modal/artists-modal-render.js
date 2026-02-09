import { getAlbums } from './artists-modal-api';

export async function markup(artistId) {
  const {
    genres = [],
    albumsList = [],
    strArtist = 'Unknown artist',
    strArtistThumb = '',
    strBiographyEN = '',
    strGender = '-',
    strCountry = '-',
    intMembers = '-',
    intFormedYear = '-',
    intDiedYear = null,
  } = await getAlbums(artistId);

  const valueDiedYear = intDiedYear ?? 'present';

  function formatTime(ms) {
    if (!ms || ms === 0 || ms === '0') return '—';
    const time = parseInt(ms);

    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  const genresMarkup = genres
    .map(el => {
      return `<div data-genres class="section-modal-genres">${el}</div>`;
    })
    .join('');

  const tracksMarkup = tracks =>
    (tracks ?? [])
      .map(track => {
        const link = track.movie
          ? `
          <a data-item-icon-linc href="${track.movie}" class="container-list-item-span-link" target="_blank" rel="noopener noreferrer">
            <svg class="close-svg" width="24" height="24">
                <use href="/img/icon.svg#icon-Youtube"></use>
            </svg>
          </a>`
          : '';

        return `
          <li class="section-modal-albume-container-list-item">
          <span data-item-nane class="container-list-item-span">${track.strTrack ?? '—'}</span>
          <span data-item-time class="container-list-item-span">${formatTime(track.intDuration)}</span>${link}
          </li>
    `;
      })
      .join('');

  const albumsMarkup = albumsList
    .map(album => {
      return `
        <div data-albume-container class="section-modal-albume-container">
          <h3 data-albume-title class="section-modal-albume-container-title">${album.strAlbum ?? '-'}</h3>

          <ul class="section-modal-albume-container-list">
            <li class="section-modal-albume-container-list-item-selrct">
              <span class="container-list-item-selrct-span">Track</span>
              <span class="container-list-item-selrct-span">Time</span>
              <span class="container-list-item-selrct-span">Link</span>
            </li>
            ${tracksMarkup(album.tracks)}
          </ul>
    </div>
    `;
    })
    .join('');

  const template = document.querySelector('.modal-template');

  const clone = template.content.cloneNode(true);

  clone.querySelector('[data-artist-title]').textContent = strArtist;
  clone.querySelector('[data-sex]').textContent = strGender;
  clone.querySelector('[data-members]').textContent = intMembers;
  clone.querySelector('[data-country]').textContent = strCountry;
  clone.querySelector('[data-biography]').textContent = strBiographyEN;
  clone.querySelector('[data-years]').textContent =
    `${intFormedYear}-${valueDiedYear}`;

  clone.querySelector('[data-section-modal-img]').src = strArtistThumb;
  clone.querySelector('[data-section-modal-img]').alt = strArtist;

  clone.querySelector('[data-genres]').innerHTML = genresMarkup;
  clone.querySelector('[data-albums-wrapper]').innerHTML = albumsMarkup;

  return clone;
}
