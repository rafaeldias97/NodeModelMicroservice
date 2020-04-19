const { Kafka, logLevel } = require('kafkajs')
const Publisher = require('../boot/Publisher')
const kafka = new Kafka({
  clientId: 'orchestrator',
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR,
})

const resolvers = {
  Query: {
    getCustommers: (parent, args) => {
      return [
        {
          id: '',
          status: true,
          fullName: 'rafael dias dasdj a sd',
          accountId: 'fadsjfhsdkfhasjfhadsj'
        }
      ]
    },
    getCustommer: (parent, args) => {
      console.log(args.id)
      return {
        id: '',
        status: true,
        fullName: 'rafael dias dasdj a sd',
        accountId: 'fadsjfhsdkfhasjfhadsj'
      }
    }
  },
  Mutation: {
    addCustommer: (parent, args) => {
      message = {
        topic: 'CREATE_CUSTOMER',
        data: args
      }
      Publisher({ 
        kafka: kafka,
        topic: 'ORCHESTRATOR',
        value: JSON.stringify(message)
      })
      return args
    },
    updateCustommer: (parent, args) => {
      if (!args.id) return;
      return ''
    },
    deleteCustommer: (parent, args) => {
      if (!args.id) return;
      return ''
    }
  }
}

module.exports = resolvers