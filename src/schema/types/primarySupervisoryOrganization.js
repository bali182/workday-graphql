import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import BusinessObjectType from './businessObject'

export default new GraphQLObjectType({
  name: 'PrimarySupervisoryOrganization',
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
  },
  isTypeOf() {
    return true // TODO proper type classification
  }
})
