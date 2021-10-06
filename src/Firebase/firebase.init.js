import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initiallizeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initiallizeAuthentication;
