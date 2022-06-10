import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No vocabulary words have been added</h1>';
  renderToDOM('#cards', domString);
};

const showVocabCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add--btn">Add A Vocabulary Word</button>';

  renderToDOM('#add-button', btnString);

  const filterBtnString = `<button type="button" class="btn btn-primary btn-lg" id="html">HTML</button>
    <button type="button" class="btn btn-primary btn-lg" id="css">CSS</button>
    <button type="button" class="btn btn-primary btn-lg" id="javascript">JavaScript</button>
    <button type="button" class="btn btn-primary btn-lg"id="python">Python</button>
    <button type="button" class="btn btn-primary btn-lg"id="all">All</button>`;

  renderToDOM('#filter-buttons', filterBtnString);

  if (array.length) {
    let domString = '';
    array.forEach((word) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">${word.title}</h3>
        <p class="card-text"><b>Definition:</b> ${word.definition}</p>
        <p class="card-text"><b>Language/Tech:</b> ${word.language}</p>
        <i class="btn btn-success fas fa-eye" id="view-word--${word.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="edit-word--${word.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-word-btn--${word.firebaseKey}"></i>
      </div>
    </div>`;
    });
    renderToDOM('#cards', domString);
  } else {
    emptyVocab();
  }
};

export { emptyVocab, showVocabCards };
