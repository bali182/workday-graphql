import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GraphQLIncludeDirective, GraphQLSkipDirective } from 'graphql/type/directives'

import worker from './queries/worker'
import workers from './queries/workers'
import currencies from './queries/currencies'

import limit from './directives/limit'
import offset from './directives/offset'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      worker,
      workers,
      currencies
    },
  }),
  directives: [limit, offset, GraphQLIncludeDirective, GraphQLSkipDirective]
})
