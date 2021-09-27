const mongoose = require("mongoose");
const { Schema } = mongoose;

const vaccineSchema = new Schema({
  vaccineName: String,
  batchNo: Number,
  stock: Number,
  //primary key and forieng key
  /*  author: {each book will be written by 1 guy 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  }, */
});

//create model
const Vaccine = mongoose.model("Vaccine", vaccineSchema);

//ADD NEW VACC

const addNewVaccine = function (data, callback) {
  const vaccine = new Vaccine(data);
  vaccine.save(function (error, result) {
    if (error) {
      console.error("Error Occured while adding new vaccine", error.message);
      return callback(error);
    }
    return callback(null, result);
  });
};

module.exports = {
  addNewVaccine,
};

/* //IS BOOK AVAILABLE
const isBookAvailable = function (bookId, callback) {
  Book.findOne(bookId)
    .select("stock")
    .exec(function (error, result) {
      if (error) {
        return callback(error);
      }
      const availability = result.stock > 0 ? true : false;
      return callback(null, availability);
    });
};

//deleteBook
const deleteBook = function (bookId, callback) {
  Book.findByIdAndDelete(bookId, function (error, result) {
    if (error) {
      console.error("Error Occured while deleting a Book", error.message);
      return callback(error);
    }
    return callback(null, result);
  });
};
*/
