import addWordForm from '../forms/addCard';
import { getVocab, deleteVocab, GetSingleVocab } from '../../../api/cardData';
import { showVocabCards } from '../pages/vocabCards';
import viewSingleWord from '../pages/viewCard';
import clearDom from '../helpers/clearDom';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.dispatchEvent.includes('add--btn')) {
      addWordForm(uid);
    }

    if (e.target.dispatchEvent.includes('edit-word')) {
      const [, firebaseKey] = e.target.dispatchEvent.split('--');
      GetSingleVocab(firebaseKey).then((vocabObj) => addWordForm(vocabObj));
    }

    if (e.target.id.includes('delete-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteVocab(firebaseKey).then(() => {
        getVocab(uid).then((vocabArray) => {
          showVocabCards(vocabArray);
        });
      });
    }

    if (e.target.id.includes('view-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      GetSingleVocab(firebaseKey).then((vocabObj) => viewSingleWord(vocabObj));
    }

    if (e.target.id.includes('all')) {
      getVocab(uid).then((vocabArray) => {
        showVocabCards(vocabArray);
      });
    }

    const langFilter = (language) => {
      if (e.target.id.includes(`${language}`)) {
        clearDom();
        const langArray = [];
        getVocab(uid).then((vocabArray) => {
          vocabArray.forEach((card) => {
            if (card.language.toLowerCase() === `${language}`) {
              langArray.push(card);
              showVocabCards(langArray);
            }
          });
        });
      }
    };

    langFilter('javascript');
    langFilter('python');
    langFilter('html');
    langFilter('css');
  });
};

export default domEvents;
