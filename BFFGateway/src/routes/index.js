const custommerController = require('./CustommerController')
const { gql } = require('apollo-server-express')

module.exports = gql`
    ${custommerController}
`
