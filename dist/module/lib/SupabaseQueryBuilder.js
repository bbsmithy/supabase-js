import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
import { SupabaseRealtimeClient } from './SupabaseRealtimeClient'
export class SupabaseQueryBuilder extends PostgrestQueryBuilder {
  constructor(url, { headers = {}, schema, realtime, table, fetch, shouldThrowOnError }) {
    super(url, { headers, schema, fetch, shouldThrowOnError })
    this._subscription = null
    this._realtime = realtime
    this._headers = headers
    this._schema = schema
    this._table = table
  }
  /**
   * Subscribe to realtime changes in your database.
   * @param event The database event which you would like to receive updates for, or you can use the special wildcard `*` to listen to all changes.
   * @param callback A callback that will handle the payload that is sent whenever your database changes.
   */
  on(event, callback) {
    if (!this._realtime.isConnected()) {
      this._realtime.connect()
    }
    if (!this._subscription) {
      this._subscription = new SupabaseRealtimeClient(
        this._realtime,
        this._headers,
        this._schema,
        this._table
      )
    }
    return this._subscription.on(event, callback)
  }
}
//# sourceMappingURL=SupabaseQueryBuilder.js.map
