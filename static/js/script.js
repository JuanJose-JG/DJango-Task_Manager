const menuToggle = document.getElementById("toggle");

menuToggle.addEventListener('click', function() {

    const menu = document.getElementById('toggle-menu');
    const buttonBars = document.getElementById('icon-bars');
    const buttonTimes = document.getElementById('icon-xmark');

    menu.classList.toggle('top-0');

    buttonBars.classList.toggle('hidden');
    buttonTimes.classList.toggle('hidden');

});