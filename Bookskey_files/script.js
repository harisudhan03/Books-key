function deletecontainer(event) {
    event.target.parentElement.remove();
}

// selecting add button,popupoverlay,popupbox
var addbutton = document.querySelector(".popup button")
var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popupbox")

addbutton.addEventListener("click", function (event) {

    popupoverlay.style.display = "block";
    popupbox.style.display = "block";

})

var cancelbutton = document.getElementById("cancelbutton")

cancelbutton.addEventListener("click", function (event) {
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})


// selecting container bookname inputbookname inputauthorname inputtextbook

var container = document.querySelector(".container")
var addbook = document.getElementById("addbook")
var inputbookname = document.getElementById("inputbookname")
var inputauthorname = document.getElementById("inputauthorname")
var inputtextbook = document.getElementById("inputtextbook")

addbook.addEventListener("click", function (event) {

    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${inputbookname.value}</h2> <h5> ${inputauthorname.value}</h5>
            <p>${inputtextbook.value}</p>
         <button onclick="deletecontainer(event)"> Delete </button>`
    container.append(div)
    inputbookname.value = ""
    inputauthorname.value = ""
    inputtextbook.value = ""
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

})







