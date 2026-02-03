const Author = require('../models/Author');
const Book = require('../models/Book');


exports.createAuthor = async (req, res) => {
const author = await Author.create(req.body);
res.status(201).json(author);
};


exports.getAllAuthors = async (req, res) => {
const authors = await Author.find();
res.json(authors);
};


exports.getAuthorWithBooks = async (req, res) => {
const author = await Author.findById(req.params.id);
const books = await Book.find({ author: req.params.id });
res.json({ author, books });
};

exports.updateAuthor = async (req, res) => {
const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(author);
};


exports.deleteAuthor = async (req, res) => {
await Author.findByIdAndDelete(req.params.id);
await Book.deleteMany({ author: req.params.id });
res.json({ message: 'Author and books deleted' });
};