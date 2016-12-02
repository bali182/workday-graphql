import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

import HistorySubjectType from './historySubject'
import BusinessObjectType from './businessObject.js'

export default new GraphQLObjectType({
  name: 'History',
  interfaces: [BusinessObjectType],
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    descriptor: {
      type: GraphQLString,
    },
    href: {
      type: GraphQLString
    },
    due: {
      type: GraphQLString,
    },
    effective: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString
    },
    subject: {
      type: HistorySubjectType
    },
    initiator: {
      type: BusinessObjectType
    }
  }),
  isTypeOf() {
    return true // TODO proper type classification
  },
})
