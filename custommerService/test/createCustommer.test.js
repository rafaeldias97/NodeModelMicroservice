const createCustommerService = require('../src/services/createCustommerService');
const mongoose = require('mongoose');
const Custommer = require('../src/models/CustommerSchema')

beforeAll(async () => {
    const url = `mongodb://root:MongoDB2019!@localhost`
    await mongoose.connect(url, { useNewUrlParser: true })
})
it('Create Custommer Service', async () => {
    try {
        await createCustommerService({ data: { name: 'Rafael' } })
    } catch(e) {
        throw new Error(e.message)
    }
})

afterEach(async () => {
    await Custommer.deleteMany()
})