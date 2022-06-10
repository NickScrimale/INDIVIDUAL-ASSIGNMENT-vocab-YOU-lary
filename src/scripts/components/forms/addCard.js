import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = ` <form id=${
    obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'
  }>
      <div class="mb-3">
      <label for="" class="form-label">Title</label>
      <input type="text" id="title" class="form-control" placeholder="Enter a word or phrase" value="${
  obj.title || ''
}"required>
      </div>
      <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Definition</label>
      <input type="text" id="definition" class="form-control" placeholder="Enter a definition or description" value="${
  obj.definition || ''
}"required>
      </div>
      <div class="form-floating">
        <select class="form-select" id="language">
        <option selected>Open this select menu</option>
        <option value="Javascript">Javascript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Python">Python</option>
        </select>
        <label for="floatingSelect">Language/Tech</label>
      </div>
      <div id="submit-btn">
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};
export default addVocabForm;
