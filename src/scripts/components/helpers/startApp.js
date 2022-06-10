import { getVocab } from '../../../api/cardData';
import logoutButton from '../buttons/logoutButton';
import domBuilder from '../domBuilder';
import navBar from '../buttons/navBar';
import { showVocabCards } from '../pages/vocabCards';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  navEvents(user.uid);
  logoutButton();

  getVocab(user.uid).then((vocabArray) => showVocabCards(vocabArray));
};

export default startApp;
