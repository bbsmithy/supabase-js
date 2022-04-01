!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.supabase = t())
    : (e.supabase = t())
})(self, function () {
  return (() => {
    var e = {
        248: (e, t, r) => {
          'use strict'
          r.r(t), r.d(t, { FunctionsClient: () => i })
          var n = r(98),
            s = r.n(n)
          class i {
            constructor(e, { headers: t = {}, customFetch: r }) {
              ;(this.url = e),
                (this.headers = t),
                (this.fetch = ((e) => {
                  let t
                  return (t = e || ('undefined' == typeof fetch ? s() : fetch)), (...e) => t(...e)
                })(r))
            }
            setAuth(e) {
              this.headers.Authorization = `Bearer ${e}`
            }
            invoke(e, t) {
              return (
                (r = this),
                (n = void 0),
                (i = function* () {
                  try {
                    const { headers: r, body: n } = null != t ? t : {},
                      s = yield this.fetch(`${this.url}/${e}`, {
                        method: 'POST',
                        headers: Object.assign({}, this.headers, r),
                        body: n,
                      }),
                      i = s.headers.get('x-relay-error')
                    if (i && 'true' === i) return { data: null, error: new Error(yield s.text()) }
                    let o
                    const { responseType: a } = null != t ? t : {}
                    return (
                      (o =
                        a && 'json' !== a
                          ? 'arrayBuffer' === a
                            ? yield s.arrayBuffer()
                            : 'blob' === a
                            ? yield s.blob()
                            : yield s.text()
                          : yield s.json()),
                      { data: o, error: null }
                    )
                  } catch (e) {
                    return { data: null, error: e }
                  }
                }),
                new ((s = void 0) || (s = Promise))(function (e, t) {
                  function o(e) {
                    try {
                      c(i.next(e))
                    } catch (e) {
                      t(e)
                    }
                  }
                  function a(e) {
                    try {
                      c(i.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  }
                  function c(t) {
                    var r
                    t.done
                      ? e(t.value)
                      : ((r = t.value),
                        r instanceof s
                          ? r
                          : new s(function (e) {
                              e(r)
                            })).then(o, a)
                  }
                  c((i = i.apply(r, n || [])).next())
                })
              )
              var r, n, s, i
            }
          }
        },
        271: (e, t, r) => {
          'use strict'
          r.r(t), r.d(t, { GoTrueApi: () => _, GoTrueClient: () => T })
          var n = function (e, t, r, n) {
            return new (r || (r = Promise))(function (s, i) {
              function o(e) {
                try {
                  c(n.next(e))
                } catch (e) {
                  i(e)
                }
              }
              function a(e) {
                try {
                  c(n.throw(e))
                } catch (e) {
                  i(e)
                }
              }
              function c(e) {
                var t
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, a)
              }
              c((n = n.apply(e, t || [])).next())
            })
          }
          const s = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
          function i(e, t, r, i, o) {
            return n(this, void 0, void 0, function* () {
              return new Promise((n, a) => {
                e(
                  r,
                  ((e, t, r) => {
                    const n = { method: e, headers: (null == t ? void 0 : t.headers) || {} }
                    return (
                      'GET' === e ||
                        ((n.headers = Object.assign(
                          { 'Content-Type': 'text/plain;charset=UTF-8' },
                          null == t ? void 0 : t.headers
                        )),
                        (n.body = JSON.stringify(r))),
                      n
                    )
                  })(t, i, o)
                )
                  .then((e) => {
                    if (!e.ok) throw e
                    return (null == i ? void 0 : i.noResolveJson) ? n : e.json()
                  })
                  .then((e) => n(e))
                  .catch((e) =>
                    ((e, t) => {
                      if ('function' != typeof e.json) return t(e)
                      e.json().then((r) =>
                        t({ message: s(r), status: (null == e ? void 0 : e.status) || 500 })
                      )
                    })(e, a)
                  )
              })
            })
          }
          function o(e, t, r) {
            return n(this, void 0, void 0, function* () {
              return i(e, 'GET', t, r)
            })
          }
          function a(e, t, r, s) {
            return n(this, void 0, void 0, function* () {
              return i(e, 'POST', t, s, r)
            })
          }
          function c(e, t, r, s) {
            return n(this, void 0, void 0, function* () {
              return i(e, 'PUT', t, s, r)
            })
          }
          const h = 'supabase.auth.token',
            u = { name: 'sb', lifetime: 28800, domain: '', path: '/', sameSite: 'lax' }
          function l(e, t, r) {
            const n = r.map((t) => {
                return (
                  (r = t),
                  (n = (function (e) {
                    if (!e || !e.headers || !e.headers.host)
                      throw new Error('The "host" request header is not available')
                    const t =
                      (e.headers.host.indexOf(':') > -1 && e.headers.host.split(':')[0]) ||
                      e.headers.host
                    return !(['localhost', '127.0.0.1'].indexOf(t) > -1 || t.endsWith('.local'))
                  })(e)),
                  (function (e, t, r) {
                    const n = r || {},
                      s = encodeURIComponent,
                      i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
                    if ('function' != typeof s) throw new TypeError('option encode is invalid')
                    if (!i.test(e)) throw new TypeError('argument name is invalid')
                    const o = s(t)
                    if (o && !i.test(o)) throw new TypeError('argument val is invalid')
                    let a = e + '=' + o
                    if (null != n.maxAge) {
                      const e = n.maxAge - 0
                      if (isNaN(e) || !isFinite(e)) throw new TypeError('option maxAge is invalid')
                      a += '; Max-Age=' + Math.floor(e)
                    }
                    if (n.domain) {
                      if (!i.test(n.domain)) throw new TypeError('option domain is invalid')
                      a += '; Domain=' + n.domain
                    }
                    if (n.path) {
                      if (!i.test(n.path)) throw new TypeError('option path is invalid')
                      a += '; Path=' + n.path
                    }
                    if (n.expires) {
                      if ('function' != typeof n.expires.toUTCString)
                        throw new TypeError('option expires is invalid')
                      a += '; Expires=' + n.expires.toUTCString()
                    }
                    if (
                      (n.httpOnly && (a += '; HttpOnly'), n.secure && (a += '; Secure'), n.sameSite)
                    )
                      switch (
                        'string' == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite
                      ) {
                        case 'lax':
                          a += '; SameSite=Lax'
                          break
                        case 'strict':
                          a += '; SameSite=Strict'
                          break
                        case 'none':
                          a += '; SameSite=None'
                          break
                        default:
                          throw new TypeError('option sameSite is invalid')
                      }
                    return a
                  })(r.name, r.value, {
                    maxAge: r.maxAge,
                    expires: new Date(Date.now() + 1e3 * r.maxAge),
                    httpOnly: !0,
                    secure: n,
                    path: null !== (s = r.path) && void 0 !== s ? s : '/',
                    domain: null !== (i = r.domain) && void 0 !== i ? i : '',
                    sameSite: null !== (o = r.sameSite) && void 0 !== o ? o : 'lax',
                  })
                )
                var r, n, s, i, o
              }),
              s = t.getHeader('Set-Cookie')
            return (
              s &&
                (s instanceof Array
                  ? Array.prototype.push.apply(n, s)
                  : 'string' == typeof s && n.push(s)),
              n
            )
          }
          function d(e, t, r) {
            t.setHeader('Set-Cookie', l(e, t, r))
          }
          var f = r(98),
            p = r.n(f)
          function v(e) {
            return Math.round(Date.now() / 1e3) + e
          }
          const y = () => 'undefined' != typeof window
          function m(e, t) {
            var r
            t ||
              (t =
                (null === (r = null === window || void 0 === window ? void 0 : window.location) ||
                void 0 === r
                  ? void 0
                  : r.href) || ''),
              (e = e.replace(/[\[\]]/g, '\\$&'))
            const n = new RegExp('[?&#]' + e + '(=([^&#]*)|&|#|$)').exec(t)
            return n ? (n[2] ? decodeURIComponent(n[2].replace(/\+/g, ' ')) : '') : null
          }
          const g = (e) => {
            let t
            return (t = e || ('undefined' == typeof fetch ? p() : fetch)), (...e) => t(...e)
          }
          var b = function (e, t, r, n) {
            return new (r || (r = Promise))(function (s, i) {
              function o(e) {
                try {
                  c(n.next(e))
                } catch (e) {
                  i(e)
                }
              }
              function a(e) {
                try {
                  c(n.throw(e))
                } catch (e) {
                  i(e)
                }
              }
              function c(e) {
                var t
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, a)
              }
              c((n = n.apply(e, t || [])).next())
            })
          }
          class _ {
            constructor({ url: e = '', headers: t = {}, cookieOptions: r, fetch: n }) {
              ;(this.url = e),
                (this.headers = t),
                (this.cookieOptions = Object.assign(Object.assign({}, u), r)),
                (this.fetch = g(n))
            }
            _createRequestHeaders(e) {
              const t = Object.assign({}, this.headers)
              return (t.Authorization = `Bearer ${e}`), t
            }
            cookieName() {
              var e
              return null !== (e = this.cookieOptions.name) && void 0 !== e ? e : ''
            }
            getUrlForProvider(e, t) {
              const r = [`provider=${encodeURIComponent(e)}`]
              return (
                (null == t ? void 0 : t.redirectTo) &&
                  r.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
                (null == t ? void 0 : t.scopes) && r.push(`scopes=${encodeURIComponent(t.scopes)}`),
                `${this.url}/authorize?${r.join('&')}`
              )
            }
            signUpWithEmail(e, t, r = {}) {
              return b(this, void 0, void 0, function* () {
                try {
                  const n = Object.assign({}, this.headers)
                  let s = ''
                  r.redirectTo && (s = '?redirect_to=' + encodeURIComponent(r.redirectTo))
                  const i = yield a(
                      this.fetch,
                      `${this.url}/signup${s}`,
                      {
                        email: e,
                        password: t,
                        data: r.data,
                        gotrue_meta_security: { hcaptcha_token: r.captchaToken },
                      },
                      { headers: n }
                    ),
                    o = Object.assign({}, i)
                  return o.expires_in && (o.expires_at = v(i.expires_in)), { data: o, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            signInWithEmail(e, t, r = {}) {
              return b(this, void 0, void 0, function* () {
                try {
                  const n = Object.assign({}, this.headers)
                  let s = '?grant_type=password'
                  r.redirectTo && (s += '&redirect_to=' + encodeURIComponent(r.redirectTo))
                  const i = yield a(
                      this.fetch,
                      `${this.url}/token${s}`,
                      { email: e, password: t },
                      { headers: n }
                    ),
                    o = Object.assign({}, i)
                  return o.expires_in && (o.expires_at = v(i.expires_in)), { data: o, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            signUpWithPhone(e, t, r = {}) {
              return b(this, void 0, void 0, function* () {
                try {
                  const n = Object.assign({}, this.headers),
                    s = yield a(
                      this.fetch,
                      `${this.url}/signup`,
                      {
                        phone: e,
                        password: t,
                        data: r.data,
                        gotrue_meta_security: { hcaptcha_token: r.captchaToken },
                      },
                      { headers: n }
                    ),
                    i = Object.assign({}, s)
                  return i.expires_in && (i.expires_at = v(s.expires_in)), { data: i, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            signInWithPhone(e, t) {
              return b(this, void 0, void 0, function* () {
                try {
                  const r = Object.assign({}, this.headers),
                    n = '?grant_type=password',
                    s = yield a(
                      this.fetch,
                      `${this.url}/token${n}`,
                      { phone: e, password: t },
                      { headers: r }
                    ),
                    i = Object.assign({}, s)
                  return i.expires_in && (i.expires_at = v(s.expires_in)), { data: i, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            signInWithOpenIDConnect({
              id_token: e,
              nonce: t,
              client_id: r,
              issuer: n,
              provider: s,
            }) {
              return b(this, void 0, void 0, function* () {
                try {
                  const i = Object.assign({}, this.headers),
                    o = '?grant_type=id_token',
                    c = yield a(
                      this.fetch,
                      `${this.url}/token${o}`,
                      { id_token: e, nonce: t, client_id: r, issuer: n, provider: s },
                      { headers: i }
                    ),
                    h = Object.assign({}, c)
                  return h.expires_in && (h.expires_at = v(c.expires_in)), { data: h, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            sendMagicLinkEmail(e, t = {}) {
              var r
              return b(this, void 0, void 0, function* () {
                try {
                  const n = Object.assign({}, this.headers)
                  let s = ''
                  t.redirectTo && (s += '?redirect_to=' + encodeURIComponent(t.redirectTo))
                  const i = null === (r = t.shouldCreateUser) || void 0 === r || r
                  return {
                    data: yield a(
                      this.fetch,
                      `${this.url}/otp${s}`,
                      {
                        email: e,
                        create_user: i,
                        gotrue_meta_security: { hcaptcha_token: t.captchaToken },
                      },
                      { headers: n }
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            sendMobileOTP(e, t = {}) {
              var r
              return b(this, void 0, void 0, function* () {
                try {
                  const n = null === (r = t.shouldCreateUser) || void 0 === r || r,
                    s = Object.assign({}, this.headers)
                  return {
                    data: yield a(
                      this.fetch,
                      `${this.url}/otp`,
                      {
                        phone: e,
                        create_user: n,
                        gotrue_meta_security: { hcaptcha_token: t.captchaToken },
                      },
                      { headers: s }
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            signOut(e) {
              return b(this, void 0, void 0, function* () {
                try {
                  return (
                    yield a(
                      this.fetch,
                      `${this.url}/logout`,
                      {},
                      { headers: this._createRequestHeaders(e), noResolveJson: !0 }
                    ),
                    { error: null }
                  )
                } catch (e) {
                  return { error: e }
                }
              })
            }
            verifyMobileOTP(e, t, r = {}) {
              return b(this, void 0, void 0, function* () {
                try {
                  const n = Object.assign({}, this.headers),
                    s = yield a(
                      this.fetch,
                      `${this.url}/verify`,
                      { phone: e, token: t, type: 'sms', redirect_to: r.redirectTo },
                      { headers: n }
                    ),
                    i = Object.assign({}, s)
                  return i.expires_in && (i.expires_at = v(s.expires_in)), { data: i, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            verifyOTP({ email: e, phone: t, token: r, type: n = 'sms' }, s = {}) {
              return b(this, void 0, void 0, function* () {
                try {
                  const i = Object.assign({}, this.headers),
                    o = yield a(
                      this.fetch,
                      `${this.url}/verify`,
                      { email: e, phone: t, token: r, type: n, redirect_to: s.redirectTo },
                      { headers: i }
                    ),
                    c = Object.assign({}, o)
                  return c.expires_in && (c.expires_at = v(o.expires_in)), { data: c, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            inviteUserByEmail(e, t = {}) {
              return b(this, void 0, void 0, function* () {
                try {
                  const r = Object.assign({}, this.headers)
                  let n = ''
                  return (
                    t.redirectTo && (n += '?redirect_to=' + encodeURIComponent(t.redirectTo)),
                    {
                      data: yield a(
                        this.fetch,
                        `${this.url}/invite${n}`,
                        { email: e, data: t.data },
                        { headers: r }
                      ),
                      error: null,
                    }
                  )
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            resetPasswordForEmail(e, t = {}) {
              return b(this, void 0, void 0, function* () {
                try {
                  const r = Object.assign({}, this.headers)
                  let n = ''
                  return (
                    t.redirectTo && (n += '?redirect_to=' + encodeURIComponent(t.redirectTo)),
                    {
                      data: yield a(
                        this.fetch,
                        `${this.url}/recover${n}`,
                        { email: e, gotrue_meta_security: { hcaptcha_token: t.captchaToken } },
                        { headers: r }
                      ),
                      error: null,
                    }
                  )
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            refreshAccessToken(e) {
              return b(this, void 0, void 0, function* () {
                try {
                  const t = yield a(
                      this.fetch,
                      `${this.url}/token?grant_type=refresh_token`,
                      { refresh_token: e },
                      { headers: this.headers }
                    ),
                    r = Object.assign({}, t)
                  return r.expires_in && (r.expires_at = v(t.expires_in)), { data: r, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            setAuthCookie(e, t) {
              'POST' !== e.method &&
                (t.setHeader('Allow', 'POST'), t.status(405).end('Method Not Allowed'))
              const { event: r, session: n } = e.body
              if (!r) throw new Error('Auth event missing!')
              if ('SIGNED_IN' === r) {
                if (!n) throw new Error('Auth session missing!')
                d(
                  e,
                  t,
                  [
                    { key: 'access-token', value: n.access_token },
                    { key: 'refresh-token', value: n.refresh_token },
                  ].map((e) => {
                    var t
                    return {
                      name: `${this.cookieName()}-${e.key}`,
                      value: e.value,
                      domain: this.cookieOptions.domain,
                      maxAge: null !== (t = this.cookieOptions.lifetime) && void 0 !== t ? t : 0,
                      path: this.cookieOptions.path,
                      sameSite: this.cookieOptions.sameSite,
                    }
                  })
                )
              }
              'SIGNED_OUT' === r &&
                d(
                  e,
                  t,
                  ['access-token', 'refresh-token'].map((e) => ({
                    name: `${this.cookieName()}-${e}`,
                    value: '',
                    maxAge: -1,
                  }))
                ),
                t.status(200).json({})
            }
            deleteAuthCookie(e, t, { redirectTo: r = '/' }) {
              return (
                d(
                  e,
                  t,
                  ['access-token', 'refresh-token'].map((e) => ({
                    name: `${this.cookieName()}-${e}`,
                    value: '',
                    maxAge: -1,
                  }))
                ),
                t.redirect(307, r)
              )
            }
            getAuthCookieString(e, t) {
              'POST' !== e.method &&
                (t.setHeader('Allow', 'POST'), t.status(405).end('Method Not Allowed'))
              const { event: r, session: n } = e.body
              if (!r) throw new Error('Auth event missing!')
              if ('SIGNED_IN' === r) {
                if (!n) throw new Error('Auth session missing!')
                return l(
                  e,
                  t,
                  [
                    { key: 'access-token', value: n.access_token },
                    { key: 'refresh-token', value: n.refresh_token },
                  ].map((e) => {
                    var t
                    return {
                      name: `${this.cookieName()}-${e.key}`,
                      value: e.value,
                      domain: this.cookieOptions.domain,
                      maxAge: null !== (t = this.cookieOptions.lifetime) && void 0 !== t ? t : 0,
                      path: this.cookieOptions.path,
                      sameSite: this.cookieOptions.sameSite,
                    }
                  })
                )
              }
              return 'SIGNED_OUT' === r
                ? l(
                    e,
                    t,
                    ['access-token', 'refresh-token'].map((e) => ({
                      name: `${this.cookieName()}-${e}`,
                      value: '',
                      maxAge: -1,
                    }))
                  )
                : t.getHeader('Set-Cookie')
            }
            generateLink(e, t, r = {}) {
              return b(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield a(
                      this.fetch,
                      `${this.url}/admin/generate_link`,
                      {
                        type: e,
                        email: t,
                        password: r.password,
                        data: r.data,
                        redirect_to: r.redirectTo,
                      },
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            createUser(e) {
              return b(this, void 0, void 0, function* () {
                try {
                  const t = yield a(this.fetch, `${this.url}/admin/users`, e, {
                    headers: this.headers,
                  })
                  return { user: t, data: t, error: null }
                } catch (e) {
                  return { user: null, data: null, error: e }
                }
              })
            }
            listUsers() {
              return b(this, void 0, void 0, function* () {
                try {
                  return {
                    data: (yield o(this.fetch, `${this.url}/admin/users`, {
                      headers: this.headers,
                    })).users,
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            getUserById(e) {
              return b(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield o(this.fetch, `${this.url}/admin/users/${e}`, {
                      headers: this.headers,
                    }),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            getUserByCookie(e, t) {
              return b(this, void 0, void 0, function* () {
                try {
                  if (!e.cookies)
                    throw new Error(
                      'Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!'
                    )
                  const r = e.cookies[`${this.cookieName()}-access-token`],
                    n = e.cookies[`${this.cookieName()}-refresh-token`]
                  if (!r) throw new Error('No cookie found!')
                  const { user: s, error: i } = yield this.getUser(r)
                  if (i) {
                    if (!n) throw new Error('No refresh_token cookie found!')
                    if (!t)
                      throw new Error(
                        'You need to pass the res object to automatically refresh the session!'
                      )
                    const { data: r, error: s } = yield this.refreshAccessToken(n)
                    if (s) throw s
                    if (r)
                      return (
                        d(
                          e,
                          t,
                          [
                            { key: 'access-token', value: r.access_token },
                            { key: 'refresh-token', value: r.refresh_token },
                          ].map((e) => {
                            var t
                            return {
                              name: `${this.cookieName()}-${e.key}`,
                              value: e.value,
                              domain: this.cookieOptions.domain,
                              maxAge:
                                null !== (t = this.cookieOptions.lifetime) && void 0 !== t ? t : 0,
                              path: this.cookieOptions.path,
                              sameSite: this.cookieOptions.sameSite,
                            }
                          })
                        ),
                        { token: r.access_token, user: r.user, data: r.user, error: null }
                      )
                  }
                  return { token: r, user: s, data: s, error: null }
                } catch (e) {
                  return { token: null, user: null, data: null, error: e }
                }
              })
            }
            updateUserById(e, t) {
              return b(this, void 0, void 0, function* () {
                try {
                  const r = yield c(this.fetch, `${this.url}/admin/users/${e}`, t, {
                    headers: this.headers,
                  })
                  return { user: r, data: r, error: null }
                } catch (e) {
                  return { user: null, data: null, error: e }
                }
              })
            }
            deleteUser(e) {
              return b(this, void 0, void 0, function* () {
                try {
                  const t = yield (function (e, t, r, s) {
                    return n(this, void 0, void 0, function* () {
                      return i(e, 'DELETE', t, s, r)
                    })
                  })(this.fetch, `${this.url}/admin/users/${e}`, {}, { headers: this.headers })
                  return { user: t, data: t, error: null }
                } catch (e) {
                  return { user: null, data: null, error: e }
                }
              })
            }
            getUser(e) {
              return b(this, void 0, void 0, function* () {
                try {
                  const t = yield o(this.fetch, `${this.url}/user`, {
                    headers: this._createRequestHeaders(e),
                  })
                  return { user: t, data: t, error: null }
                } catch (e) {
                  return { user: null, data: null, error: e }
                }
              })
            }
            updateUser(e, t) {
              return b(this, void 0, void 0, function* () {
                try {
                  const r = yield c(this.fetch, `${this.url}/user`, t, {
                    headers: this._createRequestHeaders(e),
                  })
                  return { user: r, data: r, error: null }
                } catch (e) {
                  return { user: null, data: null, error: e }
                }
              })
            }
          }
          var w = function (e, t, r, n) {
            return new (r || (r = Promise))(function (s, i) {
              function o(e) {
                try {
                  c(n.next(e))
                } catch (e) {
                  i(e)
                }
              }
              function a(e) {
                try {
                  c(n.throw(e))
                } catch (e) {
                  i(e)
                }
              }
              function c(e) {
                var t
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, a)
              }
              c((n = n.apply(e, t || [])).next())
            })
          }
          !(function () {
            if ('object' != typeof globalThis)
              try {
                Object.defineProperty(Object.prototype, '__magic__', {
                  get: function () {
                    return this
                  },
                  configurable: !0,
                }),
                  (__magic__.globalThis = __magic__),
                  delete Object.prototype.__magic__
              } catch (e) {
                'undefined' != typeof self && (self.globalThis = self)
              }
          })()
          const S = {
            url: 'http://localhost:9999',
            autoRefreshToken: !0,
            persistSession: !0,
            detectSessionInUrl: !0,
            multiTab: !0,
            headers: { 'X-Client-Info': 'gotrue-js/1.22.10' },
          }
          class T {
            constructor(e) {
              this.stateChangeEmitters = new Map()
              const t = Object.assign(Object.assign({}, S), e)
              ;(this.currentUser = null),
                (this.currentSession = null),
                (this.autoRefreshToken = t.autoRefreshToken),
                (this.persistSession = t.persistSession),
                (this.multiTab = t.multiTab),
                (this.localStorage = t.localStorage || globalThis.localStorage),
                (this.api = new _({
                  url: t.url,
                  headers: t.headers,
                  cookieOptions: t.cookieOptions,
                  fetch: t.fetch,
                })),
                this._recoverSession(),
                this._recoverAndRefresh(),
                this._listenForMultiTabEvents(),
                t.detectSessionInUrl &&
                  y() &&
                  m('access_token') &&
                  this.getSessionFromUrl({ storeSession: !0 }).then(({ error: e }) => {
                    e && console.error('Error getting session from URL.', e)
                  })
            }
            signUp({ email: e, password: t, phone: r }, n = {}) {
              return w(this, void 0, void 0, function* () {
                try {
                  this._removeSession()
                  const { data: s, error: i } =
                    r && t
                      ? yield this.api.signUpWithPhone(r, t, {
                          data: n.data,
                          captchaToken: n.captchaToken,
                        })
                      : yield this.api.signUpWithEmail(e, t, {
                          redirectTo: n.redirectTo,
                          data: n.data,
                          captchaToken: n.captchaToken,
                        })
                  if (i) throw i
                  if (!s) throw 'An error occurred on sign up.'
                  let o = null,
                    a = null
                  return (
                    s.access_token &&
                      ((o = s),
                      (a = o.user),
                      this._saveSession(o),
                      this._notifyAllSubscribers('SIGNED_IN')),
                    s.id && (a = s),
                    { user: a, session: o, error: null }
                  )
                } catch (e) {
                  return { user: null, session: null, error: e }
                }
              })
            }
            signIn(
              { email: e, phone: t, password: r, refreshToken: n, provider: s, oidc: i },
              o = {}
            ) {
              return w(this, void 0, void 0, function* () {
                try {
                  if ((this._removeSession(), e && !r)) {
                    const { error: t } = yield this.api.sendMagicLinkEmail(e, {
                      redirectTo: o.redirectTo,
                      shouldCreateUser: o.shouldCreateUser,
                      captchaToken: o.captchaToken,
                    })
                    return { user: null, session: null, error: t }
                  }
                  if (e && r) return this._handleEmailSignIn(e, r, { redirectTo: o.redirectTo })
                  if (t && !r) {
                    const { error: e } = yield this.api.sendMobileOTP(t, {
                      shouldCreateUser: o.shouldCreateUser,
                      captchaToken: o.captchaToken,
                    })
                    return { user: null, session: null, error: e }
                  }
                  if (t && r) return this._handlePhoneSignIn(t, r)
                  if (n) {
                    const { error: e } = yield this._callRefreshToken(n)
                    if (e) throw e
                    return { user: this.currentUser, session: this.currentSession, error: null }
                  }
                  if (s)
                    return this._handleProviderSignIn(s, {
                      redirectTo: o.redirectTo,
                      scopes: o.scopes,
                    })
                  if (i) return this._handleOpenIDConnectSignIn(i)
                  throw new Error(
                    'You must provide either an email, phone number, a third-party provider or OpenID Connect.'
                  )
                } catch (e) {
                  return { user: null, session: null, error: e }
                }
              })
            }
            verifyOTP(e, t = {}) {
              return w(this, void 0, void 0, function* () {
                try {
                  this._removeSession()
                  const { data: r, error: n } = yield this.api.verifyOTP(e, t)
                  if (n) throw n
                  if (!r) throw 'An error occurred on token verification.'
                  let s = null,
                    i = null
                  return (
                    r.access_token &&
                      ((s = r),
                      (i = s.user),
                      this._saveSession(s),
                      this._notifyAllSubscribers('SIGNED_IN')),
                    r.id && (i = r),
                    { user: i, session: s, error: null }
                  )
                } catch (e) {
                  return { user: null, session: null, error: e }
                }
              })
            }
            user() {
              return this.currentUser
            }
            session() {
              return this.currentSession
            }
            refreshSession() {
              var e
              return w(this, void 0, void 0, function* () {
                try {
                  if (
                    !(null === (e = this.currentSession) || void 0 === e ? void 0 : e.access_token)
                  )
                    throw new Error('Not logged in.')
                  const { error: t } = yield this._callRefreshToken()
                  if (t) throw t
                  return { data: this.currentSession, user: this.currentUser, error: null }
                } catch (e) {
                  return { data: null, user: null, error: e }
                }
              })
            }
            update(e) {
              var t
              return w(this, void 0, void 0, function* () {
                try {
                  if (
                    !(null === (t = this.currentSession) || void 0 === t ? void 0 : t.access_token)
                  )
                    throw new Error('Not logged in.')
                  const { user: r, error: n } = yield this.api.updateUser(
                    this.currentSession.access_token,
                    e
                  )
                  if (n) throw n
                  if (!r) throw Error('Invalid user data.')
                  const s = Object.assign(Object.assign({}, this.currentSession), { user: r })
                  return (
                    this._saveSession(s),
                    this._notifyAllSubscribers('USER_UPDATED'),
                    { data: r, user: r, error: null }
                  )
                } catch (e) {
                  return { data: null, user: null, error: e }
                }
              })
            }
            setSession(e) {
              return w(this, void 0, void 0, function* () {
                try {
                  if (!e) throw new Error('No current session.')
                  const { data: t, error: r } = yield this.api.refreshAccessToken(e)
                  return r
                    ? { session: null, error: r }
                    : (this._saveSession(t),
                      this._notifyAllSubscribers('SIGNED_IN'),
                      { session: t, error: null })
                } catch (e) {
                  return { error: e, session: null }
                }
              })
            }
            setAuth(e) {
              return (
                (this.currentSession = Object.assign(Object.assign({}, this.currentSession), {
                  access_token: e,
                  token_type: 'bearer',
                  user: null,
                })),
                this.currentSession
              )
            }
            getSessionFromUrl(e) {
              return w(this, void 0, void 0, function* () {
                try {
                  if (!y()) throw new Error('No browser detected.')
                  const t = m('error_description')
                  if (t) throw new Error(t)
                  const r = m('provider_token'),
                    n = m('access_token')
                  if (!n) throw new Error('No access_token detected.')
                  const s = m('expires_in')
                  if (!s) throw new Error('No expires_in detected.')
                  const i = m('refresh_token')
                  if (!i) throw new Error('No refresh_token detected.')
                  const o = m('token_type')
                  if (!o) throw new Error('No token_type detected.')
                  const a = Math.round(Date.now() / 1e3) + parseInt(s),
                    { user: c, error: h } = yield this.api.getUser(n)
                  if (h) throw h
                  const u = {
                    provider_token: r,
                    access_token: n,
                    expires_in: parseInt(s),
                    expires_at: a,
                    refresh_token: i,
                    token_type: o,
                    user: c,
                  }
                  if (null == e ? void 0 : e.storeSession) {
                    this._saveSession(u)
                    const e = m('type')
                    this._notifyAllSubscribers('SIGNED_IN'),
                      'recovery' === e && this._notifyAllSubscribers('PASSWORD_RECOVERY')
                  }
                  return (window.location.hash = ''), { data: u, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            signOut() {
              var e
              return w(this, void 0, void 0, function* () {
                const t =
                  null === (e = this.currentSession) || void 0 === e ? void 0 : e.access_token
                if ((this._removeSession(), this._notifyAllSubscribers('SIGNED_OUT'), t)) {
                  const { error: e } = yield this.api.signOut(t)
                  if (e) return { error: e }
                }
                return { error: null }
              })
            }
            onAuthStateChange(e) {
              try {
                const t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                    const t = (16 * Math.random()) | 0
                    return ('x' == e ? t : (3 & t) | 8).toString(16)
                  }),
                  r = {
                    id: t,
                    callback: e,
                    unsubscribe: () => {
                      this.stateChangeEmitters.delete(t)
                    },
                  }
                return this.stateChangeEmitters.set(t, r), { data: r, error: null }
              } catch (e) {
                return { data: null, error: e }
              }
            }
            _handleEmailSignIn(e, t, r = {}) {
              var n, s
              return w(this, void 0, void 0, function* () {
                try {
                  const { data: i, error: o } = yield this.api.signInWithEmail(e, t, {
                    redirectTo: r.redirectTo,
                  })
                  return o || !i
                    ? { data: null, user: null, session: null, error: o }
                    : (((null === (n = null == i ? void 0 : i.user) || void 0 === n
                        ? void 0
                        : n.confirmed_at) ||
                        (null === (s = null == i ? void 0 : i.user) || void 0 === s
                          ? void 0
                          : s.email_confirmed_at)) &&
                        (this._saveSession(i), this._notifyAllSubscribers('SIGNED_IN')),
                      { data: i, user: i.user, session: i, error: null })
                } catch (e) {
                  return { data: null, user: null, session: null, error: e }
                }
              })
            }
            _handlePhoneSignIn(e, t) {
              var r
              return w(this, void 0, void 0, function* () {
                try {
                  const { data: n, error: s } = yield this.api.signInWithPhone(e, t)
                  return s || !n
                    ? { data: null, user: null, session: null, error: s }
                    : ((null === (r = null == n ? void 0 : n.user) || void 0 === r
                        ? void 0
                        : r.phone_confirmed_at) &&
                        (this._saveSession(n), this._notifyAllSubscribers('SIGNED_IN')),
                      { data: n, user: n.user, session: n, error: null })
                } catch (e) {
                  return { data: null, user: null, session: null, error: e }
                }
              })
            }
            _handleProviderSignIn(e, t = {}) {
              const r = this.api.getUrlForProvider(e, {
                redirectTo: t.redirectTo,
                scopes: t.scopes,
              })
              try {
                return (
                  y() && (window.location.href = r),
                  { provider: e, url: r, data: null, session: null, user: null, error: null }
                )
              } catch (t) {
                return r
                  ? { provider: e, url: r, data: null, session: null, user: null, error: null }
                  : { data: null, user: null, session: null, error: t }
              }
            }
            _handleOpenIDConnectSignIn({
              id_token: e,
              nonce: t,
              client_id: r,
              issuer: n,
              provider: s,
            }) {
              return w(this, void 0, void 0, function* () {
                if (e && t && ((r && n) || s))
                  try {
                    const { data: i, error: o } = yield this.api.signInWithOpenIDConnect({
                      id_token: e,
                      nonce: t,
                      client_id: r,
                      issuer: n,
                      provider: s,
                    })
                    return o || !i
                      ? { user: null, session: null, error: o }
                      : (this._saveSession(i),
                        this._notifyAllSubscribers('SIGNED_IN'),
                        { user: i.user, session: i, error: null })
                  } catch (e) {
                    return { user: null, session: null, error: e }
                  }
                throw new Error(
                  'You must provide a OpenID Connect provider with your id token and nonce.'
                )
              })
            }
            _recoverSession() {
              var e
              try {
                const t =
                  y() && (null === (e = this.localStorage) || void 0 === e ? void 0 : e.getItem(h))
                if (!t || 'string' != typeof t) return null
                const r = JSON.parse(t),
                  { currentSession: n, expiresAt: s } = r
                s >= Math.round(Date.now() / 1e3) &&
                  (null == n ? void 0 : n.user) &&
                  (this._saveSession(n), this._notifyAllSubscribers('SIGNED_IN'))
              } catch (e) {
                console.log('error', e)
              }
            }
            _recoverAndRefresh() {
              return w(this, void 0, void 0, function* () {
                try {
                  const e = y() && (yield this.localStorage.getItem(h))
                  if (!e) return null
                  const t = JSON.parse(e),
                    { currentSession: r, expiresAt: n } = t
                  if (n < Math.round(Date.now() / 1e3))
                    if (this.autoRefreshToken && r.refresh_token) {
                      const { error: e } = yield this._callRefreshToken(r.refresh_token)
                      e && (console.log(e.message), yield this._removeSession())
                    } else this._removeSession()
                  else
                    r
                      ? (this._saveSession(r), this._notifyAllSubscribers('SIGNED_IN'))
                      : (console.log('Current session is missing data.'), this._removeSession())
                } catch (e) {
                  return console.error(e), null
                }
              })
            }
            _callRefreshToken(e) {
              var t
              return (
                void 0 === e &&
                  (e =
                    null === (t = this.currentSession) || void 0 === t ? void 0 : t.refresh_token),
                w(this, void 0, void 0, function* () {
                  try {
                    if (!e) throw new Error('No current session.')
                    const { data: t, error: r } = yield this.api.refreshAccessToken(e)
                    if (r) throw r
                    if (!t) throw Error('Invalid session data.')
                    return (
                      this._saveSession(t),
                      this._notifyAllSubscribers('TOKEN_REFRESHED'),
                      this._notifyAllSubscribers('SIGNED_IN'),
                      { data: t, error: null }
                    )
                  } catch (e) {
                    return { data: null, error: e }
                  }
                })
              )
            }
            _notifyAllSubscribers(e) {
              this.stateChangeEmitters.forEach((t) => t.callback(e, this.currentSession))
            }
            _saveSession(e) {
              ;(this.currentSession = e), (this.currentUser = e.user)
              const t = e.expires_at
              if (t) {
                const e = t - Math.round(Date.now() / 1e3),
                  r = e > 60 ? 60 : 0.5
                this._startAutoRefreshToken(1e3 * (e - r))
              }
              this.persistSession && e.expires_at && this._persistSession(this.currentSession)
            }
            _persistSession(e) {
              const t = { currentSession: e, expiresAt: e.expires_at }
              y() && this.localStorage.setItem(h, JSON.stringify(t))
            }
            _removeSession() {
              return w(this, void 0, void 0, function* () {
                ;(this.currentSession = null),
                  (this.currentUser = null),
                  this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
                  y() && (yield this.localStorage.removeItem(h))
              })
            }
            _startAutoRefreshToken(e) {
              this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
                e <= 0 ||
                  !this.autoRefreshToken ||
                  ((this.refreshTokenTimer = setTimeout(() => this._callRefreshToken(), e)),
                  'function' == typeof this.refreshTokenTimer.unref &&
                    this.refreshTokenTimer.unref())
            }
            _listenForMultiTabEvents() {
              if (
                !this.multiTab ||
                !y() ||
                !(null === window || void 0 === window ? void 0 : window.addEventListener)
              )
                return !1
              try {
                null === window ||
                  void 0 === window ||
                  window.addEventListener('storage', (e) => {
                    var t
                    if (e.key === h) {
                      const r = JSON.parse(String(e.newValue))
                      ;(
                        null === (t = null == r ? void 0 : r.currentSession) || void 0 === t
                          ? void 0
                          : t.access_token
                      )
                        ? (this._recoverAndRefresh(), this._notifyAllSubscribers('SIGNED_IN'))
                        : (this._removeSession(), this._notifyAllSubscribers('SIGNED_OUT'))
                    }
                  })
              } catch (e) {
                console.error('_listenForMultiTabEvents', e)
              }
            }
          }
        },
        501: (e, t, r) => {
          'use strict'
          r.r(t),
            r.d(t, {
              PostgrestBuilder: () => i,
              PostgrestClient: () => l,
              PostgrestFilterBuilder: () => a,
              PostgrestQueryBuilder: () => c,
            })
          var n = r(98),
            s = r.n(n)
          class i {
            constructor(e) {
              let t
              Object.assign(this, e),
                (t = e.fetch ? e.fetch : 'undefined' == typeof fetch ? s() : fetch),
                (this.fetch = (...e) => t(...e)),
                (this.shouldThrowOnError = e.shouldThrowOnError || !1)
            }
            throwOnError(e) {
              return null == e && (e = !0), (this.shouldThrowOnError = e), this
            }
            then(e, t) {
              void 0 === this.schema ||
                (['GET', 'HEAD'].includes(this.method)
                  ? (this.headers['Accept-Profile'] = this.schema)
                  : (this.headers['Content-Profile'] = this.schema)),
                'GET' !== this.method &&
                  'HEAD' !== this.method &&
                  (this.headers['Content-Type'] = 'application/json')
              let r = this.fetch(this.url.toString(), {
                method: this.method,
                headers: this.headers,
                body: JSON.stringify(this.body),
                signal: this.signal,
              }).then((e) => {
                return (
                  (t = this),
                  (r = void 0),
                  (s = function* () {
                    var t, r, n
                    let s = null,
                      i = null,
                      o = null
                    if (e.ok) {
                      const s =
                        null === (t = this.headers.Prefer) || void 0 === t
                          ? void 0
                          : t.split(',').includes('return=minimal')
                      if ('HEAD' !== this.method && !s) {
                        const t = yield e.text()
                        t && (i = 'text/csv' === this.headers.Accept ? t : JSON.parse(t))
                      }
                      const a =
                          null === (r = this.headers.Prefer) || void 0 === r
                            ? void 0
                            : r.match(/count=(exact|planned|estimated)/),
                        c =
                          null === (n = e.headers.get('content-range')) || void 0 === n
                            ? void 0
                            : n.split('/')
                      a && c && c.length > 1 && (o = parseInt(c[1]))
                    } else {
                      const t = yield e.text()
                      try {
                        s = JSON.parse(t)
                      } catch (e) {
                        s = { message: t }
                      }
                      if (s && this.shouldThrowOnError) throw s
                    }
                    return {
                      error: s,
                      data: i,
                      count: o,
                      status: e.status,
                      statusText: e.statusText,
                      body: i,
                    }
                  }),
                  new ((n = void 0) || (n = Promise))(function (e, i) {
                    function o(e) {
                      try {
                        c(s.next(e))
                      } catch (e) {
                        i(e)
                      }
                    }
                    function a(e) {
                      try {
                        c(s.throw(e))
                      } catch (e) {
                        i(e)
                      }
                    }
                    function c(t) {
                      var r
                      t.done
                        ? e(t.value)
                        : ((r = t.value),
                          r instanceof n
                            ? r
                            : new n(function (e) {
                                e(r)
                              })).then(o, a)
                    }
                    c((s = s.apply(t, r || [])).next())
                  })
                )
                var t, r, n, s
              })
              return (
                this.shouldThrowOnError ||
                  (r = r.catch((e) => ({
                    error: {
                      message: `FetchError: ${e.message}`,
                      details: '',
                      hint: '',
                      code: e.code || '',
                    },
                    data: null,
                    body: null,
                    count: null,
                    status: 400,
                    statusText: 'Bad Request',
                  }))),
                r.then(e, t)
              )
            }
            getURL() {
              return this.url
            }
          }
          class o extends i {
            select(e = '*') {
              let t = !1
              const r = e
                .split('')
                .map((e) => (/\s/.test(e) && !t ? '' : ('"' === e && (t = !t), e)))
                .join('')
              return this.url.searchParams.set('select', r), this
            }
            order(e, { ascending: t = !0, nullsFirst: r = !1, foreignTable: n } = {}) {
              const s = void 0 === n ? 'order' : `${n}.order`,
                i = this.url.searchParams.get(s)
              return (
                this.url.searchParams.set(
                  s,
                  `${i ? `${i},` : ''}${e}.${t ? 'asc' : 'desc'}.${r ? 'nullsfirst' : 'nullslast'}`
                ),
                this
              )
            }
            limit(e, { foreignTable: t } = {}) {
              const r = void 0 === t ? 'limit' : `${t}.limit`
              return this.url.searchParams.set(r, `${e}`), this
            }
            range(e, t, { foreignTable: r } = {}) {
              const n = void 0 === r ? 'offset' : `${r}.offset`,
                s = void 0 === r ? 'limit' : `${r}.limit`
              return (
                this.url.searchParams.set(n, `${e}`),
                this.url.searchParams.set(s, '' + (t - e + 1)),
                this
              )
            }
            abortSignal(e) {
              return (this.signal = e), this
            }
            single() {
              return (this.headers.Accept = 'application/vnd.pgrst.object+json'), this
            }
            maybeSingle() {
              this.headers.Accept = 'application/vnd.pgrst.object+json'
              const e = new o(this)
              return (
                (e.then = (e, t) =>
                  this.then((t) => {
                    var r, n
                    return (
                      null === (n = null === (r = t.error) || void 0 === r ? void 0 : r.details) ||
                      void 0 === n
                        ? void 0
                        : n.includes('Results contain 0 rows')
                    )
                      ? e({
                          error: null,
                          data: null,
                          count: t.count,
                          status: 200,
                          statusText: 'OK',
                          body: null,
                        })
                      : e(t)
                  }, t)),
                e
              )
            }
            csv() {
              return (this.headers.Accept = 'text/csv'), this
            }
          }
          class a extends o {
            constructor() {
              super(...arguments),
                (this.cs = this.contains),
                (this.cd = this.containedBy),
                (this.sl = this.rangeLt),
                (this.sr = this.rangeGt),
                (this.nxl = this.rangeGte),
                (this.nxr = this.rangeLte),
                (this.adj = this.rangeAdjacent),
                (this.ov = this.overlaps)
            }
            not(e, t, r) {
              return this.url.searchParams.append(`${e}`, `not.${t}.${r}`), this
            }
            or(e, { foreignTable: t } = {}) {
              const r = void 0 === t ? 'or' : `${t}.or`
              return this.url.searchParams.append(r, `(${e})`), this
            }
            eq(e, t) {
              return this.url.searchParams.append(`${e}`, `eq.${t}`), this
            }
            neq(e, t) {
              return this.url.searchParams.append(`${e}`, `neq.${t}`), this
            }
            gt(e, t) {
              return this.url.searchParams.append(`${e}`, `gt.${t}`), this
            }
            gte(e, t) {
              return this.url.searchParams.append(`${e}`, `gte.${t}`), this
            }
            lt(e, t) {
              return this.url.searchParams.append(`${e}`, `lt.${t}`), this
            }
            lte(e, t) {
              return this.url.searchParams.append(`${e}`, `lte.${t}`), this
            }
            like(e, t) {
              return this.url.searchParams.append(`${e}`, `like.${t}`), this
            }
            ilike(e, t) {
              return this.url.searchParams.append(`${e}`, `ilike.${t}`), this
            }
            is(e, t) {
              return this.url.searchParams.append(`${e}`, `is.${t}`), this
            }
            in(e, t) {
              const r = t
                .map((e) =>
                  'string' == typeof e && new RegExp('[,()]').test(e) ? `"${e}"` : `${e}`
                )
                .join(',')
              return this.url.searchParams.append(`${e}`, `in.(${r})`), this
            }
            contains(e, t) {
              return (
                'string' == typeof t
                  ? this.url.searchParams.append(`${e}`, `cs.${t}`)
                  : Array.isArray(t)
                  ? this.url.searchParams.append(`${e}`, `cs.{${t.join(',')}}`)
                  : this.url.searchParams.append(`${e}`, `cs.${JSON.stringify(t)}`),
                this
              )
            }
            containedBy(e, t) {
              return (
                'string' == typeof t
                  ? this.url.searchParams.append(`${e}`, `cd.${t}`)
                  : Array.isArray(t)
                  ? this.url.searchParams.append(`${e}`, `cd.{${t.join(',')}}`)
                  : this.url.searchParams.append(`${e}`, `cd.${JSON.stringify(t)}`),
                this
              )
            }
            rangeLt(e, t) {
              return this.url.searchParams.append(`${e}`, `sl.${t}`), this
            }
            rangeGt(e, t) {
              return this.url.searchParams.append(`${e}`, `sr.${t}`), this
            }
            rangeGte(e, t) {
              return this.url.searchParams.append(`${e}`, `nxl.${t}`), this
            }
            rangeLte(e, t) {
              return this.url.searchParams.append(`${e}`, `nxr.${t}`), this
            }
            rangeAdjacent(e, t) {
              return this.url.searchParams.append(`${e}`, `adj.${t}`), this
            }
            overlaps(e, t) {
              return (
                'string' == typeof t
                  ? this.url.searchParams.append(`${e}`, `ov.${t}`)
                  : this.url.searchParams.append(`${e}`, `ov.{${t.join(',')}}`),
                this
              )
            }
            textSearch(e, t, { config: r, type: n = null } = {}) {
              let s = ''
              'plain' === n
                ? (s = 'pl')
                : 'phrase' === n
                ? (s = 'ph')
                : 'websearch' === n && (s = 'w')
              const i = void 0 === r ? '' : `(${r})`
              return this.url.searchParams.append(`${e}`, `${s}fts${i}.${t}`), this
            }
            fts(e, t, { config: r } = {}) {
              const n = void 0 === r ? '' : `(${r})`
              return this.url.searchParams.append(`${e}`, `fts${n}.${t}`), this
            }
            plfts(e, t, { config: r } = {}) {
              const n = void 0 === r ? '' : `(${r})`
              return this.url.searchParams.append(`${e}`, `plfts${n}.${t}`), this
            }
            phfts(e, t, { config: r } = {}) {
              const n = void 0 === r ? '' : `(${r})`
              return this.url.searchParams.append(`${e}`, `phfts${n}.${t}`), this
            }
            wfts(e, t, { config: r } = {}) {
              const n = void 0 === r ? '' : `(${r})`
              return this.url.searchParams.append(`${e}`, `wfts${n}.${t}`), this
            }
            filter(e, t, r) {
              return this.url.searchParams.append(`${e}`, `${t}.${r}`), this
            }
            match(e) {
              return (
                Object.keys(e).forEach((t) => {
                  this.url.searchParams.append(`${t}`, `eq.${e[t]}`)
                }),
                this
              )
            }
          }
          class c extends i {
            constructor(e, { headers: t = {}, schema: r, fetch: n, shouldThrowOnError: s } = {}) {
              super({ fetch: n, shouldThrowOnError: s }),
                (this.url = new URL(e)),
                (this.headers = Object.assign({}, t)),
                (this.schema = r)
            }
            select(e = '*', { head: t = !1, count: r = null } = {}) {
              this.method = 'GET'
              let n = !1
              const s = e
                .split('')
                .map((e) => (/\s/.test(e) && !n ? '' : ('"' === e && (n = !n), e)))
                .join('')
              return (
                this.url.searchParams.set('select', s),
                r && (this.headers.Prefer = `count=${r}`),
                t && (this.method = 'HEAD'),
                new a(this)
              )
            }
            insert(
              e,
              {
                upsert: t = !1,
                onConflict: r,
                returning: n = 'representation',
                count: s = null,
              } = {}
            ) {
              this.method = 'POST'
              const i = [`return=${n}`]
              if (
                (t && i.push('resolution=merge-duplicates'),
                t && void 0 !== r && this.url.searchParams.set('on_conflict', r),
                (this.body = e),
                s && i.push(`count=${s}`),
                this.headers.Prefer && i.unshift(this.headers.Prefer),
                (this.headers.Prefer = i.join(',')),
                Array.isArray(e))
              ) {
                const t = e.reduce((e, t) => e.concat(Object.keys(t)), [])
                if (t.length > 0) {
                  const e = [...new Set(t)].map((e) => `"${e}"`)
                  this.url.searchParams.set('columns', e.join(','))
                }
              }
              return new a(this)
            }
            upsert(
              e,
              {
                onConflict: t,
                returning: r = 'representation',
                count: n = null,
                ignoreDuplicates: s = !1,
              } = {}
            ) {
              this.method = 'POST'
              const i = [`resolution=${s ? 'ignore' : 'merge'}-duplicates`, `return=${r}`]
              return (
                void 0 !== t && this.url.searchParams.set('on_conflict', t),
                (this.body = e),
                n && i.push(`count=${n}`),
                this.headers.Prefer && i.unshift(this.headers.Prefer),
                (this.headers.Prefer = i.join(',')),
                new a(this)
              )
            }
            update(e, { returning: t = 'representation', count: r = null } = {}) {
              this.method = 'PATCH'
              const n = [`return=${t}`]
              return (
                (this.body = e),
                r && n.push(`count=${r}`),
                this.headers.Prefer && n.unshift(this.headers.Prefer),
                (this.headers.Prefer = n.join(',')),
                new a(this)
              )
            }
            delete({ returning: e = 'representation', count: t = null } = {}) {
              this.method = 'DELETE'
              const r = [`return=${e}`]
              return (
                t && r.push(`count=${t}`),
                this.headers.Prefer && r.unshift(this.headers.Prefer),
                (this.headers.Prefer = r.join(',')),
                new a(this)
              )
            }
          }
          class h extends i {
            constructor(e, { headers: t = {}, schema: r, fetch: n, shouldThrowOnError: s } = {}) {
              super({ fetch: n, shouldThrowOnError: s }),
                (this.url = new URL(e)),
                (this.headers = Object.assign({}, t)),
                (this.schema = r)
            }
            rpc(e, { head: t = !1, count: r = null } = {}) {
              return (
                t
                  ? ((this.method = 'HEAD'),
                    e &&
                      Object.entries(e).forEach(([e, t]) => {
                        this.url.searchParams.append(e, t)
                      }))
                  : ((this.method = 'POST'), (this.body = e)),
                r &&
                  (void 0 !== this.headers.Prefer
                    ? (this.headers.Prefer += `,count=${r}`)
                    : (this.headers.Prefer = `count=${r}`)),
                new a(this)
              )
            }
          }
          const u = { 'X-Client-Info': 'postgrest-js/0.0.0-automated' }
          class l {
            constructor(e, { headers: t = {}, schema: r, fetch: n, throwOnError: s } = {}) {
              ;(this.url = e),
                (this.headers = Object.assign(Object.assign({}, u), t)),
                (this.schema = r),
                (this.fetch = n),
                (this.shouldThrowOnError = s)
            }
            auth(e) {
              return (this.headers.Authorization = `Bearer ${e}`), this
            }
            from(e) {
              const t = `${this.url}/${e}`
              return new c(t, {
                headers: this.headers,
                schema: this.schema,
                fetch: this.fetch,
                shouldThrowOnError: this.shouldThrowOnError,
              })
            }
            rpc(e, t, { head: r = !1, count: n = null } = {}) {
              const s = `${this.url}/rpc/${e}`
              return new h(s, {
                headers: this.headers,
                schema: this.schema,
                fetch: this.fetch,
                shouldThrowOnError: this.shouldThrowOnError,
              }).rpc(t, { head: r, count: n })
            }
          }
        },
        791: (e, t, r) => {
          'use strict'
          r.r(t),
            r.d(t, {
              RealtimeClient: () => E,
              RealtimePresence: () => x,
              RealtimeSubscription: () => S,
              Transformers: () => s,
            })
          var n,
            s = {}
          r.r(s),
            r.d(s, {
              PostgresTypes: () => n,
              convertCell: () => a,
              convertChangeData: () => i,
              convertColumn: () => o,
              toArray: () => d,
              toBoolean: () => h,
              toJson: () => l,
              toNumber: () => u,
              toTimestampString: () => f,
            }),
            (function (e) {
              ;(e.abstime = 'abstime'),
                (e.bool = 'bool'),
                (e.date = 'date'),
                (e.daterange = 'daterange'),
                (e.float4 = 'float4'),
                (e.float8 = 'float8'),
                (e.int2 = 'int2'),
                (e.int4 = 'int4'),
                (e.int4range = 'int4range'),
                (e.int8 = 'int8'),
                (e.int8range = 'int8range'),
                (e.json = 'json'),
                (e.jsonb = 'jsonb'),
                (e.money = 'money'),
                (e.numeric = 'numeric'),
                (e.oid = 'oid'),
                (e.reltime = 'reltime'),
                (e.text = 'text'),
                (e.time = 'time'),
                (e.timestamp = 'timestamp'),
                (e.timestamptz = 'timestamptz'),
                (e.timetz = 'timetz'),
                (e.tsrange = 'tsrange'),
                (e.tstzrange = 'tstzrange')
            })(n || (n = {}))
          const i = (e, t, r = {}) => {
              var n
              const s = null !== (n = r.skipTypes) && void 0 !== n ? n : []
              return Object.keys(t).reduce((r, n) => ((r[n] = o(n, e, t, s)), r), {})
            },
            o = (e, t, r, n) => {
              const s = t.find((t) => t.name === e),
                i = null == s ? void 0 : s.type,
                o = r[e]
              return i && !n.includes(i) ? a(i, o) : c(o)
            },
            a = (e, t) => {
              if ('_' === e.charAt(0)) {
                const r = e.slice(1, e.length)
                return d(t, r)
              }
              switch (e) {
                case n.bool:
                  return h(t)
                case n.float4:
                case n.float8:
                case n.int2:
                case n.int4:
                case n.int8:
                case n.numeric:
                case n.oid:
                  return u(t)
                case n.json:
                case n.jsonb:
                  return l(t)
                case n.timestamp:
                  return f(t)
                case n.abstime:
                case n.date:
                case n.daterange:
                case n.int4range:
                case n.int8range:
                case n.money:
                case n.reltime:
                case n.text:
                case n.time:
                case n.timestamptz:
                case n.timetz:
                case n.tsrange:
                case n.tstzrange:
                default:
                  return c(t)
              }
            },
            c = (e) => e,
            h = (e) => {
              switch (e) {
                case 't':
                  return !0
                case 'f':
                  return !1
                default:
                  return e
              }
            },
            u = (e) => {
              if ('string' == typeof e) {
                const t = parseFloat(e)
                if (!Number.isNaN(t)) return t
              }
              return e
            },
            l = (e) => {
              if ('string' == typeof e)
                try {
                  return JSON.parse(e)
                } catch (t) {
                  return console.log(`JSON parse error: ${t}`), e
                }
              return e
            },
            d = (e, t) => {
              if ('string' != typeof e) return e
              const r = e.length - 1,
                n = e[r]
              if ('{' === e[0] && '}' === n) {
                let n
                const s = e.slice(1, r)
                try {
                  n = JSON.parse('[' + s + ']')
                } catch (e) {
                  n = s ? s.split(',') : []
                }
                return n.map((e) => a(t, e))
              }
              return e
            },
            f = (e) => ('string' == typeof e ? e.replace(' ', 'T') : e)
          var p = r(840)
          const v = { 'X-Client-Info': 'realtime-js/1.4.5' }
          var y, m, g, b
          !(function (e) {
            ;(e[(e.connecting = 0)] = 'connecting'),
              (e[(e.open = 1)] = 'open'),
              (e[(e.closing = 2)] = 'closing'),
              (e[(e.closed = 3)] = 'closed')
          })(y || (y = {})),
            (function (e) {
              ;(e.closed = 'closed'),
                (e.errored = 'errored'),
                (e.joined = 'joined'),
                (e.joining = 'joining'),
                (e.leaving = 'leaving')
            })(m || (m = {})),
            (function (e) {
              ;(e.close = 'phx_close'),
                (e.error = 'phx_error'),
                (e.join = 'phx_join'),
                (e.reply = 'phx_reply'),
                (e.leave = 'phx_leave'),
                (e.access_token = 'access_token')
            })(g || (g = {})),
            (function (e) {
              e.websocket = 'websocket'
            })(b || (b = {}))
          class _ {
            constructor(e, t) {
              ;(this.callback = e),
                (this.timerCalc = t),
                (this.timer = void 0),
                (this.tries = 0),
                (this.callback = e),
                (this.timerCalc = t)
            }
            reset() {
              ;(this.tries = 0), clearTimeout(this.timer)
            }
            scheduleTimeout() {
              clearTimeout(this.timer),
                (this.timer = setTimeout(() => {
                  ;(this.tries = this.tries + 1), this.callback()
                }, this.timerCalc(this.tries + 1)))
            }
          }
          class w {
            constructor(e, t, r = {}, n = 1e4) {
              ;(this.channel = e),
                (this.event = t),
                (this.payload = r),
                (this.timeout = n),
                (this.sent = !1),
                (this.timeoutTimer = void 0),
                (this.ref = ''),
                (this.receivedResp = null),
                (this.recHooks = []),
                (this.refEvent = null)
            }
            resend(e) {
              ;(this.timeout = e),
                this._cancelRefEvent(),
                (this.ref = ''),
                (this.refEvent = null),
                (this.receivedResp = null),
                (this.sent = !1),
                this.send()
            }
            send() {
              this._hasReceived('timeout') ||
                (this.startTimeout(),
                (this.sent = !0),
                this.channel.socket.push({
                  topic: this.channel.topic,
                  event: this.event,
                  payload: this.payload,
                  ref: this.ref,
                }))
            }
            updatePayload(e) {
              this.payload = Object.assign(Object.assign({}, this.payload), e)
            }
            receive(e, t) {
              var r
              return (
                this._hasReceived(e) &&
                  t(null === (r = this.receivedResp) || void 0 === r ? void 0 : r.response),
                this.recHooks.push({ status: e, callback: t }),
                this
              )
            }
            startTimeout() {
              this.timeoutTimer ||
                ((this.ref = this.channel.socket.makeRef()),
                (this.refEvent = this.channel.replyEventName(this.ref)),
                this.channel.on(this.refEvent, (e) => {
                  this._cancelRefEvent(),
                    this._cancelTimeout(),
                    (this.receivedResp = e),
                    this._matchReceive(e)
                }),
                (this.timeoutTimer = setTimeout(() => {
                  this.trigger('timeout', {})
                }, this.timeout)))
            }
            trigger(e, t) {
              this.refEvent && this.channel.trigger(this.refEvent, { status: e, response: t })
            }
            destroy() {
              this._cancelRefEvent(), this._cancelTimeout()
            }
            _cancelRefEvent() {
              this.refEvent && this.channel.off(this.refEvent)
            }
            _cancelTimeout() {
              clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0)
            }
            _matchReceive({ status: e, response: t }) {
              this.recHooks.filter((t) => t.status === e).forEach((e) => e.callback(t))
            }
            _hasReceived(e) {
              return this.receivedResp && this.receivedResp.status === e
            }
          }
          class S {
            constructor(e, t = {}, r) {
              ;(this.topic = e),
                (this.params = t),
                (this.socket = r),
                (this.bindings = []),
                (this.state = m.closed),
                (this.joinedOnce = !1),
                (this.pushBuffer = []),
                (this.timeout = this.socket.timeout),
                (this.joinPush = new w(this, g.join, this.params, this.timeout)),
                (this.rejoinTimer = new _(
                  () => this.rejoinUntilConnected(),
                  this.socket.reconnectAfterMs
                )),
                this.joinPush.receive('ok', () => {
                  ;(this.state = m.joined),
                    this.rejoinTimer.reset(),
                    this.pushBuffer.forEach((e) => e.send()),
                    (this.pushBuffer = [])
                }),
                this.onClose(() => {
                  this.rejoinTimer.reset(),
                    this.socket.log('channel', `close ${this.topic} ${this.joinRef()}`),
                    (this.state = m.closed),
                    this.socket.remove(this)
                }),
                this.onError((e) => {
                  this.isLeaving() ||
                    this.isClosed() ||
                    (this.socket.log('channel', `error ${this.topic}`, e),
                    (this.state = m.errored),
                    this.rejoinTimer.scheduleTimeout())
                }),
                this.joinPush.receive('timeout', () => {
                  this.isJoining() &&
                    (this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout),
                    (this.state = m.errored),
                    this.rejoinTimer.scheduleTimeout())
                }),
                this.on(g.reply, (e, t) => {
                  this.trigger(this.replyEventName(t), e)
                })
            }
            rejoinUntilConnected() {
              this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this.rejoin()
            }
            subscribe(e = this.timeout) {
              if (this.joinedOnce)
                throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"
              return (this.joinedOnce = !0), this.rejoin(e), this.joinPush
            }
            onClose(e) {
              this.on(g.close, e)
            }
            onError(e) {
              this.on(g.error, (t) => e(t))
            }
            on(e, t) {
              this.bindings.push({ event: e, callback: t })
            }
            off(e) {
              this.bindings = this.bindings.filter((t) => t.event !== e)
            }
            canPush() {
              return this.socket.isConnected() && this.isJoined()
            }
            push(e, t, r = this.timeout) {
              if (!this.joinedOnce)
                throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`
              let n = new w(this, e, t, r)
              return this.canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)), n
            }
            updateJoinPayload(e) {
              this.joinPush.updatePayload(e)
            }
            unsubscribe(e = this.timeout) {
              this.state = m.leaving
              let t = () => {
                this.socket.log('channel', `leave ${this.topic}`),
                  this.trigger(g.close, 'leave', this.joinRef())
              }
              this.joinPush.destroy()
              let r = new w(this, g.leave, {}, e)
              return (
                r.receive('ok', () => t()).receive('timeout', () => t()),
                r.send(),
                this.canPush() || r.trigger('ok', {}),
                r
              )
            }
            onMessage(e, t, r) {
              return t
            }
            isMember(e) {
              return this.topic === e
            }
            joinRef() {
              return this.joinPush.ref
            }
            rejoin(e = this.timeout) {
              this.isLeaving() ||
                (this.socket.leaveOpenTopic(this.topic),
                (this.state = m.joining),
                this.joinPush.resend(e))
            }
            trigger(e, t, r) {
              let { close: n, error: s, leave: i, join: o } = g
              if (r && [n, s, i, o].indexOf(e) >= 0 && r !== this.joinRef()) return
              let a = this.onMessage(e, t, r)
              if (t && !a)
                throw 'channel onMessage callbacks must return the payload, modified or unmodified'
              this.bindings
                .filter((r) =>
                  '*' === r.event ? e === (null == t ? void 0 : t.type) : r.event === e
                )
                .map((e) => e.callback(a, r))
            }
            replyEventName(e) {
              return `chan_reply_${e}`
            }
            isClosed() {
              return this.state === m.closed
            }
            isErrored() {
              return this.state === m.errored
            }
            isJoined() {
              return this.state === m.joined
            }
            isJoining() {
              return this.state === m.joining
            }
            isLeaving() {
              return this.state === m.leaving
            }
          }
          class T {
            constructor() {
              this.HEADER_LENGTH = 1
            }
            decode(e, t) {
              return e.constructor === ArrayBuffer
                ? t(this._binaryDecode(e))
                : t('string' == typeof e ? JSON.parse(e) : {})
            }
            _binaryDecode(e) {
              const t = new DataView(e),
                r = new TextDecoder()
              return this._decodeBroadcast(e, t, r)
            }
            _decodeBroadcast(e, t, r) {
              const n = t.getUint8(1),
                s = t.getUint8(2)
              let i = this.HEADER_LENGTH + 2
              const o = r.decode(e.slice(i, i + n))
              i += n
              const a = r.decode(e.slice(i, i + s))
              return (
                (i += s),
                {
                  ref: null,
                  topic: o,
                  event: a,
                  payload: JSON.parse(r.decode(e.slice(i, e.byteLength))),
                }
              )
            }
          }
          const O = () => {}
          class E {
            constructor(e, t) {
              ;(this.accessToken = null),
                (this.channels = []),
                (this.endPoint = ''),
                (this.headers = v),
                (this.params = {}),
                (this.timeout = 1e4),
                (this.transport = p.w3cwebsocket),
                (this.heartbeatIntervalMs = 3e4),
                (this.longpollerTimeout = 2e4),
                (this.heartbeatTimer = void 0),
                (this.pendingHeartbeatRef = null),
                (this.ref = 0),
                (this.logger = O),
                (this.conn = null),
                (this.sendBuffer = []),
                (this.serializer = new T()),
                (this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }),
                (this.endPoint = `${e}/${b.websocket}`),
                (null == t ? void 0 : t.params) && (this.params = t.params),
                (null == t ? void 0 : t.headers) &&
                  (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)),
                (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
                (null == t ? void 0 : t.logger) && (this.logger = t.logger),
                (null == t ? void 0 : t.transport) && (this.transport = t.transport),
                (null == t ? void 0 : t.heartbeatIntervalMs) &&
                  (this.heartbeatIntervalMs = t.heartbeatIntervalMs),
                (null == t ? void 0 : t.longpollerTimeout) &&
                  (this.longpollerTimeout = t.longpollerTimeout),
                (this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs)
                  ? t.reconnectAfterMs
                  : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
                (this.encode = (null == t ? void 0 : t.encode)
                  ? t.encode
                  : (e, t) => t(JSON.stringify(e))),
                (this.decode = (null == t ? void 0 : t.decode)
                  ? t.decode
                  : this.serializer.decode.bind(this.serializer)),
                (this.reconnectTimer = new _(() => {
                  return (
                    (e = this),
                    (t = void 0),
                    (n = function* () {
                      yield this.disconnect(), this.connect()
                    }),
                    new ((r = void 0) || (r = Promise))(function (s, i) {
                      function o(e) {
                        try {
                          c(n.next(e))
                        } catch (e) {
                          i(e)
                        }
                      }
                      function a(e) {
                        try {
                          c(n.throw(e))
                        } catch (e) {
                          i(e)
                        }
                      }
                      function c(e) {
                        var t
                        e.done
                          ? s(e.value)
                          : ((t = e.value),
                            t instanceof r
                              ? t
                              : new r(function (e) {
                                  e(t)
                                })).then(o, a)
                      }
                      c((n = n.apply(e, t || [])).next())
                    })
                  )
                  var e, t, r, n
                }, this.reconnectAfterMs))
            }
            connect() {
              this.conn ||
                ((this.conn = new this.transport(this.endPointURL(), [], null, this.headers)),
                this.conn &&
                  ((this.conn.binaryType = 'arraybuffer'),
                  (this.conn.onopen = () => this._onConnOpen()),
                  (this.conn.onerror = (e) => this._onConnError(e)),
                  (this.conn.onmessage = (e) => this.onConnMessage(e)),
                  (this.conn.onclose = (e) => this._onConnClose(e))))
            }
            disconnect(e, t) {
              return new Promise((r, n) => {
                try {
                  this.conn &&
                    ((this.conn.onclose = function () {}),
                    e ? this.conn.close(e, t || '') : this.conn.close(),
                    (this.conn = null),
                    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                    this.reconnectTimer.reset()),
                    r({ error: null, data: !0 })
                } catch (e) {
                  r({ error: e, data: !1 })
                }
              })
            }
            log(e, t, r) {
              this.logger(e, t, r)
            }
            onOpen(e) {
              this.stateChangeCallbacks.open.push(e)
            }
            onClose(e) {
              this.stateChangeCallbacks.close.push(e)
            }
            onError(e) {
              this.stateChangeCallbacks.error.push(e)
            }
            onMessage(e) {
              this.stateChangeCallbacks.message.push(e)
            }
            connectionState() {
              switch (this.conn && this.conn.readyState) {
                case y.connecting:
                  return 'connecting'
                case y.open:
                  return 'open'
                case y.closing:
                  return 'closing'
                default:
                  return 'closed'
              }
            }
            isConnected() {
              return 'open' === this.connectionState()
            }
            remove(e) {
              this.channels = this.channels.filter((t) => t.joinRef() !== e.joinRef())
            }
            channel(e, t = {}) {
              let r = new S(e, t, this)
              return this.channels.push(r), r
            }
            push(e) {
              let { topic: t, event: r, payload: n, ref: s } = e,
                i = () => {
                  this.encode(e, (e) => {
                    var t
                    null === (t = this.conn) || void 0 === t || t.send(e)
                  })
                }
              this.log('push', `${t} ${r} (${s})`, n),
                this.isConnected() ? i() : this.sendBuffer.push(i)
            }
            onConnMessage(e) {
              this.decode(e.data, (e) => {
                let { topic: t, event: r, payload: n, ref: s } = e
                ;((s && s === this.pendingHeartbeatRef) || r === (null == n ? void 0 : n.type)) &&
                  (this.pendingHeartbeatRef = null),
                  this.log(
                    'receive',
                    `${n.status || ''} ${t} ${r} ${(s && '(' + s + ')') || ''}`,
                    n
                  ),
                  this.channels.filter((e) => e.isMember(t)).forEach((e) => e.trigger(r, n, s)),
                  this.stateChangeCallbacks.message.forEach((t) => t(e))
              })
            }
            endPointURL() {
              return this._appendParams(
                this.endPoint,
                Object.assign({}, this.params, { vsn: '1.0.0' })
              )
            }
            makeRef() {
              let e = this.ref + 1
              return e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
            }
            setAuth(e) {
              this.accessToken = e
              try {
                this.channels.forEach((t) => {
                  e && t.updateJoinPayload({ user_token: e }),
                    t.joinedOnce && t.isJoined() && t.push(g.access_token, { access_token: e })
                })
              } catch (e) {
                console.log('setAuth error', e)
              }
            }
            leaveOpenTopic(e) {
              let t = this.channels.find((t) => t.topic === e && (t.isJoined() || t.isJoining()))
              t && (this.log('transport', `leaving duplicate topic "${e}"`), t.unsubscribe())
            }
            _onConnOpen() {
              this.log('transport', `connected to ${this.endPointURL()}`),
                this._flushSendBuffer(),
                this.reconnectTimer.reset(),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                (this.heartbeatTimer = setInterval(
                  () => this._sendHeartbeat(),
                  this.heartbeatIntervalMs
                )),
                this.stateChangeCallbacks.open.forEach((e) => e())
            }
            _onConnClose(e) {
              this.log('transport', 'close', e),
                this._triggerChanError(),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.scheduleTimeout(),
                this.stateChangeCallbacks.close.forEach((t) => t(e))
            }
            _onConnError(e) {
              this.log('transport', e.message),
                this._triggerChanError(),
                this.stateChangeCallbacks.error.forEach((t) => t(e))
            }
            _triggerChanError() {
              this.channels.forEach((e) => e.trigger(g.error))
            }
            _appendParams(e, t) {
              if (0 === Object.keys(t).length) return e
              const r = e.match(/\?/) ? '&' : '?'
              return `${e}${r}${new URLSearchParams(t)}`
            }
            _flushSendBuffer() {
              this.isConnected() &&
                this.sendBuffer.length > 0 &&
                (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []))
            }
            _sendHeartbeat() {
              var e
              if (this.isConnected()) {
                if (this.pendingHeartbeatRef)
                  return (
                    (this.pendingHeartbeatRef = null),
                    this.log(
                      'transport',
                      'heartbeat timeout. Attempting to re-establish connection'
                    ),
                    void (
                      null === (e = this.conn) ||
                      void 0 === e ||
                      e.close(1e3, 'hearbeat timeout')
                    )
                  )
                ;(this.pendingHeartbeatRef = this.makeRef()),
                  this.push({
                    topic: 'phoenix',
                    event: 'heartbeat',
                    payload: {},
                    ref: this.pendingHeartbeatRef,
                  }),
                  this.setAuth(this.accessToken)
              }
            }
          }
          var j = r(465),
            k = r.n(j)
          class x {
            constructor(e, t) {
              ;(this.channel = e),
                (this.state = {}),
                (this.pendingDiffs = []),
                (this.joinRef = null),
                (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} })
              const r = (null == t ? void 0 : t.events) || {
                state: 'presence_state',
                diff: 'presence_diff',
              }
              this.channel.on(r.state, (e) => {
                const { onJoin: t, onLeave: r, onSync: n } = this.caller
                ;(this.joinRef = this.channel.joinRef()),
                  (this.state = x.syncState(this.state, e, t, r)),
                  this.pendingDiffs.forEach((e) => {
                    this.state = x.syncDiff(this.state, e, t, r)
                  }),
                  (this.pendingDiffs = []),
                  n()
              }),
                this.channel.on(r.diff, (e) => {
                  const { onJoin: t, onLeave: r, onSync: n } = this.caller
                  this.inPendingSyncState()
                    ? this.pendingDiffs.push(e)
                    : ((this.state = x.syncDiff(this.state, e, t, r)), n())
                })
            }
            static syncState(e, t, r, n) {
              const s = k()(e),
                i = this.transformState(t),
                o = {},
                a = {}
              return (
                this.map(s, (e, t) => {
                  i[e] || (a[e] = t)
                }),
                this.map(i, (e, t) => {
                  const r = s[e]
                  if (r) {
                    const n = t.map((e) => e.presence_id),
                      s = r.map((e) => e.presence_id),
                      i = t.filter((e) => s.indexOf(e.presence_id) < 0),
                      c = r.filter((e) => n.indexOf(e.presence_id) < 0)
                    i.length > 0 && (o[e] = i), c.length > 0 && (a[e] = c)
                  } else o[e] = t
                }),
                this.syncDiff(s, { joins: o, leaves: a }, r, n)
              )
            }
            static syncDiff(e, t, r, n) {
              const { joins: s, leaves: i } = {
                joins: this.transformState(t.joins),
                leaves: this.transformState(t.leaves),
              }
              return (
                r || (r = () => {}),
                n || (n = () => {}),
                this.map(s, (t, n) => {
                  const s = e[t]
                  if (((e[t] = k()(n)), s)) {
                    const r = e[t].map((e) => e.presence_id),
                      n = s.filter((e) => r.indexOf(e.presence_id) < 0)
                    e[t].unshift(...n)
                  }
                  r(t, s, n)
                }),
                this.map(i, (t, r) => {
                  let s = e[t]
                  if (!s) return
                  const i = r.map((e) => e.presence_id)
                  ;(s = s.filter((e) => i.indexOf(e.presence_id) < 0)),
                    (e[t] = s),
                    n(t, s, r),
                    0 === s.length && delete e[t]
                }),
                e
              )
            }
            static list(e, t) {
              return t || (t = (e, t) => t), this.map(e, (e, r) => t(e, r))
            }
            static map(e, t) {
              return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]))
            }
            static transformState(e) {
              return (
                (e = k()(e)),
                Object.getOwnPropertyNames(e).reduce((t, r) => {
                  const n = e[r]
                  return (
                    (t[r] =
                      'metas' in n
                        ? n.metas.map(
                            (e) => (
                              (e.presence_id = e.phx_ref),
                              delete e.phx_ref,
                              delete e.phx_ref_prev,
                              e
                            )
                          )
                        : n),
                    t
                  )
                }, {})
              )
            }
            onJoin(e) {
              this.caller.onJoin = e
            }
            onLeave(e) {
              this.caller.onLeave = e
            }
            onSync(e) {
              this.caller.onSync = e
            }
            list(e) {
              return x.list(this.state, e)
            }
            inPendingSyncState() {
              return !this.joinRef || this.joinRef !== this.channel.joinRef()
            }
          }
        },
        552: (e, t, r) => {
          'use strict'
          r.r(t), r.d(t, { StorageClient: () => g, SupabaseStorageClient: () => g })
          const n = { 'X-Client-Info': 'storage-js/0.0.0' }
          var s = function (e, t, r, n) {
            return new (r || (r = Promise))(function (s, i) {
              function o(e) {
                try {
                  c(n.next(e))
                } catch (e) {
                  i(e)
                }
              }
              function a(e) {
                try {
                  c(n.throw(e))
                } catch (e) {
                  i(e)
                }
              }
              function c(e) {
                var t
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, a)
              }
              c((n = n.apply(e, t || [])).next())
            })
          }
          const i = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
          function o(e, t, r, n, o, a) {
            return s(this, void 0, void 0, function* () {
              return new Promise((s, c) => {
                e(
                  r,
                  ((e, t, r, n) => {
                    const s = { method: e, headers: (null == t ? void 0 : t.headers) || {} }
                    return 'GET' === e
                      ? s
                      : ((s.headers = Object.assign(
                          { 'Content-Type': 'application/json' },
                          null == t ? void 0 : t.headers
                        )),
                        (s.body = JSON.stringify(n)),
                        Object.assign(Object.assign({}, s), r))
                  })(t, n, o, a)
                )
                  .then((e) => {
                    if (!e.ok) throw e
                    return (null == n ? void 0 : n.noResolveJson) ? s(e) : e.json()
                  })
                  .then((e) => s(e))
                  .catch((e) =>
                    ((e, t) => {
                      if ('function' != typeof e.json) return t(e)
                      e.json().then((r) =>
                        t({ message: i(r), status: (null == e ? void 0 : e.status) || 500 })
                      )
                    })(e, c)
                  )
              })
            })
          }
          function a(e, t, r, n) {
            return s(this, void 0, void 0, function* () {
              return o(e, 'GET', t, r, n)
            })
          }
          function c(e, t, r, n, i) {
            return s(this, void 0, void 0, function* () {
              return o(e, 'POST', t, n, i, r)
            })
          }
          function h(e, t, r, n, i) {
            return s(this, void 0, void 0, function* () {
              return o(e, 'DELETE', t, n, i, r)
            })
          }
          var u = r(98),
            l = r.n(u)
          const d = (e) => {
            let t
            return (t = e || ('undefined' == typeof fetch ? l() : fetch)), (...e) => t(...e)
          }
          var f = function (e, t, r, n) {
              return new (r || (r = Promise))(function (s, i) {
                function o(e) {
                  try {
                    c(n.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function a(e) {
                  try {
                    c(n.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t)
                          })).then(o, a)
                }
                c((n = n.apply(e, t || [])).next())
              })
            },
            p = function (e, t, r, n) {
              return new (r || (r = Promise))(function (s, i) {
                function o(e) {
                  try {
                    c(n.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function a(e) {
                  try {
                    c(n.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t)
                          })).then(o, a)
                }
                c((n = n.apply(e, t || [])).next())
              })
            }
          const v = { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } },
            y = { cacheControl: '3600', contentType: 'text/plain;charset=UTF-8', upsert: !1 }
          class m {
            constructor(e, t = {}, r, n) {
              ;(this.url = e), (this.headers = t), (this.bucketId = r), (this.fetch = d(n))
            }
            uploadOrUpdate(e, t, r, n) {
              return p(this, void 0, void 0, function* () {
                try {
                  let s
                  const i = Object.assign(Object.assign({}, y), n),
                    o = Object.assign(
                      Object.assign({}, this.headers),
                      'POST' === e && { 'x-upsert': String(i.upsert) }
                    )
                  'undefined' != typeof Blob && r instanceof Blob
                    ? ((s = new FormData()),
                      s.append('cacheControl', i.cacheControl),
                      s.append('', r))
                    : 'undefined' != typeof FormData && r instanceof FormData
                    ? ((s = r), s.append('cacheControl', i.cacheControl))
                    : ((s = r),
                      (o['cache-control'] = `max-age=${i.cacheControl}`),
                      (o['content-type'] = i.contentType))
                  const a = this._removeEmptyFolders(t),
                    c = this._getFinalPath(a),
                    h = yield this.fetch(`${this.url}/object/${c}`, {
                      method: e,
                      body: s,
                      headers: o,
                    })
                  return h.ok
                    ? { data: { Key: c }, error: null }
                    : { data: null, error: yield h.json() }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            upload(e, t, r) {
              return p(this, void 0, void 0, function* () {
                return this.uploadOrUpdate('POST', e, t, r)
              })
            }
            update(e, t, r) {
              return p(this, void 0, void 0, function* () {
                return this.uploadOrUpdate('PUT', e, t, r)
              })
            }
            move(e, t) {
              return p(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield c(
                      this.fetch,
                      `${this.url}/object/move`,
                      { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            copy(e, t) {
              return p(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield c(
                      this.fetch,
                      `${this.url}/object/copy`,
                      { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            createSignedUrl(e, t) {
              return p(this, void 0, void 0, function* () {
                try {
                  const r = this._getFinalPath(e)
                  let n = yield c(
                    this.fetch,
                    `${this.url}/object/sign/${r}`,
                    { expiresIn: t },
                    { headers: this.headers }
                  )
                  const s = `${this.url}${n.signedURL}`
                  return (n = { signedURL: s }), { data: n, error: null, signedURL: s }
                } catch (e) {
                  return { data: null, error: e, signedURL: null }
                }
              })
            }
            createSignedUrls(e, t) {
              return p(this, void 0, void 0, function* () {
                try {
                  return {
                    data: (yield c(
                      this.fetch,
                      `${this.url}/object/sign/${this.bucketId}`,
                      { expiresIn: t, paths: e },
                      { headers: this.headers }
                    )).map((e) =>
                      Object.assign(Object.assign({}, e), {
                        signedURL: e.signedURL ? `${this.url}${e.signedURL}` : null,
                      })
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            download(e) {
              return p(this, void 0, void 0, function* () {
                try {
                  const t = this._getFinalPath(e),
                    r = yield a(this.fetch, `${this.url}/object/${t}`, {
                      headers: this.headers,
                      noResolveJson: !0,
                    })
                  return { data: yield r.blob(), error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            getPublicUrl(e) {
              try {
                const t = this._getFinalPath(e),
                  r = `${this.url}/object/public/${t}`
                return { data: { publicURL: r }, error: null, publicURL: r }
              } catch (e) {
                return { data: null, error: e, publicURL: null }
              }
            }
            remove(e) {
              return p(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield h(
                      this.fetch,
                      `${this.url}/object/${this.bucketId}`,
                      { prefixes: e },
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            list(e, t, r) {
              return p(this, void 0, void 0, function* () {
                try {
                  const n = Object.assign(Object.assign(Object.assign({}, v), t), {
                    prefix: e || '',
                  })
                  return {
                    data: yield c(
                      this.fetch,
                      `${this.url}/object/list/${this.bucketId}`,
                      n,
                      { headers: this.headers },
                      r
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            _getFinalPath(e) {
              return `${this.bucketId}/${e}`
            }
            _removeEmptyFolders(e) {
              return e.replace(/^\/|\/$/g, '').replace(/\/+/g, '/')
            }
          }
          class g extends class {
            constructor(e, t = {}, r) {
              ;(this.url = e),
                (this.headers = Object.assign(Object.assign({}, n), t)),
                (this.fetch = d(r))
            }
            listBuckets() {
              return f(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield a(this.fetch, `${this.url}/bucket`, { headers: this.headers }),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            getBucket(e) {
              return f(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield a(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            createBucket(e, t = { public: !1 }) {
              return f(this, void 0, void 0, function* () {
                try {
                  return {
                    data: (yield c(
                      this.fetch,
                      `${this.url}/bucket`,
                      { id: e, name: e, public: t.public },
                      { headers: this.headers }
                    )).name,
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            updateBucket(e, t) {
              return f(this, void 0, void 0, function* () {
                try {
                  const r = yield (function (e, t, r, n, i) {
                    return s(this, void 0, void 0, function* () {
                      return o(e, 'PUT', t, n, undefined, r)
                    })
                  })(
                    this.fetch,
                    `${this.url}/bucket/${e}`,
                    { id: e, name: e, public: t.public },
                    { headers: this.headers }
                  )
                  return { data: r, error: null }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            emptyBucket(e) {
              return f(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield c(
                      this.fetch,
                      `${this.url}/bucket/${e}/empty`,
                      {},
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
            deleteBucket(e) {
              return f(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield h(
                      this.fetch,
                      `${this.url}/bucket/${e}`,
                      {},
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  return { data: null, error: e }
                }
              })
            }
          } {
            constructor(e, t = {}, r) {
              super(e, t, r)
            }
            from(e) {
              return new m(this.url, this.headers, e, this.fetch)
            }
          }
        },
        98: function (e, t) {
          var r = 'undefined' != typeof self ? self : this,
            n = (function () {
              function e() {
                ;(this.fetch = !1), (this.DOMException = r.DOMException)
              }
              return (e.prototype = r), new e()
            })()
          !(function (e) {
            !(function (t) {
              var r = 'URLSearchParams' in e,
                n = 'Symbol' in e && 'iterator' in Symbol,
                s =
                  'FileReader' in e &&
                  'Blob' in e &&
                  (function () {
                    try {
                      return new Blob(), !0
                    } catch (e) {
                      return !1
                    }
                  })(),
                i = 'FormData' in e,
                o = 'ArrayBuffer' in e
              if (o)
                var a = [
                    '[object Int8Array]',
                    '[object Uint8Array]',
                    '[object Uint8ClampedArray]',
                    '[object Int16Array]',
                    '[object Uint16Array]',
                    '[object Int32Array]',
                    '[object Uint32Array]',
                    '[object Float32Array]',
                    '[object Float64Array]',
                  ],
                  c =
                    ArrayBuffer.isView ||
                    function (e) {
                      return e && a.indexOf(Object.prototype.toString.call(e)) > -1
                    }
              function h(e) {
                if (('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)))
                  throw new TypeError('Invalid character in header field name')
                return e.toLowerCase()
              }
              function u(e) {
                return 'string' != typeof e && (e = String(e)), e
              }
              function l(e) {
                var t = {
                  next: function () {
                    var t = e.shift()
                    return { done: void 0 === t, value: t }
                  },
                }
                return (
                  n &&
                    (t[Symbol.iterator] = function () {
                      return t
                    }),
                  t
                )
              }
              function d(e) {
                ;(this.map = {}),
                  e instanceof d
                    ? e.forEach(function (e, t) {
                        this.append(t, e)
                      }, this)
                    : Array.isArray(e)
                    ? e.forEach(function (e) {
                        this.append(e[0], e[1])
                      }, this)
                    : e &&
                      Object.getOwnPropertyNames(e).forEach(function (t) {
                        this.append(t, e[t])
                      }, this)
              }
              function f(e) {
                if (e.bodyUsed) return Promise.reject(new TypeError('Already read'))
                e.bodyUsed = !0
              }
              function p(e) {
                return new Promise(function (t, r) {
                  ;(e.onload = function () {
                    t(e.result)
                  }),
                    (e.onerror = function () {
                      r(e.error)
                    })
                })
              }
              function v(e) {
                var t = new FileReader(),
                  r = p(t)
                return t.readAsArrayBuffer(e), r
              }
              function y(e) {
                if (e.slice) return e.slice(0)
                var t = new Uint8Array(e.byteLength)
                return t.set(new Uint8Array(e)), t.buffer
              }
              function m() {
                return (
                  (this.bodyUsed = !1),
                  (this._initBody = function (e) {
                    var t
                    ;(this._bodyInit = e),
                      e
                        ? 'string' == typeof e
                          ? (this._bodyText = e)
                          : s && Blob.prototype.isPrototypeOf(e)
                          ? (this._bodyBlob = e)
                          : i && FormData.prototype.isPrototypeOf(e)
                          ? (this._bodyFormData = e)
                          : r && URLSearchParams.prototype.isPrototypeOf(e)
                          ? (this._bodyText = e.toString())
                          : o && s && (t = e) && DataView.prototype.isPrototypeOf(t)
                          ? ((this._bodyArrayBuffer = y(e.buffer)),
                            (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                          : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))
                          ? (this._bodyArrayBuffer = y(e))
                          : (this._bodyText = e = Object.prototype.toString.call(e))
                        : (this._bodyText = ''),
                      this.headers.get('content-type') ||
                        ('string' == typeof e
                          ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                          : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set('content-type', this._bodyBlob.type)
                          : r &&
                            URLSearchParams.prototype.isPrototypeOf(e) &&
                            this.headers.set(
                              'content-type',
                              'application/x-www-form-urlencoded;charset=UTF-8'
                            ))
                  }),
                  s &&
                    ((this.blob = function () {
                      var e = f(this)
                      if (e) return e
                      if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                      if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                      if (this._bodyFormData)
                        throw new Error('could not read FormData body as blob')
                      return Promise.resolve(new Blob([this._bodyText]))
                    }),
                    (this.arrayBuffer = function () {
                      return this._bodyArrayBuffer
                        ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                        : this.blob().then(v)
                    })),
                  (this.text = function () {
                    var e,
                      t,
                      r,
                      n = f(this)
                    if (n) return n
                    if (this._bodyBlob)
                      return (
                        (e = this._bodyBlob), (r = p((t = new FileReader()))), t.readAsText(e), r
                      )
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(
                        (function (e) {
                          for (
                            var t = new Uint8Array(e), r = new Array(t.length), n = 0;
                            n < t.length;
                            n++
                          )
                            r[n] = String.fromCharCode(t[n])
                          return r.join('')
                        })(this._bodyArrayBuffer)
                      )
                    if (this._bodyFormData) throw new Error('could not read FormData body as text')
                    return Promise.resolve(this._bodyText)
                  }),
                  i &&
                    (this.formData = function () {
                      return this.text().then(_)
                    }),
                  (this.json = function () {
                    return this.text().then(JSON.parse)
                  }),
                  this
                )
              }
              ;(d.prototype.append = function (e, t) {
                ;(e = h(e)), (t = u(t))
                var r = this.map[e]
                this.map[e] = r ? r + ', ' + t : t
              }),
                (d.prototype.delete = function (e) {
                  delete this.map[h(e)]
                }),
                (d.prototype.get = function (e) {
                  return (e = h(e)), this.has(e) ? this.map[e] : null
                }),
                (d.prototype.has = function (e) {
                  return this.map.hasOwnProperty(h(e))
                }),
                (d.prototype.set = function (e, t) {
                  this.map[h(e)] = u(t)
                }),
                (d.prototype.forEach = function (e, t) {
                  for (var r in this.map)
                    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }),
                (d.prototype.keys = function () {
                  var e = []
                  return (
                    this.forEach(function (t, r) {
                      e.push(r)
                    }),
                    l(e)
                  )
                }),
                (d.prototype.values = function () {
                  var e = []
                  return (
                    this.forEach(function (t) {
                      e.push(t)
                    }),
                    l(e)
                  )
                }),
                (d.prototype.entries = function () {
                  var e = []
                  return (
                    this.forEach(function (t, r) {
                      e.push([r, t])
                    }),
                    l(e)
                  )
                }),
                n && (d.prototype[Symbol.iterator] = d.prototype.entries)
              var g = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
              function b(e, t) {
                var r,
                  n,
                  s = (t = t || {}).body
                if (e instanceof b) {
                  if (e.bodyUsed) throw new TypeError('Already read')
                  ;(this.url = e.url),
                    (this.credentials = e.credentials),
                    t.headers || (this.headers = new d(e.headers)),
                    (this.method = e.method),
                    (this.mode = e.mode),
                    (this.signal = e.signal),
                    s || null == e._bodyInit || ((s = e._bodyInit), (e.bodyUsed = !0))
                } else this.url = String(e)
                if (
                  ((this.credentials = t.credentials || this.credentials || 'same-origin'),
                  (!t.headers && this.headers) || (this.headers = new d(t.headers)),
                  (this.method =
                    ((n = (r = t.method || this.method || 'GET').toUpperCase()),
                    g.indexOf(n) > -1 ? n : r)),
                  (this.mode = t.mode || this.mode || null),
                  (this.signal = t.signal || this.signal),
                  (this.referrer = null),
                  ('GET' === this.method || 'HEAD' === this.method) && s)
                )
                  throw new TypeError('Body not allowed for GET or HEAD requests')
                this._initBody(s)
              }
              function _(e) {
                var t = new FormData()
                return (
                  e
                    .trim()
                    .split('&')
                    .forEach(function (e) {
                      if (e) {
                        var r = e.split('='),
                          n = r.shift().replace(/\+/g, ' '),
                          s = r.join('=').replace(/\+/g, ' ')
                        t.append(decodeURIComponent(n), decodeURIComponent(s))
                      }
                    }),
                  t
                )
              }
              function w(e, t) {
                t || (t = {}),
                  (this.type = 'default'),
                  (this.status = void 0 === t.status ? 200 : t.status),
                  (this.ok = this.status >= 200 && this.status < 300),
                  (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
                  (this.headers = new d(t.headers)),
                  (this.url = t.url || ''),
                  this._initBody(e)
              }
              ;(b.prototype.clone = function () {
                return new b(this, { body: this._bodyInit })
              }),
                m.call(b.prototype),
                m.call(w.prototype),
                (w.prototype.clone = function () {
                  return new w(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new d(this.headers),
                    url: this.url,
                  })
                }),
                (w.error = function () {
                  var e = new w(null, { status: 0, statusText: '' })
                  return (e.type = 'error'), e
                })
              var S = [301, 302, 303, 307, 308]
              ;(w.redirect = function (e, t) {
                if (-1 === S.indexOf(t)) throw new RangeError('Invalid status code')
                return new w(null, { status: t, headers: { location: e } })
              }),
                (t.DOMException = e.DOMException)
              try {
                new t.DOMException()
              } catch (e) {
                ;(t.DOMException = function (e, t) {
                  ;(this.message = e), (this.name = t)
                  var r = Error(e)
                  this.stack = r.stack
                }),
                  (t.DOMException.prototype = Object.create(Error.prototype)),
                  (t.DOMException.prototype.constructor = t.DOMException)
              }
              function T(e, r) {
                return new Promise(function (n, i) {
                  var o = new b(e, r)
                  if (o.signal && o.signal.aborted)
                    return i(new t.DOMException('Aborted', 'AbortError'))
                  var a = new XMLHttpRequest()
                  function c() {
                    a.abort()
                  }
                  ;(a.onload = function () {
                    var e,
                      t,
                      r = {
                        status: a.status,
                        statusText: a.statusText,
                        headers:
                          ((e = a.getAllResponseHeaders() || ''),
                          (t = new d()),
                          e
                            .replace(/\r?\n[\t ]+/g, ' ')
                            .split(/\r?\n/)
                            .forEach(function (e) {
                              var r = e.split(':'),
                                n = r.shift().trim()
                              if (n) {
                                var s = r.join(':').trim()
                                t.append(n, s)
                              }
                            }),
                          t),
                      }
                    r.url = 'responseURL' in a ? a.responseURL : r.headers.get('X-Request-URL')
                    var s = 'response' in a ? a.response : a.responseText
                    n(new w(s, r))
                  }),
                    (a.onerror = function () {
                      i(new TypeError('Network request failed'))
                    }),
                    (a.ontimeout = function () {
                      i(new TypeError('Network request failed'))
                    }),
                    (a.onabort = function () {
                      i(new t.DOMException('Aborted', 'AbortError'))
                    }),
                    a.open(o.method, o.url, !0),
                    'include' === o.credentials
                      ? (a.withCredentials = !0)
                      : 'omit' === o.credentials && (a.withCredentials = !1),
                    'responseType' in a && s && (a.responseType = 'blob'),
                    o.headers.forEach(function (e, t) {
                      a.setRequestHeader(t, e)
                    }),
                    o.signal &&
                      (o.signal.addEventListener('abort', c),
                      (a.onreadystatechange = function () {
                        4 === a.readyState && o.signal.removeEventListener('abort', c)
                      })),
                    a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                })
              }
              ;(T.polyfill = !0),
                e.fetch || ((e.fetch = T), (e.Headers = d), (e.Request = b), (e.Response = w)),
                (t.Headers = d),
                (t.Request = b),
                (t.Response = w),
                (t.fetch = T),
                Object.defineProperty(t, '__esModule', { value: !0 })
            })({})
          })(n),
            (n.fetch.ponyfill = !0),
            delete n.fetch.polyfill
          var s = n
          ;((t = s.fetch).default = s.fetch),
            (t.fetch = s.fetch),
            (t.Headers = s.Headers),
            (t.Request = s.Request),
            (t.Response = s.Response),
            (e.exports = t)
        },
        284: (e) => {
          var t = function () {
            if ('object' == typeof self && self) return self
            if ('object' == typeof window && window) return window
            throw new Error('Unable to resolve global `this`')
          }
          e.exports = (function () {
            if (this) return this
            if ('object' == typeof globalThis && globalThis) return globalThis
            try {
              Object.defineProperty(Object.prototype, '__global__', {
                get: function () {
                  return this
                },
                configurable: !0,
              })
            } catch (e) {
              return t()
            }
            try {
              return __global__ || t()
            } finally {
              delete Object.prototype.__global__
            }
          })()
        },
        465: (e, t, r) => {
          e = r.nmd(e)
          var n = '__lodash_hash_undefined__',
            s = 9007199254740991,
            i = '[object Arguments]',
            o = '[object Boolean]',
            a = '[object Date]',
            c = '[object Function]',
            h = '[object GeneratorFunction]',
            u = '[object Map]',
            l = '[object Number]',
            d = '[object Object]',
            f = '[object Promise]',
            p = '[object RegExp]',
            v = '[object Set]',
            y = '[object String]',
            m = '[object Symbol]',
            g = '[object WeakMap]',
            b = '[object ArrayBuffer]',
            _ = '[object DataView]',
            w = '[object Float32Array]',
            S = '[object Float64Array]',
            T = '[object Int8Array]',
            O = '[object Int16Array]',
            E = '[object Int32Array]',
            j = '[object Uint8Array]',
            k = '[object Uint8ClampedArray]',
            x = '[object Uint16Array]',
            $ = '[object Uint32Array]',
            P = /\w*$/,
            A = /^\[object .+?Constructor\]$/,
            R = /^(?:0|[1-9]\d*)$/,
            C = {}
          ;(C[i] =
            C['[object Array]'] =
            C[b] =
            C[_] =
            C[o] =
            C[a] =
            C[w] =
            C[S] =
            C[T] =
            C[O] =
            C[E] =
            C[u] =
            C[l] =
            C[d] =
            C[p] =
            C[v] =
            C[y] =
            C[m] =
            C[j] =
            C[k] =
            C[x] =
            C[$] =
              !0),
            (C['[object Error]'] = C[c] = C[g] = !1)
          var U = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
            I = 'object' == typeof self && self && self.Object === Object && self,
            D = U || I || Function('return this')(),
            N = t && !t.nodeType && t,
            B = N && e && !e.nodeType && e,
            M = B && B.exports === N
          function L(e, t) {
            return e.set(t[0], t[1]), e
          }
          function F(e, t) {
            return e.add(t), e
          }
          function H(e, t, r, n) {
            var s = -1,
              i = e ? e.length : 0
            for (n && i && (r = e[++s]); ++s < i; ) r = t(r, e[s], s, e)
            return r
          }
          function G(e) {
            var t = !1
            if (null != e && 'function' != typeof e.toString)
              try {
                t = !!(e + '')
              } catch (e) {}
            return t
          }
          function J(e) {
            var t = -1,
              r = Array(e.size)
            return (
              e.forEach(function (e, n) {
                r[++t] = [n, e]
              }),
              r
            )
          }
          function z(e, t) {
            return function (r) {
              return e(t(r))
            }
          }
          function q(e) {
            var t = -1,
              r = Array(e.size)
            return (
              e.forEach(function (e) {
                r[++t] = e
              }),
              r
            )
          }
          var K,
            W = Array.prototype,
            V = Function.prototype,
            Y = Object.prototype,
            X = D['__core-js_shared__'],
            Q = (K = /[^.]+$/.exec((X && X.keys && X.keys.IE_PROTO) || ''))
              ? 'Symbol(src)_1.' + K
              : '',
            Z = V.toString,
            ee = Y.hasOwnProperty,
            te = Y.toString,
            re = RegExp(
              '^' +
                Z.call(ee)
                  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                '$'
            ),
            ne = M ? D.Buffer : void 0,
            se = D.Symbol,
            ie = D.Uint8Array,
            oe = z(Object.getPrototypeOf, Object),
            ae = Object.create,
            ce = Y.propertyIsEnumerable,
            he = W.splice,
            ue = Object.getOwnPropertySymbols,
            le = ne ? ne.isBuffer : void 0,
            de = z(Object.keys, Object),
            fe = De(D, 'DataView'),
            pe = De(D, 'Map'),
            ve = De(D, 'Promise'),
            ye = De(D, 'Set'),
            me = De(D, 'WeakMap'),
            ge = De(Object, 'create'),
            be = Fe(fe),
            _e = Fe(pe),
            we = Fe(ve),
            Se = Fe(ye),
            Te = Fe(me),
            Oe = se ? se.prototype : void 0,
            Ee = Oe ? Oe.valueOf : void 0
          function je(e) {
            var t = -1,
              r = e ? e.length : 0
            for (this.clear(); ++t < r; ) {
              var n = e[t]
              this.set(n[0], n[1])
            }
          }
          function ke(e) {
            var t = -1,
              r = e ? e.length : 0
            for (this.clear(); ++t < r; ) {
              var n = e[t]
              this.set(n[0], n[1])
            }
          }
          function xe(e) {
            var t = -1,
              r = e ? e.length : 0
            for (this.clear(); ++t < r; ) {
              var n = e[t]
              this.set(n[0], n[1])
            }
          }
          function $e(e) {
            this.__data__ = new ke(e)
          }
          function Pe(e, t, r) {
            var n = e[t]
            ;(ee.call(e, t) && He(n, r) && (void 0 !== r || t in e)) || (e[t] = r)
          }
          function Ae(e, t) {
            for (var r = e.length; r--; ) if (He(e[r][0], t)) return r
            return -1
          }
          function Re(e, t, r, n, s, f, g) {
            var A
            if ((n && (A = f ? n(e, s, f, g) : n(e)), void 0 !== A)) return A
            if (!Ke(e)) return e
            var R = Ge(e)
            if (R) {
              if (
                ((A = (function (e) {
                  var t = e.length,
                    r = e.constructor(t)
                  return (
                    t &&
                      'string' == typeof e[0] &&
                      ee.call(e, 'index') &&
                      ((r.index = e.index), (r.input = e.input)),
                    r
                  )
                })(e)),
                !t)
              )
                return (function (e, t) {
                  var r = -1,
                    n = e.length
                  for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
                  return t
                })(e, A)
            } else {
              var U = Be(e),
                I = U == c || U == h
              if (ze(e))
                return (function (e, t) {
                  if (t) return e.slice()
                  var r = new e.constructor(e.length)
                  return e.copy(r), r
                })(e, t)
              if (U == d || U == i || (I && !f)) {
                if (G(e)) return f ? e : {}
                if (
                  ((A = (function (e) {
                    return 'function' != typeof e.constructor || Le(e)
                      ? {}
                      : Ke((t = oe(e)))
                      ? ae(t)
                      : {}
                    var t
                  })(I ? {} : e)),
                  !t)
                )
                  return (function (e, t) {
                    return Ue(e, Ne(e), t)
                  })(
                    e,
                    (function (e, t) {
                      return e && Ue(t, We(t), e)
                    })(A, e)
                  )
              } else {
                if (!C[U]) return f ? e : {}
                A = (function (e, t, r, n) {
                  var s,
                    i = e.constructor
                  switch (t) {
                    case b:
                      return Ce(e)
                    case o:
                    case a:
                      return new i(+e)
                    case _:
                      return (function (e, t) {
                        var r = t ? Ce(e.buffer) : e.buffer
                        return new e.constructor(r, e.byteOffset, e.byteLength)
                      })(e, n)
                    case w:
                    case S:
                    case T:
                    case O:
                    case E:
                    case j:
                    case k:
                    case x:
                    case $:
                      return (function (e, t) {
                        var r = t ? Ce(e.buffer) : e.buffer
                        return new e.constructor(r, e.byteOffset, e.length)
                      })(e, n)
                    case u:
                      return (function (e, t, r) {
                        return H(t ? r(J(e), !0) : J(e), L, new e.constructor())
                      })(e, n, r)
                    case l:
                    case y:
                      return new i(e)
                    case p:
                      return (function (e) {
                        var t = new e.constructor(e.source, P.exec(e))
                        return (t.lastIndex = e.lastIndex), t
                      })(e)
                    case v:
                      return (function (e, t, r) {
                        return H(t ? r(q(e), !0) : q(e), F, new e.constructor())
                      })(e, n, r)
                    case m:
                      return (s = e), Ee ? Object(Ee.call(s)) : {}
                  }
                })(e, U, Re, t)
              }
            }
            g || (g = new $e())
            var D = g.get(e)
            if (D) return D
            if ((g.set(e, A), !R))
              var N = r
                ? (function (e) {
                    return (function (e, t, r) {
                      var n = t(e)
                      return Ge(e)
                        ? n
                        : (function (e, t) {
                            for (var r = -1, n = t.length, s = e.length; ++r < n; ) e[s + r] = t[r]
                            return e
                          })(n, r(e))
                    })(e, We, Ne)
                  })(e)
                : We(e)
            return (
              (function (e, t) {
                for (var r = -1, n = e ? e.length : 0; ++r < n && !1 !== t(e[r], r); );
              })(N || e, function (s, i) {
                N && (s = e[(i = s)]), Pe(A, i, Re(s, t, r, n, i, e, g))
              }),
              A
            )
          }
          function Ce(e) {
            var t = new e.constructor(e.byteLength)
            return new ie(t).set(new ie(e)), t
          }
          function Ue(e, t, r, n) {
            r || (r = {})
            for (var s = -1, i = t.length; ++s < i; ) {
              var o = t[s],
                a = n ? n(r[o], e[o], o, r, e) : void 0
              Pe(r, o, void 0 === a ? e[o] : a)
            }
            return r
          }
          function Ie(e, t) {
            var r,
              n,
              s = e.__data__
            return (
              'string' == (n = typeof (r = t)) || 'number' == n || 'symbol' == n || 'boolean' == n
                ? '__proto__' !== r
                : null === r
            )
              ? s['string' == typeof t ? 'string' : 'hash']
              : s.map
          }
          function De(e, t) {
            var r = (function (e, t) {
              return null == e ? void 0 : e[t]
            })(e, t)
            return (function (e) {
              return !(!Ke(e) || ((t = e), Q && Q in t)) && (qe(e) || G(e) ? re : A).test(Fe(e))
              var t
            })(r)
              ? r
              : void 0
          }
          ;(je.prototype.clear = function () {
            this.__data__ = ge ? ge(null) : {}
          }),
            (je.prototype.delete = function (e) {
              return this.has(e) && delete this.__data__[e]
            }),
            (je.prototype.get = function (e) {
              var t = this.__data__
              if (ge) {
                var r = t[e]
                return r === n ? void 0 : r
              }
              return ee.call(t, e) ? t[e] : void 0
            }),
            (je.prototype.has = function (e) {
              var t = this.__data__
              return ge ? void 0 !== t[e] : ee.call(t, e)
            }),
            (je.prototype.set = function (e, t) {
              return (this.__data__[e] = ge && void 0 === t ? n : t), this
            }),
            (ke.prototype.clear = function () {
              this.__data__ = []
            }),
            (ke.prototype.delete = function (e) {
              var t = this.__data__,
                r = Ae(t, e)
              return !(r < 0 || (r == t.length - 1 ? t.pop() : he.call(t, r, 1), 0))
            }),
            (ke.prototype.get = function (e) {
              var t = this.__data__,
                r = Ae(t, e)
              return r < 0 ? void 0 : t[r][1]
            }),
            (ke.prototype.has = function (e) {
              return Ae(this.__data__, e) > -1
            }),
            (ke.prototype.set = function (e, t) {
              var r = this.__data__,
                n = Ae(r, e)
              return n < 0 ? r.push([e, t]) : (r[n][1] = t), this
            }),
            (xe.prototype.clear = function () {
              this.__data__ = { hash: new je(), map: new (pe || ke)(), string: new je() }
            }),
            (xe.prototype.delete = function (e) {
              return Ie(this, e).delete(e)
            }),
            (xe.prototype.get = function (e) {
              return Ie(this, e).get(e)
            }),
            (xe.prototype.has = function (e) {
              return Ie(this, e).has(e)
            }),
            (xe.prototype.set = function (e, t) {
              return Ie(this, e).set(e, t), this
            }),
            ($e.prototype.clear = function () {
              this.__data__ = new ke()
            }),
            ($e.prototype.delete = function (e) {
              return this.__data__.delete(e)
            }),
            ($e.prototype.get = function (e) {
              return this.__data__.get(e)
            }),
            ($e.prototype.has = function (e) {
              return this.__data__.has(e)
            }),
            ($e.prototype.set = function (e, t) {
              var r = this.__data__
              if (r instanceof ke) {
                var n = r.__data__
                if (!pe || n.length < 199) return n.push([e, t]), this
                r = this.__data__ = new xe(n)
              }
              return r.set(e, t), this
            })
          var Ne = ue
              ? z(ue, Object)
              : function () {
                  return []
                },
            Be = function (e) {
              return te.call(e)
            }
          function Me(e, t) {
            return (
              !!(t = null == t ? s : t) &&
              ('number' == typeof e || R.test(e)) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            )
          }
          function Le(e) {
            var t = e && e.constructor
            return e === (('function' == typeof t && t.prototype) || Y)
          }
          function Fe(e) {
            if (null != e) {
              try {
                return Z.call(e)
              } catch (e) {}
              try {
                return e + ''
              } catch (e) {}
            }
            return ''
          }
          function He(e, t) {
            return e === t || (e != e && t != t)
          }
          ;((fe && Be(new fe(new ArrayBuffer(1))) != _) ||
            (pe && Be(new pe()) != u) ||
            (ve && Be(ve.resolve()) != f) ||
            (ye && Be(new ye()) != v) ||
            (me && Be(new me()) != g)) &&
            (Be = function (e) {
              var t = te.call(e),
                r = t == d ? e.constructor : void 0,
                n = r ? Fe(r) : void 0
              if (n)
                switch (n) {
                  case be:
                    return _
                  case _e:
                    return u
                  case we:
                    return f
                  case Se:
                    return v
                  case Te:
                    return g
                }
              return t
            })
          var Ge = Array.isArray
          function Je(e) {
            return (
              null != e &&
              (function (e) {
                return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= s
              })(e.length) &&
              !qe(e)
            )
          }
          var ze =
            le ||
            function () {
              return !1
            }
          function qe(e) {
            var t = Ke(e) ? te.call(e) : ''
            return t == c || t == h
          }
          function Ke(e) {
            var t = typeof e
            return !!e && ('object' == t || 'function' == t)
          }
          function We(e) {
            return Je(e)
              ? (function (e, t) {
                  var r =
                      Ge(e) ||
                      (function (e) {
                        return (
                          (function (e) {
                            return (
                              (function (e) {
                                return !!e && 'object' == typeof e
                              })(e) && Je(e)
                            )
                          })(e) &&
                          ee.call(e, 'callee') &&
                          (!ce.call(e, 'callee') || te.call(e) == i)
                        )
                      })(e)
                        ? (function (e, t) {
                            for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
                            return n
                          })(e.length, String)
                        : [],
                    n = r.length,
                    s = !!n
                  for (var o in e)
                    (!t && !ee.call(e, o)) || (s && ('length' == o || Me(o, n))) || r.push(o)
                  return r
                })(e)
              : (function (e) {
                  if (!Le(e)) return de(e)
                  var t = []
                  for (var r in Object(e)) ee.call(e, r) && 'constructor' != r && t.push(r)
                  return t
                })(e)
          }
          e.exports = function (e) {
            return Re(e, !0, !0)
          }
        },
        296: function (e, t, r) {
          'use strict'
          var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (s, i) {
                function o(e) {
                  try {
                    c(n.next(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function a(e) {
                  try {
                    c(n.throw(e))
                  } catch (e) {
                    i(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t)
                          })).then(o, a)
                }
                c((n = n.apply(e, t || [])).next())
              })
            }
          Object.defineProperty(t, '__esModule', { value: !0 })
          const s = r(678),
            i = r(610),
            o = r(283),
            a = r(528),
            c = r(552),
            h = r(248),
            u = r(501),
            l = r(791),
            d = {
              schema: 'public',
              autoRefreshToken: !0,
              persistSession: !0,
              detectSessionInUrl: !0,
              multiTab: !0,
              headers: s.DEFAULT_HEADERS,
            }
          t.default = class {
            constructor(e, t, r) {
              if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
                throw new Error('supabaseUrl is required.')
              if (!t) throw new Error('supabaseKey is required.')
              const n = (0, i.stripTrailingSlash)(e),
                o = Object.assign(Object.assign({}, d), r)
              if (
                ((this.restUrl = `${n}/rest/v1`),
                (this.realtimeUrl = `${n}/realtime/v1`.replace('http', 'ws')),
                (this.authUrl = `${n}/auth/v1`),
                (this.storageUrl = `${n}/storage/v1`),
                n.match(/(supabase\.co)|(supabase\.in)/))
              ) {
                const e = n.split('.')
                this.functionsUrl = `${e[0]}.functions.${e[1]}.${e[2]}`
              } else this.functionsUrl = `${n}/functions/v1`
              ;(this.schema = o.schema),
                (this.multiTab = o.multiTab),
                (this.fetch = o.fetch),
                (this.headers = Object.assign(
                  Object.assign({}, s.DEFAULT_HEADERS),
                  null == r ? void 0 : r.headers
                )),
                (this.shouldThrowOnError = o.shouldThrowOnError || !1),
                (this.auth = this._initSupabaseAuthClient(o)),
                (this.realtime = this._initRealtimeClient(
                  Object.assign({ headers: this.headers }, o.realtime)
                )),
                this._listenForAuthEvents(),
                this._listenForMultiTabEvents()
            }
            get functions() {
              return new h.FunctionsClient(this.functionsUrl, {
                headers: this._getAuthHeaders(),
                customFetch: this.fetch,
              })
            }
            get storage() {
              return new c.SupabaseStorageClient(
                this.storageUrl,
                this._getAuthHeaders(),
                this.fetch
              )
            }
            from(e) {
              const t = `${this.restUrl}/${e}`
              return new a.SupabaseQueryBuilder(t, {
                headers: this._getAuthHeaders(),
                schema: this.schema,
                realtime: this.realtime,
                table: e,
                fetch: this.fetch,
                shouldThrowOnError: this.shouldThrowOnError,
              })
            }
            rpc(e, t, { head: r = !1, count: n = null } = {}) {
              return this._initPostgRESTClient().rpc(e, t, { head: r, count: n })
            }
            removeAllSubscriptions() {
              return n(this, void 0, void 0, function* () {
                const e = this.getSubscriptions().slice(),
                  t = e.map((e) => this.removeSubscription(e))
                return (yield Promise.all(t)).map(({ error: t }, r) => ({
                  data: { subscription: e[r] },
                  error: t,
                }))
              })
            }
            removeSubscription(e) {
              return n(this, void 0, void 0, function* () {
                const { error: t } = yield this._closeSubscription(e),
                  r = this.getSubscriptions(),
                  n = r.filter((e) => e.isJoined()).length
                return (
                  0 === r.length && (yield this.realtime.disconnect()),
                  { data: { openSubscriptions: n }, error: t }
                )
              })
            }
            _closeSubscription(e) {
              return n(this, void 0, void 0, function* () {
                let t = null
                if (!e.isClosed()) {
                  const { error: r } = yield this._unsubscribeSubscription(e)
                  t = r
                }
                return this.realtime.remove(e), { error: t }
              })
            }
            _unsubscribeSubscription(e) {
              return new Promise((t) => {
                e.unsubscribe()
                  .receive('ok', () => t({ error: null }))
                  .receive('error', (e) => t({ error: e }))
                  .receive('timeout', () => t({ error: new Error('timed out') }))
              })
            }
            getSubscriptions() {
              return this.realtime.channels
            }
            _initSupabaseAuthClient({
              autoRefreshToken: e,
              persistSession: t,
              detectSessionInUrl: r,
              localStorage: n,
              headers: s,
              fetch: i,
            }) {
              const a = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`,
              }
              return new o.SupabaseAuthClient({
                url: this.authUrl,
                headers: Object.assign(Object.assign({}, s), a),
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: r,
                localStorage: n,
                fetch: i,
              })
            }
            _initRealtimeClient(e) {
              return new l.RealtimeClient(
                this.realtimeUrl,
                Object.assign(Object.assign({}, e), {
                  params: Object.assign(Object.assign({}, null == e ? void 0 : e.params), {
                    apikey: this.supabaseKey,
                  }),
                })
              )
            }
            _initPostgRESTClient() {
              return new u.PostgrestClient(this.restUrl, {
                headers: this._getAuthHeaders(),
                schema: this.schema,
                fetch: this.fetch,
                throwOnError: this.shouldThrowOnError,
              })
            }
            _getAuthHeaders() {
              var e, t
              const r = Object.assign({}, this.headers),
                n =
                  null !==
                    (t =
                      null === (e = this.auth.session()) || void 0 === e
                        ? void 0
                        : e.access_token) && void 0 !== t
                    ? t
                    : this.supabaseKey
              return (
                (r.apikey = this.supabaseKey),
                (r.Authorization = r.Authorization || `Bearer ${n}`),
                r
              )
            }
            _listenForMultiTabEvents() {
              if (
                !this.multiTab ||
                !(0, i.isBrowser)() ||
                !(null === window || void 0 === window ? void 0 : window.addEventListener)
              )
                return null
              try {
                return null === window || void 0 === window
                  ? void 0
                  : window.addEventListener('storage', (e) => {
                      var t, r, n
                      if (e.key === s.STORAGE_KEY) {
                        const s = JSON.parse(String(e.newValue)),
                          i =
                            null !==
                              (r =
                                null === (t = null == s ? void 0 : s.currentSession) || void 0 === t
                                  ? void 0
                                  : t.access_token) && void 0 !== r
                              ? r
                              : void 0,
                          o =
                            null === (n = this.auth.session()) || void 0 === n
                              ? void 0
                              : n.access_token
                        i
                          ? !o && i
                            ? this._handleTokenChanged('SIGNED_IN', i, 'STORAGE')
                            : o !== i && this._handleTokenChanged('TOKEN_REFRESHED', i, 'STORAGE')
                          : this._handleTokenChanged('SIGNED_OUT', i, 'STORAGE')
                      }
                    })
              } catch (e) {
                return console.error('_listenForMultiTabEvents', e), null
              }
            }
            _listenForAuthEvents() {
              let { data: e } = this.auth.onAuthStateChange((e, t) => {
                this._handleTokenChanged(e, null == t ? void 0 : t.access_token, 'CLIENT')
              })
              return e
            }
            _handleTokenChanged(e, t, r) {
              ;('TOKEN_REFRESHED' !== e && 'SIGNED_IN' !== e) || this.changedAccessToken === t
                ? ('SIGNED_OUT' !== e && 'USER_DELETED' !== e) ||
                  (this.realtime.setAuth(this.supabaseKey), 'STORAGE' == r && this.auth.signOut())
                : (this.realtime.setAuth(t),
                  'STORAGE' == r && this.auth.setAuth(t),
                  (this.changedAccessToken = t))
            }
          }
        },
        341: function (e, t, r) {
          'use strict'
          var n =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, r, n) {
                    void 0 === n && (n = r)
                    var s = Object.getOwnPropertyDescriptor(t, r)
                    ;(s && !('get' in s ? !t.__esModule : s.writable || s.configurable)) ||
                      (s = {
                        enumerable: !0,
                        get: function () {
                          return t[r]
                        },
                      }),
                      Object.defineProperty(e, n, s)
                  }
                : function (e, t, r, n) {
                    void 0 === n && (n = r), (e[n] = t[r])
                  }),
            s =
              (this && this.__exportStar) ||
              function (e, t) {
                for (var r in e)
                  'default' === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
              },
            i =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e }
              }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.AuthSession =
              t.AuthUser =
              t.SupabaseRealtimePayload =
              t.SupabaseClientOptions =
              t.SupabaseClient =
              t.createClient =
              t.PostgrestError =
              t.PostgrestMaybeSingleResponse =
              t.PostgrestSingleResponse =
              t.PostgrestResponse =
                void 0)
          const o = i(r(296))
          t.SupabaseClient = o.default
          const a = r(717)
          Object.defineProperty(t, 'SupabaseClientOptions', {
            enumerable: !0,
            get: function () {
              return a.SupabaseClientOptions
            },
          }),
            Object.defineProperty(t, 'SupabaseRealtimePayload', {
              enumerable: !0,
              get: function () {
                return a.SupabaseRealtimePayload
              },
            })
          const c = r(271)
          Object.defineProperty(t, 'AuthUser', {
            enumerable: !0,
            get: function () {
              return c.User
            },
          }),
            Object.defineProperty(t, 'AuthSession', {
              enumerable: !0,
              get: function () {
                return c.Session
              },
            }),
            s(r(271), t)
          var h = r(501)
          Object.defineProperty(t, 'PostgrestResponse', {
            enumerable: !0,
            get: function () {
              return h.PostgrestResponse
            },
          }),
            Object.defineProperty(t, 'PostgrestSingleResponse', {
              enumerable: !0,
              get: function () {
                return h.PostgrestSingleResponse
              },
            }),
            Object.defineProperty(t, 'PostgrestMaybeSingleResponse', {
              enumerable: !0,
              get: function () {
                return h.PostgrestMaybeSingleResponse
              },
            }),
            Object.defineProperty(t, 'PostgrestError', {
              enumerable: !0,
              get: function () {
                return h.PostgrestError
              },
            }),
            s(r(791), t),
            (t.createClient = (e, t, r) => new o.default(e, t, r))
        },
        283: (e, t, r) => {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.SupabaseAuthClient = void 0)
          const n = r(271)
          class s extends n.GoTrueClient {
            constructor(e) {
              super(e)
            }
          }
          t.SupabaseAuthClient = s
        },
        528: (e, t, r) => {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.SupabaseQueryBuilder = void 0)
          const n = r(501),
            s = r(308)
          class i extends n.PostgrestQueryBuilder {
            constructor(
              e,
              { headers: t = {}, schema: r, realtime: n, table: s, fetch: i, shouldThrowOnError: o }
            ) {
              super(e, { headers: t, schema: r, fetch: i, shouldThrowOnError: o }),
                (this._subscription = null),
                (this._realtime = n),
                (this._headers = t),
                (this._schema = r),
                (this._table = s)
            }
            on(e, t) {
              return (
                this._realtime.isConnected() || this._realtime.connect(),
                this._subscription ||
                  (this._subscription = new s.SupabaseRealtimeClient(
                    this._realtime,
                    this._headers,
                    this._schema,
                    this._table
                  )),
                this._subscription.on(e, t)
              )
            }
          }
          t.SupabaseQueryBuilder = i
        },
        308: (e, t, r) => {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.SupabaseRealtimeClient = void 0)
          const n = r(791)
          t.SupabaseRealtimeClient = class {
            constructor(e, t, r, n) {
              const s = {},
                i = '*' === n ? `realtime:${r}` : `realtime:${r}:${n}`,
                o = t.Authorization.split(' ')[1]
              o && (s.user_token = o), (this.subscription = e.channel(i, s))
            }
            getPayloadRecords(e) {
              const t = { new: {}, old: {} }
              return (
                ('INSERT' !== e.type && 'UPDATE' !== e.type) ||
                  (t.new = n.Transformers.convertChangeData(e.columns, e.record)),
                ('UPDATE' !== e.type && 'DELETE' !== e.type) ||
                  (t.old = n.Transformers.convertChangeData(e.columns, e.old_record)),
                t
              )
            }
            on(e, t) {
              return (
                this.subscription.on(e, (e) => {
                  let r = {
                    schema: e.schema,
                    table: e.table,
                    commit_timestamp: e.commit_timestamp,
                    eventType: e.type,
                    new: {},
                    old: {},
                    errors: e.errors,
                  }
                  ;(r = Object.assign(Object.assign({}, r), this.getPayloadRecords(e))), t(r)
                }),
                this
              )
            }
            subscribe(e = () => {}) {
              return (
                this.subscription.onError((t) => e('SUBSCRIPTION_ERROR', t)),
                this.subscription.onClose(() => e('CLOSED')),
                this.subscription
                  .subscribe()
                  .receive('ok', () => e('SUBSCRIBED'))
                  .receive('error', (t) => e('SUBSCRIPTION_ERROR', t))
                  .receive('timeout', () => e('RETRYING_AFTER_TIMEOUT')),
                this.subscription
              )
            }
          }
        },
        678: (e, t, r) => {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.STORAGE_KEY = t.DEFAULT_HEADERS = void 0)
          const n = r(506)
          ;(t.DEFAULT_HEADERS = { 'X-Client-Info': `supabase-js/${n.version}` }),
            (t.STORAGE_KEY = 'supabase.auth.token')
        },
        610: (e, t) => {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.isBrowser = t.stripTrailingSlash = t.uuid = void 0),
            (t.uuid = function () {
              return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                var t = (16 * Math.random()) | 0
                return ('x' == e ? t : (3 & t) | 8).toString(16)
              })
            }),
            (t.stripTrailingSlash = function (e) {
              return e.replace(/\/$/, '')
            }),
            (t.isBrowser = () => 'undefined' != typeof window)
        },
        717: (e, t) => {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 })
        },
        506: (e, t) => {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.version = void 0),
            (t.version = '0.0.0-automated')
        },
        840: (e, t, r) => {
          var n
          if ('object' == typeof globalThis) n = globalThis
          else
            try {
              n = r(284)
            } catch (e) {
            } finally {
              if ((n || 'undefined' == typeof window || (n = window), !n))
                throw new Error('Could not determine global this')
            }
          var s = n.WebSocket || n.MozWebSocket,
            i = r(387)
          function o(e, t) {
            return t ? new s(e, t) : new s(e)
          }
          s &&
            ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function (e) {
              Object.defineProperty(o, e, {
                get: function () {
                  return s[e]
                },
              })
            }),
            (e.exports = { w3cwebsocket: s ? o : null, version: i })
        },
        387: (e, t, r) => {
          e.exports = r(794).version
        },
        794: (e) => {
          'use strict'
          e.exports = { version: '1.0.34' }
        },
      },
      t = {}
    function r(n) {
      var s = t[n]
      if (void 0 !== s) return s.exports
      var i = (t[n] = { id: n, loaded: !1, exports: {} })
      return e[n].call(i.exports, i, i.exports, r), (i.loaded = !0), i.exports
    }
    return (
      (r.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e
        return r.d(t, { a: t }), t
      }),
      (r.d = (e, t) => {
        for (var n in t)
          r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
      }),
      (r.g = (function () {
        if ('object' == typeof globalThis) return globalThis
        try {
          return this || new Function('return this')()
        } catch (e) {
          if ('object' == typeof window) return window
        }
      })()),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
      r(341)
    )
  })()
})
