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
  this.id = self.crypto.randomUUID();
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
let idTag = "";

const loopBooks = function () {
  const values = Object.values(myLibrary);

  for (const { title, author, pages, id } of values) {
    catalog = `${title} ${author} ${pages}`;
    idTag = id;
  }
  ///
};

const newCard = function () {
  catalogContainer.innerHTML += `<div> <div>${catalog}</div> <button data-id="${idTag}">Delete</button> </div>`;
  // const div = document.createElement("div");
  // catalogContainer.appendChild(div);
  // div.textContent = catalog;
  ///
  // const button = document.createElement("button");
  // div.appendChild(button);
  // button.classList.add("delete");
  // button.textContent = "Delete";
  /// data attribute
  // button.setAttribute("data-index", `${idTag}`);
};

catalogContainer.addEventListener("click", function (e) {
  if (e.target.getAttribute("data-id")) {
    console.log(e.target.parentElement.children);
    myLibrary = myLibrary.filter(function (el) {
      return el.id !== e.target.getAttribute("data-id");
    });
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

let uuid = self.crypto.randomUUID();
