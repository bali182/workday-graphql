import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

export default new GraphQLObjectType({
  name: 'OrganizationType',
  fields: {
    id: {
      type: GraphQLID,
    },
    descriptor: {
      type: GraphQLString
    }
  }
})
