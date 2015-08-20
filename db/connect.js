var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/nodecontactapp');
module.exports = mongoose;