const mongoose = require('mongoose');

mongoose.connect("your_connection_string", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;


