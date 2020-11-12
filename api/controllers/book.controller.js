const Book = require("../../models/book.model.js");

module.exports.index = async (req, res) => {
  var q = req.query.q;
  var books = await Book.find({});

  if (!q) {
    res.json(books);
  } else {
    books.filter((book) => {
      return book.title.indexOf(q) >= 0;
    });
    res.json(books);
  }
};
