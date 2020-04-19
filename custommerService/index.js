const { Kafka, logLevel } = require('kafkajs');
// const transactions = require('./transactions');
const createCustommer = require('./src/queue/createCustommer');

const kafka = new Kafka({
    clientId: 'custommer-service',
    brokers: ['localhost:9092'],
    logLevel: logLevel.ERROR,
});

createCustommer.setKafka(kafka).run();

// Gera os topicos
// topicGenerator.generate(kafka)
//     .then(async () => {
        
//         console.log('Aplicação rodando');
//     })
