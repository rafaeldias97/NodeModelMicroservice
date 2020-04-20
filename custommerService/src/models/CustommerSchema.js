const mongoose = require('mongoose');

const CustommerSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    status: String,
    fullName: String,
    accountId: String,
    userLogin: String,
    userPassword: String,
    error: Object
});

module.exports = mongoose.model('Custommer', CustommerSchema);