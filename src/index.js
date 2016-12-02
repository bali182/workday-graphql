import express from 'express'
import bodyParser from 'body-parser'
import expressGraphql from 'express-graphql'
import { maskErrors } from 'graphql-errors'

import config from '../config.json'
import httpEndpoint from './httpEndpoint'
import schema from './schema'

maskErrors(schema)

const endpoint = httpEndpoint(config)

const app = express()

app.use('/graphql', bodyParser.json(), expressGraphql({
  schema,
  context: {
    endpoint,
  },
  graphiql: true
}))

app.listen(8080, () => console.log('GraphQL server is running'))
