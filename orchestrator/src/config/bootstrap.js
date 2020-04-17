const transactions = require('../transactions');

const start = async (kafka) => {
    const consumer = kafka.consumer({ groupId: 'transaction' });

    await consumer.connect();
    await consumer.subscribe({ topic: 'ORCHESTRATOR', fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log('topic: ', topic);
            console.log('partition: ', partition);
            console.log('message: ', JSON.parse(message.value.toString()));
            transactions(JSON.parse(message.value.toString()), kafka);
        },
    });
    return true;
    // await consumer.disconnect();
}

module.exports = { start }