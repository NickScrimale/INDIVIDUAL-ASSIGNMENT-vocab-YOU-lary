import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const viewSingleWord = (obj) => {
  clearDom();
  const domString = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">${obj.title}</h3>
        <p class="card-text"><b>Definition:</b> ${obj.definition}</p>
        <p class="card-text"><b>Language/Tech:</b> ${obj.language}</p>
        <i class="fas fa-edit btn btn-info" id="edit-word--${obj.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-word-btn--${obj.firebaseKey}"></i>
      </div>
    </div>`;
  renderToDOM('#cards', domString);
};

export default viewSingleWord;
