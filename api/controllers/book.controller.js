const Book = require("../../models/book.model.js");

const tools = require("../../tools/page.tool.js");

module.exports.index = async (req, res) => {
  var q = req.query.q;
  var books = await Book.find({});

  if (!q) {
    res.json(books);
  } else {
    books.filter((book) => {return book.title.indexOf(q);});
    res.json(books);
  }
};
