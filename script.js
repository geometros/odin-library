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
    let bookHeader = document.querySelector('.headers')
    bookTable.replaceChildren(bookHeader)
    for (let i=0;i<myLibrary.length;i++) {
        const newRow = document.createElement('tr');
        ['title','author','length','readStatus'].forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = myLibrary[i][key];
            newRow.appendChild(cell)
        })
        delButton = document.createElement('button')
        delButton.textContent = 'Remove'
        delButton.classList.add('delete')
        delButton.id = `${i}` 
        buttonCell = document.createElement('td')
        buttonCell.appendChild(delButton)
        newRow.appendChild(buttonCell)
        bookTable.appendChild(newRow)
    }

    const removeBook = document.getElementsByClassName('delete');
    [...removeBook].forEach((button) => {
        button.addEventListener('click', function(){
        myLibrary.splice(button.id,1)
        displayMyLibrary()
    })
})
    
}

const addBook = document.querySelector('#add');
const bookForm = document.querySelector('form');

addBook.addEventListener('click', () => {
  bookForm.classList.remove('hidden')
})

const confirmBook = document.querySelector('#submit');
let newBookForm = document.getElementById('newBookForm');

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let length = document.getElementById('pages');
    let readStatus = document.getElementById('readStatus');
    if (title.value == "" || author.value == "" || length.value == "") { //would be nice to add a check that length is a nonzero integer
        //return some sort of error message to the user
    }
    else {
        if (readStatus.checked == false){readStatus.value = 'No';}
        else {readStatus.value = 'Yes';}
        addBookToLibrary(title.value,author.value,length.value,readStatus.value)
        displayMyLibrary()
    }
})

addBookToLibrary('Illiad','Homer','968','No')
addBookToLibrary('Moby-Dick','Herman Melville','635','Yes')
displayMyLibrary()



