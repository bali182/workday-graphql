import { GraphQLInterfaceType, GraphQLString, GraphQLID } from 'graphql'

export default new GraphQLInterfaceType({
  name: 'BusinessObject',
  fields: {
    id: {
      type: GraphQLID,
    },
    descriptor: {
      type: GraphQLString
    },
    href: {
      type: GraphQLString
    },
  }
})
