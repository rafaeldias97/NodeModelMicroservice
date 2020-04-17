const generate = async (Kafka) => {
    const admin = Kafka.admin()

    await admin.connect()
    await admin.createTopics({
        topics: [
            { topic: 'ORCHESTRATOR' },
            { topic: 'CREATE_CUSTOMER' },
            { topic: 'EXECUTE_CREATE_CUSTOMER' },
            { topic: 'CREATE_CUSTOMER_COMPLETED' },
            { topic: 'EXECUTE_CREATE_ACCOUNT' },
            { topic: 'CREATE_ACCOUNT_COMPLETED' },
            { topic: 'CREATE_CUSTOMER_CONCLUDED' }
        ],
    })
    await admin.disconnect()
}

module.exports = {
    generate
}