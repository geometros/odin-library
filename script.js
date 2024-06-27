const myLibrary = [];

function Book(title,author,length,readStatus) {
  this.title = title;
  this.author = author;
  this.readStatus = readStatus;
  this.length = length;
}

function addBookToLibrary(title,author,length,readStatus) {
    newBook = new Book(title,author,length,readStatus);
    myLibrary.push(newBook)
}
