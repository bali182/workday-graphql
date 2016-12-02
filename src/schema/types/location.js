import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

export default new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: {
      type: GraphQLID,
    },
    descriptor: {
      type: GraphQLString
    }
  }
})
