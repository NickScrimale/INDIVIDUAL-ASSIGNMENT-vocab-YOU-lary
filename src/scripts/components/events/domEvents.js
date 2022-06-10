import addWordForm from '../forms/addCard';
import { getVocab, deleteVocab, GetSingleVocab } from '../../../api/cardData';
import { showVocabCards } from '../pages/vocabCards';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.dispatchEvent.includes('add--btn')) {
      addWordForm(uid);
    }

    if (e.target.dispatchEvent.includes('edit-word')) {
      const [, firebaseKey] = e.target.dispatchEvent.split('--');
      GetSingleVocab(firebaseKey).then((vocabObj) => addWordForm(vocabObj));
    }
  });
};
