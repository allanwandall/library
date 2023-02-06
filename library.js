let myLibrary = [];

const bookContainer = document.querySelector(".book-container");



const addBtn = document.querySelector(".add-book");
addBtn.addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");
    formContainer.style.display = "block";
});

const formBtn = document.getElementById("form-button");
formBtn.addEventListener("click", () => {
    const bookName = document.getElementById('book-name').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookRead = document.getElementById('book-read').checked;

    myLibrary.push(new Book(bookName, bookAuthor, bookRead));
    const formContainer = document.querySelector(".form-container");
    formContainer.style.display = "none";
    document.getElementById('book-name').value = "";
    document.getElementById('book-author').value = "";
    displayBooks();
});


function displayBooks() {
    const allCards = document.querySelectorAll(".book");
    allCards.forEach((card) => {
        card.remove();
    });

    myLibrary.forEach(book => {

        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.classList.add("book");

        const bookName1 = document.createElement("h3");
        bookName1.textContent = "Book name:";
        newCard.appendChild(bookName1);

        const bookName2 = document.createElement("h2");
        bookName2.textContent = book.name;
        newCard.appendChild(bookName2);

        const authorName1 = document.createElement("h3");
        authorName1.textContent = "Author name:";
        newCard.appendChild(authorName1);
        
        const authorName2 = document.createElement("h2");
        authorName2.textContent = book.author;
        newCard.appendChild(authorName2);

        const readBtn = document.createElement("button");
        readBtn.type = "button";
        if (book.read) {
            readBtn.textContent = "Read";
            readBtn.style.backgroundColor = "lightgreen";
        } else {
            readBtn.textContent = "Not Read";
            readBtn.style.backgroundColor = "rgb(255,114,118)";
        }
        readBtn.addEventListener("click", () => {
            book.read = !book.read;
            console.log(book.read);
            if (book.read) {
                readBtn.textContent = "Read";
                readBtn.style.backgroundColor = "lightgreen";
            } else {
                readBtn.textContent = "Not Read";
                readBtn.style.backgroundColor = "rgb(255,114,118)";
        }});
        newCard.appendChild(readBtn);


        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "Remove Book";
        removeBtn.style.backgroundColor = "lightgrey";
        removeBtn.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            newCard.remove();
        })
        newCard.appendChild(removeBtn);

        bookContainer.insertBefore(newCard, addBtn);
    });
}

function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
}