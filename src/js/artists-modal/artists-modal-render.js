import axios from 'axios';

async function getHumanId() {
  const response = await axios.get(
    'https://sound-wave.b.goit.study/api/artists?limit=10&page=1'
  );
  return response.data.artists[1]._id;
}

async function getAlbums(id) {
  const response = await axios.get(
    `https://sound-wave.b.goit.study/api/artists/${id}/albums`
  );
  console.log(response.data);

  return response.data;
}

async function init() {
  try {
    const id = await getHumanId();
    const info = await getAlbums(id);

    return info;
  } catch (error) {
    console.error(error.message);
  }
}

export async function markup() {
  const aboutArtist = await init();
  const {
    _id,
    genres,
    albumsList,
    strArtist,
    strArtistThumb,
    strBiographyEN,
    strGender,
    strCountry,
    intMembers,
    intFormedYear,
    intDiedYear,
  } = aboutArtist;

  const valueDiedYear = intDiedYear ?? 'present';
  console.log(albumsList[0].tracks[0].strArtist);

  const artistGenres = genres
    .map(el => {
      return `<div data-genres class="section-modal-genres">${el}</div>`;
    })
    .join('');

  const artistAlbumList = albumsList
    .map(el => {
      return `
        <div data-albume-container class="section-modal-albume-container">
          <h3 data-albume-title class="section-modal-albume-container-title">${el.strAlbum}</h3>

          <ul class="section-modal-albume-container-list">
            <li class="section-modal-albume-container-list-item-selrct">
              <span class="container-list-item-selrct-span">Track</span>
              <span class="container-list-item-selrct-span">Time</span>
              <span class="container-list-item-selrct-span">Link</span>
            </li>

            ${el.tracks
              .map(track => {
                return `
        <li class="section-modal-albume-container-list-item">
          <span data-item-nane class="container-list-item-span">${track.strTrack}</span>
          <span data-item-time class="container-list-item-span">${track.intDuration}</span>
          <a data-item-icon-linc href="${track.movie}" class="container-list-item-span-link" target="_blank">
            <svg class="close-svg" width="24" height="24">
                <use href="/img/icon.svg#icon-Youtube"></use>
            </svg>
          </a>
        </li>
      `;
              })
              .join('')}
          <ul/>
    </div>
    `;
    })
    .join('');

  return `
<h2 class="section-modal-title">${strArtist}</h2>
<div class="wrapper-desctope-view">
  <img
    data-section-modal-img
    src="${strArtistThumb}"
    alt="${strArtist}"
    class="section-modal-img"
  />
  <div class="wrapper-desctope-view-description">
    <div class="section-modal-wrapper-text">
      <div class="section-modal-wrapper-text-description">
        <div class="section-modal-text-container">
          <h3 class="section-modal-text-container-title">Years active</h3>
          <p data-years class="section-modal-text-container-text">
            ${intFormedYear}-${valueDiedYear}
          </p>
        </div>

        <div class="section-modal-text-container">
          <h3 class="section-modal-text-container-title">Sex</h3>
          <p data-sex class="section-modal-text-container-text">${strGender}</p>
        </div>

        <div class="section-modal-text-container">
          <h3 class="section-modal-text-container-title">Members</h3>
          <p data-members class="section-modal-text-container-text">${intMembers}</p>
        </div>

        <div class="section-modal-text-container">
          <h3 class="section-modal-text-container-title">Country</h3>
          <p data-country class="section-modal-text-container-text">${strCountry}</p>
        </div>
      </div>
      <div class="section-modal-text-container">
        <h3 class="section-modal-text-container-title">Biography</h3>
        <p class="">${strBiographyEN}</p>
      </div>
    </div>
    <div class="section-modal-wrapper-genres">${artistGenres}</div>
  </div>
</div>

<h2 class="section-modal-abums-title">Albums</h2>
  <div data-albums-wrapper class="section-modal-albums-wrapper">${artistAlbumList}</div>
`;
}
