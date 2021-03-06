const Publisher = require('../boot/Publisher')
module.exports = (message, kafka) => {
    switch (message.type) {
        case "CREATE_CUSTOMER":
            Publisher({
                kafka: kafka,
                topic: 'EXECUTE_CREATE_CUSTOMER',
                value: JSON.stringify(message.data)
            });
            break;
        case "CREATE_CUSTOMER_COMPLETED":
            Publisher({
                kafka: kafka,
                topic: 'EXECUTE_CREATE_ACCOUNT',
                value: JSON.stringify(message.data)
            });
            break;
        case "CREATE_ACCOUNT_COMPLETED":
            console.log(message.data)
            Publisher({ 
                kafka: kafka,
                topic: 'CREATE_CUSTOMER_CONCLUDED',
                value: JSON.stringify(message.data)
            });
            break;
        default:
            break
    }
}
