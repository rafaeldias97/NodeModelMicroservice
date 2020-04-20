const { Kafka, logLevel } = require('kafkajs');
// const transactions = require('./transactions');
const createCustommer = require('./src/queue/createCustommer');
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:MongoDB2019!@localhost', { useNewUrlParser: true });
const db = mongoose.connection;

const kafka = new Kafka({
    clientId: 'custommer-service',
    brokers: ['localhost:9092'],
    logLevel: logLevel.ERROR,
});

db.on('open', () => {
    createCustommer.setKafka(kafka).run();
});

db.on('error', console.error.bind(console, 'connection error:'));

// Gera os topicos
// topicGenerator.generate(kafka)
//     .then(async () => {
        
//         console.log('Aplicação rodando');
//     })
