const send = async ({ kafka, topic, value}) => {
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: topic,
        messages: [{ value: value }]
    })
    
    await producer.disconnect()
}

module.exports = send