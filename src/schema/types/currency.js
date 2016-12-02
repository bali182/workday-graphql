import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from 'graphql'
import BusinessObjectType from './businessObject'

export default new GraphQLObjectType({
  name: 'Currency',
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
    code: {
      type: GraphQLString
    },
    precision: {
      type: GraphQLInt
    }
  },
  isTypeOf() {
    return true // TODO proper type classification
  },
})
