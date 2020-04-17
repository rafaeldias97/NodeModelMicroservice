const { Kafka, logLevel } = require('kafkajs');
const topicGenerator = require('./boot/topicGenerator');
const transactions = require('./transactions');

const kafka = new Kafka({
    clientId: 'orchestrator',
    brokers: ['localhost:9092'],
    logLevel: logLevel.ERROR,
});

// Gera os topicos
topicGenerator.generate(kafka)
    .then(async () => {
        const consumer = kafka.consumer({ groupId: 'transaction' })
        await consumer.connect()
        await consumer.subscribe({ topic: 'ORCHESTRATOR', fromBeginning: true })
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                let msg = JSON.parse(message.value.toString());
                console.log('topic: ', topic)
                console.log('partition: ', partition)
                console.log('message: ', msg)
                transactions(kafka, msg)
            },
        })
        console.log('Aplicação rodando');
    })
