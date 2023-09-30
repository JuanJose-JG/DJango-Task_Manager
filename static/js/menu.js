const menuToggle1 = document.getElementById("toggle-1");
const menuToggle2 = document.getElementById("toggle-2");

menuToggle1.addEventListener('click', function() {

    const menu = document.getElementById('toggle-menu');
    const background = document.getElementById('div-background');
    menu.classList.add('left-0');
    background.classList.remove('hidden');

});

menuToggle2.addEventListener('click', function() {

    const menu = document.getElementById('toggle-menu');
    const background = document.getElementById('div-background');
    menu.classList.remove('left-0');
    background.classList.add('hidden');
});