const { Kafka, logLevel } = require('kafkajs');
const topicGenerator = require('./config/topicGenerator');
const bootstrap = require('./config/bootstrap');

const kafka = new Kafka({
    clientId: 'orchestrator',
    brokers: ['localhost:9092'],
    logLevel: logLevel.ERROR,
});

// Gera os topicos
// topicGenerator.generate(kafka);

// Inicia escuta de transações
bootstrap.start(kafka).then((res) => console.log('aplicação rodando', res));
