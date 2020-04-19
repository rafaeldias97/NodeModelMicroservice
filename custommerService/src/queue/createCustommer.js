const createCustommerService = require('../services/createCustommerService')
let _kafka
class CreateCustommer {
  constructor() {

  }
  setKafka(kafka) {
    _kafka = kafka
    return new CreateCustommer()
  }
  async run() {
    const consumer = _kafka.consumer({ groupId: 'createCustommer' })
    await consumer.connect()
    await consumer.subscribe({ topic: 'EXECUTE_CREATE_CUSTOMER', fromBeginning: true })
    console.log('escutando EXECUTE_CREATE_CUSTOMER')
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        let msg = JSON.parse(message.value.toString());
        // console.log('topic: ', topic)
        // console.log('partition: ', partition)
        console.log('message: ', msg)
        try {
          await createCustommerService(msg)
        } catch (e) {
          console.log('ocorreu um erro', e)
        }
      },
    })
  }
}

module.exports = new CreateCustommer()