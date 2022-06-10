import { getVocab } from '../../../api/cardData';
import logoutButton from '../buttons/logoutButton';
import domBuilder from '../domBuilder';
import navBar from '../buttons/navBar';
import { showVocabCards } from '../pages/vocabCards';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();

  getVocab(user.uid).then((vocabArray) => showVocabCards(vocabArray));
};

export default startApp;
