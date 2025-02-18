const booksController = require("./controllers/booksController.js");

async function routes(fastify, options) {
    fastify.post("/books", booksController.createBook);
    fastify.get("/books", booksController.getAllBooks);
    fastify.get("/books/:id", booksController.getBookById);
    fastify.put("/books/:id", booksController.updateBook);
    fastify.delete("/books/:id", booksController.deleteBook);
}

module.exports = routes;
