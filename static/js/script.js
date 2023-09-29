const menuToggle = document.getElementById("toggle");

menuToggle.addEventListener('click', function() {

    const menu = document.getElementById('toggle-menu');
    const buttonBars = document.getElementById('icon-bars');
    const buttonTimes = document.getElementById('icon-xmark');

    menu.classList.toggle('left-0');

    buttonBars.classList.toggle('hidden');
    buttonTimes.classList.toggle('hidden');

});