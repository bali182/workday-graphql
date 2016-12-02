import { buildParams } from './utils'

const businessTitleChangesResolver = ({ id }, args, { endpoint }, ast) =>
  endpoint.get(`/workers/${id}/businessTitleChanges`, { params: buildParams(ast) })
    .then(response => response.data.data)

export default businessTitleChangesResolver
