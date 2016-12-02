import { DirectiveLocation, GraphQLDirective } from 'graphql/type/directives'
import { GraphQLNonNull, GraphQLInt } from 'graphql'

const offset = new GraphQLDirective({
  name: 'offset',
  description: 'Drops the first n elements of a List typed field',
  locations: [
    DirectiveLocation.FIELD
  ],
  args: {
    n: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The amount of elements to drop'
    }
  },
})

export default offset
