import NodeCache from 'node-cache'

import { ONE_DAY } from '../../../constants'

class MemoryCacheService {
  private _cache = new NodeCache()

  set = (key: string, value: any, ttl = ONE_DAY) => {
    return this._cache.set(key, value, ttl)
  }

  get = (key: string) => {
    return this._cache.get(key)
  }

  take = (key: string) => {
    return this._cache.take(key)
  }

  del = (key: string) => {
    return this._cache.del(key)
  }

  flush = () => {
    return this._cache.flushAll()
  }
}

export const memoryCacheService = new MemoryCacheService()
