import { buildParams } from './utils'

const historyResolver = ({ id }, args, { endpoint }, ast) =>
  endpoint.get(`/workers/${id}/history`, { params: buildParams(ast) })
    .then(response => response.data.data)


export default historyResolver
