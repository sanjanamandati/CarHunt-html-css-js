var Menubtn = document.querySelector(".menubtn")
var sidebar = document.querySelector(".sidebar")
var sidebarclose = document.querySelector(".sidebarclose")
var navbar=document.querySelector(".navbar")
//open sidebar
Menubtn.addEventListener("click", function () {
sidebar.style.left="0"
navbar.style.display="none"
});

//close sidebar
sidebarclose.addEventListener("click", function (){
sidebar.style.left="-60%"
navbar.style.display="flex"
});

//searching

var imagesearch = document.querySelectorAll(".image");
var search = document.querySelector("#search");

search.addEventListener("keyup", function (event) {
    var searchInput = event.target.value.toUpperCase();

    for (var i = 0; i < imagesearch.length; i++) {
        var cvalue = imagesearch[i]
            .querySelector("p")
            .textContent
            .toUpperCase();

        if (cvalue.includes(searchInput)) {
            imagesearch[i].style.display = "block";
        } else {
            imagesearch[i].style.display = "none";
        }
    }
});

