import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLList } from 'graphql'
import LocationType from './location'
import HistoryType from './history'
import BusinessTitleChangeType from './businessTitleChange'
import OrganizationType from './organization'
import PrimarySupervisoryOrganizationType from './primarySupervisoryOrganization'
import BusinessObjectType from './businessObject'

import resolveBusinessTitleChanges from '../resolvers/businessTitleChanges'
import historyResolver from '../resolvers/history'
import organizationsResolver from '../resolvers/organizations'

export default new GraphQLObjectType({
  name: 'Worker',
  interfaces: [BusinessObjectType],
  fields: () => ({
    // Properties present in the base 
    id: {
      type: GraphQLID,
    },
    descriptor: {
      type: GraphQLString
    },
    href: {
      type: GraphQLString,
      deprecationReason: 'This is a deprecation message'
    },
    isManager: {
      type: GraphQLBoolean,
    },
    primaryWorkEmail: {
      type: GraphQLString,
    },
    businessTitle: {
      type: GraphQLString,
    },
    primaryWorkPhone: {
      type: GraphQLString
    },

    // Can be resolved from /workers/:id
    location: {
      type: LocationType
    },
    primaryWorkAddressText: {
      type: GraphQLString
    },
    yearsOfService: {
      type: GraphQLInt
    },
    primarySupervisoryOrganization: {
      type: PrimarySupervisoryOrganizationType
    },

    // Resolved externally
    businessTitleChanges: {
      type: new GraphQLList(BusinessTitleChangeType),
      resolve: resolveBusinessTitleChanges
    },
    history: {
      type: new GraphQLList(HistoryType),
      resolve: historyResolver
    },
    organizations: {
      type: new GraphQLList(OrganizationType),
      resolve: organizationsResolver
    }
  }),
  isTypeOf() {
    return true // TODO proper type classification
  },
})
