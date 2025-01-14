'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
const constants_1 = require('./lib/constants')
const helpers_1 = require('./lib/helpers')
const SupabaseAuthClient_1 = require('./lib/SupabaseAuthClient')
const SupabaseQueryBuilder_1 = require('./lib/SupabaseQueryBuilder')
const storage_js_1 = require('@supabase/storage-js')
const functions_js_1 = require('@supabase/functions-js')
const postgrest_js_1 = require('@supabase/postgrest-js')
const realtime_js_1 = require('@supabase/realtime-js')
const DEFAULT_OPTIONS = {
  schema: 'public',
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  multiTab: true,
  headers: constants_1.DEFAULT_HEADERS,
}
/**
 * Supabase Client.
 *
 * An isomorphic Javascript client for interacting with Postgres.
 */
class SupabaseClient {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.headers Any additional headers to send with each network request.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.multiTab Set to "false" if you want to disable multi-tab/window events.
   * @param options.fetch A custom fetch implementation.
   */
  constructor(supabaseUrl, supabaseKey, options) {
    this.supabaseUrl = supabaseUrl
    this.supabaseKey = supabaseKey
    if (!supabaseUrl) throw new Error('supabaseUrl is required.')
    if (!supabaseKey) throw new Error('supabaseKey is required.')
    const _supabaseUrl = (0, helpers_1.stripTrailingSlash)(supabaseUrl)
    const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options)
    this.restUrl = `${_supabaseUrl}/rest/v1`
    this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace('http', 'ws')
    this.authUrl = `${_supabaseUrl}/auth/v1`
    this.storageUrl = `${_supabaseUrl}/storage/v1`
    const isPlatform = _supabaseUrl.match(/(supabase\.co)|(supabase\.in)/)
    if (isPlatform) {
      const urlParts = _supabaseUrl.split('.')
      this.functionsUrl = `${urlParts[0]}.functions.${urlParts[1]}.${urlParts[2]}`
    } else {
      this.functionsUrl = `${_supabaseUrl}/functions/v1`
    }
    this.schema = settings.schema
    this.multiTab = settings.multiTab
    this.fetch = settings.fetch
    this.headers = Object.assign(
      Object.assign({}, constants_1.DEFAULT_HEADERS),
      options === null || options === void 0 ? void 0 : options.headers
    )
    this.shouldThrowOnError = settings.shouldThrowOnError || false
    this.auth = this._initSupabaseAuthClient(settings)
    this.realtime = this._initRealtimeClient(
      Object.assign({ headers: this.headers }, settings.realtime)
    )
    this._listenForAuthEvents()
    this._listenForMultiTabEvents()
    // In the future we might allow the user to pass in a logger to receive these events.
    // this.realtime.onOpen(() => console.log('OPEN'))
    // this.realtime.onClose(() => console.log('CLOSED'))
    // this.realtime.onError((e: Error) => console.log('Socket error', e))
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new functions_js_1.FunctionsClient(this.functionsUrl, {
      headers: this._getAuthHeaders(),
      customFetch: this.fetch,
    })
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new storage_js_1.SupabaseStorageClient(
      this.storageUrl,
      this._getAuthHeaders(),
      this.fetch
    )
  }
  /**
   * Perform a table operation.
   *
   * @param table The table name to operate on.
   */
  from(table) {
    const url = `${this.restUrl}/${table}`
    return new SupabaseQueryBuilder_1.SupabaseQueryBuilder(url, {
      headers: this._getAuthHeaders(),
      schema: this.schema,
      realtime: this.realtime,
      table,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError,
    })
  }
  /**
   * Perform a function call.
   *
   * @param fn  The function name to call.
   * @param params  The parameters to pass to the function call.
   * @param head   When set to true, no data will be returned.
   * @param count  Count algorithm to use to count rows in a table.
   *
   */
  rpc(fn, params, { head = false, count = null } = {}) {
    const rest = this._initPostgRESTClient()
    return rest.rpc(fn, params, { head, count })
  }
  /**
   * Closes and removes all subscriptions and returns a list of removed
   * subscriptions and their errors.
   */
  removeAllSubscriptions() {
    return __awaiter(this, void 0, void 0, function* () {
      const allSubs = this.getSubscriptions().slice()
      const allSubPromises = allSubs.map((sub) => this.removeSubscription(sub))
      const allRemovedSubs = yield Promise.all(allSubPromises)
      return allRemovedSubs.map(({ error }, i) => {
        return {
          data: { subscription: allSubs[i] },
          error,
        }
      })
    })
  }
  /**
   * Closes and removes a subscription and returns the number of open subscriptions.
   *
   * @param subscription The subscription you want to close and remove.
   */
  removeSubscription(subscription) {
    return __awaiter(this, void 0, void 0, function* () {
      const { error } = yield this._closeSubscription(subscription)
      const allSubs = this.getSubscriptions()
      const openSubCount = allSubs.filter((chan) => chan.isJoined()).length
      if (allSubs.length === 0) yield this.realtime.disconnect()
      return { data: { openSubscriptions: openSubCount }, error }
    })
  }
  _closeSubscription(subscription) {
    return __awaiter(this, void 0, void 0, function* () {
      let error = null
      if (!subscription.isClosed()) {
        const { error: unsubError } = yield this._unsubscribeSubscription(subscription)
        error = unsubError
      }
      this.realtime.remove(subscription)
      return { error }
    })
  }
  _unsubscribeSubscription(subscription) {
    return new Promise((resolve) => {
      subscription
        .unsubscribe()
        .receive('ok', () => resolve({ error: null }))
        .receive('error', (error) => resolve({ error }))
        .receive('timeout', () => resolve({ error: new Error('timed out') }))
    })
  }
  /**
   * Returns an array of all your subscriptions.
   */
  getSubscriptions() {
    return this.realtime.channels
  }
  _initSupabaseAuthClient({
    autoRefreshToken,
    persistSession,
    detectSessionInUrl,
    localStorage,
    headers,
    fetch,
  }) {
    const authHeaders = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    }
    return new SupabaseAuthClient_1.SupabaseAuthClient({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, headers), authHeaders),
      autoRefreshToken,
      persistSession,
      detectSessionInUrl,
      localStorage,
      fetch,
    })
  }
  _initRealtimeClient(options) {
    return new realtime_js_1.RealtimeClient(
      this.realtimeUrl,
      Object.assign(Object.assign({}, options), {
        params: Object.assign(
          Object.assign({}, options === null || options === void 0 ? void 0 : options.params),
          { apikey: this.supabaseKey }
        ),
      })
    )
  }
  _initPostgRESTClient() {
    return new postgrest_js_1.PostgrestClient(this.restUrl, {
      headers: this._getAuthHeaders(),
      schema: this.schema,
      fetch: this.fetch,
      throwOnError: this.shouldThrowOnError,
    })
  }
  _getAuthHeaders() {
    var _a, _b
    const headers = Object.assign({}, this.headers)
    const authBearer =
      (_b = (_a = this.auth.session()) === null || _a === void 0 ? void 0 : _a.access_token) !==
        null && _b !== void 0
        ? _b
        : this.supabaseKey
    headers['apikey'] = this.supabaseKey
    headers['Authorization'] = headers['Authorization'] || `Bearer ${authBearer}`
    return headers
  }
  _listenForMultiTabEvents() {
    if (
      !this.multiTab ||
      !(0, helpers_1.isBrowser)() ||
      !(window === null || window === void 0 ? void 0 : window.addEventListener)
    ) {
      return null
    }
    try {
      return window === null || window === void 0
        ? void 0
        : window.addEventListener('storage', (e) => {
            var _a, _b, _c
            if (e.key === constants_1.STORAGE_KEY) {
              const newSession = JSON.parse(String(e.newValue))
              const accessToken =
                (_b =
                  (_a =
                    newSession === null || newSession === void 0
                      ? void 0
                      : newSession.currentSession) === null || _a === void 0
                    ? void 0
                    : _a.access_token) !== null && _b !== void 0
                  ? _b
                  : undefined
              const previousAccessToken =
                (_c = this.auth.session()) === null || _c === void 0 ? void 0 : _c.access_token
              if (!accessToken) {
                this._handleTokenChanged('SIGNED_OUT', accessToken, 'STORAGE')
              } else if (!previousAccessToken && accessToken) {
                this._handleTokenChanged('SIGNED_IN', accessToken, 'STORAGE')
              } else if (previousAccessToken !== accessToken) {
                this._handleTokenChanged('TOKEN_REFRESHED', accessToken, 'STORAGE')
              }
            }
          })
    } catch (error) {
      console.error('_listenForMultiTabEvents', error)
      return null
    }
  }
  _listenForAuthEvents() {
    let { data } = this.auth.onAuthStateChange((event, session) => {
      this._handleTokenChanged(
        event,
        session === null || session === void 0 ? void 0 : session.access_token,
        'CLIENT'
      )
    })
    return data
  }
  _handleTokenChanged(event, token, source) {
    if (
      (event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') &&
      this.changedAccessToken !== token
    ) {
      // Token has changed
      this.realtime.setAuth(token)
      // Ideally we should call this.auth.recoverSession() - need to make public
      // to trigger a "SIGNED_IN" event on this client.
      if (source == 'STORAGE') this.auth.setAuth(token)
      this.changedAccessToken = token
    } else if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
      // Token is removed
      this.realtime.setAuth(this.supabaseKey)
      if (source == 'STORAGE') this.auth.signOut()
    }
  }
}
exports.default = SupabaseClient
//# sourceMappingURL=SupabaseClient.js.map
