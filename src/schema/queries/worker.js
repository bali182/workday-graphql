import WorkerType from '../types/worker'
import workerResolver from '../resolvers/worker'
import { GraphQLID, GraphQLNonNull } from 'graphql'

export default {
  type: WorkerType,
  resolve: workerResolver,
  description: 'Fetches a Worker with the given ID',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
}
