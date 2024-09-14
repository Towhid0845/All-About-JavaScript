const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// access data using id
// const book = getBook(3);
// console.log(book);

const books = getBooks();
// console.log(books);

/*--------------------
 🔥Destructure 🔥
---------------------*/
// Old Way of Object destructuring
// const title = book.title;
// const author = book.author;
// console.log(author, title);

// New Way of Object Destructuring
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// console.log(author, title, genres);

// Old way of Array destructuring
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// console.log(`${primaryGenra}, ${secondaryGenra}`);

// New way of Array Destructuring and use of spread operator
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = ["epic fantasy", ...genres];
// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   // Adding a new property
//   moviePublicationDate: "2001-12-19",

//   // Overwriting an existing property
//   pages: 1210,
// };
// console.log(updatedBook);

/*--------------------
 🔥Arrow Function 🔥
---------------------*/
// old way
// function getYear(str) {
//   return str.split("-")[0];
// }

// new way
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

/*----------------------
 🔥Template Lateral 🔥
-----------------------*/
// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
//   publicationDate.split("-")[0]
// }. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
//   publicationDate
// )}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
// console.log(summary);

// const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
// console.log(pagesRange);
// console.log(`The book has ${pagesRange} pages`);

/*----------------------
 🔥Short Circuiting 🔥
-----------------------*/
// It is kind of 'if condition'.
// if first parameter is 'true' then it will execute second parameter.
// if first parameter is 'false' then it will not execute second parameter. It will execute 'false'.
// console.log(true && "Some string");
// console.log(false && "Some string"); //short circuiting
// console.log(hasMovieAdaptation && "This book has a movie");

// falsy value in JS: 0, '', null, undefined
// Truthy value: a value which is not falsy
// console.log("jonas" && "Some string");
// console.log(0 && "Some string");

// using || (or) operator
// console.log(true || "Some string");  //short circuiting
// console.log(false || "Some string");

// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// console.log(spanishTranslation);

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// console.log(countWrong);
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// console.log(count);

/*----------------------
 🔥Optional Chaining 🔥
-----------------------*/
// syntax: '?.'
// If u r are not sure about the data that u r trying to access is exit or not, then you can use optional chaining.
// It Ignore's the non existing data and results an undefined.
// function getTotalReviewCount(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   // const librarything = book.reviews?.librarything?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   console.log(librarything);
//   return goodreads + librarything;
// }

// console.log(getTotalReviewCount(book));

/*-----------------
 🔥Map Method 🔥
-----------------*/
// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// console.log(titles);

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   librarything;
//   return goodreads + librarything;
// }
// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviewCount(book),
// }));
// console.log(essentialData);

/*-------------------
 🔥Filter Method 🔥
-------------------*/
// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooksWithMovie);

// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((book) => book.title);
// console.log(adventureBooks);

/*-------------------
 🔥 🔥
-------------------*/
// const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// pagesAllBooks;

// const arr = [3, 7, 1, 9, 6];
// const sorted = arr.slice().sort((a, b) => a - b);
// sorted;
// arr;

// const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
// sortedByPages;

// // 1) Add book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// // 2) Delete book object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// // 3) Update book object in the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );
// booksAfterUpdate;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

//   async function getTodos() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     console.log(data);

//     return data;
//   }

//   const todos = getTodos();
//   console.log(todos);

//   console.log("jonas");
