import { request } from 'graphql-request'

export const execQuery = (query, params) => {
  return request('https://api.inhji.de/graphql', query, params)
}
