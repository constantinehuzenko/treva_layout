let tab = document.getElementById('tab01')
let tab01__body = document.querySelector('.icon01__body')
let tab01__symbol = document.querySelector('.icon01__symbol')


tab.addEventListener('click', function () {
    tab.classList.toggle('select');
    tab01__body.classList.toggle('select');
    tab01__symbol.classList.toggle('select');
});