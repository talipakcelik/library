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
  myLibrary.push(book1);
}

const pusu = new Book("Pusu", "Janka", "215", "okundu");

buttonSubmit.addEventListener("click", function () {
  addBookToLibrary();
  loopBooks();
  newCard();
});

let catalog = "";
let index = "";

const loopBooks = function () {
  const entries = Object.entries(myLibrary);
  ///
  for (const [item, { title, author, pages }] of entries) {
    catalog = `${title} ${author} ${pages}`;
    index = item;
  }
};

const newCard = function () {
  const div = document.createElement("div");
  catalogContainer.appendChild(div);
  div.textContent = catalog;
  ///
  const button = document.createElement("button");
  div.appendChild(button);
  button.classList.add("delete");
  button.textContent = "Delete";
  /// data attribute
  button.setAttribute("data-index", `${Number(index)}`);
};

catalogContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    index--;
    myLibrary.splice(e.target.getAttribute("data-index"), 1);
    e.target.parentNode.remove();
    console.log(myLibrary);
  }
});

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
