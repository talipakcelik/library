"use strict";

//// DOM
const textArea = document.querySelectorAll("textarea");
const textAreaTitle = document.getElementById("title");
const textAreaAuthor = document.getElementById("author");
const textAreaPage = document.getElementById("page");
const buttonSubmit = document.querySelector(".submit");
const buttonNew = document.querySelector(".new");
const library = document.querySelector(".books-container");
const catalogContainer = document.querySelector(".books-container");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // this.read = read;
}

function addBookToLibrary() {
  const title = textAreaTitle.value;
  const author = textAreaAuthor.value;
  const page = Number(textAreaPage.value);

  const book1 = new Book(title, author, page);
  console.log(book1);
  myLibrary.push(book1);
}

const pusu = new Book("Pusu", "Janka", "215", "okundu");

buttonSubmit.addEventListener("click", function () {
  addBookToLibrary();
  loopBooks();
  newCard();
});

let catalog = "";

const loopBooks = function () {
  const values = Object.values(myLibrary);

  for (const { title, author, pages } of values) {
    catalog = `${title} ${author} ${pages}`;
  }
};

const newCard = function () {
  const div = document.createElement("div");
  catalogContainer.appendChild(div);
  div.textContent = catalog;
};
