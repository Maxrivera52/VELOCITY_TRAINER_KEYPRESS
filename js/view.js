//window.addEventListener('keydown', (event) => { window.alert('event') });
export default class View {
    constructor() {
        this.model = null;
        this.startSt = false;
        this.numberGame = 0;

        const btn = document.getElementById('button_press');
        btn.onclick = () => {
            btn.style.cssText = "transition:background 1s; background-color:#777;"
        }
        this.btnPlay = document.getElementById('btnPlay');
        this.btnPlay.onclick = () => this.initCount();
        this.clear = document.getElementById('clear');
        this.clear.onclick = () => this.clearScore();
        this.playing = false;

    }

    getScores() {
        return this.model.getScore();
    }

    playAudio() {
        var audio = document.getElementById('audio');
        this.playing = true;
        if (this.playing == true) {
            audio.fastSeek(0);
        }
        audio.play();
        this.playing == false;
    }

    //render-view
    render() {
        const scores = this.sortScore();
        scores.forEach(obj => { this.createRow(obj) });
    }

    setModel(model) {
        this.model = model;
    }

    toggleDisplay() {
        const display = document.getElementById('display_time');
        display.classList.toggle('invisible');
    }

    initCount() {
        //const pointer = document.getElementById('pointer');
        let second = 10;
        if (this.startSt == false) {
            this.startSt = true;
            let secondLenght = second;
            this.numberGame += 1;
            const scoreTxt = document.getElementById('score');
            const btnPress = document.getElementById('button_press');
            let keys = 0;
            window.addEventListener('keydown', write);
            window.addEventListener('keyup', sizec);

            function sizec() {
                scoreTxt.style.fontSize = "20px";
                btnPress.style.cssText = 'heigth: 150px;width: 150px;';
            }

            function write() {
                keys += 1;
                //
                var audio = document.getElementById('audio');
                this.playing = true;
                if (this.playing == true) {
                    //audio.fastSeek(0.01);
                    audio.pause();
                }
                audio.play();
                this.playing == false;
                //
                scoreTxt.innerHTML = keys;
                scoreTxt.style.fontSize = "30px";
                btnPress.style.cssText = 'height: 200px;width: 200px;';
                //
            }
            this.toggleDisplay();

            var timer = setInterval(() => {
                second -= 1;
                const time = document.getElementById('time');
                time.innerHTML = second;
                if (second == 1) {
                    window.removeEventListener('keydown', write);
                    clearInterval(timer);
                    this.startSt = false;
                    this.toggleDisplay();
                    this.addScore(secondLenght, keys);
                    this.clearScreen();
                    this.render();
                }
            }, 1000);
        } else {
            console.log('nothing')
        }
    }
    save(scoreO) {
        this.model.save(scoreO);
    }

    sortScore() {
        const scores = this.getScores();

        function sortData(data, key, orden) {
            return data.sort(function(a, b) {
                var x = a[key],
                    y = b[key];

                if (orden === 'asc') {
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                }

                if (orden === 'desc') {
                    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                }
            });
        }
        const scores_sort = sortData(scores, 'keysNum', 'desc');
        return scores_sort;
    }

    addScore(secondL, keys) {
        let result = (keys / secondL).toFixed(2)
        let scoreO = {
            id: null,
            seconds: secondL,
            keysNum: keys,
            result: result
        }
        this.save(scoreO);
    }

    clearScore() {
        this.clearScreen();
        this.model.clearScore();
    }

    clearScreen() {
        const scores = this.getScores();
        for (let i = 0; i < scores.length; i++) {
            var row = document.getElementById((i + 1));
            if (!row) {
                break;
            }
            row.remove();
        };
    }

    createRow(scoreO) {
        const table = document.getElementById('table')
        let long = table.rows.length - 1;
        const row = table.insertRow();
        row.setAttribute('id', long);
        row.innerHTML = `
        <td>${long}</td>
        <td>${scoreO.seconds}s</td>
        <td>${scoreO.keysNum}</td>
        <td>${scoreO.result}ps</td>`;
    }
}