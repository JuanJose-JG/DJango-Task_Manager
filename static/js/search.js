var searchBar = document.getElementById("searchBar");
var searchList = document.getElementById("searchList");
var noResults = document.getElementById("noResults");

document.addEventListener('click', e => {
    if (!searchList.contains(e.target)) {
        searchList.classList.add('hidden')
    }
});

document.addEventListener("keyup", e => {

    if (searchBar.value.length){

        searchList.classList.remove('hidden');

        document.querySelectorAll(".tasks").forEach(task => {

            task.textContent.toLocaleLowerCase().includes(e.target.value.toLowerCase().trim())
            ?task.classList.remove("hidden")
            :task.classList.add("hidden")
        })
        
        if (searchList.querySelectorAll('.hidden').length >= searchList.querySelectorAll('li').length) {
            noResults.classList.remove('hide')
        } else {
            noResults.classList.add('hide')
        }
    }

});