"use strict";

//// DOM
const textArea = document.querySelectorAll("textarea");
const button = document.querySelector("button");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
  };
  return console.log(this.info());
}

function addBookToLibrary() {}

const pusu = new Book("Pusu", "Janka", "215", "okundu");
