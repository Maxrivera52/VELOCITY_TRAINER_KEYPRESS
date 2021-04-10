import View from './view.js';
import Model from './model.js';
document.addEventListener('DOMContentLoaded', () => {
    console.log('running');
    const view = new View();
    const model = new Model();
    view.setModel(model);
    model.setView(view);

});