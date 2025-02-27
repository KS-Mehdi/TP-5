import Book from "../models/book.js";

const booksController = {
    async createBook(req, reply) {
        try {
            const book = new Book(req.body);
            await book.save();
            reply.code(201).send(book);
        } catch (error) {
            reply.code(400).send(error);
        }
    },

    async getAllBooks(req, reply) {
        try {
            const books = await Book.find();
            reply.send(books);
        } catch (error) {
            reply.code(500).send(error);
        }
    },

    async getBookById(req, reply) {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) return reply.code(404).send({ message: "Livre non trouvé" });
            reply.send(book);
        } catch (error) {
            reply.code(500).send(error);
        }
    },

    async updateBook(req, reply) {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!book) return reply.code(404).send({ message: "Livre non trouvé" });
            reply.send(book);
        } catch (error) {
            reply.code(400).send(error);
        }
    },

    async deleteBook(req, reply) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) return reply.code(404).send({ message: "Livre non trouvé" });
            reply.send({ message: "Livre supprimé avec succès" });
        } catch (error) {
            reply.code(500).send(error);
        }
    }
};

export default booksController;
