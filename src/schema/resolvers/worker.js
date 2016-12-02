const workerResolver = (parent, { id }, { endpoint }) => endpoint.get(`/workers/${id}`)
  .then(response => response.data)

export default workerResolver
