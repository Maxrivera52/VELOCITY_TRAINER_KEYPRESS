export default class BtnPlay {
    constructor() {
        this.btnPlay = document.getElementById('btnPlay');
    }
    onClick() {
        this.btnPlay.onclick = () => console.log('que am');
    }
}