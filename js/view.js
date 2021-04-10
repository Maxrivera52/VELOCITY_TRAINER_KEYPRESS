//window.addEventListener('keydown', (event) => { window.alert('event') });

export default class View {
    constructor() {
        this.model = null;
        this.startSt = false;
        this.numberGame = 0;
        const btn = document.getElementById('button_press');
        btn.onclick = () => {
            btn.style.background = "red";
            btn.style.cssText = 'height:40px'
        }
        this.btnPlay = document.getElementById('btnPlay');
        this.btnPlay.onclick = () => this.initCount();


    }

    //render-view

    setModel(model) {
        this.model = model;
    }

    toggleDisplay() {
        const display = document.getElementById('display_time');
        display.classList.toggle('invisible');
        console.log('changing');
    }

    initCount() {
        let second = 2;
        if (this.startSt == false) {
            this.startSt = true;
            let secondLenght = second;
            this.numberGame += 1;
            const scoreTxt = document.getElementById('score');
            let score = 0;
            window.addEventListener('keydown', write);

            function write() {
                score += 1;
                scoreTxt.innerHTML = score
            }
            this.toggleDisplay();

            var timer = setInterval(() => {
                second -= 1;
                const time = document.getElementById('time');
                time.innerHTML = second;
                if (second == 1) {
                    window.removeEventListener('keydown', write);
                    clearInterval(timer);
                    console.log('¿' + second)
                    this.startSt = false;
                    this.toggleDisplay();
                    this.addScore(secondLenght, score);
                }

            }, 1000);
        } else {
            this.toggleDisplay();
            console.log('nothing')
        }
    }
    save(scoreO) {
        this.model.save(scoreO);
    }

    addScore(secondL, score) {
        let result = (score / secondL).toFixed(2)
        let scoreO = {
            id: null,
            seconds: secondL,
            keysNum: score,
            result: result
        }

        this.createRow(scoreO);
        this.save(scoreO);
    }

    createRow(scoreO) {
        const row = table.insertRow();
        row.setAttribute('id', this.numberGame + 1);
        row.innerHTML = `
        <td>${this.numberGame}</td>
        <td>${scoreO.seconds}s</td>
        <td>${scoreO.keysNum}</td>
        <td>${scoreO.result}ps</td>`;

    }
}