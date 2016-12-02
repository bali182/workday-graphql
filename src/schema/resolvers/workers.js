import { buildParams } from './utils'


const workersResolver = (parent, args, { endpoint }, ast) => endpoint.get(`/workers`, { params: buildParams(ast) })
  .then(response => response.data.data.map(worker => worker.id))
  .then(ids => Promise.all(ids.map(id => endpoint.get(`/workers/${id}`))))
  .then(responses => responses.map(response => response.data))

export default workersResolver
