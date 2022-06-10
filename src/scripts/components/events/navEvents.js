import { getVocab } from '../../../api/cardData';
import addVocabForm from '../forms/addCard';
import { showVocabCards } from '../pages/vocabCards';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('logo')) {
      getVocab(uid).then((vocabArray) => {
        showVocabCards(vocabArray);
      });
    }

    if (e.target.id.includes('add--word')) {
      addVocabForm(uid);
    }
  });
};

export default navEvents;
