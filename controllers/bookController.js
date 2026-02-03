const Book = require('../models/Book');


exports.createBook = async (req, res) => {
const book = await Book.create(req.body);
res.status(201).json(book);
};


exports.getAllBooks = async (req, res) => {
const books = await Book.find().populate('author');
res.json(books);
};


exports.getSingleBook = async (req, res) => {
const book = await Book.findById(req.params.id).populate('author');
res.json(book);
};


exports.updateBook = async (req, res) => {
const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(book);
};

exports.deleteBook = async (req, res) => {
await Book.findByIdAndDelete(req.params.id);
res.json({ message: 'Book deleted' });
};