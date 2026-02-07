import axios from 'axios';

async function getHumanId() {
  const response = await axios.get(
    'https://sound-wave.b.goit.study/api/artists?limit=10&page=1'
  );
  return response.data.artists[3]._id;
}

async function getInformation(id) {
  const response = await axios.get(
    `https://sound-wave.b.goit.study/api/artists/${id}`
  );
  return response.data;
}

async function init() {
  try {
    const id = await getHumanId();
    const info = await getInformation(id);
    console.log(info);

    return info;
  } catch (error) {
    console.error(error.message);
  }
}

export async function markup() {
  const infoAboutArtist = await init();
  const {
    _id,
    genres,
    strArtist,
    strArtistThumb,
    strBiographyEN,
    strGender,
    strCountry,
    intMembers,
    intFormedYear,
    intDiedYear,
  } = infoAboutArtist;

  //   if (!intDiedYear) intDiedYear = 'present';
  console.log(intMembers);

  return `
    <h2 class="section-modal-title">${strArtist}</h2>
      <div class="wrapper-desctope-view">
        <img
          data-section-modal-img
          src="${strArtistThumb}"
          alt="The photo of artist"
          class="section-modal-img"
        />
        <div class="wrapper-desctope-view-description">
          <div class="section-modal-wrapper-text">
            <div class="section-modal-wrapper-text-description">
              <div class="section-modal-text-container">
                <h3 class="section-modal-text-container-title">Years active</h3>
                <p data-years class="section-modal-text-container-text">
                  ${intFormedYear}-${intDiedYear}
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
                <p data-country class="section-modal-text-container-text">
                  ${strCountry}
                </p>
              </div>
            </div>
            <div class="section-modal-text-container">
              <h3 class="section-modal-text-container-title">Biography</h3>
              <p class="">
                ${strBiographyEN}
              </p>
            </div>
          </div>
        </div>
      </div>
`;
}
