import { markup } from './artists-modal-render';
import { func, listener } from './modal-ui';
//import { getSelectedArtistId } from '../artists/artist-helpers.js';

export async function showArtist(artistId) {
  try {
    func.showLoader();
    listener();
    const data = await markup(artistId);

    func.renderModal(data);
  } catch (error) {
    func.showError();
  } finally {
    func.hideLoader();
  }
}

showArtist('65adae06af9f6d155db4b23a');

// getSelectedArtistId()
