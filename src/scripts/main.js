// USE WITH FIREBASE AUTH
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import checkLoginStatus from './components/helpers/auth/auth';

const init = () => {
  checkLoginStatus();
};

init();
