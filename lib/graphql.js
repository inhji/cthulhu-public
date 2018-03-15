import { request } from 'graphql-request'

export const execQuery = (query, params) => {
  return request(process.env.PUBLIC_URL + '/api/graphql', query, params)
}
