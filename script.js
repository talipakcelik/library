"use strict";
//// DOM
const textArea = document.querySelectorAll("textarea");
const textAreaTitle = document.getElementById("title");
const textAreaAuthor = document.getElementById("author");
const textAreaPage = document.getElementById("page");
const buttonSubmit = document.querySelector("#submit");
const buttonNew = document.querySelector(".new-book");
const library = document.querySelector(".container");
const catalogContainer = document.querySelector(".books-container");
const overlay = document.querySelector(".overlay");
const readBox = document.getElementById("read");

let myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.id = self.crypto.randomUUID();
//   this.read = read;
// }
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = self.crypto.randomUUID();
    this.read = read;
  }
}

function addBookToLibrary() {
  const title = textAreaTitle.value;
  const author = textAreaAuthor.value;
  const page = textAreaPage.value;
  const read = readBox.checked;
  //
  const book1 = new Book(title, author, page, read);
  myLibrary.push(book1);
}

buttonSubmit.addEventListener("click", function (e) {
  if (textAreaTitle.value.length > 0 && textAreaAuthor.value.length > 0) {
    addBookToLibrary();
    loopBooks();
    newCard();
    textAreaTitle.value = "";
    textAreaAuthor.value = "";
    textAreaPage.value = "";
  }
});

let catalog = "";
let idTag = "";
let readCheck;

const loopBooks = function () {
  const values = Object.values(myLibrary);

  for (const { title, author, pages, id, read } of values) {
    catalog = `<em>${title}</em> <br> ${author} <br> ${pages}`;
    idTag = id;
    if (read === true) readCheck = "Read";
    else readCheck = "Not read";
  }
};

const newCard = function () {
  catalogContainer.innerHTML += `<div class="books"> <div class="text">${catalog}</div>
  <ion-icon name="trash-outline" data-id="${idTag}" class="delete-icon"></ion-icon>
  <button id="${idTag}" class="${readBox.checked}">${readCheck}</button></div>`;
};

catalogContainer.addEventListener("click", function (e) {
  if (e.target.getAttribute("data-id")) {
    e.target.parentElement.remove();
    myLibrary = myLibrary.filter(function (el) {
      return el.id !== e.target.getAttribute("data-id");
    });
    console.log(myLibrary);
  }
  if (
    e.target.classList.contains("true") ||
    e.target.classList.contains("false")
  ) {
    e.target.classList.toggle("toggle");
    const findBook = myLibrary.find(function (el) {
      return el.id === e.target.getAttribute("id");
    });
    findBook.toggle();
    if (e.target.textContent === "Read") {
      e.target.textContent = "Not read";
    } else {
      e.target.textContent = "Read";
    }
  }
});

Book.prototype.toggle = function () {
  if (this.read === true) this.read = false;
  else this.read = true;
};

//// overlay and transition
buttonNew.addEventListener("click", function () {
  const modal = document.querySelector(buttonNew.dataset.modalTarget);
  openModal(modal);
});

const openModal = function (modal) {
  if (modal === null) return;
  library.classList.add("active");
  overlay.classList.add("active");
};

overlay.addEventListener("click", function () {
  library.classList.remove("active");
  overlay.classList.remove("active");
});
