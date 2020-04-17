const generateAccount = require('./generateAccount')
module.exports = (message, kafka) => {
    switch(message.topic) {
        case 'CREATE_CUSTOMER':
            generateAccount(message, kafka);
            break;
        
        default:
            break;
    }
}