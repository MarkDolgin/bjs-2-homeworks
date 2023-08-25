//Задача №1.
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    }
    if (state > 100) {
      this._state = 100;
    }
    this._state = state;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
    this.author = author;
  }
}

//Задача №2.

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findResult = this.books.find((item) => item[type] === value);
    return findResult || null;
  }
  
  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
   if (!book) return null;
    this.books = this.books.filter((item) => item.name !== bookName);
    return book;
  }
}
//Задача №3.
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (this.marks[subject] === undefined) {
      this.marks[subject] = [];
    }
    return this.marks[subject].push[mark];
  }
  
  getAverageBySubject(subject) {
    if (!(subject in this.marks)) {
      return 0;
    }
    let avg =
      this.marks[subject].reduce((acc, mark) => acc + mark, 0) /
      this.marks[subject].length;
    return avg;
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    let avg = 0;
    for (let sub of subjects) {
      let subAvg = this.getAverageBySubject(sub);
      avg += subAvg;
    }
    return avg / subjects.length;
  }
}
