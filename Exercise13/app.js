var content = document.getElementById("content")

document.getElementById("btnAddBlue").addEventListener("click", function(){
    content.classList.add("blue");
});

document.getElementById("btnRemoveBlue").addEventListener("click", function(){
    content.classList.remove("blue");
});

document.getElementById("btnToggleBlue").addEventListener("click", function(){
    content.classList.toggle("blue");
});

document.getElementById("btnAddTheme").addEventListener("click", function(){
    content.classList.add("theme");
});

document.getElementById("btnRemoveTheme").addEventListener("click", function(){
    content.classList.remove("theme");
});

document.getElementById("btnToggleTheme").addEventListener("click", function(){
    content.classList.toggle("theme");
});