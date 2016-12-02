import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import OrganizationTypeType from './organizationType'
import BusinessObjectType from './businessObject'

export default new GraphQLObjectType({
  name: 'Organization',
  interfaces: [BusinessObjectType],
  fields: {
    id: {
      type: GraphQLID,
    },
    descriptor: {
      type: GraphQLString
    },
    href: {
      type: GraphQLString,
    },
    organizationType: {
      type: OrganizationTypeType
    }
  },
  isTypeOf() {
    return true // TODO proper type classification
  },
})
