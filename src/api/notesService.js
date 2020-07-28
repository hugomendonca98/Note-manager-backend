const Notes = require("./notes");

Notes.methods(["get", "post", "put", "delete"]);
Notes.updateOptions({ new: true, runValidation: true });

module.exports = Notes;
