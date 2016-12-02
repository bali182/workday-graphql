import { buildParams } from './utils'

const organizationResolver = ({ id }, args, { endpoint }, ast) =>
  endpoint.get(`/workers/${id}/organizations`, {params: buildParams(ast)})
    .then(response => response.data.data)

export default organizationResolver
