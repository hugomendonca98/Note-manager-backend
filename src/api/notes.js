const restful = require("node-restful");
const mongoose = restful.mongoose;



const notesSchema = new mongoose.Schema({
  title: { type: String, required: false, default: '' },
  content: { type: String, required: false, default: '' },
  color: { type: String, required: false, default: 'white' },
  marker: { type: String, require: false, default: false },
  createdAt: { type: Date, default:  Date.now },
});

module.exports = restful.model("Notes", notesSchema);
