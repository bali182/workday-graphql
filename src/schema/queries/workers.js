import { GraphQLList } from 'graphql'

import WorkerType from '../types/worker'
import workersResolver from '../resolvers/workers'

export default {
  type: new GraphQLList(WorkerType),
  resolve: workersResolver,
  description: `Fetches all Workers. You can limit or offset the results 
  using the @limit and @offset directives`
}
