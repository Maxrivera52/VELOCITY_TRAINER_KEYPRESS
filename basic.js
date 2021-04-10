//window.addEventListener('keydown', (event) => { window.alert('event') });
const btn = document.getElementById('button_press');
btn.onclick = () => {
    btn.style.background = "red";
    btn.style.cssText = 'height:40px'
}

let startSt = false;
let numberGame = 0;

function initCount() {
    let second = 10;
    if (startSt == false) {
        startSt = true;
        secondLenght = second;
        numberGame += 1;
        const scoreTxt = document.getElementById('score');
        let score = 0;
        window.addEventListener('keydown', write);

        function write() {
            score += 1;
            scoreTxt.innerHTML = score
        }
        const display = document.getElementById('display_time');
        display.classList.toggle('invisible');
        const time = document.getElementById('time');
        var timer = setInterval(() => {
            if (second == 1) {
                window.removeEventListener('keydown', write);
                clearInterval(timer);
                console.log('¿' + second)
                startSt = false;
                display.classList.toggle('invisible');
                createRow(numberGame, secondLenght, score);
            }
            second -= 1;
            time.innerHTML = second;
        }, 1000)
    } else {

    }

}

function viewScore() {

}

function createRow(numberGame, secondL, score) {
    const row = table.insertRow();
    row.setAttribute('id', numberGame + 1);
    row.innerHTML = `
    <td>${numberGame}</td>
    <td>${secondL}s</td>
    <td>${score}</td>
    <td>${(score*6/60).toFixed(2)}ps</td>`;
}