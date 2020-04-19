const generateAccount = require('./generateAccount');

module.exports = (kafka, message) => {
    switch (message.topic) {
        case 'CREATE_CUSTOMER':
            generateAccount(message, kafka);
            break;

        default:
            break;
    }
}
