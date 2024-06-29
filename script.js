const myLibrary = [];

function Book(title,author,length,readStatus) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.readStatus = readStatus;
}

function addBookToLibrary(title,author,length,readStatus) {
    const newBook = new Book(title,author,length,readStatus);
    myLibrary.push(newBook)
}

function displayMyLibrary() {
    let bookTable = document.querySelector('table');
    for (let i=0;i<myLibrary.length;i++) {
        const newRow = document.createElement('tr');
        ['title','author','length','readStatus'].forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = myLibrary[i][key];
            newRow.appendChild(cell)
        })
        bookTable.appendChild(newRow)
    }
    
}

const addBook = document.querySelector('#add');
const bookForm = document.querySelector('form');

addBook.addEventListener('click', () => {
  bookForm.classList.remove('hidden');
});

addBookToLibrary('Illiad','Homer','968','No');
addBookToLibrary('Moby-Dick','Herman Melville','635','Yes')
displayMyLibrary();

