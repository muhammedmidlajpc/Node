let books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 5, title: "Moby Dick", author: "Herman Melville" }
];
const express = require("express");
const app = express();
try {
  app.use(express.json());
  app.post("/books", (request, response) => {
    books.push(request.body);
    console.log(books);
  });
  app.get("/books", (request, response) => {
    response.json({ books });
  });
  app.get("/books/:id", (request, response) => {
    const bookId = Number(request.params.id);
    const selectedbook = books.find((element) => {
      return element.id === bookId;
    });
    response.json({ selectedbook });
  });
  app.put("/books/:id", (request, response) => {
    const bookId = Number(request.params.id);
    const modification = request.body;
    const book = books.find((b) => {
      return b.id === bookId;
    });
    if (book) {
      const nb=books.map((book)=>{
        if (book.id===bookId) {
          book=modification
        }
        return book
      })
      books=nb
      response.json({message:"updated",data:books})
    }
  });
  app.delete("/books/:id", (request, response) => {
    const bookId = Number(request.params.id);
    const newBooks = books.filter((element) => {
      return element.id !== bookId;
    });
    response.json({ newBooks });
  });
  app.listen(4000, (err) => {
    console.log("server is running");
  });
} catch (error) {
  console.log(error);
}
