//import View from './view.js';

export default class Model {
    constructor() {
        this.scores = JSON.parse(localStorage.getItem('scores'));
        this.view = null;
        if (!this.scores || this.scores.length < 1) {
            this.scores = [{
                id: 0,
                seconds: 10,
                keysNum: 198,
                result: 19.8
            }, ];
            console.log(this.scores);
            console.log(this.scores[this.scores.length - 1].id);
            this.currenId = 1;
        } else {
            this.currenId = this.scores[this.scores.length - 1].id + 1;
            console.log(this.scores[this.scores.length - 1].id)
        }
    }

    setView(view) {
        this.view = view;
    }

    save(score) {
        //console.log('currnt:' + this.currenId);
        //console.log('currntVER:' + this.scores[this.scores.length].id);
        score.id = this.currenId++;
        //console.log(score);
        this.scores.push(score);
        localStorage.setItem('scores', JSON.stringify(this.scores));
        //console.log(localStorage);
        //console.log(this.scores);
    }
}