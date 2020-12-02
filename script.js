let myLibrary = [];
let testBook;

// Get things
let modal = document.getElementById("myModal");
let newBtn = document.getElementById("newBtn");
let closeSpan = document.getElementsByClassName("close")[0];
const submitBtn = document.querySelector('#submit');

// Book constructor
function Book(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
}

// Functions
function addBook() {
    testBook = new Book(bookTitle, author, pages, read);
    myLibrary.push(testBook);
    generateLibrary();
}

function generateLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        window.alert(myLibrary[i]);
    }
}

// Event listeners and such
newBtn.onclick = function () {
    modal.style.display = "block";
}

closeSpan.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add book when Submit button is clicked
submitBtn.addEventListener('click', addBook());

