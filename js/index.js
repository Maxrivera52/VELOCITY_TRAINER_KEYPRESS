import View from './view.js';
import Model from './model.js';
document.addEventListener('DOMContentLoader', () => {
    const view = new View();
    const model = new Model();
    view.setModel(model);

});