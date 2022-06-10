import { createVocab, getVocab, updateVocab } from '../../../api/cardData';
import { showVocabCards } from '../pages/vocabCards';
// import { showVocabCards } from '../components/pages/vocabCards';
const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-word')) {
      const vocabObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid,
        timeSubmitted: new Date()
      };
      createVocab(vocabObj, uid).then((vocabArray) => {
        showVocabCards(vocabArray);
      });
    }

    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid,
        timeSubmitted: new Date(),
        firebaseKey
      };
      updateVocab(vocabObj, uid).then(() => {
        getVocab(uid).then((vocabArray) => showVocabCards(vocabArray));
      });
    }
  });
};

export default formEvents;
