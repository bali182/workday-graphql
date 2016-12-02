import { DirectiveLocation, GraphQLDirective } from 'graphql/type/directives'
import { GraphQLNonNull, GraphQLInt } from 'graphql'

const limit = new GraphQLDirective({
  name: 'limit',
  description: 'Limits the result set of a List typed query',
  locations: [
    DirectiveLocation.FIELD
  ],
  args: {
    n: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The maximum amount of elements to be returned'
    }
  },
})

export default limit
