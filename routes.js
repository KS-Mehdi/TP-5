import booksController from "./controllers/booksController.js";
import { allBooksSchema, bookSchema, responseSchema } from "./schemas/bookSchema.js";

async function routes(fastify, options) {
    fastify.get("/", async (req, reply) => {
        return { message: "Bienvenue sur l'API Albums !" };
    });

    fastify.post("/books", { schema: { body: bookSchema.body, response: responseSchema } }, booksController.createBook);
    fastify.get("/books", { schema: { response: allBooksSchema } }, booksController.getAllBooks);
    fastify.get("/books/:id", { schema: { response: responseSchema } }, booksController.getBookById);
    fastify.put("/books/:id", { schema: { body: bookSchema.body, response: responseSchema } }, booksController.updateBook);
    fastify.delete("/books/:id", booksController.deleteBook);
}

export default routes;
