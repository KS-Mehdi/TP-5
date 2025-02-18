const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    auteur: { type: String, required: true },
    description: { type: String },
    format: { 
        type: String, 
        enum: ["poche", "manga", "audio", "roman"], 
        default: "poche" 
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
