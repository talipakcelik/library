"use strict";
//// DOM
const textArea = document.querySelectorAll("textarea");
const textAreaTitle = document.getElementById("title");
const textAreaAuthor = document.getElementById("author");
const textAreaPage = document.getElementById("page");
const buttonSubmit = document.querySelector(".submit");
const buttonNew = document.querySelector(".new");
const library = document.querySelector(".container");
const catalogContainer = document.querySelector(".books-container");
const overlay = document.querySelector(".overlay");
const readBox = document.getElementById("read");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = self.crypto.randomUUID();
  this.read = read;
}

function addBookToLibrary() {
  const title = textAreaTitle.value;
  const author = textAreaAuthor.value;
  const page = textAreaPage.value;
  const read = readBox.checked;

  const book1 = new Book(title, author, page, read);
  myLibrary.push(book1);
}

buttonSubmit.addEventListener("click", function () {
  addBookToLibrary();
  loopBooks();
  newCard();
});

let catalog = "";
let idTag = "";
let readB;

const loopBooks = function () {
  const values = Object.values(myLibrary);

  for (const { title, author, pages, id, read } of values) {
    catalog = `${title} ${author} ${pages}`;
    idTag = id;
    readB = read;
  }
};

const newCard = function () {
  catalogContainer.innerHTML += `<div> <div>${catalog}</div> 
  <button data-id="${idTag}">Delete</button> 
  <button class="check">${readB}</button> </div>`;
};

catalogContainer.addEventListener("click", function (e) {
  if (e.target.getAttribute("data-id")) {
    e.target.parentElement.remove();
    myLibrary = myLibrary.filter(function (el) {
      return el.id !== e.target.getAttribute("data-id");
    });
    console.log(myLibrary);
  }
  if (e.target.classList.contains("check")) {
    if (readB === true) {
      readB = false;
      e.target.textContent = "Not read";
    } else {
      e.target.textContent = "Read";
      readB = true;
    }
  }
});

readBox.addEventListener("change", function () {
  if (readBox.checked) {
  }
});

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
