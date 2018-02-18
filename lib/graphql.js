import { request } from 'graphql-request'

export const execQuery = query => {
  return request('https://api.inhji.de/graphql', query)
}
