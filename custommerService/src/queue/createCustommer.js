const createCustommerService = require('../services/createCustommerService');
let _kafka;
class CreateCustommer {
  constructor() {
    this.run = this.run.bind(this);
  }
  setKafka(kafka) {
    _kafka = kafka;
    return new CreateCustommer();
  }
  async run() {
    const consumer = _kafka.consumer({ groupId: 'createCustommer' });
    await consumer.connect();
    await consumer.subscribe({ topic: 'EXECUTE_CREATE_CUSTOMER', fromBeginning: true });
    console.log('escutando EXECUTE_CREATE_CUSTOMER');
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        let msg = JSON.parse(message.value.toString());
        try {
          let res = await createCustommerService(msg);
          console.log(message.value.toString())
          await this.send({
            topic: 'ORCHESTRATOR',
            value: JSON.stringify({ 
              topic: 'CREATE_CUSTOMER',
              type: 'CREATE_CUSTOMER_COMPLETED',
              data: { 
                id: res._id 
              } 
            })
          })
        } catch (e) {
          console.log('ocorreu um erro', e);
        }
      }
    });
  }
  async send ({ topic, value }){
    const producer = _kafka.producer()
  
    await producer.connect()
    await producer.send({
        topic: topic,
        messages: [{ value: value }]
    })
    
    await producer.disconnect()
  }
}

module.exports = new CreateCustommer()