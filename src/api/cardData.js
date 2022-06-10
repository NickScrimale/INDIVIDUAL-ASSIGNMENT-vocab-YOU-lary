import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getVocab = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Create vocab cards
const createVocab = (vocabObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, vocabObj).then((response) => {
    const payload = { firebaseKey: response.data.name };
    axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, payload)
      .then(() => {
        getVocab(uid).then((vocabArray) => resolve(vocabArray));
      });
  }).catch((error) => reject(error));
});

// Delete cards
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Update cards
const updateVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getVocab(vocabObj)).then(resolve)
    .catch(reject);
});

const GetSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getVocab,
  createVocab,
  GetSingleVocab,
  deleteVocab,
  updateVocab
};
