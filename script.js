let myLibrary = [];
const bookContainer = document.getElementById("book-covers");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if (read !== "read") {
        read = "not yet read";
    }
}

Book.prototype.info = function () {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
}

const book1 = new Book("Poop is in Me", "Rory Liberty", 420, "currently reading");

book1.info();

function makeCovers(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        const newDiv = document.createElement("div");
        bookContainer.appendChild(newDiv);
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("newBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}