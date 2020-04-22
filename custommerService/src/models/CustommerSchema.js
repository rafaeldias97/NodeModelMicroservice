const mongoose = require('mongoose');

const CustommerSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    status: String,
    fullName: String,
    userLogin: String,
    userPassword: String
});

module.exports = mongoose.model('Custommer', CustommerSchema);