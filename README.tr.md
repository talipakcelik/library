# Giriş
- Bu proje [TheOdinProject'in yönergeleriyle](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library) tamamlanmıştır.
- [Önizleme](https://talipakcelik.github.io/library/)
- Not: Aşağıdaki başlıklar projenin içeriği hakkında spoiler içermektedir. 

## Bu projede fark ettiğim kilit noktalar
```js
const loopBooks = function () {
  const values = Object.values(myLibrary);

  for (const { title, author, pages, id, read } of values) {
  // removed
  }
};
```
- [Object.values()](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Object/values) sayesinde `myLibrary` array'ine *push*ladığım kitapların object değerlerine (*values*) ulaşabildim. 
  - benzer olarak: [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) ve [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
  - döngü sürecindeki object dışarı çıkarıp, depolayabilmek için: [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 
  - daha kullanışlı `for` döngüsü: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
---
- [Crypto.randomUUID()](https://devdocs.io/dom/crypto/randomuuid)[^1] sayesinde her bir kitap için, kitabın kendisine özgü bir id numarası oluşturabildim. Böylece array index numarası ile uğraşmak zorunda kalmadım, index no 0'dan başladığı için ayrı bir zorluk.
  - örneğin: `Book {title: 'The Hobbit', author: 'J.R.R Tolkien', pages: '310', id: 'a82abe3c-7a86-4ed7-adaf-b3ac2b108119', read: true}`

---
- Kitaplar için gerekli bilgilerin girildiği pop-up/modal için `form` elementini kullanmıştım. Form elementinin meğerse *default* davranışı mevcutmuş. Gönder butonuna tıklar tıklamaz ekrandaki her şey siliniyordu. Sebebi form elementinin gönder butonua aracılığıyla sayfayı yenileme davranışı.[^2]
  - çözüm: `unsubmit`: `<form name="formname" onsubmit="return false">`[^3]
---
## *Refactoring* fikirleri  
- kitaplara, kitapların kapak resmi de eklenebilir. 
- kullanıcının tercihlerini saklama: [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- ufak kartlar yerine bir tablo şeklinde UI üzerinde düzenleme yapma

[^1]: TOP discord: @tobyPlaysTheUke={...snowmonkey}
[^2]: https://stackoverflow.com/questions/63509328/understanding-html-form-element-behavior
[^3]: https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
