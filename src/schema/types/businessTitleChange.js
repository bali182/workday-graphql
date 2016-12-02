import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import BusinessObjectType from './businessObject'

export default new GraphQLObjectType({
  name: 'BusinessTitleChange',
  interfaces: [BusinessObjectType],
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
    proposedBusinessTitle: {
      type: GraphQLString
    },
    currentBusinessTitle: {
      type: GraphQLString
    },
  },
  isTypeOf() {
    return true // TODO proper type classification
  }
})
