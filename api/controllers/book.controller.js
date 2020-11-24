const Book = require("../../models/book.model.js");

module.exports.index = async (req, res) => {
  var q = req.query.q;
  var books = await Book.find({});
  
  res.header("Access-Control-Allow-Origin", "*");
  
  if (!q) {
    res.json(books);
  } else {
    let filterBooks = await books.filter((book) => {
      return book.title.indexOf(q) >= 0;
    });
    res.json(filterBooks);
  }
};
