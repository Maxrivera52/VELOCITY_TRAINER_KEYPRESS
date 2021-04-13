export default class Model {
    constructor() {
        this.scores = JSON.parse(localStorage.getItem('scores'));
        this.view = null;
        if (!this.scores || this.scores.length < 1) {
            this.scores = [];
            this.currenId = 1;
        } else {
            this.currenId = this.scores[this.scores.length - 1].id + 1;
        }
    }

    setView(view) {
        this.view = view;
    }

    getScore() {
        return [...this.scores];
    }

    save(score) {
        score.id = this.currenId++;
        this.scores.push(score);
        localStorage.setItem('scores', JSON.stringify(this.scores));
    }

    clearScore() {
        localStorage.clear();
        this.scores.length = 0;
    }
}