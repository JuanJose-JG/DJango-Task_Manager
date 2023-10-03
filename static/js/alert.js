const deleteButton = document.getElementById("deleteButton");
        const background = document.getElementById("background");
        const alert = document.getElementById("alert");
        const cancel = document.getElementById("cancel");
        alert.classList.add('hidden')
    
        deleteButton.addEventListener('click', function() {
            background.classList.remove('hidden');
            alert.classList.remove('hidden');
        });

        cancel.addEventListener('click', function() {
            background.classList.add('hidden');
            alert.classList.add('hidden');
        });