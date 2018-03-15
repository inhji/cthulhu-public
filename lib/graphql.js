import { request } from 'graphql-request'

export const execQuery = (query, params) => {
  return request(`https://inhji.de/api/graphql`, query, params)
}
