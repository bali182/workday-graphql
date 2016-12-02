import { buildParams } from './utils'

export default (parent, args, { endpoint }, ast) => endpoint.get(`/currencies`, { params: buildParams(ast) })
  .then(response => response.data.data)
