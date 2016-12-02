import axios from 'axios'

export default function httpEndpoint({endpoint, tenant, accessToken, timeout}) {
  return axios.create({
    baseURL: `https://${endpoint}/ccx/api/v1/${tenant}/`,
    timeout: timeout || 1000,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}
