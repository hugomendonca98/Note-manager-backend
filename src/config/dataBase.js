const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://localhost/NotesManager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
