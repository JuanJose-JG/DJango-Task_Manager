const deleteButton = document.getElementById("deleteButton"),
    overlay = document.getElementById("overlay"),
    modal = document.getElementById("modal"),
    cancel = document.getElementById("cancel");

deleteButton.addEventListener('click', function() {
    overlay.classList.remove('invisible');
    modal.classList.remove('opacity-0')
    modal.classList.remove('scale-50')
});

cancel.addEventListener('click', function() {
    overlay.classList.add('invisible');
    modal.classList.add('opacity-0');
    modal.classList.add('scale-50');
});