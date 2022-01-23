# Introduction
- This project is completed with [TheOdinProject's instructions](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library). 
- [Live Preview](https://talipakcelik.github.io/library/)
- Read this and detailed walkthrough summary in [Turkish](https://github.com/talipakcelik/library/blob/main/README.tr.md).
- **Note**: The following articles may contain spoilers about the content of the project.

## Key Point Summary
```js
const loopBooks = function () {
  const values = Object.values(myLibrary);

  for (const { title, author, pages, id, read } of values) {
  // removed
  }
};
```
- Thanks to [Object.values()](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Object/values), I was able to access the values of the objects pushed to the `mYLibrary` array.
  - similar: [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) and [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
  - also: [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - relating to code: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
---
- Thanks to [Crypto.randomUUID()](https://devdocs.io/dom/crypto/randomuuid), I was able to create unique id number for each book(*instead of dealing with array index*) It's kind of `static` method[^1]. 
  - e.g. `Book {title: 'The Hobbit', author: 'J.R.R Tolkien', pages: '310', id: 'a82abe3c-7a86-4ed7-adaf-b3ac2b108119', read: true}`
---
- Whenever I typed the required information for book and click the submit button, everything on the screen disappeared. This is because of the default behavior of the html `form` element: refreshing page[^2]
  - solution is `unsubmit`: `<form name="formname" onsubmit="return false">`[^3]

[^1]: TOP discord: @tobyPlaysTheUke={...snowmonkey}
[^2]: https://stackoverflow.com/questions/63509328/understanding-html-form-element-behavior
[^3]: https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
---
## Thoughts on refactoring 
- books with cover photo
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- store books as tables, not cards
