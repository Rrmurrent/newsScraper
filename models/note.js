var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema ({
    // date: Date,
    articleId: String,
    body: String
},{ 
    timestamps: true
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;