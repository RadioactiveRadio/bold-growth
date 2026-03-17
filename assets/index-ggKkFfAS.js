(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const f of r)
      if (f.type === "childList")
        for (const o of f.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(r) {
    const f = {};
    return (
      r.integrity && (f.integrity = r.integrity),
      r.referrerPolicy && (f.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const f = u(r);
    fetch(r.href, f);
  }
})();
var Eh = { exports: {} },
  qr = {};
var M1;
function Pv() {
  if (M1) return qr;
  M1 = 1;
  var d = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(i, r, f) {
    var o = null;
    if (
      (f !== void 0 && (o = "" + f),
      r.key !== void 0 && (o = "" + r.key),
      "key" in r)
    ) {
      f = {};
      for (var h in r) h !== "key" && (f[h] = r[h]);
    } else f = r;
    return (
      (r = f.ref),
      { $$typeof: d, type: i, key: o, ref: r !== void 0 ? r : null, props: f }
    );
  }
  return ((qr.Fragment = l), (qr.jsx = u), (qr.jsxs = u), qr);
}
var O1;
function Iv() {
  return (O1 || ((O1 = 1), (Eh.exports = Pv())), Eh.exports);
}
var z = Iv(),
  zh = { exports: {} },
  Tt = {};
var C1;
function tx() {
  if (C1) return Tt;
  C1 = 1;
  var d = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    o = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function x(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (S && E[S]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    D = {};
  function X(E, q, I) {
    ((this.props = E),
      (this.context = q),
      (this.refs = D),
      (this.updater = I || O));
  }
  ((X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (E, q) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, q, "setState");
    }),
    (X.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function G() {}
  G.prototype = X.prototype;
  function k(E, q, I) {
    ((this.props = E),
      (this.context = q),
      (this.refs = D),
      (this.updater = I || O));
  }
  var Y = (k.prototype = new G());
  ((Y.constructor = k), b(Y, X.prototype), (Y.isPureReactComponent = !0));
  var Q = Array.isArray;
  function F() {}
  var j = { H: null, A: null, T: null, S: null },
    W = Object.prototype.hasOwnProperty;
  function J(E, q, I) {
    var tt = I.ref;
    return {
      $$typeof: d,
      type: E,
      key: q,
      ref: tt !== void 0 ? tt : null,
      props: I,
    };
  }
  function $(E, q) {
    return J(E.type, q, E.props);
  }
  function ot(E) {
    return typeof E == "object" && E !== null && E.$$typeof === d;
  }
  function P(E) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (I) {
        return q[I];
      })
    );
  }
  var bt = /\/+/g;
  function _t(E, q) {
    return typeof E == "object" && E !== null && E.key != null
      ? P("" + E.key)
      : q.toString(36);
  }
  function vt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(F, F)
            : ((E.status = "pending"),
              E.then(
                function (q) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = q));
                },
                function (q) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = q));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function N(E, q, I, tt, ut) {
    var dt = typeof E;
    (dt === "undefined" || dt === "boolean") && (E = null);
    var pt = !1;
    if (E === null) pt = !0;
    else
      switch (dt) {
        case "bigint":
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case d:
            case l:
              pt = !0;
              break;
            case _:
              return ((pt = E._init), N(pt(E._payload), q, I, tt, ut));
          }
      }
    if (pt)
      return (
        (ut = ut(E)),
        (pt = tt === "" ? "." + _t(E, 0) : tt),
        Q(ut)
          ? ((I = ""),
            pt != null && (I = pt.replace(bt, "$&/") + "/"),
            N(ut, q, I, "", function (Mn) {
              return Mn;
            }))
          : ut != null &&
            (ot(ut) &&
              (ut = $(
                ut,
                I +
                  (ut.key == null || (E && E.key === ut.key)
                    ? ""
                    : ("" + ut.key).replace(bt, "$&/") + "/") +
                  pt,
              )),
            q.push(ut)),
        1
      );
    pt = 0;
    var Kt = tt === "" ? "." : tt + ":";
    if (Q(E))
      for (var Dt = 0; Dt < E.length; Dt++)
        ((tt = E[Dt]), (dt = Kt + _t(tt, Dt)), (pt += N(tt, q, I, dt, ut)));
    else if (((Dt = x(E)), typeof Dt == "function"))
      for (E = Dt.call(E), Dt = 0; !(tt = E.next()).done; )
        ((tt = tt.value),
          (dt = Kt + _t(tt, Dt++)),
          (pt += N(tt, q, I, dt, ut)));
    else if (dt === "object") {
      if (typeof E.then == "function") return N(vt(E), q, I, tt, ut);
      throw (
        (q = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return pt;
  }
  function V(E, q, I) {
    if (E == null) return E;
    var tt = [],
      ut = 0;
    return (
      N(E, tt, "", "", function (dt) {
        return q.call(I, dt, ut++);
      }),
      tt
    );
  }
  function et(E) {
    if (E._status === -1) {
      var q = E._result;
      ((q = q()),
        q.then(
          function (I) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = I));
          },
          function (I) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = I));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = q)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ht =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(q)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    M = {
      map: V,
      forEach: function (E, q, I) {
        V(
          E,
          function () {
            q.apply(this, arguments);
          },
          I,
        );
      },
      count: function (E) {
        var q = 0;
        return (
          V(E, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (E) {
        return (
          V(E, function (q) {
            return q;
          }) || []
        );
      },
      only: function (E) {
        if (!ot(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (Tt.Activity = v),
    (Tt.Children = M),
    (Tt.Component = X),
    (Tt.Fragment = u),
    (Tt.Profiler = r),
    (Tt.PureComponent = k),
    (Tt.StrictMode = i),
    (Tt.Suspense = m),
    (Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j),
    (Tt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return j.H.useMemoCache(E);
      },
    }),
    (Tt.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Tt.cacheSignal = function () {
      return null;
    }),
    (Tt.cloneElement = function (E, q, I) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var tt = b({}, E.props),
        ut = E.key;
      if (q != null)
        for (dt in (q.key !== void 0 && (ut = "" + q.key), q))
          !W.call(q, dt) ||
            dt === "key" ||
            dt === "__self" ||
            dt === "__source" ||
            (dt === "ref" && q.ref === void 0) ||
            (tt[dt] = q[dt]);
      var dt = arguments.length - 2;
      if (dt === 1) tt.children = I;
      else if (1 < dt) {
        for (var pt = Array(dt), Kt = 0; Kt < dt; Kt++)
          pt[Kt] = arguments[Kt + 2];
        tt.children = pt;
      }
      return J(E.type, ut, tt);
    }),
    (Tt.createContext = function (E) {
      return (
        (E = {
          $$typeof: o,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: f, _context: E }),
        E
      );
    }),
    (Tt.createElement = function (E, q, I) {
      var tt,
        ut = {},
        dt = null;
      if (q != null)
        for (tt in (q.key !== void 0 && (dt = "" + q.key), q))
          W.call(q, tt) &&
            tt !== "key" &&
            tt !== "__self" &&
            tt !== "__source" &&
            (ut[tt] = q[tt]);
      var pt = arguments.length - 2;
      if (pt === 1) ut.children = I;
      else if (1 < pt) {
        for (var Kt = Array(pt), Dt = 0; Dt < pt; Dt++)
          Kt[Dt] = arguments[Dt + 2];
        ut.children = Kt;
      }
      if (E && E.defaultProps)
        for (tt in ((pt = E.defaultProps), pt))
          ut[tt] === void 0 && (ut[tt] = pt[tt]);
      return J(E, dt, ut);
    }),
    (Tt.createRef = function () {
      return { current: null };
    }),
    (Tt.forwardRef = function (E) {
      return { $$typeof: h, render: E };
    }),
    (Tt.isValidElement = ot),
    (Tt.lazy = function (E) {
      return { $$typeof: _, _payload: { _status: -1, _result: E }, _init: et };
    }),
    (Tt.memo = function (E, q) {
      return { $$typeof: g, type: E, compare: q === void 0 ? null : q };
    }),
    (Tt.startTransition = function (E) {
      var q = j.T,
        I = {};
      j.T = I;
      try {
        var tt = E(),
          ut = j.S;
        (ut !== null && ut(I, tt),
          typeof tt == "object" &&
            tt !== null &&
            typeof tt.then == "function" &&
            tt.then(F, ht));
      } catch (dt) {
        ht(dt);
      } finally {
        (q !== null && I.types !== null && (q.types = I.types), (j.T = q));
      }
    }),
    (Tt.unstable_useCacheRefresh = function () {
      return j.H.useCacheRefresh();
    }),
    (Tt.use = function (E) {
      return j.H.use(E);
    }),
    (Tt.useActionState = function (E, q, I) {
      return j.H.useActionState(E, q, I);
    }),
    (Tt.useCallback = function (E, q) {
      return j.H.useCallback(E, q);
    }),
    (Tt.useContext = function (E) {
      return j.H.useContext(E);
    }),
    (Tt.useDebugValue = function () {}),
    (Tt.useDeferredValue = function (E, q) {
      return j.H.useDeferredValue(E, q);
    }),
    (Tt.useEffect = function (E, q) {
      return j.H.useEffect(E, q);
    }),
    (Tt.useEffectEvent = function (E) {
      return j.H.useEffectEvent(E);
    }),
    (Tt.useId = function () {
      return j.H.useId();
    }),
    (Tt.useImperativeHandle = function (E, q, I) {
      return j.H.useImperativeHandle(E, q, I);
    }),
    (Tt.useInsertionEffect = function (E, q) {
      return j.H.useInsertionEffect(E, q);
    }),
    (Tt.useLayoutEffect = function (E, q) {
      return j.H.useLayoutEffect(E, q);
    }),
    (Tt.useMemo = function (E, q) {
      return j.H.useMemo(E, q);
    }),
    (Tt.useOptimistic = function (E, q) {
      return j.H.useOptimistic(E, q);
    }),
    (Tt.useReducer = function (E, q, I) {
      return j.H.useReducer(E, q, I);
    }),
    (Tt.useRef = function (E) {
      return j.H.useRef(E);
    }),
    (Tt.useState = function (E) {
      return j.H.useState(E);
    }),
    (Tt.useSyncExternalStore = function (E, q, I) {
      return j.H.useSyncExternalStore(E, q, I);
    }),
    (Tt.useTransition = function () {
      return j.H.useTransition();
    }),
    (Tt.version = "19.2.3"),
    Tt
  );
}
var D1;
function md() {
  return (D1 || ((D1 = 1), (zh.exports = tx())), zh.exports);
}
var rt = md(),
  Ah = { exports: {} },
  Lr = {},
  Mh = { exports: {} },
  Oh = {};
var N1;
function ex() {
  return (
    N1 ||
      ((N1 = 1),
      (function (d) {
        function l(N, V) {
          var et = N.length;
          N.push(V);
          t: for (; 0 < et; ) {
            var ht = (et - 1) >>> 1,
              M = N[ht];
            if (0 < r(M, V)) ((N[ht] = V), (N[et] = M), (et = ht));
            else break t;
          }
        }
        function u(N) {
          return N.length === 0 ? null : N[0];
        }
        function i(N) {
          if (N.length === 0) return null;
          var V = N[0],
            et = N.pop();
          if (et !== V) {
            N[0] = et;
            t: for (var ht = 0, M = N.length, E = M >>> 1; ht < E; ) {
              var q = 2 * (ht + 1) - 1,
                I = N[q],
                tt = q + 1,
                ut = N[tt];
              if (0 > r(I, et))
                tt < M && 0 > r(ut, I)
                  ? ((N[ht] = ut), (N[tt] = et), (ht = tt))
                  : ((N[ht] = I), (N[q] = et), (ht = q));
              else if (tt < M && 0 > r(ut, et))
                ((N[ht] = ut), (N[tt] = et), (ht = tt));
              else break t;
            }
          }
          return V;
        }
        function r(N, V) {
          var et = N.sortIndex - V.sortIndex;
          return et !== 0 ? et : N.id - V.id;
        }
        if (
          ((d.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          d.unstable_now = function () {
            return f.now();
          };
        } else {
          var o = Date,
            h = o.now();
          d.unstable_now = function () {
            return o.now() - h;
          };
        }
        var m = [],
          g = [],
          _ = 1,
          v = null,
          S = 3,
          x = !1,
          O = !1,
          b = !1,
          D = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          k = typeof setImmediate < "u" ? setImmediate : null;
        function Y(N) {
          for (var V = u(g); V !== null; ) {
            if (V.callback === null) i(g);
            else if (V.startTime <= N)
              (i(g), (V.sortIndex = V.expirationTime), l(m, V));
            else break;
            V = u(g);
          }
        }
        function Q(N) {
          if (((b = !1), Y(N), !O))
            if (u(m) !== null) ((O = !0), F || ((F = !0), P()));
            else {
              var V = u(g);
              V !== null && vt(Q, V.startTime - N);
            }
        }
        var F = !1,
          j = -1,
          W = 5,
          J = -1;
        function $() {
          return D ? !0 : !(d.unstable_now() - J < W);
        }
        function ot() {
          if (((D = !1), F)) {
            var N = d.unstable_now();
            J = N;
            var V = !0;
            try {
              t: {
                ((O = !1), b && ((b = !1), G(j), (j = -1)), (x = !0));
                var et = S;
                try {
                  e: {
                    for (
                      Y(N), v = u(m);
                      v !== null && !(v.expirationTime > N && $());
                    ) {
                      var ht = v.callback;
                      if (typeof ht == "function") {
                        ((v.callback = null), (S = v.priorityLevel));
                        var M = ht(v.expirationTime <= N);
                        if (((N = d.unstable_now()), typeof M == "function")) {
                          ((v.callback = M), Y(N), (V = !0));
                          break e;
                        }
                        (v === u(m) && i(m), Y(N));
                      } else i(m);
                      v = u(m);
                    }
                    if (v !== null) V = !0;
                    else {
                      var E = u(g);
                      (E !== null && vt(Q, E.startTime - N), (V = !1));
                    }
                  }
                  break t;
                } finally {
                  ((v = null), (S = et), (x = !1));
                }
                V = void 0;
              }
            } finally {
              V ? P() : (F = !1);
            }
          }
        }
        var P;
        if (typeof k == "function")
          P = function () {
            k(ot);
          };
        else if (typeof MessageChannel < "u") {
          var bt = new MessageChannel(),
            _t = bt.port2;
          ((bt.port1.onmessage = ot),
            (P = function () {
              _t.postMessage(null);
            }));
        } else
          P = function () {
            X(ot, 0);
          };
        function vt(N, V) {
          j = X(function () {
            N(d.unstable_now());
          }, V);
        }
        ((d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (d.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (W = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (d.unstable_next = function (N) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var V = 3;
                break;
              default:
                V = S;
            }
            var et = S;
            S = V;
            try {
              return N();
            } finally {
              S = et;
            }
          }),
          (d.unstable_requestPaint = function () {
            D = !0;
          }),
          (d.unstable_runWithPriority = function (N, V) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var et = S;
            S = N;
            try {
              return V();
            } finally {
              S = et;
            }
          }),
          (d.unstable_scheduleCallback = function (N, V, et) {
            var ht = d.unstable_now();
            switch (
              (typeof et == "object" && et !== null
                ? ((et = et.delay),
                  (et = typeof et == "number" && 0 < et ? ht + et : ht))
                : (et = ht),
              N)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = et + M),
              (N = {
                id: _++,
                callback: V,
                priorityLevel: N,
                startTime: et,
                expirationTime: M,
                sortIndex: -1,
              }),
              et > ht
                ? ((N.sortIndex = et),
                  l(g, N),
                  u(m) === null &&
                    N === u(g) &&
                    (b ? (G(j), (j = -1)) : (b = !0), vt(Q, et - ht)))
                : ((N.sortIndex = M),
                  l(m, N),
                  O || x || ((O = !0), F || ((F = !0), P()))),
              N
            );
          }),
          (d.unstable_shouldYield = $),
          (d.unstable_wrapCallback = function (N) {
            var V = S;
            return function () {
              var et = S;
              S = V;
              try {
                return N.apply(this, arguments);
              } finally {
                S = et;
              }
            };
          }));
      })(Oh)),
    Oh
  );
}
var R1;
function nx() {
  return (R1 || ((R1 = 1), (Mh.exports = ex())), Mh.exports);
}
var Ch = { exports: {} },
  fn = {};
var w1;
function lx() {
  if (w1) return fn;
  w1 = 1;
  var d = md();
  function l(m) {
    var g = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        g += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var i = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function f(m, g, _) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: v == null ? null : "" + v,
      children: m,
      containerInfo: g,
      implementation: _,
    };
  }
  var o = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, g) {
    if (m === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (fn.createPortal = function (m, g) {
      var _ =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(l(299));
      return f(m, g, null, _);
    }),
    (fn.flushSync = function (m) {
      var g = o.T,
        _ = i.p;
      try {
        if (((o.T = null), (i.p = 2), m)) return m();
      } finally {
        ((o.T = g), (i.p = _), i.d.f());
      }
    }),
    (fn.preconnect = function (m, g) {
      typeof m == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        i.d.C(m, g));
    }),
    (fn.prefetchDNS = function (m) {
      typeof m == "string" && i.d.D(m);
    }),
    (fn.preinit = function (m, g) {
      if (typeof m == "string" && g && typeof g.as == "string") {
        var _ = g.as,
          v = h(_, g.crossOrigin),
          S = typeof g.integrity == "string" ? g.integrity : void 0,
          x = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        _ === "style"
          ? i.d.S(m, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: x,
            })
          : _ === "script" &&
            i.d.X(m, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: x,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (fn.preinitModule = function (m, g) {
      if (typeof m == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var _ = h(g.as, g.crossOrigin);
            i.d.M(m, {
              crossOrigin: _,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && i.d.M(m);
    }),
    (fn.preload = function (m, g) {
      if (
        typeof m == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var _ = g.as,
          v = h(_, g.crossOrigin);
        i.d.L(m, _, {
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (fn.preloadModule = function (m, g) {
      if (typeof m == "string")
        if (g) {
          var _ = h(g.as, g.crossOrigin);
          i.d.m(m, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: _,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else i.d.m(m);
    }),
    (fn.requestFormReset = function (m) {
      i.d.r(m);
    }),
    (fn.unstable_batchedUpdates = function (m, g) {
      return m(g);
    }),
    (fn.useFormState = function (m, g, _) {
      return o.H.useFormState(m, g, _);
    }),
    (fn.useFormStatus = function () {
      return o.H.useHostTransitionStatus();
    }),
    (fn.version = "19.2.3"),
    fn
  );
}
var j1;
function ax() {
  if (j1) return Ch.exports;
  j1 = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (l) {
        console.error(l);
      }
  }
  return (d(), (Ch.exports = lx()), Ch.exports);
}
var U1;
function ix() {
  if (U1) return Lr;
  U1 = 1;
  var d = nx(),
    l = md(),
    u = ax();
  function i(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function o(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (f(t) !== t) throw Error(i(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(i(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((a = s.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === n) return (m(s), t);
          if (c === a) return (m(s), e);
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== a.return) ((n = s), (a = c));
      else {
        for (var p = !1, y = s.child; y; ) {
          if (y === n) {
            ((p = !0), (n = s), (a = c));
            break;
          }
          if (y === a) {
            ((p = !0), (a = s), (n = c));
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = c.child; y; ) {
            if (y === n) {
              ((p = !0), (n = c), (a = s));
              break;
            }
            if (y === a) {
              ((p = !0), (a = c), (n = s));
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(i(189));
        }
      }
      if (n.alternate !== a) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? t : e;
  }
  function _(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = _(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign,
    S = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    D = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    k = Symbol.for("react.context"),
    Y = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    j = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    J = Symbol.for("react.activity"),
    $ = Symbol.for("react.memo_cache_sentinel"),
    ot = Symbol.iterator;
  function P(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ot && t[ot]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var bt = Symbol.for("react.client.reference");
  function _t(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === bt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case b:
        return "Fragment";
      case X:
        return "Profiler";
      case D:
        return "StrictMode";
      case Q:
        return "Suspense";
      case F:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case O:
          return "Portal";
        case k:
          return t.displayName || "Context";
        case G:
          return (t._context.displayName || "Context") + ".Consumer";
        case Y:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case j:
          return (
            (e = t.displayName || null),
            e !== null ? e : _t(t.type) || "Memo"
          );
        case W:
          ((e = t._payload), (t = t._init));
          try {
            return _t(t(e));
          } catch {}
      }
    return null;
  }
  var vt = Array.isArray,
    N = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = { pending: !1, data: null, method: null, action: null },
    ht = [],
    M = -1;
  function E(t) {
    return { current: t };
  }
  function q(t) {
    0 > M || ((t.current = ht[M]), (ht[M] = null), M--);
  }
  function I(t, e) {
    (M++, (ht[M] = t.current), (t.current = e));
  }
  var tt = E(null),
    ut = E(null),
    dt = E(null),
    pt = E(null);
  function Kt(t, e) {
    switch ((I(dt, e), I(ut, t), I(tt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Wm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Wm(e)), (t = $m(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (q(tt), I(tt, t));
  }
  function Dt() {
    (q(tt), q(ut), q(dt));
  }
  function Mn(t) {
    t.memoizedState !== null && I(pt, t);
    var e = tt.current,
      n = $m(e, t.type);
    e !== n && (I(ut, t), I(tt, n));
  }
  function we(t) {
    (ut.current === t && (q(tt), q(ut)),
      pt.current === t && (q(pt), (Ur._currentValue = et)));
  }
  var Ge, Yt;
  function Wt(t) {
    if (Ge === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Ge = (e && e[1]) || ""),
          (Yt =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ge +
      t +
      Yt
    );
  }
  var Ke = !1;
  function Pe(t, e) {
    if (!t || Ke) return "";
    Ke = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (H) {
                  var U = H;
                }
                Reflect.construct(t, [], K);
              } else {
                try {
                  K.call();
                } catch (H) {
                  U = H;
                }
                t.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                U = H;
              }
              (K = t()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (H) {
            if (H && U && typeof H.stack == "string") return [H.stack, U.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = a.DetermineComponentFrameRoot(),
        p = c[0],
        y = c[1];
      if (p && y) {
        var T = p.split(`
`),
          w = y.split(`
`);
        for (
          s = a = 0;
          a < T.length && !T[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; s < w.length && !w[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === T.length || s === w.length)
          for (
            a = T.length - 1, s = w.length - 1;
            1 <= a && 0 <= s && T[a] !== w[s];
          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (T[a] !== w[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || T[a] !== w[s])) {
                  var L =
                    `
` + T[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      L.includes("<anonymous>") &&
                      (L = L.replace("<anonymous>", t.displayName)),
                    L
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      ((Ke = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Wt(n) : "";
  }
  function B(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Wt(t.type);
      case 16:
        return Wt("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Wt("Suspense Fallback")
          : Wt("Suspense");
      case 19:
        return Wt("SuspenseList");
      case 0:
      case 15:
        return Pe(t.type, !1);
      case 11:
        return Pe(t.type.render, !1);
      case 1:
        return Pe(t.type, !0);
      case 31:
        return Wt("Activity");
      default:
        return "";
    }
  }
  function un(t) {
    try {
      var e = "",
        n = null;
      do ((e += B(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Gn = Object.prototype.hasOwnProperty,
    cl = d.unstable_scheduleCallback,
    ie = d.unstable_cancelCallback,
    Rl = d.unstable_shouldYield,
    ql = d.unstable_requestPaint,
    Me = d.unstable_now,
    je = d.unstable_getCurrentPriorityLevel,
    wl = d.unstable_ImmediatePriority,
    oe = d.unstable_UserBlockingPriority,
    rn = d.unstable_NormalPriority,
    On = d.unstable_LowPriority,
    fl = d.unstable_IdlePriority,
    pi = d.log,
    be = d.unstable_setDisableYieldValue,
    Ll = null,
    me = null;
  function gn(t) {
    if (
      (typeof pi == "function" && be(t),
      me && typeof me.setStrictMode == "function")
    )
      try {
        me.setStrictMode(Ll, t);
      } catch {}
  }
  var Ue = Math.clz32 ? Math.clz32 : Mt,
    Xl = Math.log,
    na = Math.LN2;
  function Mt(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Xl(t) / na) | 0)) | 0);
  }
  var ol = 256,
    sn = 262144,
    cn = 4194304;
  function Qe(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function hl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      c = t.suspendedLanes,
      p = t.pingedLanes;
    t = t.warmLanes;
    var y = a & 134217727;
    return (
      y !== 0
        ? ((a = y & ~c),
          a !== 0
            ? (s = Qe(a))
            : ((p &= y),
              p !== 0
                ? (s = Qe(p))
                : n || ((n = y & ~t), n !== 0 && (s = Qe(n)))))
        : ((y = a & ~c),
          y !== 0
            ? (s = Qe(y))
            : p !== 0
              ? (s = Qe(p))
              : n || ((n = a & ~t), n !== 0 && (s = Qe(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & c) === 0 &&
            ((c = s & -s),
            (n = e & -e),
            c >= n || (c === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function dl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function jl(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ca() {
    var t = cn;
    return ((cn <<= 1), (cn & 62914560) === 0 && (cn = 4194304), t);
  }
  function xt(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function st(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Vt(t, e, n, a, s, c) {
    var p = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var y = t.entanglements,
      T = t.expirationTimes,
      w = t.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var L = 31 - Ue(n),
        K = 1 << L;
      ((y[L] = 0), (T[L] = -1));
      var U = w[L];
      if (U !== null)
        for (w[L] = null, L = 0; L < U.length; L++) {
          var H = U[L];
          H !== null && (H.lane &= -536870913);
        }
      n &= ~K;
    }
    (a !== 0 && nt(t, a, 0),
      c !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(p & ~e)));
  }
  function nt(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - Ue(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function St(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - Ue(n),
        s = 1 << a;
      ((s & e) | (t[a] & e) && (t[a] |= e), (n &= ~s));
    }
  }
  function ct(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : yt(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function yt(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Te(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Nt() {
    var t = V.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : x1(t.type));
  }
  function he(t, e) {
    var n = V.p;
    try {
      return ((V.p = t), e());
    } finally {
      V.p = n;
    }
  }
  var re = Math.random().toString(36).slice(2),
    At = "__reactFiber$" + re,
    Ot = "__reactProps$" + re,
    Qt = "__reactContainer$" + re,
    _n = "__reactEvents$" + re,
    se = "__reactListeners$" + re,
    yn = "__reactHandles$" + re,
    Qn = "__reactResources$" + re,
    ge = "__reactMarker$" + re;
  function Oe(t) {
    (delete t[At], delete t[Ot], delete t[_n], delete t[se], delete t[yn]);
  }
  function _e(t) {
    var e = t[At];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Qt] || n[At])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = a1(t); t !== null; ) {
            if ((n = t[At])) return n;
            t = a1(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Cn(t) {
    if ((t = t[At] || t[Qt])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Gl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function ye(t) {
    var e = t[Qn];
    return (
      e ||
        (e = t[Qn] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Rt(t) {
    t[ge] = !0;
  }
  var Vn = new Set(),
    Wi = {};
  function Ql(t, e) {
    (pl(t, e), pl(t + "Capture", e));
  }
  function pl(t, e) {
    for (Wi[t] = e, t = 0; t < e.length; t++) Vn.add(e[t]);
  }
  var ml = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Da = {},
    mi = {};
  function Vl(t) {
    return Gn.call(mi, t)
      ? !0
      : Gn.call(Da, t)
        ? !1
        : ml.test(t)
          ? (mi[t] = !0)
          : ((Da[t] = !0), !1);
  }
  function xs(t, e, n) {
    if (Vl(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ss(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function la(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function gl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Gd(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Z_(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        c = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (p) {
            ((n = "" + p), c.call(this, p));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (p) {
            n = "" + p;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function gf(t) {
    if (!t._valueTracker) {
      var e = Gd(t) ? "checked" : "value";
      t._valueTracker = Z_(t, e, "" + t[e]);
    }
  }
  function Qd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Gd(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function bs(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var k_ = /[\n"\\]/g;
  function _l(t) {
    return t.replace(k_, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function _f(t, e, n, a, s, c, p, y) {
    ((t.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (t.type = p)
        : t.removeAttribute("type"),
      e != null
        ? p === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + gl(e))
          : t.value !== "" + gl(e) && (t.value = "" + gl(e))
        : (p !== "submit" && p !== "reset") || t.removeAttribute("value"),
      e != null
        ? yf(t, p, gl(e))
        : n != null
          ? yf(t, p, gl(n))
          : a != null && t.removeAttribute("value"),
      s == null && c != null && (t.defaultChecked = !!c),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.name = "" + gl(y))
        : t.removeAttribute("name"));
  }
  function Vd(t, e, n, a, s, c, p, y) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) {
        gf(t);
        return;
      }
      ((n = n != null ? "" + gl(n) : ""),
        (e = e != null ? "" + gl(e) : n),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = y ? t.checked : !!a),
      (t.defaultChecked = !!a),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (t.name = p),
      gf(t));
  }
  function yf(t, e, n) {
    (e === "number" && bs(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function $i(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && a && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + gl(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), a && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Zd(t, e, n) {
    if (
      e != null &&
      ((e = "" + gl(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + gl(n) : "";
  }
  function kd(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(i(92));
        if (vt(a)) {
          if (1 < a.length) throw Error(i(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = gl(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
      gf(t));
  }
  function Pi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var K_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Kd(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || K_.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Jd(t, e, n) {
    if (e != null && typeof e != "object") throw Error(i(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var s in e)
        ((a = e[s]), e.hasOwnProperty(s) && n[s] !== a && Kd(t, s, a));
    } else for (var c in e) e.hasOwnProperty(c) && Kd(t, c, e[c]);
  }
  function vf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var J_ = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    F_ =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ts(t) {
    return F_.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function aa() {}
  var xf = null;
  function Sf(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ii = null,
    tu = null;
  function Fd(t) {
    var e = Cn(t);
    if (e && (t = e.stateNode)) {
      var n = t[Ot] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (_f(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + _l("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[Ot] || null;
                if (!s) throw Error(i(90));
                _f(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((a = n[e]), a.form === t.form && Qd(a));
          }
          break t;
        case "textarea":
          Zd(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && $i(t, !!n.multiple, e, !1));
      }
    }
  }
  var bf = !1;
  function Wd(t, e, n) {
    if (bf) return t(e, n);
    bf = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((bf = !1),
        (Ii !== null || tu !== null) &&
          (fc(), Ii && ((e = Ii), (t = tu), (tu = Ii = null), Fd(e), t)))
      )
        for (e = 0; e < t.length; e++) Fd(t[e]);
    }
  }
  function Pu(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Ot] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(i(231, e, typeof n));
    return n;
  }
  var ia = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Tf = !1;
  if (ia)
    try {
      var Iu = {};
      (Object.defineProperty(Iu, "passive", {
        get: function () {
          Tf = !0;
        },
      }),
        window.addEventListener("test", Iu, Iu),
        window.removeEventListener("test", Iu, Iu));
    } catch {
      Tf = !1;
    }
  var Na = null,
    Ef = null,
    Es = null;
  function $d() {
    if (Es) return Es;
    var t,
      e = Ef,
      n = e.length,
      a,
      s = "value" in Na ? Na.value : Na.textContent,
      c = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var p = n - t;
    for (a = 1; a <= p && e[n - a] === s[c - a]; a++);
    return (Es = s.slice(t, 1 < a ? 1 - a : void 0));
  }
  function zs(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function As() {
    return !0;
  }
  function Pd() {
    return !1;
  }
  function Dn(t) {
    function e(n, a, s, c, p) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null));
      for (var y in t)
        t.hasOwnProperty(y) && ((n = t[y]), (this[y] = n ? n(c) : c[y]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? As
          : Pd),
        (this.isPropagationStopped = Pd),
        this
      );
    }
    return (
      v(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = As));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = As));
        },
        persist: function () {},
        isPersistent: As,
      }),
      e
    );
  }
  var gi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ms = Dn(gi),
    tr = v({}, gi, { view: 0, detail: 0 }),
    W_ = Dn(tr),
    zf,
    Af,
    er,
    Os = v({}, tr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Of,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== er &&
              (er && t.type === "mousemove"
                ? ((zf = t.screenX - er.screenX), (Af = t.screenY - er.screenY))
                : (Af = zf = 0),
              (er = t)),
            zf);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Af;
      },
    }),
    Id = Dn(Os),
    $_ = v({}, Os, { dataTransfer: 0 }),
    P_ = Dn($_),
    I_ = v({}, tr, { relatedTarget: 0 }),
    Mf = Dn(I_),
    ty = v({}, gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ey = Dn(ty),
    ny = v({}, gi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ly = Dn(ny),
    ay = v({}, gi, { data: 0 }),
    t0 = Dn(ay),
    iy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    uy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ry = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sy(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = ry[t])
        ? !!e[t]
        : !1;
  }
  function Of() {
    return sy;
  }
  var cy = v({}, tr, {
      key: function (t) {
        if (t.key) {
          var e = iy[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = zs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? uy[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Of,
      charCode: function (t) {
        return t.type === "keypress" ? zs(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? zs(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    fy = Dn(cy),
    oy = v({}, Os, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    e0 = Dn(oy),
    hy = v({}, tr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Of,
    }),
    dy = Dn(hy),
    py = v({}, gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    my = Dn(py),
    gy = v({}, Os, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _y = Dn(gy),
    yy = v({}, gi, { newState: 0, oldState: 0 }),
    vy = Dn(yy),
    xy = [9, 13, 27, 32],
    Cf = ia && "CompositionEvent" in window,
    nr = null;
  ia && "documentMode" in document && (nr = document.documentMode);
  var Sy = ia && "TextEvent" in window && !nr,
    n0 = ia && (!Cf || (nr && 8 < nr && 11 >= nr)),
    l0 = " ",
    a0 = !1;
  function i0(t, e) {
    switch (t) {
      case "keyup":
        return xy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function u0(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var eu = !1;
  function by(t, e) {
    switch (t) {
      case "compositionend":
        return u0(e);
      case "keypress":
        return e.which !== 32 ? null : ((a0 = !0), l0);
      case "textInput":
        return ((t = e.data), t === l0 && a0 ? null : t);
      default:
        return null;
    }
  }
  function Ty(t, e) {
    if (eu)
      return t === "compositionend" || (!Cf && i0(t, e))
        ? ((t = $d()), (Es = Ef = Na = null), (eu = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return n0 && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ey = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function r0(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ey[t.type] : e === "textarea";
  }
  function s0(t, e, n, a) {
    (Ii ? (tu ? tu.push(a) : (tu = [a])) : (Ii = a),
      (e = _c(e, "onChange")),
      0 < e.length &&
        ((n = new Ms("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e })));
  }
  var lr = null,
    ar = null;
  function zy(t) {
    Vm(t, 0);
  }
  function Cs(t) {
    var e = Gl(t);
    if (Qd(e)) return t;
  }
  function c0(t, e) {
    if (t === "change") return e;
  }
  var f0 = !1;
  if (ia) {
    var Df;
    if (ia) {
      var Nf = "oninput" in document;
      if (!Nf) {
        var o0 = document.createElement("div");
        (o0.setAttribute("oninput", "return;"),
          (Nf = typeof o0.oninput == "function"));
      }
      Df = Nf;
    } else Df = !1;
    f0 = Df && (!document.documentMode || 9 < document.documentMode);
  }
  function h0() {
    lr && (lr.detachEvent("onpropertychange", d0), (ar = lr = null));
  }
  function d0(t) {
    if (t.propertyName === "value" && Cs(ar)) {
      var e = [];
      (s0(e, ar, t, Sf(t)), Wd(zy, e));
    }
  }
  function Ay(t, e, n) {
    t === "focusin"
      ? (h0(), (lr = e), (ar = n), lr.attachEvent("onpropertychange", d0))
      : t === "focusout" && h0();
  }
  function My(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Cs(ar);
  }
  function Oy(t, e) {
    if (t === "click") return Cs(e);
  }
  function Cy(t, e) {
    if (t === "input" || t === "change") return Cs(e);
  }
  function Dy(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Zn = typeof Object.is == "function" ? Object.is : Dy;
  function ir(t, e) {
    if (Zn(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!Gn.call(e, s) || !Zn(t[s], e[s])) return !1;
    }
    return !0;
  }
  function p0(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function m0(t, e) {
    var n = p0(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = p0(n);
    }
  }
  function g0(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? g0(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function _0(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = bs(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = bs(t.document);
    }
    return e;
  }
  function Rf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Ny = ia && "documentMode" in document && 11 >= document.documentMode,
    nu = null,
    wf = null,
    ur = null,
    jf = !1;
  function y0(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    jf ||
      nu == null ||
      nu !== bs(a) ||
      ((a = nu),
      "selectionStart" in a && Rf(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ur && ir(ur, a)) ||
        ((ur = a),
        (a = _c(wf, "onSelect")),
        0 < a.length &&
          ((e = new Ms("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = nu))));
  }
  function _i(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var lu = {
      animationend: _i("Animation", "AnimationEnd"),
      animationiteration: _i("Animation", "AnimationIteration"),
      animationstart: _i("Animation", "AnimationStart"),
      transitionrun: _i("Transition", "TransitionRun"),
      transitionstart: _i("Transition", "TransitionStart"),
      transitioncancel: _i("Transition", "TransitionCancel"),
      transitionend: _i("Transition", "TransitionEnd"),
    },
    Uf = {},
    v0 = {};
  ia &&
    ((v0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete lu.animationend.animation,
      delete lu.animationiteration.animation,
      delete lu.animationstart.animation),
    "TransitionEvent" in window || delete lu.transitionend.transition);
  function yi(t) {
    if (Uf[t]) return Uf[t];
    if (!lu[t]) return t;
    var e = lu[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in v0) return (Uf[t] = e[n]);
    return t;
  }
  var x0 = yi("animationend"),
    S0 = yi("animationiteration"),
    b0 = yi("animationstart"),
    Ry = yi("transitionrun"),
    wy = yi("transitionstart"),
    jy = yi("transitioncancel"),
    T0 = yi("transitionend"),
    E0 = new Map(),
    Hf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Hf.push("scrollEnd");
  function Ul(t, e) {
    (E0.set(t, e), Ql(e, [t]));
  }
  var Ds =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    yl = [],
    au = 0,
    Yf = 0;
  function Ns() {
    for (var t = au, e = (Yf = au = 0); e < t; ) {
      var n = yl[e];
      yl[e++] = null;
      var a = yl[e];
      yl[e++] = null;
      var s = yl[e];
      yl[e++] = null;
      var c = yl[e];
      if (((yl[e++] = null), a !== null && s !== null)) {
        var p = a.pending;
        (p === null ? (s.next = s) : ((s.next = p.next), (p.next = s)),
          (a.pending = s));
      }
      c !== 0 && z0(n, s, c);
    }
  }
  function Rs(t, e, n, a) {
    ((yl[au++] = t),
      (yl[au++] = e),
      (yl[au++] = n),
      (yl[au++] = a),
      (Yf |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Bf(t, e, n, a) {
    return (Rs(t, e, n, a), ws(t));
  }
  function vi(t, e) {
    return (Rs(t, null, null, e), ws(t));
  }
  function z0(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, c = t.return; c !== null; )
      ((c.childLanes |= n),
        (a = c.alternate),
        a !== null && (a.childLanes |= n),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = c),
        (c = c.return));
    return t.tag === 3
      ? ((c = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - Ue(n)),
          (t = c.hiddenUpdates),
          (a = t[s]),
          a === null ? (t[s] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        c)
      : null;
  }
  function ws(t) {
    if (50 < Or) throw ((Or = 0), (Jo = null), Error(i(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var iu = {};
  function Uy(t, e, n, a) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function kn(t, e, n, a) {
    return new Uy(t, e, n, a);
  }
  function qf(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function ua(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = kn(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function A0(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function js(t, e, n, a, s, c) {
    var p = 0;
    if (((a = t), typeof t == "function")) qf(t) && (p = 1);
    else if (typeof t == "string")
      p = Lv(t, n, tt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case J:
          return ((t = kn(31, n, e, s)), (t.elementType = J), (t.lanes = c), t);
        case b:
          return xi(n.children, s, c, e);
        case D:
          ((p = 8), (s |= 24));
          break;
        case X:
          return (
            (t = kn(12, n, e, s | 2)),
            (t.elementType = X),
            (t.lanes = c),
            t
          );
        case Q:
          return ((t = kn(13, n, e, s)), (t.elementType = Q), (t.lanes = c), t);
        case F:
          return ((t = kn(19, n, e, s)), (t.elementType = F), (t.lanes = c), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case k:
                p = 10;
                break t;
              case G:
                p = 9;
                break t;
              case Y:
                p = 11;
                break t;
              case j:
                p = 14;
                break t;
              case W:
                ((p = 16), (a = null));
                break t;
            }
          ((p = 29),
            (n = Error(i(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = kn(p, n, e, s)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = c),
      e
    );
  }
  function xi(t, e, n, a) {
    return ((t = kn(7, t, a, e)), (t.lanes = n), t);
  }
  function Lf(t, e, n) {
    return ((t = kn(6, t, null, e)), (t.lanes = n), t);
  }
  function M0(t) {
    var e = kn(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Xf(t, e, n) {
    return (
      (e = kn(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var O0 = new WeakMap();
  function vl(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = O0.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: un(e) }), O0.set(t, e), e);
    }
    return { value: t, source: e, stack: un(e) };
  }
  var uu = [],
    ru = 0,
    Us = null,
    rr = 0,
    xl = [],
    Sl = 0,
    Ra = null,
    Zl = 1,
    kl = "";
  function ra(t, e) {
    ((uu[ru++] = rr), (uu[ru++] = Us), (Us = t), (rr = e));
  }
  function C0(t, e, n) {
    ((xl[Sl++] = Zl), (xl[Sl++] = kl), (xl[Sl++] = Ra), (Ra = t));
    var a = Zl;
    t = kl;
    var s = 32 - Ue(a) - 1;
    ((a &= ~(1 << s)), (n += 1));
    var c = 32 - Ue(e) + s;
    if (30 < c) {
      var p = s - (s % 5);
      ((c = (a & ((1 << p) - 1)).toString(32)),
        (a >>= p),
        (s -= p),
        (Zl = (1 << (32 - Ue(e) + s)) | (n << s) | a),
        (kl = c + t));
    } else ((Zl = (1 << c) | (n << s) | a), (kl = t));
  }
  function Gf(t) {
    t.return !== null && (ra(t, 1), C0(t, 1, 0));
  }
  function Qf(t) {
    for (; t === Us; )
      ((Us = uu[--ru]), (uu[ru] = null), (rr = uu[--ru]), (uu[ru] = null));
    for (; t === Ra; )
      ((Ra = xl[--Sl]),
        (xl[Sl] = null),
        (kl = xl[--Sl]),
        (xl[Sl] = null),
        (Zl = xl[--Sl]),
        (xl[Sl] = null));
  }
  function D0(t, e) {
    ((xl[Sl++] = Zl),
      (xl[Sl++] = kl),
      (xl[Sl++] = Ra),
      (Zl = e.id),
      (kl = e.overflow),
      (Ra = t));
  }
  var Ie = null,
    ce = null,
    Xt = !1,
    wa = null,
    bl = !1,
    Vf = Error(i(519));
  function ja(t) {
    var e = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (sr(vl(e, t)), Vf);
  }
  function N0(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[At] = t), (e[Ot] = a), n)) {
      case "dialog":
        (Ht("cancel", e), Ht("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ht("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Dr.length; n++) Ht(Dr[n], e);
        break;
      case "source":
        Ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Ht("error", e), Ht("load", e));
        break;
      case "details":
        Ht("toggle", e);
        break;
      case "input":
        (Ht("invalid", e),
          Vd(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        Ht("invalid", e);
        break;
      case "textarea":
        (Ht("invalid", e), kd(e, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Jm(e.textContent, n)
        ? (a.popover != null && (Ht("beforetoggle", e), Ht("toggle", e)),
          a.onScroll != null && Ht("scroll", e),
          a.onScrollEnd != null && Ht("scrollend", e),
          a.onClick != null && (e.onclick = aa),
          (e = !0))
        : (e = !1),
      e || ja(t, !0));
  }
  function R0(t) {
    for (Ie = t.return; Ie; )
      switch (Ie.tag) {
        case 5:
        case 31:
        case 13:
          bl = !1;
          return;
        case 27:
        case 3:
          bl = !0;
          return;
        default:
          Ie = Ie.return;
      }
  }
  function su(t) {
    if (t !== Ie) return !1;
    if (!Xt) return (R0(t), (Xt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || ch(t.type, t.memoizedProps))),
        (n = !n)),
      n && ce && ja(t),
      R0(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      ce = l1(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      ce = l1(t);
    } else
      e === 27
        ? ((e = ce), Ja(t.type) ? ((t = ph), (ph = null), (ce = t)) : (ce = e))
        : (ce = Ie ? El(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Si() {
    ((ce = Ie = null), (Xt = !1));
  }
  function Zf() {
    var t = wa;
    return (
      t !== null &&
        (jn === null ? (jn = t) : jn.push.apply(jn, t), (wa = null)),
      t
    );
  }
  function sr(t) {
    wa === null ? (wa = [t]) : wa.push(t);
  }
  var kf = E(null),
    bi = null,
    sa = null;
  function Ua(t, e, n) {
    (I(kf, e._currentValue), (e._currentValue = n));
  }
  function ca(t) {
    ((t._currentValue = kf.current), q(kf));
  }
  function Kf(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Jf(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var p = s.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var y = c;
          c = s;
          for (var T = 0; T < e.length; T++)
            if (y.context === e[T]) {
              ((c.lanes |= n),
                (y = c.alternate),
                y !== null && (y.lanes |= n),
                Kf(c.return, n, t),
                a || (p = null));
              break t;
            }
          c = y.next;
        }
      } else if (s.tag === 18) {
        if (((p = s.return), p === null)) throw Error(i(341));
        ((p.lanes |= n),
          (c = p.alternate),
          c !== null && (c.lanes |= n),
          Kf(p, n, t),
          (p = null));
      } else p = s.child;
      if (p !== null) p.return = s;
      else
        for (p = s; p !== null; ) {
          if (p === t) {
            p = null;
            break;
          }
          if (((s = p.sibling), s !== null)) {
            ((s.return = p.return), (p = s));
            break;
          }
          p = p.return;
        }
      s = p;
    }
  }
  function cu(t, e, n, a) {
    t = null;
    for (var s = e, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var p = s.alternate;
        if (p === null) throw Error(i(387));
        if (((p = p.memoizedProps), p !== null)) {
          var y = s.type;
          Zn(s.pendingProps.value, p.value) ||
            (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === pt.current) {
        if (((p = s.alternate), p === null)) throw Error(i(387));
        p.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(Ur) : (t = [Ur]));
      }
      s = s.return;
    }
    (t !== null && Jf(e, t, n, a), (e.flags |= 262144));
  }
  function Hs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Zn(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ti(t) {
    ((bi = t),
      (sa = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function tn(t) {
    return w0(bi, t);
  }
  function Ys(t, e) {
    return (bi === null && Ti(t), w0(t, e));
  }
  function w0(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), sa === null)) {
      if (t === null) throw Error(i(308));
      ((sa = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else sa = sa.next = e;
    return n;
  }
  var Hy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Yy = d.unstable_scheduleCallback,
    By = d.unstable_NormalPriority,
    He = {
      $$typeof: k,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ff() {
    return { controller: new Hy(), data: new Map(), refCount: 0 };
  }
  function cr(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Yy(By, function () {
          t.controller.abort();
        }));
  }
  var fr = null,
    Wf = 0,
    fu = 0,
    ou = null;
  function qy(t, e) {
    if (fr === null) {
      var n = (fr = []);
      ((Wf = 0),
        (fu = th()),
        (ou = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Wf++, e.then(j0, j0), e);
  }
  function j0() {
    if (--Wf === 0 && fr !== null) {
      ou !== null && (ou.status = "fulfilled");
      var t = fr;
      ((fr = null), (fu = 0), (ou = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Ly(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        },
      ),
      a
    );
  }
  var U0 = N.S;
  N.S = function (t, e) {
    ((ym = Me()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        qy(t, e),
      U0 !== null && U0(t, e));
  };
  var Ei = E(null);
  function $f() {
    var t = Ei.current;
    return t !== null ? t : ne.pooledCache;
  }
  function Bs(t, e) {
    e === null ? I(Ei, Ei.current) : I(Ei, e.pool);
  }
  function H0() {
    var t = $f();
    return t === null ? null : { parent: He._currentValue, pool: t };
  }
  var hu = Error(i(460)),
    Pf = Error(i(474)),
    qs = Error(i(542)),
    Ls = { then: function () {} };
  function Y0(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function B0(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(aa, aa), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), L0(t), t);
      default:
        if (typeof e.status == "string") e.then(aa, aa);
        else {
          if (((t = ne), t !== null && 100 < t.shellSuspendCounter))
            throw Error(i(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), L0(t), t);
        }
        throw ((Ai = e), hu);
    }
  }
  function zi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Ai = n), hu)
        : n;
    }
  }
  var Ai = null;
  function q0() {
    if (Ai === null) throw Error(i(459));
    var t = Ai;
    return ((Ai = null), t);
  }
  function L0(t) {
    if (t === hu || t === qs) throw Error(i(483));
  }
  var du = null,
    or = 0;
  function Xs(t) {
    var e = or;
    return ((or += 1), du === null && (du = []), B0(du, t, e));
  }
  function hr(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Gs(t, e) {
    throw e.$$typeof === S
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          i(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function X0(t) {
    function e(C, A) {
      if (t) {
        var R = C.deletions;
        R === null ? ((C.deletions = [A]), (C.flags |= 16)) : R.push(A);
      }
    }
    function n(C, A) {
      if (!t) return null;
      for (; A !== null; ) (e(C, A), (A = A.sibling));
      return null;
    }
    function a(C) {
      for (var A = new Map(); C !== null; )
        (C.key !== null ? A.set(C.key, C) : A.set(C.index, C), (C = C.sibling));
      return A;
    }
    function s(C, A) {
      return ((C = ua(C, A)), (C.index = 0), (C.sibling = null), C);
    }
    function c(C, A, R) {
      return (
        (C.index = R),
        t
          ? ((R = C.alternate),
            R !== null
              ? ((R = R.index), R < A ? ((C.flags |= 67108866), A) : R)
              : ((C.flags |= 67108866), A))
          : ((C.flags |= 1048576), A)
      );
    }
    function p(C) {
      return (t && C.alternate === null && (C.flags |= 67108866), C);
    }
    function y(C, A, R, Z) {
      return A === null || A.tag !== 6
        ? ((A = Lf(R, C.mode, Z)), (A.return = C), A)
        : ((A = s(A, R)), (A.return = C), A);
    }
    function T(C, A, R, Z) {
      var ft = R.type;
      return ft === b
        ? L(C, A, R.props.children, Z, R.key)
        : A !== null &&
            (A.elementType === ft ||
              (typeof ft == "object" &&
                ft !== null &&
                ft.$$typeof === W &&
                zi(ft) === A.type))
          ? ((A = s(A, R.props)), hr(A, R), (A.return = C), A)
          : ((A = js(R.type, R.key, R.props, null, C.mode, Z)),
            hr(A, R),
            (A.return = C),
            A);
    }
    function w(C, A, R, Z) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== R.containerInfo ||
        A.stateNode.implementation !== R.implementation
        ? ((A = Xf(R, C.mode, Z)), (A.return = C), A)
        : ((A = s(A, R.children || [])), (A.return = C), A);
    }
    function L(C, A, R, Z, ft) {
      return A === null || A.tag !== 7
        ? ((A = xi(R, C.mode, Z, ft)), (A.return = C), A)
        : ((A = s(A, R)), (A.return = C), A);
    }
    function K(C, A, R) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return ((A = Lf("" + A, C.mode, R)), (A.return = C), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case x:
            return (
              (R = js(A.type, A.key, A.props, null, C.mode, R)),
              hr(R, A),
              (R.return = C),
              R
            );
          case O:
            return ((A = Xf(A, C.mode, R)), (A.return = C), A);
          case W:
            return ((A = zi(A)), K(C, A, R));
        }
        if (vt(A) || P(A))
          return ((A = xi(A, C.mode, R, null)), (A.return = C), A);
        if (typeof A.then == "function") return K(C, Xs(A), R);
        if (A.$$typeof === k) return K(C, Ys(C, A), R);
        Gs(C, A);
      }
      return null;
    }
    function U(C, A, R, Z) {
      var ft = A !== null ? A.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ft !== null ? null : y(C, A, "" + R, Z);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case x:
            return R.key === ft ? T(C, A, R, Z) : null;
          case O:
            return R.key === ft ? w(C, A, R, Z) : null;
          case W:
            return ((R = zi(R)), U(C, A, R, Z));
        }
        if (vt(R) || P(R)) return ft !== null ? null : L(C, A, R, Z, null);
        if (typeof R.then == "function") return U(C, A, Xs(R), Z);
        if (R.$$typeof === k) return U(C, A, Ys(C, R), Z);
        Gs(C, R);
      }
      return null;
    }
    function H(C, A, R, Z, ft) {
      if (
        (typeof Z == "string" && Z !== "") ||
        typeof Z == "number" ||
        typeof Z == "bigint"
      )
        return ((C = C.get(R) || null), y(A, C, "" + Z, ft));
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case x:
            return (
              (C = C.get(Z.key === null ? R : Z.key) || null),
              T(A, C, Z, ft)
            );
          case O:
            return (
              (C = C.get(Z.key === null ? R : Z.key) || null),
              w(A, C, Z, ft)
            );
          case W:
            return ((Z = zi(Z)), H(C, A, R, Z, ft));
        }
        if (vt(Z) || P(Z))
          return ((C = C.get(R) || null), L(A, C, Z, ft, null));
        if (typeof Z.then == "function") return H(C, A, R, Xs(Z), ft);
        if (Z.$$typeof === k) return H(C, A, R, Ys(A, Z), ft);
        Gs(A, Z);
      }
      return null;
    }
    function lt(C, A, R, Z) {
      for (
        var ft = null, Zt = null, it = A, zt = (A = 0), qt = null;
        it !== null && zt < R.length;
        zt++
      ) {
        it.index > zt ? ((qt = it), (it = null)) : (qt = it.sibling);
        var kt = U(C, it, R[zt], Z);
        if (kt === null) {
          it === null && (it = qt);
          break;
        }
        (t && it && kt.alternate === null && e(C, it),
          (A = c(kt, A, zt)),
          Zt === null ? (ft = kt) : (Zt.sibling = kt),
          (Zt = kt),
          (it = qt));
      }
      if (zt === R.length) return (n(C, it), Xt && ra(C, zt), ft);
      if (it === null) {
        for (; zt < R.length; zt++)
          ((it = K(C, R[zt], Z)),
            it !== null &&
              ((A = c(it, A, zt)),
              Zt === null ? (ft = it) : (Zt.sibling = it),
              (Zt = it)));
        return (Xt && ra(C, zt), ft);
      }
      for (it = a(it); zt < R.length; zt++)
        ((qt = H(it, C, zt, R[zt], Z)),
          qt !== null &&
            (t &&
              qt.alternate !== null &&
              it.delete(qt.key === null ? zt : qt.key),
            (A = c(qt, A, zt)),
            Zt === null ? (ft = qt) : (Zt.sibling = qt),
            (Zt = qt)));
      return (
        t &&
          it.forEach(function (Ia) {
            return e(C, Ia);
          }),
        Xt && ra(C, zt),
        ft
      );
    }
    function mt(C, A, R, Z) {
      if (R == null) throw Error(i(151));
      for (
        var ft = null,
          Zt = null,
          it = A,
          zt = (A = 0),
          qt = null,
          kt = R.next();
        it !== null && !kt.done;
        zt++, kt = R.next()
      ) {
        it.index > zt ? ((qt = it), (it = null)) : (qt = it.sibling);
        var Ia = U(C, it, kt.value, Z);
        if (Ia === null) {
          it === null && (it = qt);
          break;
        }
        (t && it && Ia.alternate === null && e(C, it),
          (A = c(Ia, A, zt)),
          Zt === null ? (ft = Ia) : (Zt.sibling = Ia),
          (Zt = Ia),
          (it = qt));
      }
      if (kt.done) return (n(C, it), Xt && ra(C, zt), ft);
      if (it === null) {
        for (; !kt.done; zt++, kt = R.next())
          ((kt = K(C, kt.value, Z)),
            kt !== null &&
              ((A = c(kt, A, zt)),
              Zt === null ? (ft = kt) : (Zt.sibling = kt),
              (Zt = kt)));
        return (Xt && ra(C, zt), ft);
      }
      for (it = a(it); !kt.done; zt++, kt = R.next())
        ((kt = H(it, C, zt, kt.value, Z)),
          kt !== null &&
            (t &&
              kt.alternate !== null &&
              it.delete(kt.key === null ? zt : kt.key),
            (A = c(kt, A, zt)),
            Zt === null ? (ft = kt) : (Zt.sibling = kt),
            (Zt = kt)));
      return (
        t &&
          it.forEach(function ($v) {
            return e(C, $v);
          }),
        Xt && ra(C, zt),
        ft
      );
    }
    function ee(C, A, R, Z) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === b &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case x:
            t: {
              for (var ft = R.key; A !== null; ) {
                if (A.key === ft) {
                  if (((ft = R.type), ft === b)) {
                    if (A.tag === 7) {
                      (n(C, A.sibling),
                        (Z = s(A, R.props.children)),
                        (Z.return = C),
                        (C = Z));
                      break t;
                    }
                  } else if (
                    A.elementType === ft ||
                    (typeof ft == "object" &&
                      ft !== null &&
                      ft.$$typeof === W &&
                      zi(ft) === A.type)
                  ) {
                    (n(C, A.sibling),
                      (Z = s(A, R.props)),
                      hr(Z, R),
                      (Z.return = C),
                      (C = Z));
                    break t;
                  }
                  n(C, A);
                  break;
                } else e(C, A);
                A = A.sibling;
              }
              R.type === b
                ? ((Z = xi(R.props.children, C.mode, Z, R.key)),
                  (Z.return = C),
                  (C = Z))
                : ((Z = js(R.type, R.key, R.props, null, C.mode, Z)),
                  hr(Z, R),
                  (Z.return = C),
                  (C = Z));
            }
            return p(C);
          case O:
            t: {
              for (ft = R.key; A !== null; ) {
                if (A.key === ft)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === R.containerInfo &&
                    A.stateNode.implementation === R.implementation
                  ) {
                    (n(C, A.sibling),
                      (Z = s(A, R.children || [])),
                      (Z.return = C),
                      (C = Z));
                    break t;
                  } else {
                    n(C, A);
                    break;
                  }
                else e(C, A);
                A = A.sibling;
              }
              ((Z = Xf(R, C.mode, Z)), (Z.return = C), (C = Z));
            }
            return p(C);
          case W:
            return ((R = zi(R)), ee(C, A, R, Z));
        }
        if (vt(R)) return lt(C, A, R, Z);
        if (P(R)) {
          if (((ft = P(R)), typeof ft != "function")) throw Error(i(150));
          return ((R = ft.call(R)), mt(C, A, R, Z));
        }
        if (typeof R.then == "function") return ee(C, A, Xs(R), Z);
        if (R.$$typeof === k) return ee(C, A, Ys(C, R), Z);
        Gs(C, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          A !== null && A.tag === 6
            ? (n(C, A.sibling), (Z = s(A, R)), (Z.return = C), (C = Z))
            : (n(C, A), (Z = Lf(R, C.mode, Z)), (Z.return = C), (C = Z)),
          p(C))
        : n(C, A);
    }
    return function (C, A, R, Z) {
      try {
        or = 0;
        var ft = ee(C, A, R, Z);
        return ((du = null), ft);
      } catch (it) {
        if (it === hu || it === qs) throw it;
        var Zt = kn(29, it, null, C.mode);
        return ((Zt.lanes = Z), (Zt.return = C), Zt);
      }
    };
  }
  var Mi = X0(!0),
    G0 = X0(!1),
    Ha = !1;
  function If(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function to(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Ya(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ba(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Jt & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (a.pending = e),
        (e = ws(t)),
        z0(t, null, n),
        e
      );
    }
    return (Rs(t, a, e, n), ws(t));
  }
  function dr(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), St(t, n));
    }
  }
  function eo(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var s = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (c === null ? (s = c = p) : (c = c.next = p), (n = n.next));
        } while (n !== null);
        c === null ? (s = c = e) : (c = c.next = e);
      } else s = c = e;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var no = !1;
  function pr() {
    if (no) {
      var t = ou;
      if (t !== null) throw t;
    }
  }
  function mr(t, e, n, a) {
    no = !1;
    var s = t.updateQueue;
    Ha = !1;
    var c = s.firstBaseUpdate,
      p = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var T = y,
        w = T.next;
      ((T.next = null), p === null ? (c = w) : (p.next = w), (p = T));
      var L = t.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (y = L.lastBaseUpdate),
        y !== p &&
          (y === null ? (L.firstBaseUpdate = w) : (y.next = w),
          (L.lastBaseUpdate = T)));
    }
    if (c !== null) {
      var K = s.baseState;
      ((p = 0), (L = w = T = null), (y = c));
      do {
        var U = y.lane & -536870913,
          H = U !== y.lane;
        if (H ? (Bt & U) === U : (a & U) === U) {
          (U !== 0 && U === fu && (no = !0),
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var lt = t,
              mt = y;
            U = e;
            var ee = n;
            switch (mt.tag) {
              case 1:
                if (((lt = mt.payload), typeof lt == "function")) {
                  K = lt.call(ee, K, U);
                  break t;
                }
                K = lt;
                break t;
              case 3:
                lt.flags = (lt.flags & -65537) | 128;
              case 0:
                if (
                  ((lt = mt.payload),
                  (U = typeof lt == "function" ? lt.call(ee, K, U) : lt),
                  U == null)
                )
                  break t;
                K = v({}, K, U);
                break t;
              case 2:
                Ha = !0;
            }
          }
          ((U = y.callback),
            U !== null &&
              ((t.flags |= 64),
              H && (t.flags |= 8192),
              (H = s.callbacks),
              H === null ? (s.callbacks = [U]) : H.push(U)));
        } else
          ((H = {
            lane: U,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            L === null ? ((w = L = H), (T = K)) : (L = L.next = H),
            (p |= U));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((H = y),
            (y = H.next),
            (H.next = null),
            (s.lastBaseUpdate = H),
            (s.shared.pending = null));
        }
      } while (!0);
      (L === null && (T = K),
        (s.baseState = T),
        (s.firstBaseUpdate = w),
        (s.lastBaseUpdate = L),
        c === null && (s.shared.lanes = 0),
        (Qa |= p),
        (t.lanes = p),
        (t.memoizedState = K));
    }
  }
  function Q0(t, e) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(e);
  }
  function V0(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Q0(n[t], e);
  }
  var pu = E(null),
    Qs = E(0);
  function Z0(t, e) {
    ((t = ya), I(Qs, t), I(pu, e), (ya = t | e.baseLanes));
  }
  function lo() {
    (I(Qs, ya), I(pu, pu.current));
  }
  function ao() {
    ((ya = Qs.current), q(pu), q(Qs));
  }
  var Kn = E(null),
    Tl = null;
  function qa(t) {
    var e = t.alternate;
    (I(Ce, Ce.current & 1),
      I(Kn, t),
      Tl === null &&
        (e === null || pu.current !== null || e.memoizedState !== null) &&
        (Tl = t));
  }
  function io(t) {
    (I(Ce, Ce.current), I(Kn, t), Tl === null && (Tl = t));
  }
  function k0(t) {
    t.tag === 22
      ? (I(Ce, Ce.current), I(Kn, t), Tl === null && (Tl = t))
      : La();
  }
  function La() {
    (I(Ce, Ce.current), I(Kn, Kn.current));
  }
  function Jn(t) {
    (q(Kn), Tl === t && (Tl = null), q(Ce));
  }
  var Ce = E(0);
  function Vs(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || hh(n) || dh(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var fa = 0,
    Et = null,
    It = null,
    Ye = null,
    Zs = !1,
    mu = !1,
    Oi = !1,
    ks = 0,
    gr = 0,
    gu = null,
    Xy = 0;
  function Ee() {
    throw Error(i(321));
  }
  function uo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Zn(t[n], e[n])) return !1;
    return !0;
  }
  function ro(t, e, n, a, s, c) {
    return (
      (fa = c),
      (Et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (N.H = t === null || t.memoizedState === null ? Cp : To),
      (Oi = !1),
      (c = n(a, s)),
      (Oi = !1),
      mu && (c = J0(e, n, a, s)),
      K0(t),
      c
    );
  }
  function K0(t) {
    N.H = vr;
    var e = It !== null && It.next !== null;
    if (((fa = 0), (Ye = It = Et = null), (Zs = !1), (gr = 0), (gu = null), e))
      throw Error(i(300));
    t === null ||
      Be ||
      ((t = t.dependencies), t !== null && Hs(t) && (Be = !0));
  }
  function J0(t, e, n, a) {
    Et = t;
    var s = 0;
    do {
      if ((mu && (gu = null), (gr = 0), (mu = !1), 25 <= s))
        throw Error(i(301));
      if (((s += 1), (Ye = It = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((N.H = Dp), (c = e(n, a)));
    } while (mu);
    return c;
  }
  function Gy() {
    var t = N.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? _r(e) : e),
      (t = t.useState()[0]),
      (It !== null ? It.memoizedState : null) !== t && (Et.flags |= 1024),
      e
    );
  }
  function so() {
    var t = ks !== 0;
    return ((ks = 0), t);
  }
  function co(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function fo(t) {
    if (Zs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Zs = !1;
    }
    ((fa = 0), (Ye = It = Et = null), (mu = !1), (gr = ks = 0), (gu = null));
  }
  function vn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ye === null ? (Et.memoizedState = Ye = t) : (Ye = Ye.next = t), Ye);
  }
  function De() {
    if (It === null) {
      var t = Et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = It.next;
    var e = Ye === null ? Et.memoizedState : Ye.next;
    if (e !== null) ((Ye = e), (It = t));
    else {
      if (t === null)
        throw Et.alternate === null ? Error(i(467)) : Error(i(310));
      ((It = t),
        (t = {
          memoizedState: It.memoizedState,
          baseState: It.baseState,
          baseQueue: It.baseQueue,
          queue: It.queue,
          next: null,
        }),
        Ye === null ? (Et.memoizedState = Ye = t) : (Ye = Ye.next = t));
    }
    return Ye;
  }
  function Ks() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function _r(t) {
    var e = gr;
    return (
      (gr += 1),
      gu === null && (gu = []),
      (t = B0(gu, t, e)),
      (e = Et),
      (Ye === null ? e.memoizedState : Ye.next) === null &&
        ((e = e.alternate),
        (N.H = e === null || e.memoizedState === null ? Cp : To)),
      t
    );
  }
  function Js(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return _r(t);
      if (t.$$typeof === k) return tn(t);
    }
    throw Error(i(438, String(t)));
  }
  function oo(t) {
    var e = null,
      n = Et.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = Et.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Ks()), (Et.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = $;
    return (e.index++, n);
  }
  function oa(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Fs(t) {
    var e = De();
    return ho(e, It, t);
  }
  function ho(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue,
      c = a.pending;
    if (c !== null) {
      if (s !== null) {
        var p = s.next;
        ((s.next = c.next), (c.next = p));
      }
      ((e.baseQueue = s = c), (a.pending = null));
    }
    if (((c = t.baseState), s === null)) t.memoizedState = c;
    else {
      e = s.next;
      var y = (p = null),
        T = null,
        w = e,
        L = !1;
      do {
        var K = w.lane & -536870913;
        if (K !== w.lane ? (Bt & K) === K : (fa & K) === K) {
          var U = w.revertLane;
          if (U === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              K === fu && (L = !0));
          else if ((fa & U) === U) {
            ((w = w.next), U === fu && (L = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              T === null ? ((y = T = K), (p = c)) : (T = T.next = K),
              (Et.lanes |= U),
              (Qa |= U));
          ((K = w.action),
            Oi && n(c, K),
            (c = w.hasEagerState ? w.eagerState : n(c, K)));
        } else
          ((U = {
            lane: K,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            T === null ? ((y = T = U), (p = c)) : (T = T.next = U),
            (Et.lanes |= K),
            (Qa |= K));
        w = w.next;
      } while (w !== null && w !== e);
      if (
        (T === null ? (p = c) : (T.next = y),
        !Zn(c, t.memoizedState) && ((Be = !0), L && ((n = ou), n !== null)))
      )
        throw n;
      ((t.memoizedState = c),
        (t.baseState = p),
        (t.baseQueue = T),
        (a.lastRenderedState = c));
    }
    return (s === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function po(t) {
    var e = De(),
      n = e.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      s = n.pending,
      c = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var p = (s = s.next);
      do ((c = t(c, p.action)), (p = p.next));
      while (p !== s);
      (Zn(c, e.memoizedState) || (Be = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (n.lastRenderedState = c));
    }
    return [c, a];
  }
  function F0(t, e, n) {
    var a = Et,
      s = De(),
      c = Xt;
    if (c) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = e();
    var p = !Zn((It || s).memoizedState, n);
    if (
      (p && ((s.memoizedState = n), (Be = !0)),
      (s = s.queue),
      _o(P0.bind(null, a, s, t), [t]),
      s.getSnapshot !== e || p || (Ye !== null && Ye.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        _u(9, { destroy: void 0 }, $0.bind(null, a, s, n, e), null),
        ne === null)
      )
        throw Error(i(349));
      c || (fa & 127) !== 0 || W0(a, e, n);
    }
    return n;
  }
  function W0(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = Et.updateQueue),
      e === null
        ? ((e = Ks()), (Et.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function $0(t, e, n, a) {
    ((e.value = n), (e.getSnapshot = a), I0(e) && tp(t));
  }
  function P0(t, e, n) {
    return n(function () {
      I0(e) && tp(t);
    });
  }
  function I0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Zn(t, n);
    } catch {
      return !0;
    }
  }
  function tp(t) {
    var e = vi(t, 2);
    e !== null && Un(e, t, 2);
  }
  function mo(t) {
    var e = vn();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Oi)) {
        gn(!0);
        try {
          n();
        } finally {
          gn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oa,
        lastRenderedState: t,
      }),
      e
    );
  }
  function ep(t, e, n, a) {
    return ((t.baseState = n), ho(t, It, typeof a == "function" ? a : oa));
  }
  function Qy(t, e, n, a, s) {
    if (Ps(t)) throw Error(i(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          c.listeners.push(p);
        },
      };
      (N.T !== null ? n(!0) : (c.isTransition = !1),
        a(c),
        (n = e.pending),
        n === null
          ? ((c.next = e.pending = c), np(e, c))
          : ((c.next = n.next), (e.pending = n.next = c)));
    }
  }
  function np(t, e) {
    var n = e.action,
      a = e.payload,
      s = t.state;
    if (e.isTransition) {
      var c = N.T,
        p = {};
      N.T = p;
      try {
        var y = n(s, a),
          T = N.S;
        (T !== null && T(p, y), lp(t, e, y));
      } catch (w) {
        go(t, e, w);
      } finally {
        (c !== null && p.types !== null && (c.types = p.types), (N.T = c));
      }
    } else
      try {
        ((c = n(s, a)), lp(t, e, c));
      } catch (w) {
        go(t, e, w);
      }
  }
  function lp(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            ap(t, e, a);
          },
          function (a) {
            return go(t, e, a);
          },
        )
      : ap(t, e, n);
  }
  function ap(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      ip(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), np(t, n))));
  }
  function go(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = n), ip(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function ip(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function up(t, e) {
    return e;
  }
  function rp(t, e) {
    if (Xt) {
      var n = ne.formState;
      if (n !== null) {
        t: {
          var a = Et;
          if (Xt) {
            if (ce) {
              e: {
                for (var s = ce, c = bl; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break e;
                  }
                  if (((s = El(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((c = s.data), (s = c === "F!" || c === "F" ? s : null));
              }
              if (s) {
                ((ce = El(s.nextSibling)), (a = s.data === "F!"));
                break t;
              }
            }
            ja(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = vn()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: up,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = Ap.bind(null, Et, a)),
      (a.dispatch = n),
      (a = mo(!1)),
      (c = bo.bind(null, Et, !1, a.queue)),
      (a = vn()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = s),
      (n = Qy.bind(null, Et, s, c, n)),
      (s.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function sp(t) {
    var e = De();
    return cp(e, It, t);
  }
  function cp(t, e, n) {
    if (
      ((e = ho(t, e, up)[0]),
      (t = Fs(oa)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = _r(e);
      } catch (p) {
        throw p === hu ? qs : p;
      }
    else a = e;
    e = De();
    var s = e.queue,
      c = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((Et.flags |= 2048),
        _u(9, { destroy: void 0 }, Vy.bind(null, s, n), null)),
      [a, c, t]
    );
  }
  function Vy(t, e) {
    t.action = e;
  }
  function fp(t) {
    var e = De(),
      n = It;
    if (n !== null) return cp(e, n, t);
    (De(), (e = e.memoizedState), (n = De()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = t), [e, a, !1]);
  }
  function _u(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = Et.updateQueue),
      e === null && ((e = Ks()), (Et.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function op() {
    return De().memoizedState;
  }
  function Ws(t, e, n, a) {
    var s = vn();
    ((Et.flags |= t),
      (s.memoizedState = _u(
        1 | e,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a,
      )));
  }
  function $s(t, e, n, a) {
    var s = De();
    a = a === void 0 ? null : a;
    var c = s.memoizedState.inst;
    It !== null && a !== null && uo(a, It.memoizedState.deps)
      ? (s.memoizedState = _u(e, c, n, a))
      : ((Et.flags |= t), (s.memoizedState = _u(1 | e, c, n, a)));
  }
  function hp(t, e) {
    Ws(8390656, 8, t, e);
  }
  function _o(t, e) {
    $s(2048, 8, t, e);
  }
  function Zy(t) {
    Et.flags |= 4;
    var e = Et.updateQueue;
    if (e === null) ((e = Ks()), (Et.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function dp(t) {
    var e = De().memoizedState;
    return (
      Zy({ ref: e, nextImpl: t }),
      function () {
        if ((Jt & 2) !== 0) throw Error(i(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function pp(t, e) {
    return $s(4, 2, t, e);
  }
  function mp(t, e) {
    return $s(4, 4, t, e);
  }
  function gp(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function _p(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), $s(4, 4, gp.bind(null, e, t), n));
  }
  function yo() {}
  function yp(t, e) {
    var n = De();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && uo(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function vp(t, e) {
    var n = De();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && uo(e, a[1])) return a[0];
    if (((a = t()), Oi)) {
      gn(!0);
      try {
        t();
      } finally {
        gn(!1);
      }
    }
    return ((n.memoizedState = [a, e]), a);
  }
  function vo(t, e, n) {
    return n === void 0 || ((fa & 1073741824) !== 0 && (Bt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = xm()), (Et.lanes |= t), (Qa |= t), n);
  }
  function xp(t, e, n, a) {
    return Zn(n, e)
      ? n
      : pu.current !== null
        ? ((t = vo(t, n, a)), Zn(t, e) || (Be = !0), t)
        : (fa & 42) === 0 || ((fa & 1073741824) !== 0 && (Bt & 261930) === 0)
          ? ((Be = !0), (t.memoizedState = n))
          : ((t = xm()), (Et.lanes |= t), (Qa |= t), e);
  }
  function Sp(t, e, n, a, s) {
    var c = V.p;
    V.p = c !== 0 && 8 > c ? c : 8;
    var p = N.T,
      y = {};
    ((N.T = y), bo(t, !1, e, n));
    try {
      var T = s(),
        w = N.S;
      if (
        (w !== null && w(y, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var L = Ly(T, a);
        yr(t, e, L, $n(t));
      } else yr(t, e, a, $n(t));
    } catch (K) {
      yr(t, e, { then: function () {}, status: "rejected", reason: K }, $n());
    } finally {
      ((V.p = c),
        p !== null && y.types !== null && (p.types = y.types),
        (N.T = p));
    }
  }
  function ky() {}
  function xo(t, e, n, a) {
    if (t.tag !== 5) throw Error(i(476));
    var s = bp(t).queue;
    Sp(
      t,
      s,
      e,
      et,
      n === null
        ? ky
        : function () {
            return (Tp(t), n(a));
          },
    );
  }
  function bp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oa,
        lastRenderedState: et,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: oa,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Tp(t) {
    var e = bp(t);
    (e.next === null && (e = t.alternate.memoizedState),
      yr(t, e.next.queue, {}, $n()));
  }
  function So() {
    return tn(Ur);
  }
  function Ep() {
    return De().memoizedState;
  }
  function zp() {
    return De().memoizedState;
  }
  function Ky(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = $n();
          t = Ya(n);
          var a = Ba(e, t, n);
          (a !== null && (Un(a, e, n), dr(a, e, n)),
            (e = { cache: Ff() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Jy(t, e, n) {
    var a = $n();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ps(t)
        ? Mp(e, n)
        : ((n = Bf(t, e, n, a)), n !== null && (Un(n, t, a), Op(n, e, a))));
  }
  function Ap(t, e, n) {
    var a = $n();
    yr(t, e, n, a);
  }
  function yr(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ps(t)) Mp(e, s);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var p = e.lastRenderedState,
            y = c(p, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), Zn(y, p)))
            return (Rs(t, e, s, 0), ne === null && Ns(), !1);
        } catch {}
      if (((n = Bf(t, e, s, a)), n !== null))
        return (Un(n, t, a), Op(n, e, a), !0);
    }
    return !1;
  }
  function bo(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: th(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ps(t))
    ) {
      if (e) throw Error(i(479));
    } else ((e = Bf(t, n, a, 2)), e !== null && Un(e, t, 2));
  }
  function Ps(t) {
    var e = t.alternate;
    return t === Et || (e !== null && e === Et);
  }
  function Mp(t, e) {
    mu = Zs = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function Op(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), St(t, n));
    }
  }
  var vr = {
    readContext: tn,
    use: Js,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useLayoutEffect: Ee,
    useInsertionEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    useHostTransitionStatus: Ee,
    useFormState: Ee,
    useActionState: Ee,
    useOptimistic: Ee,
    useMemoCache: Ee,
    useCacheRefresh: Ee,
  };
  vr.useEffectEvent = Ee;
  var Cp = {
      readContext: tn,
      use: Js,
      useCallback: function (t, e) {
        return ((vn().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: tn,
      useEffect: hp,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          Ws(4194308, 4, gp.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return Ws(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Ws(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = vn();
        e = e === void 0 ? null : e;
        var a = t();
        if (Oi) {
          gn(!0);
          try {
            t();
          } finally {
            gn(!1);
          }
        }
        return ((n.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, n) {
        var a = vn();
        if (n !== void 0) {
          var s = n(e);
          if (Oi) {
            gn(!0);
            try {
              n(e);
            } finally {
              gn(!1);
            }
          }
        } else s = e;
        return (
          (a.memoizedState = a.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (a.queue = t),
          (t = t.dispatch = Jy.bind(null, Et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = vn();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = mo(t);
        var e = t.queue,
          n = Ap.bind(null, Et, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: yo,
      useDeferredValue: function (t, e) {
        var n = vn();
        return vo(n, t, e);
      },
      useTransition: function () {
        var t = mo(!1);
        return (
          (t = Sp.bind(null, Et, t.queue, !0, !1)),
          (vn().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = Et,
          s = vn();
        if (Xt) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = e()), ne === null)) throw Error(i(349));
          (Bt & 127) !== 0 || W0(a, e, n);
        }
        s.memoizedState = n;
        var c = { value: n, getSnapshot: e };
        return (
          (s.queue = c),
          hp(P0.bind(null, a, c, t), [t]),
          (a.flags |= 2048),
          _u(9, { destroy: void 0 }, $0.bind(null, a, c, n, e), null),
          n
        );
      },
      useId: function () {
        var t = vn(),
          e = ne.identifierPrefix;
        if (Xt) {
          var n = kl,
            a = Zl;
          ((n = (a & ~(1 << (32 - Ue(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = ks++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Xy++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: So,
      useFormState: rp,
      useActionState: rp,
      useOptimistic: function (t) {
        var e = vn();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = bo.bind(null, Et, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: oo,
      useCacheRefresh: function () {
        return (vn().memoizedState = Ky.bind(null, Et));
      },
      useEffectEvent: function (t) {
        var e = vn(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Jt & 2) !== 0) throw Error(i(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    To = {
      readContext: tn,
      use: Js,
      useCallback: yp,
      useContext: tn,
      useEffect: _o,
      useImperativeHandle: _p,
      useInsertionEffect: pp,
      useLayoutEffect: mp,
      useMemo: vp,
      useReducer: Fs,
      useRef: op,
      useState: function () {
        return Fs(oa);
      },
      useDebugValue: yo,
      useDeferredValue: function (t, e) {
        var n = De();
        return xp(n, It.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Fs(oa)[0],
          e = De().memoizedState;
        return [typeof t == "boolean" ? t : _r(t), e];
      },
      useSyncExternalStore: F0,
      useId: Ep,
      useHostTransitionStatus: So,
      useFormState: sp,
      useActionState: sp,
      useOptimistic: function (t, e) {
        var n = De();
        return ep(n, It, t, e);
      },
      useMemoCache: oo,
      useCacheRefresh: zp,
    };
  To.useEffectEvent = dp;
  var Dp = {
    readContext: tn,
    use: Js,
    useCallback: yp,
    useContext: tn,
    useEffect: _o,
    useImperativeHandle: _p,
    useInsertionEffect: pp,
    useLayoutEffect: mp,
    useMemo: vp,
    useReducer: po,
    useRef: op,
    useState: function () {
      return po(oa);
    },
    useDebugValue: yo,
    useDeferredValue: function (t, e) {
      var n = De();
      return It === null ? vo(n, t, e) : xp(n, It.memoizedState, t, e);
    },
    useTransition: function () {
      var t = po(oa)[0],
        e = De().memoizedState;
      return [typeof t == "boolean" ? t : _r(t), e];
    },
    useSyncExternalStore: F0,
    useId: Ep,
    useHostTransitionStatus: So,
    useFormState: fp,
    useActionState: fp,
    useOptimistic: function (t, e) {
      var n = De();
      return It !== null
        ? ep(n, It, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: oo,
    useCacheRefresh: zp,
  };
  Dp.useEffectEvent = dp;
  function Eo(t, e, n, a) {
    ((e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : v({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var zo = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = $n(),
        s = Ya(a);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = Ba(t, s, a)),
        e !== null && (Un(e, t, a), dr(e, t, a)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = $n(),
        s = Ya(a);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Ba(t, s, a)),
        e !== null && (Un(e, t, a), dr(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = $n(),
        a = Ya(n);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = Ba(t, a, n)),
        e !== null && (Un(e, t, n), dr(e, t, n)));
    },
  };
  function Np(t, e, n, a, s, c, p) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, c, p)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ir(n, a) || !ir(s, c)
          : !0
    );
  }
  function Rp(t, e, n, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && zo.enqueueReplaceState(e, e.state, null));
  }
  function Ci(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = v({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function wp(t) {
    Ds(t);
  }
  function jp(t) {
    console.error(t);
  }
  function Up(t) {
    Ds(t);
  }
  function Is(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Hp(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Ao(t, e, n) {
    return (
      (n = Ya(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Is(t, e);
      }),
      n
    );
  }
  function Yp(t) {
    return ((t = Ya(t)), (t.tag = 3), t);
  }
  function Bp(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = a.value;
      ((t.payload = function () {
        return s(c);
      }),
        (t.callback = function () {
          Hp(e, n, a);
        }));
    }
    var p = n.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (t.callback = function () {
        (Hp(e, n, a),
          typeof s != "function" &&
            (Va === null ? (Va = new Set([this])) : Va.add(this)));
        var y = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function Fy(t, e, n, a, s) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && cu(e, n, s, !0),
        (n = Kn.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Tl === null ? oc() : n.alternate === null && ze === 0 && (ze = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              a === Ls
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  $o(t, a, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Ls
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  $o(t, a, s)),
              !1
            );
        }
        throw Error(i(435, n.tag));
      }
      return ($o(t, a, s), oc(), !1);
    }
    if (Xt)
      return (
        (e = Kn.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            a !== Vf && ((t = Error(i(422), { cause: a })), sr(vl(t, n))))
          : (a !== Vf && ((e = Error(i(423), { cause: a })), sr(vl(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (a = vl(a, n)),
            (s = Ao(t.stateNode, a, s)),
            eo(t, s),
            ze !== 4 && (ze = 2)),
        !1
      );
    var c = Error(i(520), { cause: a });
    if (
      ((c = vl(c, n)),
      Mr === null ? (Mr = [c]) : Mr.push(c),
      ze !== 4 && (ze = 2),
      e === null)
    )
      return !0;
    ((a = vl(a, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Ao(n.stateNode, a, t)),
            eo(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Va === null || !Va.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Yp(s)),
              Bp(s, t, n, a),
              eo(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Mo = Error(i(461)),
    Be = !1;
  function en(t, e, n, a) {
    e.child = t === null ? G0(e, null, n, a) : Mi(e, t.child, n, a);
  }
  function qp(t, e, n, a, s) {
    n = n.render;
    var c = e.ref;
    if ("ref" in a) {
      var p = {};
      for (var y in a) y !== "ref" && (p[y] = a[y]);
    } else p = a;
    return (
      Ti(e),
      (a = ro(t, e, n, p, c, s)),
      (y = so()),
      t !== null && !Be
        ? (co(t, e, s), ha(t, e, s))
        : (Xt && y && Gf(e), (e.flags |= 1), en(t, e, a, s), e.child)
    );
  }
  function Lp(t, e, n, a, s) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" &&
        !qf(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = c), Xp(t, e, c, a, s))
        : ((t = js(n.type, null, a, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !Uo(t, s))) {
      var p = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ir), n(p, a) && t.ref === e.ref)
      )
        return ha(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = ua(c, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Xp(t, e, n, a, s) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (ir(c, a) && t.ref === e.ref)
        if (((Be = !1), (e.pendingProps = a = c), Uo(t, s)))
          (t.flags & 131072) !== 0 && (Be = !0);
        else return ((e.lanes = t.lanes), ha(t, e, s));
    }
    return Oo(t, e, n, a, s);
  }
  function Gp(t, e, n, a) {
    var s = a.children,
      c = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, s = 0; a !== null; )
            ((s = s | a.lanes | a.childLanes), (a = a.sibling));
          a = s & ~c;
        } else ((a = 0), (e.child = null));
        return Qp(t, e, c, n, a);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Bs(e, c !== null ? c.cachePool : null),
          c !== null ? Z0(e, c) : lo(),
          k0(e));
      else
        return (
          (a = e.lanes = 536870912),
          Qp(t, e, c !== null ? c.baseLanes | n : n, n, a)
        );
    } else
      c !== null
        ? (Bs(e, c.cachePool), Z0(e, c), La(), (e.memoizedState = null))
        : (t !== null && Bs(e, null), lo(), La());
    return (en(t, e, s, n), e.child);
  }
  function xr(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Qp(t, e, n, a, s) {
    var c = $f();
    return (
      (c = c === null ? null : { parent: He._currentValue, pool: c }),
      (e.memoizedState = { baseLanes: n, cachePool: c }),
      t !== null && Bs(e, null),
      lo(),
      k0(e),
      t !== null && cu(t, e, a, !0),
      (e.childLanes = s),
      null
    );
  }
  function tc(t, e) {
    return (
      (e = nc({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Vp(t, e, n) {
    return (
      Mi(e, t.child, null, n),
      (t = tc(e, e.pendingProps)),
      (t.flags |= 2),
      Jn(e),
      (e.memoizedState = null),
      t
    );
  }
  function Wy(t, e, n) {
    var a = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Xt) {
        if (a.mode === "hidden")
          return ((t = tc(e, a)), (e.lanes = 536870912), xr(null, t));
        if (
          (io(e),
          (t = ce)
            ? ((t = n1(t, bl)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ra !== null ? { id: Zl, overflow: kl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = M0(t)),
                (n.return = e),
                (e.child = n),
                (Ie = e),
                (ce = null)))
            : (t = null),
          t === null)
        )
          throw ja(e);
        return ((e.lanes = 536870912), null);
      }
      return tc(e, a);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if ((io(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = Vp(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(i(558));
      else if (
        (Be || cu(t, e, n, !1), (s = (n & t.childLanes) !== 0), Be || s)
      ) {
        if (
          ((a = ne),
          a !== null && ((p = ct(a, n)), p !== 0 && p !== c.retryLane))
        )
          throw ((c.retryLane = p), vi(t, p), Un(a, t, p), Mo);
        (oc(), (e = Vp(t, e, n)));
      } else
        ((t = c.treeContext),
          (ce = El(p.nextSibling)),
          (Ie = e),
          (Xt = !0),
          (wa = null),
          (bl = !1),
          t !== null && D0(e, t),
          (e = tc(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = ua(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ec(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(i(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Oo(t, e, n, a, s) {
    return (
      Ti(e),
      (n = ro(t, e, n, a, void 0, s)),
      (a = so()),
      t !== null && !Be
        ? (co(t, e, s), ha(t, e, s))
        : (Xt && a && Gf(e), (e.flags |= 1), en(t, e, n, s), e.child)
    );
  }
  function Zp(t, e, n, a, s, c) {
    return (
      Ti(e),
      (e.updateQueue = null),
      (n = J0(e, a, n, s)),
      K0(t),
      (a = so()),
      t !== null && !Be
        ? (co(t, e, c), ha(t, e, c))
        : (Xt && a && Gf(e), (e.flags |= 1), en(t, e, n, c), e.child)
    );
  }
  function kp(t, e, n, a, s) {
    if ((Ti(e), e.stateNode === null)) {
      var c = iu,
        p = n.contextType;
      (typeof p == "object" && p !== null && (c = tn(p)),
        (c = new n(a, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = zo),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = a),
        (c.state = e.memoizedState),
        (c.refs = {}),
        If(e),
        (p = n.contextType),
        (c.context = typeof p == "object" && p !== null ? tn(p) : iu),
        (c.state = e.memoizedState),
        (p = n.getDerivedStateFromProps),
        typeof p == "function" && (Eo(e, n, p, a), (c.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((p = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          p !== c.state && zo.enqueueReplaceState(c, c.state, null),
          mr(e, a, c, s),
          pr(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      c = e.stateNode;
      var y = e.memoizedProps,
        T = Ci(n, y);
      c.props = T;
      var w = c.context,
        L = n.contextType;
      ((p = iu), typeof L == "object" && L !== null && (p = tn(L)));
      var K = n.getDerivedStateFromProps;
      ((L =
        typeof K == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (y = e.pendingProps !== y),
        L ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((y || w !== p) && Rp(e, c, a, p)),
        (Ha = !1));
      var U = e.memoizedState;
      ((c.state = U),
        mr(e, a, c, s),
        pr(),
        (w = e.memoizedState),
        y || U !== w || Ha
          ? (typeof K == "function" && (Eo(e, n, K, a), (w = e.memoizedState)),
            (T = Ha || Np(e, n, T, a, U, w, p))
              ? (L ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = w)),
            (c.props = a),
            (c.state = w),
            (c.context = p),
            (a = T))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((c = e.stateNode),
        to(t, e),
        (p = e.memoizedProps),
        (L = Ci(n, p)),
        (c.props = L),
        (K = e.pendingProps),
        (U = c.context),
        (w = n.contextType),
        (T = iu),
        typeof w == "object" && w !== null && (T = tn(w)),
        (y = n.getDerivedStateFromProps),
        (w =
          typeof y == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((p !== K || U !== T) && Rp(e, c, a, T)),
        (Ha = !1),
        (U = e.memoizedState),
        (c.state = U),
        mr(e, a, c, s),
        pr());
      var H = e.memoizedState;
      p !== K ||
      U !== H ||
      Ha ||
      (t !== null && t.dependencies !== null && Hs(t.dependencies))
        ? (typeof y == "function" && (Eo(e, n, y, a), (H = e.memoizedState)),
          (L =
            Ha ||
            Np(e, n, L, a, U, H, T) ||
            (t !== null && t.dependencies !== null && Hs(t.dependencies)))
            ? (w ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(a, H, T),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(a, H, T)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (p === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (p === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = H)),
          (c.props = a),
          (c.state = H),
          (c.context = T),
          (a = L))
        : (typeof c.componentDidUpdate != "function" ||
            (p === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (p === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (c = a),
      ec(t, e),
      (a = (e.flags & 128) !== 0),
      c || a
        ? ((c = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Mi(e, t.child, null, s)),
              (e.child = Mi(e, null, n, s)))
            : en(t, e, n, s),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = ha(t, e, s)),
      t
    );
  }
  function Kp(t, e, n, a) {
    return (Si(), (e.flags |= 256), en(t, e, n, a), e.child);
  }
  var Co = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Do(t) {
    return { baseLanes: t, cachePool: H0() };
  }
  function No(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Wn), t);
  }
  function Jp(t, e, n) {
    var a = e.pendingProps,
      s = !1,
      c = (e.flags & 128) !== 0,
      p;
    if (
      ((p = c) ||
        (p =
          t !== null && t.memoizedState === null ? !1 : (Ce.current & 2) !== 0),
      p && ((s = !0), (e.flags &= -129)),
      (p = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Xt) {
        if (
          (s ? qa(e) : La(),
          (t = ce)
            ? ((t = n1(t, bl)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ra !== null ? { id: Zl, overflow: kl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = M0(t)),
                (n.return = e),
                (e.child = n),
                (Ie = e),
                (ce = null)))
            : (t = null),
          t === null)
        )
          throw ja(e);
        return (dh(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var y = a.children;
      return (
        (a = a.fallback),
        s
          ? (La(),
            (s = e.mode),
            (y = nc({ mode: "hidden", children: y }, s)),
            (a = xi(a, s, n, null)),
            (y.return = e),
            (a.return = e),
            (y.sibling = a),
            (e.child = y),
            (a = e.child),
            (a.memoizedState = Do(n)),
            (a.childLanes = No(t, p, n)),
            (e.memoizedState = Co),
            xr(null, a))
          : (qa(e), Ro(e, y))
      );
    }
    var T = t.memoizedState;
    if (T !== null && ((y = T.dehydrated), y !== null)) {
      if (c)
        e.flags & 256
          ? (qa(e), (e.flags &= -257), (e = wo(t, e, n)))
          : e.memoizedState !== null
            ? (La(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (La(),
              (y = a.fallback),
              (s = e.mode),
              (a = nc({ mode: "visible", children: a.children }, s)),
              (y = xi(y, s, n, null)),
              (y.flags |= 2),
              (a.return = e),
              (y.return = e),
              (a.sibling = y),
              (e.child = a),
              Mi(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = Do(n)),
              (a.childLanes = No(t, p, n)),
              (e.memoizedState = Co),
              (e = xr(null, a)));
      else if ((qa(e), dh(y))) {
        if (((p = y.nextSibling && y.nextSibling.dataset), p)) var w = p.dgst;
        ((p = w),
          (a = Error(i(419))),
          (a.stack = ""),
          (a.digest = p),
          sr({ value: a, source: null, stack: null }),
          (e = wo(t, e, n)));
      } else if (
        (Be || cu(t, e, n, !1), (p = (n & t.childLanes) !== 0), Be || p)
      ) {
        if (
          ((p = ne),
          p !== null && ((a = ct(p, n)), a !== 0 && a !== T.retryLane))
        )
          throw ((T.retryLane = a), vi(t, a), Un(p, t, a), Mo);
        (hh(y) || oc(), (e = wo(t, e, n)));
      } else
        hh(y)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (ce = El(y.nextSibling)),
            (Ie = e),
            (Xt = !0),
            (wa = null),
            (bl = !1),
            t !== null && D0(e, t),
            (e = Ro(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (La(),
        (y = a.fallback),
        (s = e.mode),
        (T = t.child),
        (w = T.sibling),
        (a = ua(T, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = T.subtreeFlags & 65011712),
        w !== null ? (y = ua(w, y)) : ((y = xi(y, s, n, null)), (y.flags |= 2)),
        (y.return = e),
        (a.return = e),
        (a.sibling = y),
        (e.child = a),
        xr(null, a),
        (a = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = Do(n))
          : ((s = y.cachePool),
            s !== null
              ? ((T = He._currentValue),
                (s = s.parent !== T ? { parent: T, pool: T } : s))
              : (s = H0()),
            (y = { baseLanes: y.baseLanes | n, cachePool: s })),
        (a.memoizedState = y),
        (a.childLanes = No(t, p, n)),
        (e.memoizedState = Co),
        xr(t.child, a))
      : (qa(e),
        (n = t.child),
        (t = n.sibling),
        (n = ua(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((p = e.deletions),
          p === null ? ((e.deletions = [t]), (e.flags |= 16)) : p.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Ro(t, e) {
    return (
      (e = nc({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function nc(t, e) {
    return ((t = kn(22, t, null, e)), (t.lanes = 0), t);
  }
  function wo(t, e, n) {
    return (
      Mi(e, t.child, null, n),
      (t = Ro(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Fp(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), Kf(t.return, e, n));
  }
  function jo(t, e, n, a, s, c) {
    var p = t.memoizedState;
    p === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: s,
          treeForkCount: c,
        })
      : ((p.isBackwards = e),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = a),
        (p.tail = n),
        (p.tailMode = s),
        (p.treeForkCount = c));
  }
  function Wp(t, e, n) {
    var a = e.pendingProps,
      s = a.revealOrder,
      c = a.tail;
    a = a.children;
    var p = Ce.current,
      y = (p & 2) !== 0;
    if (
      (y ? ((p = (p & 1) | 2), (e.flags |= 128)) : (p &= 1),
      I(Ce, p),
      en(t, e, a, n),
      (a = Xt ? rr : 0),
      !y && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Fp(t, n, e);
        else if (t.tag === 19) Fp(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          ((t = n.alternate),
            t !== null && Vs(t) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          jo(e, !1, s, n, c, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Vs(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        jo(e, !0, n, null, c, a);
        break;
      case "together":
        jo(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ha(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Qa |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((cu(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(i(153));
    if (e.child !== null) {
      for (
        t = e.child, n = ua(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = ua(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Uo(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Hs(t)));
  }
  function $y(t, e, n) {
    switch (e.tag) {
      case 3:
        (Kt(e, e.stateNode.containerInfo),
          Ua(e, He, t.memoizedState.cache),
          Si());
        break;
      case 27:
      case 5:
        Mn(e);
        break;
      case 4:
        Kt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ua(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), io(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (qa(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Jp(t, e, n)
              : (qa(e), (t = ha(t, e, n)), t !== null ? t.sibling : null);
        qa(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (cu(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (a) return Wp(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          I(Ce, Ce.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Gp(t, e, n, e.pendingProps));
      case 24:
        Ua(e, He, t.memoizedState.cache);
    }
    return ha(t, e, n);
  }
  function $p(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Be = !0;
      else {
        if (!Uo(t, n) && (e.flags & 128) === 0) return ((Be = !1), $y(t, e, n));
        Be = (t.flags & 131072) !== 0;
      }
    else ((Be = !1), Xt && (e.flags & 1048576) !== 0 && C0(e, rr, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = zi(e.elementType)), (e.type = t), typeof t == "function"))
            qf(t)
              ? ((a = Ci(t, a)), (e.tag = 1), (e = kp(null, e, t, a, n)))
              : ((e.tag = 0), (e = Oo(null, e, t, a, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === Y) {
                ((e.tag = 11), (e = qp(null, e, t, a, n)));
                break t;
              } else if (s === j) {
                ((e.tag = 14), (e = Lp(null, e, t, a, n)));
                break t;
              }
            }
            throw ((e = _t(t) || t), Error(i(306, e, "")));
          }
        }
        return e;
      case 0:
        return Oo(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((a = e.type), (s = Ci(a, e.pendingProps)), kp(t, e, a, s, n));
      case 3:
        t: {
          if ((Kt(e, e.stateNode.containerInfo), t === null))
            throw Error(i(387));
          a = e.pendingProps;
          var c = e.memoizedState;
          ((s = c.element), to(t, e), mr(e, a, null, n));
          var p = e.memoizedState;
          if (
            ((a = p.cache),
            Ua(e, He, a),
            a !== c.cache && Jf(e, [He], n, !0),
            pr(),
            (a = p.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: p.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = Kp(t, e, a, n);
              break t;
            } else if (a !== s) {
              ((s = vl(Error(i(424)), e)), sr(s), (e = Kp(t, e, a, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  ce = El(t.firstChild),
                  Ie = e,
                  Xt = !0,
                  wa = null,
                  bl = !0,
                  n = G0(e, null, a, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Si(), a === s)) {
              e = ha(t, e, n);
              break t;
            }
            en(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ec(t, e),
          t === null
            ? (n = s1(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Xt ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = yc(dt.current).createElement(n)),
                (a[At] = e),
                (a[Ot] = t),
                nn(a, n, t),
                Rt(a),
                (e.stateNode = a))
            : (e.memoizedState = s1(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Mn(e),
          t === null &&
            Xt &&
            ((a = e.stateNode = i1(e.type, e.pendingProps, dt.current)),
            (Ie = e),
            (bl = !0),
            (s = ce),
            Ja(e.type) ? ((ph = s), (ce = El(a.firstChild))) : (ce = s)),
          en(t, e, e.pendingProps.children, n),
          ec(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Xt &&
            ((s = a = ce) &&
              ((a = Mv(a, e.type, e.pendingProps, bl)),
              a !== null
                ? ((e.stateNode = a),
                  (Ie = e),
                  (ce = El(a.firstChild)),
                  (bl = !1),
                  (s = !0))
                : (s = !1)),
            s || ja(e)),
          Mn(e),
          (s = e.type),
          (c = e.pendingProps),
          (p = t !== null ? t.memoizedProps : null),
          (a = c.children),
          ch(s, c) ? (a = null) : p !== null && ch(s, p) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = ro(t, e, Gy, null, null, n)), (Ur._currentValue = s)),
          ec(t, e),
          en(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Xt &&
            ((t = n = ce) &&
              ((n = Ov(n, e.pendingProps, bl)),
              n !== null
                ? ((e.stateNode = n), (Ie = e), (ce = null), (t = !0))
                : (t = !1)),
            t || ja(e)),
          null
        );
      case 13:
        return Jp(t, e, n);
      case 4:
        return (
          Kt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Mi(e, null, a, n)) : en(t, e, a, n),
          e.child
        );
      case 11:
        return qp(t, e, e.type, e.pendingProps, n);
      case 7:
        return (en(t, e, e.pendingProps, n), e.child);
      case 8:
        return (en(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (en(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          Ua(e, e.type, a.value),
          en(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (a = e.pendingProps.children),
          Ti(e),
          (s = tn(s)),
          (a = a(s)),
          (e.flags |= 1),
          en(t, e, a, n),
          e.child
        );
      case 14:
        return Lp(t, e, e.type, e.pendingProps, n);
      case 15:
        return Xp(t, e, e.type, e.pendingProps, n);
      case 19:
        return Wp(t, e, n);
      case 31:
        return Wy(t, e, n);
      case 22:
        return Gp(t, e, n, e.pendingProps);
      case 24:
        return (
          Ti(e),
          (a = tn(He)),
          t === null
            ? ((s = $f()),
              s === null &&
                ((s = ne),
                (c = Ff()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= n),
                (s = c)),
              (e.memoizedState = { parent: a, cache: s }),
              If(e),
              Ua(e, He, s))
            : ((t.lanes & n) !== 0 && (to(t, e), mr(e, null, null, n), pr()),
              (s = t.memoizedState),
              (c = e.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Ua(e, He, a))
                : ((a = c.cache),
                  Ua(e, He, a),
                  a !== s.cache && Jf(e, [He], n, !0))),
          en(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function da(t) {
    t.flags |= 4;
  }
  function Ho(t, e, n, a, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Em()) t.flags |= 8192;
        else throw ((Ai = Ls), Pf);
    } else t.flags &= -16777217;
  }
  function Pp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !d1(e)))
      if (Em()) t.flags |= 8192;
      else throw ((Ai = Ls), Pf);
  }
  function lc(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Ca() : 536870912), (t.lanes |= e), (Su |= e)));
  }
  function Sr(t, e) {
    if (!Xt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function fe(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = n), e);
  }
  function Py(t, e, n) {
    var a = e.pendingProps;
    switch ((Qf(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (fe(e), null);
      case 1:
        return (fe(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          ca(He),
          Dt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (su(e)
              ? da(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Zf())),
          fe(e),
          null
        );
      case 26:
        var s = e.type,
          c = e.memoizedState;
        return (
          t === null
            ? (da(e),
              c !== null ? (fe(e), Pp(e, c)) : (fe(e), Ho(e, s, null, a, n)))
            : c
              ? c !== t.memoizedState
                ? (da(e), fe(e), Pp(e, c))
                : (fe(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && da(e),
                fe(e),
                Ho(e, s, t, a, n)),
          null
        );
      case 27:
        if (
          (we(e),
          (n = dt.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && da(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(i(166));
            return (fe(e), null);
          }
          ((t = tt.current),
            su(e) ? N0(e) : ((t = i1(s, a, n)), (e.stateNode = t), da(e)));
        }
        return (fe(e), null);
      case 5:
        if ((we(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && da(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(i(166));
            return (fe(e), null);
          }
          if (((c = tt.current), su(e))) N0(e);
          else {
            var p = yc(dt.current);
            switch (c) {
              case 1:
                c = p.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                c = p.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    c = p.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    c = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((c = p.createElement("div")),
                      (c.innerHTML = "<script><\/script>"),
                      (c = c.removeChild(c.firstChild)));
                    break;
                  case "select":
                    ((c =
                      typeof a.is == "string"
                        ? p.createElement("select", { is: a.is })
                        : p.createElement("select")),
                      a.multiple
                        ? (c.multiple = !0)
                        : a.size && (c.size = a.size));
                    break;
                  default:
                    c =
                      typeof a.is == "string"
                        ? p.createElement(s, { is: a.is })
                        : p.createElement(s);
                }
            }
            ((c[At] = e), (c[Ot] = a));
            t: for (p = e.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6) c.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                ((p.child.return = p), (p = p.child));
                continue;
              }
              if (p === e) break t;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === e) break t;
                p = p.return;
              }
              ((p.sibling.return = p.return), (p = p.sibling));
            }
            e.stateNode = c;
            t: switch ((nn(c, s, a), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && da(e);
          }
        }
        return (
          fe(e),
          Ho(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && da(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(i(166));
          if (((t = dt.current), su(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (s = Ie),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            ((t[At] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Jm(t.nodeValue, n)
              )),
              t || ja(e, !0));
          } else
            ((t = yc(t).createTextNode(a)), (t[At] = e), (e.stateNode = t));
        }
        return (fe(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = su(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(i(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(i(557));
              t[At] = e;
            } else
              (Si(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (fe(e), (t = !1));
          } else
            ((n = Zf()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Jn(e), e) : (Jn(e), null);
          if ((e.flags & 128) !== 0) throw Error(i(558));
        }
        return (fe(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = su(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(i(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(i(317));
              s[At] = e;
            } else
              (Si(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (fe(e), (s = !1));
          } else
            ((s = Zf()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (Jn(e), e) : (Jn(e), null);
        }
        return (
          Jn(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (c = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (c = a.memoizedState.cachePool.pool),
                c !== s && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              lc(e, e.updateQueue),
              fe(e),
              null)
        );
      case 4:
        return (Dt(), t === null && ah(e.stateNode.containerInfo), fe(e), null);
      case 10:
        return (ca(e.type), fe(e), null);
      case 19:
        if ((q(Ce), (a = e.memoizedState), a === null)) return (fe(e), null);
        if (((s = (e.flags & 128) !== 0), (c = a.rendering), c === null))
          if (s) Sr(a, !1);
          else {
            if (ze !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = Vs(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      Sr(a, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      lc(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (A0(n, t), (n = n.sibling));
                  return (
                    I(Ce, (Ce.current & 1) | 2),
                    Xt && ra(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              Me() > sc &&
              ((e.flags |= 128), (s = !0), Sr(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = Vs(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                lc(e, t),
                Sr(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !c.alternate &&
                  !Xt)
              )
                return (fe(e), null);
            } else
              2 * Me() - a.renderingStartTime > sc &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Sr(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = a.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (a.last = c));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Me()),
            (t.sibling = null),
            (n = Ce.current),
            I(Ce, s ? (n & 1) | 2 : n & 1),
            Xt && ra(e, a.treeForkCount),
            t)
          : (fe(e), null);
      case 22:
      case 23:
        return (
          Jn(e),
          ao(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (fe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : fe(e),
          (n = e.updateQueue),
          n !== null && lc(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && q(Ei),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          ca(He),
          fe(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function Iy(t, e) {
    switch ((Qf(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          ca(He),
          Dt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (we(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Jn(e), e.alternate === null)) throw Error(i(340));
          Si();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Jn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(i(340));
          Si();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (q(Ce), null);
      case 4:
        return (Dt(), null);
      case 10:
        return (ca(e.type), null);
      case 22:
      case 23:
        return (
          Jn(e),
          ao(),
          t !== null && q(Ei),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (ca(He), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ip(t, e) {
    switch ((Qf(e), e.tag)) {
      case 3:
        (ca(He), Dt());
        break;
      case 26:
      case 27:
      case 5:
        we(e);
        break;
      case 4:
        Dt();
        break;
      case 31:
        e.memoizedState !== null && Jn(e);
        break;
      case 13:
        Jn(e);
        break;
      case 19:
        q(Ce);
        break;
      case 10:
        ca(e.type);
        break;
      case 22:
      case 23:
        (Jn(e), ao(), t !== null && q(Ei));
        break;
      case 24:
        ca(He);
    }
  }
  function br(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var c = n.create,
              p = n.inst;
            ((a = c()), (p.destroy = a));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      Pt(e, e.return, y);
    }
  }
  function Xa(t, e, n) {
    try {
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        a = c;
        do {
          if ((a.tag & t) === t) {
            var p = a.inst,
              y = p.destroy;
            if (y !== void 0) {
              ((p.destroy = void 0), (s = e));
              var T = n,
                w = y;
              try {
                w();
              } catch (L) {
                Pt(s, T, L);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (L) {
      Pt(e, e.return, L);
    }
  }
  function tm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        V0(e, n);
      } catch (a) {
        Pt(t, t.return, a);
      }
    }
  }
  function em(t, e, n) {
    ((n.props = Ci(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Pt(t, e, a);
    }
  }
  function Tr(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (s) {
      Pt(t, e, s);
    }
  }
  function Kl(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          Pt(t, e, s);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Pt(t, e, s);
        }
      else n.current = null;
  }
  function nm(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      Pt(t, t.return, s);
    }
  }
  function Yo(t, e, n) {
    try {
      var a = t.stateNode;
      (Sv(a, t.type, n, e), (a[Ot] = e));
    } catch (s) {
      Pt(t, t.return, s);
    }
  }
  function lm(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Ja(t.type)) ||
      t.tag === 4
    );
  }
  function Bo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || lm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Ja(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function qo(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = aa)));
    else if (
      a !== 4 &&
      (a === 27 && Ja(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (qo(t, e, n), t = t.sibling; t !== null; )
        (qo(t, e, n), (t = t.sibling));
  }
  function ac(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && Ja(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (ac(t, e, n), t = t.sibling; t !== null; )
        (ac(t, e, n), (t = t.sibling));
  }
  function am(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      (nn(e, a, n), (e[At] = t), (e[Ot] = n));
    } catch (c) {
      Pt(t, t.return, c);
    }
  }
  var pa = !1,
    qe = !1,
    Lo = !1,
    im = typeof WeakSet == "function" ? WeakSet : Set,
    Je = null;
  function tv(t, e) {
    if (((t = t.containerInfo), (rh = zc), (t = _0(t)), Rf(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset,
              c = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, c.nodeType);
            } catch {
              n = null;
              break t;
            }
            var p = 0,
              y = -1,
              T = -1,
              w = 0,
              L = 0,
              K = t,
              U = null;
            e: for (;;) {
              for (
                var H;
                K !== n || (s !== 0 && K.nodeType !== 3) || (y = p + s),
                  K !== c || (a !== 0 && K.nodeType !== 3) || (T = p + a),
                  K.nodeType === 3 && (p += K.nodeValue.length),
                  (H = K.firstChild) !== null;
              )
                ((U = K), (K = H));
              for (;;) {
                if (K === t) break e;
                if (
                  (U === n && ++w === s && (y = p),
                  U === c && ++L === a && (T = p),
                  (H = K.nextSibling) !== null)
                )
                  break;
                ((K = U), (U = K.parentNode));
              }
              K = H;
            }
            n = y === -1 || T === -1 ? null : { start: y, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      sh = { focusedElem: t, selectionRange: n }, zc = !1, Je = e;
      Je !== null;
    )
      if (
        ((e = Je), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Je = t));
      else
        for (; Je !== null; ) {
          switch (((e = Je), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((s = t[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                ((t = void 0),
                  (n = e),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (a = n.stateNode));
                try {
                  var lt = Ci(n.type, s);
                  ((t = a.getSnapshotBeforeUpdate(lt, c)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (mt) {
                  Pt(n, n.return, mt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  oh(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      oh(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Je = t));
            break;
          }
          Je = e.return;
        }
  }
  function um(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (ga(t, n), a & 4 && br(5, n));
        break;
      case 1:
        if ((ga(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (p) {
              Pt(n, n.return, p);
            }
          else {
            var s = Ci(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              Pt(n, n.return, p);
            }
          }
        (a & 64 && tm(n), a & 512 && Tr(n, n.return));
        break;
      case 3:
        if ((ga(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            V0(t, e);
          } catch (p) {
            Pt(n, n.return, p);
          }
        }
        break;
      case 27:
        e === null && a & 4 && am(n);
      case 26:
      case 5:
        (ga(t, n), e === null && a & 4 && nm(n), a & 512 && Tr(n, n.return));
        break;
      case 12:
        ga(t, n);
        break;
      case 31:
        (ga(t, n), a & 4 && cm(t, n));
        break;
      case 13:
        (ga(t, n),
          a & 4 && fm(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = cv.bind(null, n)), Cv(t, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || pa), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || qe), (s = pa));
          var c = qe;
          ((pa = a),
            (qe = e) && !c ? _a(t, n, (n.subtreeFlags & 8772) !== 0) : ga(t, n),
            (pa = s),
            (qe = c));
        }
        break;
      case 30:
        break;
      default:
        ga(t, n);
    }
  }
  function rm(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), rm(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Oe(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var de = null,
    Nn = !1;
  function ma(t, e, n) {
    for (n = n.child; n !== null; ) (sm(t, e, n), (n = n.sibling));
  }
  function sm(t, e, n) {
    if (me && typeof me.onCommitFiberUnmount == "function")
      try {
        me.onCommitFiberUnmount(Ll, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (qe || Kl(n, e),
          ma(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        qe || Kl(n, e);
        var a = de,
          s = Nn;
        (Ja(n.type) && ((de = n.stateNode), (Nn = !1)),
          ma(t, e, n),
          Rr(n.stateNode),
          (de = a),
          (Nn = s));
        break;
      case 5:
        qe || Kl(n, e);
      case 6:
        if (
          ((a = de),
          (s = Nn),
          (de = null),
          ma(t, e, n),
          (de = a),
          (Nn = s),
          de !== null)
        )
          if (Nn)
            try {
              (de.nodeType === 9
                ? de.body
                : de.nodeName === "HTML"
                  ? de.ownerDocument.body
                  : de
              ).removeChild(n.stateNode);
            } catch (c) {
              Pt(n, e, c);
            }
          else
            try {
              de.removeChild(n.stateNode);
            } catch (c) {
              Pt(n, e, c);
            }
        break;
      case 18:
        de !== null &&
          (Nn
            ? ((t = de),
              t1(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              Cu(t))
            : t1(de, n.stateNode));
        break;
      case 4:
        ((a = de),
          (s = Nn),
          (de = n.stateNode.containerInfo),
          (Nn = !0),
          ma(t, e, n),
          (de = a),
          (Nn = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Xa(2, n, e), qe || Xa(4, n, e), ma(t, e, n));
        break;
      case 1:
        (qe ||
          (Kl(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && em(n, e, a)),
          ma(t, e, n));
        break;
      case 21:
        ma(t, e, n);
        break;
      case 22:
        ((qe = (a = qe) || n.memoizedState !== null), ma(t, e, n), (qe = a));
        break;
      default:
        ma(t, e, n);
    }
  }
  function cm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Cu(t);
      } catch (n) {
        Pt(e, e.return, n);
      }
    }
  }
  function fm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Cu(t);
      } catch (n) {
        Pt(e, e.return, n);
      }
  }
  function ev(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new im()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new im()),
          e
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function ic(t, e) {
    var n = ev(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var s = fv.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function Rn(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
          c = t,
          p = e,
          y = p;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Ja(y.type)) {
                ((de = y.stateNode), (Nn = !1));
                break t;
              }
              break;
            case 5:
              ((de = y.stateNode), (Nn = !1));
              break t;
            case 3:
            case 4:
              ((de = y.stateNode.containerInfo), (Nn = !0));
              break t;
          }
          y = y.return;
        }
        if (de === null) throw Error(i(160));
        (sm(c, p, s),
          (de = null),
          (Nn = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (om(e, t), (e = e.sibling));
  }
  var Hl = null;
  function om(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Rn(e, t),
          wn(t),
          a & 4 && (Xa(3, t, t.return), br(3, t), Xa(5, t, t.return)));
        break;
      case 1:
        (Rn(e, t),
          wn(t),
          a & 512 && (qe || n === null || Kl(n, n.return)),
          a & 64 &&
            pa &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var s = Hl;
        if (
          (Rn(e, t),
          wn(t),
          a & 512 && (qe || n === null || Kl(n, n.return)),
          a & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s));
                  e: switch (a) {
                    case "title":
                      ((c = s.getElementsByTagName("title")[0]),
                        (!c ||
                          c[ge] ||
                          c[At] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = s.createElement(a)),
                          s.head.insertBefore(
                            c,
                            s.querySelector("head > title"),
                          )),
                        nn(c, a, n),
                        (c[At] = t),
                        Rt(c),
                        (a = c));
                      break t;
                    case "link":
                      var p = o1("link", "href", s).get(a + (n.href || ""));
                      if (p) {
                        for (var y = 0; y < p.length; y++)
                          if (
                            ((c = p[y]),
                            c.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            p.splice(y, 1);
                            break e;
                          }
                      }
                      ((c = s.createElement(a)),
                        nn(c, a, n),
                        s.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (p = o1("meta", "content", s).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (y = 0; y < p.length; y++)
                          if (
                            ((c = p[y]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            p.splice(y, 1);
                            break e;
                          }
                      }
                      ((c = s.createElement(a)),
                        nn(c, a, n),
                        s.head.appendChild(c));
                      break;
                    default:
                      throw Error(i(468, a));
                  }
                  ((c[At] = t), Rt(c), (a = c));
                }
                t.stateNode = a;
              } else h1(s, t.type, t.stateNode);
            else t.stateNode = f1(s, a, t.memoizedProps);
          else
            c !== a
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                a === null
                  ? h1(s, t.type, t.stateNode)
                  : f1(s, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Yo(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Rn(e, t),
          wn(t),
          a & 512 && (qe || n === null || Kl(n, n.return)),
          n !== null && a & 4 && Yo(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Rn(e, t),
          wn(t),
          a & 512 && (qe || n === null || Kl(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Pi(s, "");
          } catch (lt) {
            Pt(t, t.return, lt);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Yo(t, s, n !== null ? n.memoizedProps : s)),
          a & 1024 && (Lo = !0));
        break;
      case 6:
        if ((Rn(e, t), wn(t), a & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          ((a = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = a;
          } catch (lt) {
            Pt(t, t.return, lt);
          }
        }
        break;
      case 3:
        if (
          ((Sc = null),
          (s = Hl),
          (Hl = vc(e.containerInfo)),
          Rn(e, t),
          (Hl = s),
          wn(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Cu(e.containerInfo);
          } catch (lt) {
            Pt(t, t.return, lt);
          }
        Lo && ((Lo = !1), hm(t));
        break;
      case 4:
        ((a = Hl),
          (Hl = vc(t.stateNode.containerInfo)),
          Rn(e, t),
          wn(t),
          (Hl = a));
        break;
      case 12:
        (Rn(e, t), wn(t));
        break;
      case 31:
        (Rn(e, t),
          wn(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ic(t, a))));
        break;
      case 13:
        (Rn(e, t),
          wn(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (rc = Me()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ic(t, a))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          w = pa,
          L = qe;
        if (
          ((pa = w || s),
          (qe = L || T),
          Rn(e, t),
          (qe = L),
          (pa = w),
          wn(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || T || pa || qe || Di(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((c = T.stateNode), s))
                    ((p = c.style),
                      typeof p.setProperty == "function"
                        ? p.setProperty("display", "none", "important")
                        : (p.display = "none"));
                  else {
                    y = T.stateNode;
                    var K = T.memoizedProps.style,
                      U =
                        K != null && K.hasOwnProperty("display")
                          ? K.display
                          : null;
                    y.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (lt) {
                  Pt(T, T.return, lt);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (lt) {
                  Pt(T, T.return, lt);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var H = T.stateNode;
                  s ? e1(H, !0) : e1(T.stateNode, !1);
                } catch (lt) {
                  Pt(T, T.return, lt);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), ic(t, n))));
        break;
      case 19:
        (Rn(e, t),
          wn(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), ic(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Rn(e, t), wn(t));
    }
  }
  function wn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (lm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(i(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              c = Bo(t);
            ac(t, c, s);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (Pi(p, ""), (n.flags &= -33));
            var y = Bo(t);
            ac(t, y, p);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              w = Bo(t);
            qo(t, w, T);
            break;
          default:
            throw Error(i(161));
        }
      } catch (L) {
        Pt(t, t.return, L);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function hm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (hm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function ga(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (um(t, e.alternate, e), (e = e.sibling));
  }
  function Di(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Xa(4, e, e.return), Di(e));
          break;
        case 1:
          Kl(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && em(e, e.return, n),
            Di(e));
          break;
        case 27:
          Rr(e.stateNode);
        case 26:
        case 5:
          (Kl(e, e.return), Di(e));
          break;
        case 22:
          e.memoizedState === null && Di(e);
          break;
        case 30:
          Di(e);
          break;
        default:
          Di(e);
      }
      t = t.sibling;
    }
  }
  function _a(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        s = t,
        c = e,
        p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (_a(s, c, n), br(4, c));
          break;
        case 1:
          if (
            (_a(s, c, n),
            (a = c),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (w) {
              Pt(a, a.return, w);
            }
          if (((a = c), (s = a.updateQueue), s !== null)) {
            var y = a.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Q0(T[s], y);
            } catch (w) {
              Pt(a, a.return, w);
            }
          }
          (n && p & 64 && tm(c), Tr(c, c.return));
          break;
        case 27:
          am(c);
        case 26:
        case 5:
          (_a(s, c, n), n && a === null && p & 4 && nm(c), Tr(c, c.return));
          break;
        case 12:
          _a(s, c, n);
          break;
        case 31:
          (_a(s, c, n), n && p & 4 && cm(s, c));
          break;
        case 13:
          (_a(s, c, n), n && p & 4 && fm(s, c));
          break;
        case 22:
          (c.memoizedState === null && _a(s, c, n), Tr(c, c.return));
          break;
        case 30:
          break;
        default:
          _a(s, c, n);
      }
      e = e.sibling;
    }
  }
  function Xo(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && cr(n)));
  }
  function Go(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && cr(t)));
  }
  function Yl(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (dm(t, e, n, a), (e = e.sibling));
  }
  function dm(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Yl(t, e, n, a), s & 2048 && br(9, e));
        break;
      case 1:
        Yl(t, e, n, a);
        break;
      case 3:
        (Yl(t, e, n, a),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && cr(t))));
        break;
      case 12:
        if (s & 2048) {
          (Yl(t, e, n, a), (t = e.stateNode));
          try {
            var c = e.memoizedProps,
              p = c.id,
              y = c.onPostCommit;
            typeof y == "function" &&
              y(
                p,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            Pt(e, e.return, T);
          }
        } else Yl(t, e, n, a);
        break;
      case 31:
        Yl(t, e, n, a);
        break;
      case 13:
        Yl(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        ((c = e.stateNode),
          (p = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? Yl(t, e, n, a)
              : Er(t, e)
            : c._visibility & 2
              ? Yl(t, e, n, a)
              : ((c._visibility |= 2),
                yu(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Xo(p, e));
        break;
      case 24:
        (Yl(t, e, n, a), s & 2048 && Go(e.alternate, e));
        break;
      default:
        Yl(t, e, n, a);
    }
  }
  function yu(t, e, n, a, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var c = t,
        p = e,
        y = n,
        T = a,
        w = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (yu(c, p, y, T, s), br(8, p));
          break;
        case 23:
          break;
        case 22:
          var L = p.stateNode;
          (p.memoizedState !== null
            ? L._visibility & 2
              ? yu(c, p, y, T, s)
              : Er(c, p)
            : ((L._visibility |= 2), yu(c, p, y, T, s)),
            s && w & 2048 && Xo(p.alternate, p));
          break;
        case 24:
          (yu(c, p, y, T, s), s && w & 2048 && Go(p.alternate, p));
          break;
        default:
          yu(c, p, y, T, s);
      }
      e = e.sibling;
    }
  }
  function Er(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          s = a.flags;
        switch (a.tag) {
          case 22:
            (Er(n, a), s & 2048 && Xo(a.alternate, a));
            break;
          case 24:
            (Er(n, a), s & 2048 && Go(a.alternate, a));
            break;
          default:
            Er(n, a);
        }
        e = e.sibling;
      }
  }
  var zr = 8192;
  function vu(t, e, n) {
    if (t.subtreeFlags & zr)
      for (t = t.child; t !== null; ) (pm(t, e, n), (t = t.sibling));
  }
  function pm(t, e, n) {
    switch (t.tag) {
      case 26:
        (vu(t, e, n),
          t.flags & zr &&
            t.memoizedState !== null &&
            Xv(n, Hl, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        vu(t, e, n);
        break;
      case 3:
      case 4:
        var a = Hl;
        ((Hl = vc(t.stateNode.containerInfo)), vu(t, e, n), (Hl = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = zr), (zr = 16777216), vu(t, e, n), (zr = a))
            : vu(t, e, n));
        break;
      default:
        vu(t, e, n);
    }
  }
  function mm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Ar(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((Je = a), _m(a, t));
        }
      mm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (gm(t), (t = t.sibling));
  }
  function gm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ar(t), t.flags & 2048 && Xa(9, t, t.return));
        break;
      case 3:
        Ar(t);
        break;
      case 12:
        Ar(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), uc(t))
          : Ar(t);
        break;
      default:
        Ar(t);
    }
  }
  function uc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((Je = a), _m(a, t));
        }
      mm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Xa(8, e, e.return), uc(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), uc(e)));
          break;
        default:
          uc(e);
      }
      t = t.sibling;
    }
  }
  function _m(t, e) {
    for (; Je !== null; ) {
      var n = Je;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Xa(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          cr(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Je = a));
      else
        t: for (n = t; Je !== null; ) {
          a = Je;
          var s = a.sibling,
            c = a.return;
          if ((rm(a), a === n)) {
            Je = null;
            break t;
          }
          if (s !== null) {
            ((s.return = c), (Je = s));
            break t;
          }
          Je = c;
        }
    }
  }
  var nv = {
      getCacheForType: function (t) {
        var e = tn(He),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return tn(He).controller.signal;
      },
    },
    lv = typeof WeakMap == "function" ? WeakMap : Map,
    Jt = 0,
    ne = null,
    Ut = null,
    Bt = 0,
    $t = 0,
    Fn = null,
    Ga = !1,
    xu = !1,
    Qo = !1,
    ya = 0,
    ze = 0,
    Qa = 0,
    Ni = 0,
    Vo = 0,
    Wn = 0,
    Su = 0,
    Mr = null,
    jn = null,
    Zo = !1,
    rc = 0,
    ym = 0,
    sc = 1 / 0,
    cc = null,
    Va = null,
    Ve = 0,
    Za = null,
    bu = null,
    va = 0,
    ko = 0,
    Ko = null,
    vm = null,
    Or = 0,
    Jo = null;
  function $n() {
    return (Jt & 2) !== 0 && Bt !== 0 ? Bt & -Bt : N.T !== null ? th() : Nt();
  }
  function xm() {
    if (Wn === 0)
      if ((Bt & 536870912) === 0 || Xt) {
        var t = sn;
        ((sn <<= 1), (sn & 3932160) === 0 && (sn = 262144), (Wn = t));
      } else Wn = 536870912;
    return ((t = Kn.current), t !== null && (t.flags |= 32), Wn);
  }
  function Un(t, e, n) {
    (((t === ne && ($t === 2 || $t === 9)) || t.cancelPendingCommit !== null) &&
      (Tu(t, 0), ka(t, Bt, Wn, !1)),
      st(t, n),
      ((Jt & 2) === 0 || t !== ne) &&
        (t === ne &&
          ((Jt & 2) === 0 && (Ni |= n), ze === 4 && ka(t, Bt, Wn, !1)),
        Jl(t)));
  }
  function Sm(t, e, n) {
    if ((Jt & 6) !== 0) throw Error(i(327));
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || dl(t, e),
      s = a ? uv(t, e) : Wo(t, e, !0),
      c = a;
    do {
      if (s === 0) {
        xu && !a && ka(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), c && !av(n))) {
          ((s = Wo(t, e, !1)), (c = !1));
          continue;
        }
        if (s === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var p = 0;
          else
            ((p = t.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0));
          if (p !== 0) {
            e = p;
            t: {
              var y = t;
              s = Mr;
              var T = y.current.memoizedState.isDehydrated;
              if ((T && (Tu(y, p).flags |= 256), (p = Wo(y, p, !1)), p !== 2)) {
                if (Qo && !T) {
                  ((y.errorRecoveryDisabledLanes |= c), (Ni |= c), (s = 4));
                  break t;
                }
                ((c = jn),
                  (jn = s),
                  c !== null &&
                    (jn === null ? (jn = c) : jn.push.apply(jn, c)));
              }
              s = p;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Tu(t, 0), ka(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (c = s), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ka(a, e, Wn, !Ga);
              break t;
            case 2:
              jn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && ((s = rc + 300 - Me()), 10 < s)) {
            if ((ka(a, e, Wn, !Ga), hl(a, 0, !0) !== 0)) break t;
            ((va = e),
              (a.timeoutHandle = Pm(
                bm.bind(
                  null,
                  a,
                  n,
                  jn,
                  cc,
                  Zo,
                  e,
                  Wn,
                  Ni,
                  Su,
                  Ga,
                  c,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break t;
          }
          bm(a, n, jn, cc, Zo, e, Wn, Ni, Su, Ga, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Jl(t);
  }
  function bm(t, e, n, a, s, c, p, y, T, w, L, K, U, H) {
    if (
      ((t.timeoutHandle = -1),
      (K = e.subtreeFlags),
      K & 8192 || (K & 16785408) === 16785408)
    ) {
      ((K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: aa,
      }),
        pm(e, c, K));
      var lt =
        (c & 62914560) === c ? rc - Me() : (c & 4194048) === c ? ym - Me() : 0;
      if (((lt = Gv(K, lt)), lt !== null)) {
        ((va = c),
          (t.cancelPendingCommit = lt(
            Dm.bind(null, t, e, c, n, a, s, p, y, T, L, K, null, U, H),
          )),
          ka(t, c, p, !w));
        return;
      }
    }
    Dm(t, e, c, n, a, s, p, y, T);
  }
  function av(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!Zn(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function ka(t, e, n, a) {
    ((e &= ~Vo),
      (e &= ~Ni),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var c = 31 - Ue(s),
        p = 1 << c;
      ((a[c] = -1), (s &= ~p));
    }
    n !== 0 && nt(t, n, e);
  }
  function fc() {
    return (Jt & 6) === 0 ? (Cr(0), !1) : !0;
  }
  function Fo() {
    if (Ut !== null) {
      if ($t === 0) var t = Ut.return;
      else ((t = Ut), (sa = bi = null), fo(t), (du = null), (or = 0), (t = Ut));
      for (; t !== null; ) (Ip(t.alternate, t), (t = t.return));
      Ut = null;
    }
  }
  function Tu(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Ev(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (va = 0),
      Fo(),
      (ne = t),
      (Ut = n = ua(t.current, null)),
      (Bt = e),
      ($t = 0),
      (Fn = null),
      (Ga = !1),
      (xu = dl(t, e)),
      (Qo = !1),
      (Su = Wn = Vo = Ni = Qa = ze = 0),
      (jn = Mr = null),
      (Zo = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - Ue(a),
          c = 1 << s;
        ((e |= t[s]), (a &= ~c));
      }
    return ((ya = e), Ns(), n);
  }
  function Tm(t, e) {
    ((Et = null),
      (N.H = vr),
      e === hu || e === qs
        ? ((e = q0()), ($t = 3))
        : e === Pf
          ? ((e = q0()), ($t = 4))
          : ($t =
              e === Mo
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Fn = e),
      Ut === null && ((ze = 1), Is(t, vl(e, t.current))));
  }
  function Em() {
    var t = Kn.current;
    return t === null
      ? !0
      : (Bt & 4194048) === Bt
        ? Tl === null
        : (Bt & 62914560) === Bt || (Bt & 536870912) !== 0
          ? t === Tl
          : !1;
  }
  function zm() {
    var t = N.H;
    return ((N.H = vr), t === null ? vr : t);
  }
  function Am() {
    var t = N.A;
    return ((N.A = nv), t);
  }
  function oc() {
    ((ze = 4),
      Ga || ((Bt & 4194048) !== Bt && Kn.current !== null) || (xu = !0),
      ((Qa & 134217727) === 0 && (Ni & 134217727) === 0) ||
        ne === null ||
        ka(ne, Bt, Wn, !1));
  }
  function Wo(t, e, n) {
    var a = Jt;
    Jt |= 2;
    var s = zm(),
      c = Am();
    ((ne !== t || Bt !== e) && ((cc = null), Tu(t, e)), (e = !1));
    var p = ze;
    t: do
      try {
        if ($t !== 0 && Ut !== null) {
          var y = Ut,
            T = Fn;
          switch ($t) {
            case 8:
              (Fo(), (p = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Kn.current === null && (e = !0);
              var w = $t;
              if ((($t = 0), (Fn = null), Eu(t, y, T, w), n && xu)) {
                p = 0;
                break t;
              }
              break;
            default:
              ((w = $t), ($t = 0), (Fn = null), Eu(t, y, T, w));
          }
        }
        (iv(), (p = ze));
        break;
      } catch (L) {
        Tm(t, L);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (sa = bi = null),
      (Jt = a),
      (N.H = s),
      (N.A = c),
      Ut === null && ((ne = null), (Bt = 0), Ns()),
      p
    );
  }
  function iv() {
    for (; Ut !== null; ) Mm(Ut);
  }
  function uv(t, e) {
    var n = Jt;
    Jt |= 2;
    var a = zm(),
      s = Am();
    ne !== t || Bt !== e
      ? ((cc = null), (sc = Me() + 500), Tu(t, e))
      : (xu = dl(t, e));
    t: do
      try {
        if ($t !== 0 && Ut !== null) {
          e = Ut;
          var c = Fn;
          e: switch ($t) {
            case 1:
              (($t = 0), (Fn = null), Eu(t, e, c, 1));
              break;
            case 2:
            case 9:
              if (Y0(c)) {
                (($t = 0), (Fn = null), Om(e));
                break;
              }
              ((e = function () {
                (($t !== 2 && $t !== 9) || ne !== t || ($t = 7), Jl(t));
              }),
                c.then(e, e));
              break t;
            case 3:
              $t = 7;
              break t;
            case 4:
              $t = 5;
              break t;
            case 7:
              Y0(c)
                ? (($t = 0), (Fn = null), Om(e))
                : (($t = 0), (Fn = null), Eu(t, e, c, 7));
              break;
            case 5:
              var p = null;
              switch (Ut.tag) {
                case 26:
                  p = Ut.memoizedState;
                case 5:
                case 27:
                  var y = Ut;
                  if (p ? d1(p) : y.stateNode.complete) {
                    (($t = 0), (Fn = null));
                    var T = y.sibling;
                    if (T !== null) Ut = T;
                    else {
                      var w = y.return;
                      w !== null ? ((Ut = w), hc(w)) : (Ut = null);
                    }
                    break e;
                  }
              }
              (($t = 0), (Fn = null), Eu(t, e, c, 5));
              break;
            case 6:
              (($t = 0), (Fn = null), Eu(t, e, c, 6));
              break;
            case 8:
              (Fo(), (ze = 6));
              break t;
            default:
              throw Error(i(462));
          }
        }
        rv();
        break;
      } catch (L) {
        Tm(t, L);
      }
    while (!0);
    return (
      (sa = bi = null),
      (N.H = a),
      (N.A = s),
      (Jt = n),
      Ut !== null ? 0 : ((ne = null), (Bt = 0), Ns(), ze)
    );
  }
  function rv() {
    for (; Ut !== null && !Rl(); ) Mm(Ut);
  }
  function Mm(t) {
    var e = $p(t.alternate, t, ya);
    ((t.memoizedProps = t.pendingProps), e === null ? hc(t) : (Ut = e));
  }
  function Om(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Zp(n, e, e.pendingProps, e.type, void 0, Bt);
        break;
      case 11:
        e = Zp(n, e, e.pendingProps, e.type.render, e.ref, Bt);
        break;
      case 5:
        fo(e);
      default:
        (Ip(n, e), (e = Ut = A0(e, ya)), (e = $p(n, e, ya)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? hc(t) : (Ut = e));
  }
  function Eu(t, e, n, a) {
    ((sa = bi = null), fo(e), (du = null), (or = 0));
    var s = e.return;
    try {
      if (Fy(t, s, e, n, Bt)) {
        ((ze = 1), Is(t, vl(n, t.current)), (Ut = null));
        return;
      }
    } catch (c) {
      if (s !== null) throw ((Ut = s), c);
      ((ze = 1), Is(t, vl(n, t.current)), (Ut = null));
      return;
    }
    e.flags & 32768
      ? (Xt || a === 1
          ? (t = !0)
          : xu || (Bt & 536870912) !== 0
            ? (t = !1)
            : ((Ga = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Kn.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Cm(e, t))
      : hc(e);
  }
  function hc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Cm(e, Ga);
        return;
      }
      t = e.return;
      var n = Py(e.alternate, e, ya);
      if (n !== null) {
        Ut = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Ut = e;
        return;
      }
      Ut = e = t;
    } while (e !== null);
    ze === 0 && (ze = 5);
  }
  function Cm(t, e) {
    do {
      var n = Iy(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (Ut = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Ut = t;
        return;
      }
      Ut = t = n;
    } while (t !== null);
    ((ze = 6), (Ut = null));
  }
  function Dm(t, e, n, a, s, c, p, y, T) {
    t.cancelPendingCommit = null;
    do dc();
    while (Ve !== 0);
    if ((Jt & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= Yf),
        Vt(t, n, c, p, y, T),
        t === ne && ((Ut = ne = null), (Bt = 0)),
        (bu = e),
        (Za = t),
        (va = n),
        (ko = c),
        (Ko = s),
        (vm = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            ov(rn, function () {
              return (Um(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = N.T), (N.T = null), (s = V.p), (V.p = 2), (p = Jt), (Jt |= 4));
        try {
          tv(t, e, n);
        } finally {
          ((Jt = p), (V.p = s), (N.T = a));
        }
      }
      ((Ve = 1), Nm(), Rm(), wm());
    }
  }
  function Nm() {
    if (Ve === 1) {
      Ve = 0;
      var t = Za,
        e = bu,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = N.T), (N.T = null));
        var a = V.p;
        V.p = 2;
        var s = Jt;
        Jt |= 4;
        try {
          om(e, t);
          var c = sh,
            p = _0(t.containerInfo),
            y = c.focusedElem,
            T = c.selectionRange;
          if (
            p !== y &&
            y &&
            y.ownerDocument &&
            g0(y.ownerDocument.documentElement, y)
          ) {
            if (T !== null && Rf(y)) {
              var w = T.start,
                L = T.end;
              if ((L === void 0 && (L = w), "selectionStart" in y))
                ((y.selectionStart = w),
                  (y.selectionEnd = Math.min(L, y.value.length)));
              else {
                var K = y.ownerDocument || document,
                  U = (K && K.defaultView) || window;
                if (U.getSelection) {
                  var H = U.getSelection(),
                    lt = y.textContent.length,
                    mt = Math.min(T.start, lt),
                    ee = T.end === void 0 ? mt : Math.min(T.end, lt);
                  !H.extend && mt > ee && ((p = ee), (ee = mt), (mt = p));
                  var C = m0(y, mt),
                    A = m0(y, ee);
                  if (
                    C &&
                    A &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== C.node ||
                      H.anchorOffset !== C.offset ||
                      H.focusNode !== A.node ||
                      H.focusOffset !== A.offset)
                  ) {
                    var R = K.createRange();
                    (R.setStart(C.node, C.offset),
                      H.removeAllRanges(),
                      mt > ee
                        ? (H.addRange(R), H.extend(A.node, A.offset))
                        : (R.setEnd(A.node, A.offset), H.addRange(R)));
                  }
                }
              }
            }
            for (K = [], H = y; (H = H.parentNode); )
              H.nodeType === 1 &&
                K.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < K.length;
              y++
            ) {
              var Z = K[y];
              ((Z.element.scrollLeft = Z.left), (Z.element.scrollTop = Z.top));
            }
          }
          ((zc = !!rh), (sh = rh = null));
        } finally {
          ((Jt = s), (V.p = a), (N.T = n));
        }
      }
      ((t.current = e), (Ve = 2));
    }
  }
  function Rm() {
    if (Ve === 2) {
      Ve = 0;
      var t = Za,
        e = bu,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = N.T), (N.T = null));
        var a = V.p;
        V.p = 2;
        var s = Jt;
        Jt |= 4;
        try {
          um(t, e.alternate, e);
        } finally {
          ((Jt = s), (V.p = a), (N.T = n));
        }
      }
      Ve = 3;
    }
  }
  function wm() {
    if (Ve === 4 || Ve === 3) {
      ((Ve = 0), ql());
      var t = Za,
        e = bu,
        n = va,
        a = vm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ve = 5)
        : ((Ve = 0), (bu = Za = null), jm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Va = null),
        Te(n),
        (e = e.stateNode),
        me && typeof me.onCommitFiberRoot == "function")
      )
        try {
          me.onCommitFiberRoot(Ll, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = N.T), (s = V.p), (V.p = 2), (N.T = null));
        try {
          for (var c = t.onRecoverableError, p = 0; p < a.length; p++) {
            var y = a[p];
            c(y.value, { componentStack: y.stack });
          }
        } finally {
          ((N.T = e), (V.p = s));
        }
      }
      ((va & 3) !== 0 && dc(),
        Jl(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? t === Jo
            ? Or++
            : ((Or = 0), (Jo = t))
          : (Or = 0),
        Cr(0));
    }
  }
  function jm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), cr(e)));
  }
  function dc() {
    return (Nm(), Rm(), wm(), Um());
  }
  function Um() {
    if (Ve !== 5) return !1;
    var t = Za,
      e = ko;
    ko = 0;
    var n = Te(va),
      a = N.T,
      s = V.p;
    try {
      ((V.p = 32 > n ? 32 : n), (N.T = null), (n = Ko), (Ko = null));
      var c = Za,
        p = va;
      if (((Ve = 0), (bu = Za = null), (va = 0), (Jt & 6) !== 0))
        throw Error(i(331));
      var y = Jt;
      if (
        ((Jt |= 4),
        gm(c.current),
        dm(c, c.current, p, n),
        (Jt = y),
        Cr(0, !1),
        me && typeof me.onPostCommitFiberRoot == "function")
      )
        try {
          me.onPostCommitFiberRoot(Ll, c);
        } catch {}
      return !0;
    } finally {
      ((V.p = s), (N.T = a), jm(t, e));
    }
  }
  function Hm(t, e, n) {
    ((e = vl(n, e)),
      (e = Ao(t.stateNode, e, 2)),
      (t = Ba(t, e, 2)),
      t !== null && (st(t, 2), Jl(t)));
  }
  function Pt(t, e, n) {
    if (t.tag === 3) Hm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Hm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Va === null || !Va.has(a)))
          ) {
            ((t = vl(n, t)),
              (n = Yp(2)),
              (a = Ba(e, n, 2)),
              a !== null && (Bp(n, a, e, t), st(a, 2), Jl(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function $o(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new lv();
      var s = new Set();
      a.set(e, s);
    } else ((s = a.get(e)), s === void 0 && ((s = new Set()), a.set(e, s)));
    s.has(n) ||
      ((Qo = !0), s.add(n), (t = sv.bind(null, t, e, n)), e.then(t, t));
  }
  function sv(t, e, n) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      ne === t &&
        (Bt & n) === n &&
        (ze === 4 || (ze === 3 && (Bt & 62914560) === Bt && 300 > Me() - rc)
          ? (Jt & 2) === 0 && Tu(t, 0)
          : (Vo |= n),
        Su === Bt && (Su = 0)),
      Jl(t));
  }
  function Ym(t, e) {
    (e === 0 && (e = Ca()), (t = vi(t, e)), t !== null && (st(t, e), Jl(t)));
  }
  function cv(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Ym(t, n));
  }
  function fv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (a !== null && a.delete(e), Ym(t, n));
  }
  function ov(t, e) {
    return cl(t, e);
  }
  var pc = null,
    zu = null,
    Po = !1,
    mc = !1,
    Io = !1,
    Ka = 0;
  function Jl(t) {
    (t !== zu &&
      t.next === null &&
      (zu === null ? (pc = zu = t) : (zu = zu.next = t)),
      (mc = !0),
      Po || ((Po = !0), dv()));
  }
  function Cr(t, e) {
    if (!Io && mc) {
      Io = !0;
      do
        for (var n = !1, a = pc; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var p = a.suspendedLanes,
                y = a.pingedLanes;
              ((c = (1 << (31 - Ue(42 | t) + 1)) - 1),
                (c &= s & ~(p & ~y)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((n = !0), Xm(a, c));
          } else
            ((c = Bt),
              (c = hl(
                a,
                a === ne ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || dl(a, c) || ((n = !0), Xm(a, c)));
          a = a.next;
        }
      while (n);
      Io = !1;
    }
  }
  function hv() {
    Bm();
  }
  function Bm() {
    mc = Po = !1;
    var t = 0;
    Ka !== 0 && Tv() && (t = Ka);
    for (var e = Me(), n = null, a = pc; a !== null; ) {
      var s = a.next,
        c = qm(a, e);
      (c === 0
        ? ((a.next = null),
          n === null ? (pc = s) : (n.next = s),
          s === null && (zu = n))
        : ((n = a), (t !== 0 || (c & 3) !== 0) && (mc = !0)),
        (a = s));
    }
    ((Ve !== 0 && Ve !== 5) || Cr(t), Ka !== 0 && (Ka = 0));
  }
  function qm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        s = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;
    ) {
      var p = 31 - Ue(c),
        y = 1 << p,
        T = s[p];
      (T === -1
        ? ((y & n) === 0 || (y & a) !== 0) && (s[p] = jl(y, e))
        : T <= e && (t.expiredLanes |= y),
        (c &= ~y));
    }
    if (
      ((e = ne),
      (n = Bt),
      (n = hl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && ($t === 2 || $t === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ie(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || dl(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && ie(a), Te(n))) {
        case 2:
        case 8:
          n = oe;
          break;
        case 32:
          n = rn;
          break;
        case 268435456:
          n = fl;
          break;
        default:
          n = rn;
      }
      return (
        (a = Lm.bind(null, t)),
        (n = cl(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && ie(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Lm(t, e) {
    if (Ve !== 0 && Ve !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (dc() && t.callbackNode !== n) return null;
    var a = Bt;
    return (
      (a = hl(
        t,
        t === ne ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Sm(t, a, e),
          qm(t, Me()),
          t.callbackNode != null && t.callbackNode === n
            ? Lm.bind(null, t)
            : null)
    );
  }
  function Xm(t, e) {
    if (dc()) return null;
    Sm(t, e, !0);
  }
  function dv() {
    zv(function () {
      (Jt & 6) !== 0 ? cl(wl, hv) : Bm();
    });
  }
  function th() {
    if (Ka === 0) {
      var t = fu;
      (t === 0 && ((t = ol), (ol <<= 1), (ol & 261888) === 0 && (ol = 256)),
        (Ka = t));
    }
    return Ka;
  }
  function Gm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ts("" + t);
  }
  function Qm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function pv(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var c = Gm((s[Ot] || null).action),
        p = a.submitter;
      p &&
        ((e = (e = p[Ot] || null)
          ? Gm(e.formAction)
          : p.getAttribute("formAction")),
        e !== null && ((c = e), (p = null)));
      var y = new Ms("action", "action", null, a, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ka !== 0) {
                  var T = p ? Qm(s, p) : new FormData(s);
                  xo(
                    n,
                    { pending: !0, data: T, method: s.method, action: c },
                    null,
                    T,
                  );
                }
              } else
                typeof c == "function" &&
                  (y.preventDefault(),
                  (T = p ? Qm(s, p) : new FormData(s)),
                  xo(
                    n,
                    { pending: !0, data: T, method: s.method, action: c },
                    c,
                    T,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var eh = 0; eh < Hf.length; eh++) {
    var nh = Hf[eh],
      mv = nh.toLowerCase(),
      gv = nh[0].toUpperCase() + nh.slice(1);
    Ul(mv, "on" + gv);
  }
  (Ul(x0, "onAnimationEnd"),
    Ul(S0, "onAnimationIteration"),
    Ul(b0, "onAnimationStart"),
    Ul("dblclick", "onDoubleClick"),
    Ul("focusin", "onFocus"),
    Ul("focusout", "onBlur"),
    Ul(Ry, "onTransitionRun"),
    Ul(wy, "onTransitionStart"),
    Ul(jy, "onTransitionCancel"),
    Ul(T0, "onTransitionEnd"),
    pl("onMouseEnter", ["mouseout", "mouseover"]),
    pl("onMouseLeave", ["mouseout", "mouseover"]),
    pl("onPointerEnter", ["pointerout", "pointerover"]),
    pl("onPointerLeave", ["pointerout", "pointerover"]),
    Ql(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ql(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ql("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ql(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ql(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ql(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Dr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    _v = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Dr),
    );
  function Vm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        s = a.event;
      a = a.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var p = a.length - 1; 0 <= p; p--) {
            var y = a[p],
              T = y.instance,
              w = y.currentTarget;
            if (((y = y.listener), T !== c && s.isPropagationStopped()))
              break t;
            ((c = y), (s.currentTarget = w));
            try {
              c(s);
            } catch (L) {
              Ds(L);
            }
            ((s.currentTarget = null), (c = T));
          }
        else
          for (p = 0; p < a.length; p++) {
            if (
              ((y = a[p]),
              (T = y.instance),
              (w = y.currentTarget),
              (y = y.listener),
              T !== c && s.isPropagationStopped())
            )
              break t;
            ((c = y), (s.currentTarget = w));
            try {
              c(s);
            } catch (L) {
              Ds(L);
            }
            ((s.currentTarget = null), (c = T));
          }
      }
    }
  }
  function Ht(t, e) {
    var n = e[_n];
    n === void 0 && (n = e[_n] = new Set());
    var a = t + "__bubble";
    n.has(a) || (Zm(e, t, 2, !1), n.add(a));
  }
  function lh(t, e, n) {
    var a = 0;
    (e && (a |= 4), Zm(n, t, a, e));
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function ah(t) {
    if (!t[gc]) {
      ((t[gc] = !0),
        Vn.forEach(function (n) {
          n !== "selectionchange" && (_v.has(n) || lh(n, !1, t), lh(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[gc] || ((e[gc] = !0), lh("selectionchange", !1, e));
    }
  }
  function Zm(t, e, n, a) {
    switch (x1(e)) {
      case 2:
        var s = Zv;
        break;
      case 8:
        s = kv;
        break;
      default:
        s = vh;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !Tf ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function ih(t, e, n, a, s) {
    var c = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var p = a.tag;
        if (p === 3 || p === 4) {
          var y = a.stateNode.containerInfo;
          if (y === s) break;
          if (p === 4)
            for (p = a.return; p !== null; ) {
              var T = p.tag;
              if ((T === 3 || T === 4) && p.stateNode.containerInfo === s)
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (((p = _e(y)), p === null)) return;
            if (((T = p.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              a = c = p;
              continue t;
            }
            y = y.parentNode;
          }
        }
        a = a.return;
      }
    Wd(function () {
      var w = c,
        L = Sf(n),
        K = [];
      t: {
        var U = E0.get(t);
        if (U !== void 0) {
          var H = Ms,
            lt = t;
          switch (t) {
            case "keypress":
              if (zs(n) === 0) break t;
            case "keydown":
            case "keyup":
              H = fy;
              break;
            case "focusin":
              ((lt = "focus"), (H = Mf));
              break;
            case "focusout":
              ((lt = "blur"), (H = Mf));
              break;
            case "beforeblur":
            case "afterblur":
              H = Mf;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Id;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = P_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = dy;
              break;
            case x0:
            case S0:
            case b0:
              H = ey;
              break;
            case T0:
              H = my;
              break;
            case "scroll":
            case "scrollend":
              H = W_;
              break;
            case "wheel":
              H = _y;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = e0;
              break;
            case "toggle":
            case "beforetoggle":
              H = vy;
          }
          var mt = (e & 4) !== 0,
            ee = !mt && (t === "scroll" || t === "scrollend"),
            C = mt ? (U !== null ? U + "Capture" : null) : U;
          mt = [];
          for (var A = w, R; A !== null; ) {
            var Z = A;
            if (
              ((R = Z.stateNode),
              (Z = Z.tag),
              (Z !== 5 && Z !== 26 && Z !== 27) ||
                R === null ||
                C === null ||
                ((Z = Pu(A, C)), Z != null && mt.push(Nr(A, Z, R))),
              ee)
            )
              break;
            A = A.return;
          }
          0 < mt.length &&
            ((U = new H(U, lt, null, n, L)),
            K.push({ event: U, listeners: mt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((U = t === "mouseover" || t === "pointerover"),
            (H = t === "mouseout" || t === "pointerout"),
            U &&
              n !== xf &&
              (lt = n.relatedTarget || n.fromElement) &&
              (_e(lt) || lt[Qt]))
          )
            break t;
          if (
            (H || U) &&
            ((U =
              L.window === L
                ? L
                : (U = L.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            H
              ? ((lt = n.relatedTarget || n.toElement),
                (H = w),
                (lt = lt ? _e(lt) : null),
                lt !== null &&
                  ((ee = f(lt)),
                  (mt = lt.tag),
                  lt !== ee || (mt !== 5 && mt !== 27 && mt !== 6)) &&
                  (lt = null))
              : ((H = null), (lt = w)),
            H !== lt)
          ) {
            if (
              ((mt = Id),
              (Z = "onMouseLeave"),
              (C = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((mt = e0),
                (Z = "onPointerLeave"),
                (C = "onPointerEnter"),
                (A = "pointer")),
              (ee = H == null ? U : Gl(H)),
              (R = lt == null ? U : Gl(lt)),
              (U = new mt(Z, A + "leave", H, n, L)),
              (U.target = ee),
              (U.relatedTarget = R),
              (Z = null),
              _e(L) === w &&
                ((mt = new mt(C, A + "enter", lt, n, L)),
                (mt.target = R),
                (mt.relatedTarget = ee),
                (Z = mt)),
              (ee = Z),
              H && lt)
            )
              e: {
                for (mt = yv, C = H, A = lt, R = 0, Z = C; Z; Z = mt(Z)) R++;
                Z = 0;
                for (var ft = A; ft; ft = mt(ft)) Z++;
                for (; 0 < R - Z; ) ((C = mt(C)), R--);
                for (; 0 < Z - R; ) ((A = mt(A)), Z--);
                for (; R--; ) {
                  if (C === A || (A !== null && C === A.alternate)) {
                    mt = C;
                    break e;
                  }
                  ((C = mt(C)), (A = mt(A)));
                }
                mt = null;
              }
            else mt = null;
            (H !== null && km(K, U, H, mt, !1),
              lt !== null && ee !== null && km(K, ee, lt, mt, !0));
          }
        }
        t: {
          if (
            ((U = w ? Gl(w) : window),
            (H = U.nodeName && U.nodeName.toLowerCase()),
            H === "select" || (H === "input" && U.type === "file"))
          )
            var Zt = c0;
          else if (r0(U))
            if (f0) Zt = Cy;
            else {
              Zt = My;
              var it = Ay;
            }
          else
            ((H = U.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? w && vf(w.elementType) && (Zt = c0)
                : (Zt = Oy));
          if (Zt && (Zt = Zt(t, w))) {
            s0(K, Zt, n, L);
            break t;
          }
          (it && it(t, U, w),
            t === "focusout" &&
              w &&
              U.type === "number" &&
              w.memoizedProps.value != null &&
              yf(U, "number", U.value));
        }
        switch (((it = w ? Gl(w) : window), t)) {
          case "focusin":
            (r0(it) || it.contentEditable === "true") &&
              ((nu = it), (wf = w), (ur = null));
            break;
          case "focusout":
            ur = wf = nu = null;
            break;
          case "mousedown":
            jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((jf = !1), y0(K, n, L));
            break;
          case "selectionchange":
            if (Ny) break;
          case "keydown":
          case "keyup":
            y0(K, n, L);
        }
        var zt;
        if (Cf)
          t: {
            switch (t) {
              case "compositionstart":
                var qt = "onCompositionStart";
                break t;
              case "compositionend":
                qt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                qt = "onCompositionUpdate";
                break t;
            }
            qt = void 0;
          }
        else
          eu
            ? i0(t, n) && (qt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (qt = "onCompositionStart");
        (qt &&
          (n0 &&
            n.locale !== "ko" &&
            (eu || qt !== "onCompositionStart"
              ? qt === "onCompositionEnd" && eu && (zt = $d())
              : ((Na = L),
                (Ef = "value" in Na ? Na.value : Na.textContent),
                (eu = !0))),
          (it = _c(w, qt)),
          0 < it.length &&
            ((qt = new t0(qt, t, null, n, L)),
            K.push({ event: qt, listeners: it }),
            zt
              ? (qt.data = zt)
              : ((zt = u0(n)), zt !== null && (qt.data = zt)))),
          (zt = Sy ? by(t, n) : Ty(t, n)) &&
            ((qt = _c(w, "onBeforeInput")),
            0 < qt.length &&
              ((it = new t0("onBeforeInput", "beforeinput", null, n, L)),
              K.push({ event: it, listeners: qt }),
              (it.data = zt))),
          pv(K, t, w, n, L));
      }
      Vm(K, e);
    });
  }
  function Nr(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function _c(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = Pu(t, n)),
          s != null && a.unshift(Nr(t, s, c)),
          (s = Pu(t, e)),
          s != null && a.push(Nr(t, s, c))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function yv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function km(t, e, n, a, s) {
    for (var c = e._reactName, p = []; n !== null && n !== a; ) {
      var y = n,
        T = y.alternate,
        w = y.stateNode;
      if (((y = y.tag), T !== null && T === a)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        w === null ||
        ((T = w),
        s
          ? ((w = Pu(n, c)), w != null && p.unshift(Nr(n, w, T)))
          : s || ((w = Pu(n, c)), w != null && p.push(Nr(n, w, T)))),
        (n = n.return));
    }
    p.length !== 0 && t.push({ event: e, listeners: p });
  }
  var vv = /\r\n?/g,
    xv = /\u0000|\uFFFD/g;
  function Km(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        vv,
        `
`,
      )
      .replace(xv, "");
  }
  function Jm(t, e) {
    return ((e = Km(e)), Km(t) === e);
  }
  function te(t, e, n, a, s, c) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Pi(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Pi(t, "" + a);
        break;
      case "className":
        Ss(t, "class", a);
        break;
      case "tabIndex":
        Ss(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ss(t, n, a);
        break;
      case "style":
        Jd(t, a, c);
        break;
      case "data":
        if (e !== "object") {
          Ss(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((a = Ts("" + a)), t.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (e !== "input" && te(t, e, "name", s.name, s, null),
                te(t, e, "formEncType", s.formEncType, s, null),
                te(t, e, "formMethod", s.formMethod, s, null),
                te(t, e, "formTarget", s.formTarget, s, null))
              : (te(t, e, "encType", s.encType, s, null),
                te(t, e, "method", s.method, s, null),
                te(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((a = Ts("" + a)), t.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (t.onclick = aa);
        break;
      case "onScroll":
        a != null && Ht("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(i(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Ts("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        (Ht("beforetoggle", t), Ht("toggle", t), xs(t, "popover", a));
        break;
      case "xlinkActuate":
        la(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        la(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        la(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        la(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        la(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        la(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        la(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        la(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        la(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        xs(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = J_.get(n) || n), xs(t, n, a));
    }
  }
  function uh(t, e, n, a, s, c) {
    switch (n) {
      case "style":
        Jd(t, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(i(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Pi(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Pi(t, "" + a);
        break;
      case "onScroll":
        a != null && Ht("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Ht("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = aa);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Wi.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (c = t[Ot] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && t.removeEventListener(e, c, s),
              typeof a == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, s));
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
                ? t.setAttribute(n, "")
                : xs(t, n, a);
          }
    }
  }
  function nn(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ht("error", t), Ht("load", t));
        var a = !1,
          s = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var p = n[c];
            if (p != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, e));
                default:
                  te(t, e, c, p, n, null);
              }
          }
        (s && te(t, e, "srcSet", n.srcSet, n, null),
          a && te(t, e, "src", n.src, n, null));
        return;
      case "input":
        Ht("invalid", t);
        var y = (c = p = s = null),
          T = null,
          w = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var L = n[a];
            if (L != null)
              switch (a) {
                case "name":
                  s = L;
                  break;
                case "type":
                  p = L;
                  break;
                case "checked":
                  T = L;
                  break;
                case "defaultChecked":
                  w = L;
                  break;
                case "value":
                  c = L;
                  break;
                case "defaultValue":
                  y = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null) throw Error(i(137, e));
                  break;
                default:
                  te(t, e, a, L, n, null);
              }
          }
        Vd(t, c, y, T, w, p, s, !1);
        return;
      case "select":
        (Ht("invalid", t), (a = p = c = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
            switch (s) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                p = y;
                break;
              case "multiple":
                a = y;
              default:
                te(t, e, s, y, n, null);
            }
        ((e = c),
          (n = p),
          (t.multiple = !!a),
          e != null ? $i(t, !!a, e, !1) : n != null && $i(t, !!a, n, !0));
        return;
      case "textarea":
        (Ht("invalid", t), (c = s = a = null));
        for (p in n)
          if (n.hasOwnProperty(p) && ((y = n[p]), y != null))
            switch (p) {
              case "value":
                a = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(i(91));
                break;
              default:
                te(t, e, p, y, n, null);
            }
        kd(t, a, s, c);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) &&
            ((a = n[T]), a != null) &&
            (T === "selected"
              ? (t.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : te(t, e, T, a, n, null));
        return;
      case "dialog":
        (Ht("beforetoggle", t),
          Ht("toggle", t),
          Ht("cancel", t),
          Ht("close", t));
        break;
      case "iframe":
      case "object":
        Ht("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Dr.length; a++) Ht(Dr[a], t);
        break;
      case "image":
        (Ht("error", t), Ht("load", t));
        break;
      case "details":
        Ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Ht("error", t), Ht("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (w in n)
          if (n.hasOwnProperty(w) && ((a = n[w]), a != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                te(t, e, w, a, n, null);
            }
        return;
      default:
        if (vf(e)) {
          for (L in n)
            n.hasOwnProperty(L) &&
              ((a = n[L]), a !== void 0 && uh(t, e, L, a, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((a = n[y]), a != null && te(t, e, y, a, n, null));
  }
  function Sv(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          c = null,
          p = null,
          y = null,
          T = null,
          w = null,
          L = null;
        for (H in n) {
          var K = n[H];
          if (n.hasOwnProperty(H) && K != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = K;
              default:
                a.hasOwnProperty(H) || te(t, e, H, null, a, K);
            }
        }
        for (var U in a) {
          var H = a[U];
          if (((K = n[U]), a.hasOwnProperty(U) && (H != null || K != null)))
            switch (U) {
              case "type":
                c = H;
                break;
              case "name":
                s = H;
                break;
              case "checked":
                w = H;
                break;
              case "defaultChecked":
                L = H;
                break;
              case "value":
                p = H;
                break;
              case "defaultValue":
                y = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(i(137, e));
                break;
              default:
                H !== K && te(t, e, U, H, a, K);
            }
        }
        _f(t, p, y, T, w, L, c, s);
        return;
      case "select":
        H = p = y = U = null;
        for (c in n)
          if (((T = n[c]), n.hasOwnProperty(c) && T != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                H = T;
              default:
                a.hasOwnProperty(c) || te(t, e, c, null, a, T);
            }
        for (s in a)
          if (
            ((c = a[s]),
            (T = n[s]),
            a.hasOwnProperty(s) && (c != null || T != null))
          )
            switch (s) {
              case "value":
                U = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== T && te(t, e, s, c, a, T);
            }
        ((e = y),
          (n = p),
          (a = H),
          U != null
            ? $i(t, !!n, U, !1)
            : !!a != !!n &&
              (e != null ? $i(t, !!n, e, !0) : $i(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        H = U = null;
        for (y in n)
          if (
            ((s = n[y]),
            n.hasOwnProperty(y) && s != null && !a.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                te(t, e, y, null, a, s);
            }
        for (p in a)
          if (
            ((s = a[p]),
            (c = n[p]),
            a.hasOwnProperty(p) && (s != null || c != null))
          )
            switch (p) {
              case "value":
                U = s;
                break;
              case "defaultValue":
                H = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(i(91));
                break;
              default:
                s !== c && te(t, e, p, s, a, c);
            }
        Zd(t, U, H);
        return;
      case "option":
        for (var lt in n)
          ((U = n[lt]),
            n.hasOwnProperty(lt) &&
              U != null &&
              !a.hasOwnProperty(lt) &&
              (lt === "selected"
                ? (t.selected = !1)
                : te(t, e, lt, null, a, U)));
        for (T in a)
          ((U = a[T]),
            (H = n[T]),
            a.hasOwnProperty(T) &&
              U !== H &&
              (U != null || H != null) &&
              (T === "selected"
                ? (t.selected =
                    U && typeof U != "function" && typeof U != "symbol")
                : te(t, e, T, U, a, H)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var mt in n)
          ((U = n[mt]),
            n.hasOwnProperty(mt) &&
              U != null &&
              !a.hasOwnProperty(mt) &&
              te(t, e, mt, null, a, U));
        for (w in a)
          if (
            ((U = a[w]),
            (H = n[w]),
            a.hasOwnProperty(w) && U !== H && (U != null || H != null))
          )
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(i(137, e));
                break;
              default:
                te(t, e, w, U, a, H);
            }
        return;
      default:
        if (vf(e)) {
          for (var ee in n)
            ((U = n[ee]),
              n.hasOwnProperty(ee) &&
                U !== void 0 &&
                !a.hasOwnProperty(ee) &&
                uh(t, e, ee, void 0, a, U));
          for (L in a)
            ((U = a[L]),
              (H = n[L]),
              !a.hasOwnProperty(L) ||
                U === H ||
                (U === void 0 && H === void 0) ||
                uh(t, e, L, U, a, H));
          return;
        }
    }
    for (var C in n)
      ((U = n[C]),
        n.hasOwnProperty(C) &&
          U != null &&
          !a.hasOwnProperty(C) &&
          te(t, e, C, null, a, U));
    for (K in a)
      ((U = a[K]),
        (H = n[K]),
        !a.hasOwnProperty(K) ||
          U === H ||
          (U == null && H == null) ||
          te(t, e, K, U, a, H));
  }
  function Fm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var s = n[a],
          c = s.transferSize,
          p = s.initiatorType,
          y = s.duration;
        if (c && y && Fm(p)) {
          for (p = 0, y = s.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a],
              w = T.startTime;
            if (w > y) break;
            var L = T.transferSize,
              K = T.initiatorType;
            L &&
              Fm(K) &&
              ((T = T.responseEnd), (p += L * (T < y ? 1 : (y - w) / (T - w))));
          }
          if ((--a, (e += (8 * (c + p)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var rh = null,
    sh = null;
  function yc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Wm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $m(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function ch(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var fh = null;
  function Tv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === fh
        ? !1
        : ((fh = t), !0)
      : ((fh = null), !1);
  }
  var Pm = typeof setTimeout == "function" ? setTimeout : void 0,
    Ev = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Im = typeof Promise == "function" ? Promise : void 0,
    zv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Im < "u"
          ? function (t) {
              return Im.resolve(null).then(t).catch(Av);
            }
          : Pm;
  function Av(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Ja(t) {
    return t === "head";
  }
  function t1(t, e) {
    var n = e,
      a = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (t.removeChild(s), Cu(e));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") Rr(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), Rr(n));
          for (var c = n.firstChild; c; ) {
            var p = c.nextSibling,
              y = c.nodeName;
            (c[ge] ||
              y === "SCRIPT" ||
              y === "STYLE" ||
              (y === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(c),
              (c = p));
          }
        } else n === "body" && Rr(t.ownerDocument.body);
      n = s;
    } while (n);
    Cu(e);
  }
  function e1(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
    } while (n);
  }
  function oh(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (oh(n), Oe(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Mv(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[ge])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = El(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ov(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = El(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function n1(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = El(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function hh(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function dh(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Cv(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function El(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var ph = null;
  function l1(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return El(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function a1(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function i1(t, e, n) {
    switch (((e = yc(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(i(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(i(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function Rr(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Oe(t);
  }
  var zl = new Map(),
    u1 = new Set();
  function vc(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var xa = V.d;
  V.d = { f: Dv, r: Nv, D: Rv, C: wv, L: jv, m: Uv, X: Yv, S: Hv, M: Bv };
  function Dv() {
    var t = xa.f(),
      e = fc();
    return t || e;
  }
  function Nv(t) {
    var e = Cn(t);
    e !== null && e.tag === 5 && e.type === "form" ? Tp(e) : xa.r(t);
  }
  var Au = typeof document > "u" ? null : document;
  function r1(t, e, n) {
    var a = Au;
    if (a && typeof e == "string" && e) {
      var s = _l(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        u1.has(s) ||
          (u1.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(s) === null &&
            ((e = a.createElement("link")),
            nn(e, "link", t),
            Rt(e),
            a.head.appendChild(e))));
    }
  }
  function Rv(t) {
    (xa.D(t), r1("dns-prefetch", t, null));
  }
  function wv(t, e) {
    (xa.C(t, e), r1("preconnect", t, e));
  }
  function jv(t, e, n) {
    xa.L(t, e, n);
    var a = Au;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + _l(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + _l(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + _l(n.imageSizes) + '"]'))
        : (s += '[href="' + _l(t) + '"]');
      var c = s;
      switch (e) {
        case "style":
          c = Mu(t);
          break;
        case "script":
          c = Ou(t);
      }
      zl.has(c) ||
        ((t = v(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        zl.set(c, t),
        a.querySelector(s) !== null ||
          (e === "style" && a.querySelector(wr(c))) ||
          (e === "script" && a.querySelector(jr(c))) ||
          ((e = a.createElement("link")),
          nn(e, "link", t),
          Rt(e),
          a.head.appendChild(e)));
    }
  }
  function Uv(t, e) {
    xa.m(t, e);
    var n = Au;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + _l(a) + '"][href="' + _l(t) + '"]',
        c = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Ou(t);
      }
      if (
        !zl.has(c) &&
        ((t = v({ rel: "modulepreload", href: t }, e)),
        zl.set(c, t),
        n.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(jr(c))) return;
        }
        ((a = n.createElement("link")),
          nn(a, "link", t),
          Rt(a),
          n.head.appendChild(a));
      }
    }
  }
  function Hv(t, e, n) {
    xa.S(t, e, n);
    var a = Au;
    if (a && t) {
      var s = ye(a).hoistableStyles,
        c = Mu(t);
      e = e || "default";
      var p = s.get(c);
      if (!p) {
        var y = { loading: 0, preload: null };
        if ((p = a.querySelector(wr(c)))) y.loading = 5;
        else {
          ((t = v({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = zl.get(c)) && mh(t, n));
          var T = (p = a.createElement("link"));
          (Rt(T),
            nn(T, "link", t),
            (T._p = new Promise(function (w, L) {
              ((T.onload = w), (T.onerror = L));
            })),
            T.addEventListener("load", function () {
              y.loading |= 1;
            }),
            T.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            xc(p, e, a));
        }
        ((p = { type: "stylesheet", instance: p, count: 1, state: y }),
          s.set(c, p));
      }
    }
  }
  function Yv(t, e) {
    xa.X(t, e);
    var n = Au;
    if (n && t) {
      var a = ye(n).hoistableScripts,
        s = Ou(t),
        c = a.get(s);
      c ||
        ((c = n.querySelector(jr(s))),
        c ||
          ((t = v({ src: t, async: !0 }, e)),
          (e = zl.get(s)) && gh(t, e),
          (c = n.createElement("script")),
          Rt(c),
          nn(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(s, c));
    }
  }
  function Bv(t, e) {
    xa.M(t, e);
    var n = Au;
    if (n && t) {
      var a = ye(n).hoistableScripts,
        s = Ou(t),
        c = a.get(s);
      c ||
        ((c = n.querySelector(jr(s))),
        c ||
          ((t = v({ src: t, async: !0, type: "module" }, e)),
          (e = zl.get(s)) && gh(t, e),
          (c = n.createElement("script")),
          Rt(c),
          nn(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(s, c));
    }
  }
  function s1(t, e, n, a) {
    var s = (s = dt.current) ? vc(s) : null;
    if (!s) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Mu(n.href)),
            (n = ye(s).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Mu(n.href);
          var c = ye(s).hoistableStyles,
            p = c.get(t);
          if (
            (p ||
              ((s = s.ownerDocument || s),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, p),
              (c = s.querySelector(wr(t))) &&
                !c._p &&
                ((p.instance = c), (p.state.loading = 5)),
              zl.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                zl.set(t, n),
                c || qv(s, t, n, p.state))),
            e && a === null)
          )
            throw Error(i(528, ""));
          return p;
        }
        if (e && a !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Ou(n)),
              (n = ye(s).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function Mu(t) {
    return 'href="' + _l(t) + '"';
  }
  function wr(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function c1(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function qv(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        nn(e, "link", n),
        Rt(e),
        t.head.appendChild(e));
  }
  function Ou(t) {
    return '[src="' + _l(t) + '"]';
  }
  function jr(t) {
    return "script[async]" + t;
  }
  function f1(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + _l(n.href) + '"]');
          if (a) return ((e.instance = a), Rt(a), a);
          var s = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Rt(a),
            nn(a, "style", s),
            xc(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          s = Mu(n.href);
          var c = t.querySelector(wr(s));
          if (c) return ((e.state.loading |= 4), (e.instance = c), Rt(c), c);
          ((a = c1(n)),
            (s = zl.get(s)) && mh(a, s),
            (c = (t.ownerDocument || t).createElement("link")),
            Rt(c));
          var p = c;
          return (
            (p._p = new Promise(function (y, T) {
              ((p.onload = y), (p.onerror = T));
            })),
            nn(c, "link", a),
            (e.state.loading |= 4),
            xc(c, n.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = Ou(n.src)),
            (s = t.querySelector(jr(c)))
              ? ((e.instance = s), Rt(s), s)
              : ((a = n),
                (s = zl.get(c)) && ((a = v({}, n)), gh(a, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Rt(s),
                nn(s, "link", a),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), xc(a, n.precedence, t));
    return e.instance;
  }
  function xc(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = a.length ? a[a.length - 1] : null,
        c = s,
        p = 0;
      p < a.length;
      p++
    ) {
      var y = a[p];
      if (y.dataset.precedence === e) c = y;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function mh(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function gh(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Sc = null;
  function o1(t, e, n) {
    if (Sc === null) {
      var a = new Map(),
        s = (Sc = new Map());
      s.set(n, a);
    } else ((s = Sc), (a = s.get(n)), a || ((a = new Map()), s.set(n, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var c = n[s];
      if (
        !(
          c[ge] ||
          c[At] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = c.getAttribute(e) || "";
        p = t + p;
        var y = a.get(p);
        y ? y.push(c) : a.set(p, [c]);
      }
    }
    return a;
  }
  function h1(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Lv(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function d1(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Xv(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = Mu(a.href),
          c = e.querySelector(wr(s));
        if (c) {
          ((e = c._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = bc.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = c),
            Rt(c));
          return;
        }
        ((c = e.ownerDocument || e),
          (a = c1(a)),
          (s = zl.get(s)) && mh(a, s),
          (c = c.createElement("link")),
          Rt(c));
        var p = c;
        ((p._p = new Promise(function (y, T) {
          ((p.onload = y), (p.onerror = T));
        })),
          nn(c, "link", a),
          (n.instance = c));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = bc.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var _h = 0;
  function Gv(t, e) {
    return (
      t.stylesheets && t.count === 0 && Ec(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Ec(t, t.stylesheets), t.unsuspend)) {
                var c = t.unsuspend;
                ((t.unsuspend = null), c());
              }
            }, 6e4 + e);
            0 < t.imgBytes && _h === 0 && (_h = 62500 * bv());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Ec(t, t.stylesheets), t.unsuspend))
                ) {
                  var c = t.unsuspend;
                  ((t.unsuspend = null), c());
                }
              },
              (t.imgBytes > _h ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function bc() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ec(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Tc = null;
  function Ec(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Tc = new Map()),
        e.forEach(Qv, t),
        (Tc = null),
        bc.call(t)));
  }
  function Qv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Tc.get(t);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Tc.set(t, n));
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var p = s[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (n.set(p.dataset.precedence, p), (a = p));
        }
        a && n.set(null, a);
      }
      ((s = e.instance),
        (p = s.getAttribute("data-precedence")),
        (c = n.get(p) || a),
        c === a && n.set(null, s),
        n.set(p, s),
        this.count++,
        (a = bc.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Ur = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0,
  };
  function Vv(t, e, n, a, s, c, p, y, T) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = xt(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = xt(0)),
      (this.hiddenUpdates = xt(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map()));
  }
  function p1(t, e, n, a, s, c, p, y, T, w, L, K) {
    return (
      (t = new Vv(t, e, n, p, T, w, L, K, y)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = kn(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Ff()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: a, isDehydrated: n, cache: e }),
      If(c),
      t
    );
  }
  function m1(t) {
    return t ? ((t = iu), t) : iu;
  }
  function g1(t, e, n, a, s, c) {
    ((s = m1(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = Ya(e)),
      (a.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (n = Ba(t, a, e)),
      n !== null && (Un(n, t, e), dr(n, t, e)));
  }
  function _1(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function yh(t, e) {
    (_1(t, e), (t = t.alternate) && _1(t, e));
  }
  function y1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = vi(t, 67108864);
      (e !== null && Un(e, t, 67108864), yh(t, 67108864));
    }
  }
  function v1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = $n();
      e = yt(e);
      var n = vi(t, e);
      (n !== null && Un(n, t, e), yh(t, e));
    }
  }
  var zc = !0;
  function Zv(t, e, n, a) {
    var s = N.T;
    N.T = null;
    var c = V.p;
    try {
      ((V.p = 2), vh(t, e, n, a));
    } finally {
      ((V.p = c), (N.T = s));
    }
  }
  function kv(t, e, n, a) {
    var s = N.T;
    N.T = null;
    var c = V.p;
    try {
      ((V.p = 8), vh(t, e, n, a));
    } finally {
      ((V.p = c), (N.T = s));
    }
  }
  function vh(t, e, n, a) {
    if (zc) {
      var s = xh(a);
      if (s === null) (ih(t, e, a, Ac, n), S1(t, a));
      else if (Jv(s, t, e, n, a)) a.stopPropagation();
      else if ((S1(t, a), e & 4 && -1 < Kv.indexOf(t))) {
        for (; s !== null; ) {
          var c = Cn(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var p = Qe(c.pendingLanes);
                  if (p !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; p; ) {
                      var T = 1 << (31 - Ue(p));
                      ((y.entanglements[1] |= T), (p &= ~T));
                    }
                    (Jl(c), (Jt & 6) === 0 && ((sc = Me() + 500), Cr(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((y = vi(c, 2)), y !== null && Un(y, c, 2), fc(), yh(c, 2));
            }
          if (((c = xh(a)), c === null && ih(t, e, a, Ac, n), c === s)) break;
          s = c;
        }
        s !== null && a.stopPropagation();
      } else ih(t, e, a, null, n);
    }
  }
  function xh(t) {
    return ((t = Sf(t)), Sh(t));
  }
  var Ac = null;
  function Sh(t) {
    if (((Ac = null), (t = _e(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = o(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Ac = t), null);
  }
  function x1(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (je()) {
          case wl:
            return 2;
          case oe:
            return 8;
          case rn:
          case On:
            return 32;
          case fl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bh = !1,
    Fa = null,
    Wa = null,
    $a = null,
    Hr = new Map(),
    Yr = new Map(),
    Pa = [],
    Kv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function S1(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Fa = null;
        break;
      case "dragenter":
      case "dragleave":
        Wa = null;
        break;
      case "mouseover":
      case "mouseout":
        $a = null;
        break;
      case "pointerover":
      case "pointerout":
        Hr.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yr.delete(e.pointerId);
    }
  }
  function Br(t, e, n, a, s, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [s],
        }),
        e !== null && ((e = Cn(e)), e !== null && y1(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Jv(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return ((Fa = Br(Fa, t, e, n, a, s)), !0);
      case "dragenter":
        return ((Wa = Br(Wa, t, e, n, a, s)), !0);
      case "mouseover":
        return (($a = Br($a, t, e, n, a, s)), !0);
      case "pointerover":
        var c = s.pointerId;
        return (Hr.set(c, Br(Hr.get(c) || null, t, e, n, a, s)), !0);
      case "gotpointercapture":
        return (
          (c = s.pointerId),
          Yr.set(c, Br(Yr.get(c) || null, t, e, n, a, s)),
          !0
        );
    }
    return !1;
  }
  function b1(t) {
    var e = _e(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = o(n)), e !== null)) {
            ((t.blockedOn = e),
              he(t.priority, function () {
                v1(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = h(n)), e !== null)) {
            ((t.blockedOn = e),
              he(t.priority, function () {
                v1(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Mc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = xh(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((xf = a), n.target.dispatchEvent(a), (xf = null));
      } else return ((e = Cn(n)), e !== null && y1(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function T1(t, e, n) {
    Mc(t) && n.delete(e);
  }
  function Fv() {
    ((bh = !1),
      Fa !== null && Mc(Fa) && (Fa = null),
      Wa !== null && Mc(Wa) && (Wa = null),
      $a !== null && Mc($a) && ($a = null),
      Hr.forEach(T1),
      Yr.forEach(T1));
  }
  function Oc(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      bh ||
        ((bh = !0),
        d.unstable_scheduleCallback(d.unstable_NormalPriority, Fv)));
  }
  var Cc = null;
  function E1(t) {
    Cc !== t &&
      ((Cc = t),
      d.unstable_scheduleCallback(d.unstable_NormalPriority, function () {
        Cc === t && (Cc = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            s = t[e + 2];
          if (typeof a != "function") {
            if (Sh(a || n) === null) continue;
            break;
          }
          var c = Cn(n);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            xo(c, { pending: !0, data: s, method: n.method, action: a }, a, s));
        }
      }));
  }
  function Cu(t) {
    function e(T) {
      return Oc(T, t);
    }
    (Fa !== null && Oc(Fa, t),
      Wa !== null && Oc(Wa, t),
      $a !== null && Oc($a, t),
      Hr.forEach(e),
      Yr.forEach(e));
    for (var n = 0; n < Pa.length; n++) {
      var a = Pa[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Pa.length && ((n = Pa[0]), n.blockedOn === null); )
      (b1(n), n.blockedOn === null && Pa.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          c = n[a + 1],
          p = s[Ot] || null;
        if (typeof c == "function") p || E1(n);
        else if (p) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (((s = c), (p = c[Ot] || null))) y = p.formAction;
            else if (Sh(s) !== null) continue;
          } else y = p.action;
          (typeof y == "function" ? (n[a + 1] = y) : (n.splice(a, 3), (a -= 3)),
            E1(n));
        }
      }
  }
  function z1() {
    function t(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (p) {
              return (s = p);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Th(t) {
    this._internalRoot = t;
  }
  ((Dc.prototype.render = Th.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var n = e.current,
        a = $n();
      g1(n, a, t, e, null, null);
    }),
    (Dc.prototype.unmount = Th.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (g1(t.current, 2, null, t, null, null), fc(), (e[Qt] = null));
        }
      }));
  function Dc(t) {
    this._internalRoot = t;
  }
  Dc.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Nt();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Pa.length && e !== 0 && e < Pa[n].priority; n++);
      (Pa.splice(n, 0, t), n === 0 && b1(t));
    }
  };
  var A1 = l.version;
  if (A1 !== "19.2.3") throw Error(i(527, A1, "19.2.3"));
  V.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(i(188))
        : ((t = Object.keys(t).join(",")), Error(i(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? _(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Wv = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nc.isDisabled && Nc.supportsFiber)
      try {
        ((Ll = Nc.inject(Wv)), (me = Nc));
      } catch {}
  }
  return (
    (Lr.createRoot = function (t, e) {
      if (!r(t)) throw Error(i(299));
      var n = !1,
        a = "",
        s = wp,
        c = jp,
        p = Up;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (p = e.onRecoverableError)),
        (e = p1(t, 1, !1, null, null, n, a, null, s, c, p, z1)),
        (t[Qt] = e.current),
        ah(t),
        new Th(e)
      );
    }),
    (Lr.hydrateRoot = function (t, e, n) {
      if (!r(t)) throw Error(i(299));
      var a = !1,
        s = "",
        c = wp,
        p = jp,
        y = Up,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.formState !== void 0 && (T = n.formState)),
        (e = p1(t, 1, !0, e, n ?? null, a, s, T, c, p, y, z1)),
        (e.context = m1(null)),
        (n = e.current),
        (a = $n()),
        (a = yt(a)),
        (s = Ya(a)),
        (s.callback = null),
        Ba(n, s, a),
        (n = a),
        (e.current.lanes = n),
        st(e, n),
        Jl(e),
        (t[Qt] = e.current),
        ah(t),
        new Dc(e)
      );
    }),
    (Lr.version = "19.2.3"),
    Lr
  );
}
var H1;
function ux() {
  if (H1) return Ah.exports;
  H1 = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (l) {
        console.error(l);
      }
  }
  return (d(), (Ah.exports = ix()), Ah.exports);
}
var rx = ux();
function Sa(d) {
  if (d === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return d;
}
function xg(d, l) {
  ((d.prototype = Object.create(l.prototype)),
    (d.prototype.constructor = d),
    (d.__proto__ = l));
}
var ul = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Vu = { duration: 0.5, overwrite: !1, delay: 0 },
  gd,
  an,
  pe,
  Cl = 1e8,
  ae = 1 / Cl,
  Zh = Math.PI * 2,
  sx = Zh / 4,
  cx = 0,
  Sg = Math.sqrt,
  fx = Math.cos,
  ox = Math.sin,
  $e = function (l) {
    return typeof l == "string";
  },
  Ae = function (l) {
    return typeof l == "function";
  },
  Aa = function (l) {
    return typeof l == "number";
  },
  _d = function (l) {
    return typeof l > "u";
  },
  ea = function (l) {
    return typeof l == "object";
  },
  Yn = function (l) {
    return l !== !1;
  },
  yd = function () {
    return typeof window < "u";
  },
  Rc = function (l) {
    return Ae(l) || $e(l);
  },
  bg =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  mn = Array.isArray,
  hx = /random\([^)]+\)/g,
  dx = /,\s*/g,
  Y1 = /(?:-?\.?\d|\.)+/gi,
  Tg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Uu = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Dh = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Eg = /[+-]=-?[.\d]+/,
  px = /[^,'"\[\]\s]+/gi,
  mx = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  xe,
  Fl,
  kh,
  vd,
  rl = {},
  tf = {},
  zg,
  Ag = function (l) {
    return (tf = Zu(l, rl)) && Xn;
  },
  xd = function (l, u) {
    return console.warn(
      "Invalid property",
      l,
      "set to",
      u,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  fs = function (l, u) {
    return !u && console.warn(l);
  },
  Mg = function (l, u) {
    return (l && (rl[l] = u) && tf && (tf[l] = u)) || rl;
  },
  os = function () {
    return 0;
  },
  gx = { suppressEvents: !0, isStart: !0, kill: !1 },
  Zc = { suppressEvents: !0, kill: !1 },
  _x = { suppressEvents: !0 },
  Sd = {},
  ui = [],
  Kh = {},
  Og,
  tl = {},
  Nh = {},
  B1 = 30,
  kc = [],
  bd = "",
  Td = function (l) {
    var u = l[0],
      i,
      r;
    if ((ea(u) || Ae(u) || (l = [l]), !(i = (u._gsap || {}).harness))) {
      for (r = kc.length; r-- && !kc[r].targetTest(u); );
      i = kc[r];
    }
    for (r = l.length; r--; )
      (l[r] && (l[r]._gsap || (l[r]._gsap = new Pg(l[r], i)))) ||
        l.splice(r, 1);
    return l;
  },
  qi = function (l) {
    return l._gsap || Td(Dl(l))[0]._gsap;
  },
  Cg = function (l, u, i) {
    return (i = l[u]) && Ae(i)
      ? l[u]()
      : (_d(i) && l.getAttribute && l.getAttribute(u)) || i;
  },
  Bn = function (l, u) {
    return (l = l.split(",")).forEach(u) || l;
  },
  Ne = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  ve = function (l) {
    return Math.round(l * 1e7) / 1e7 || 0;
  },
  Bu = function (l, u) {
    var i = u.charAt(0),
      r = parseFloat(u.substr(2));
    return (
      (l = parseFloat(l)),
      i === "+" ? l + r : i === "-" ? l - r : i === "*" ? l * r : l / r
    );
  },
  yx = function (l, u) {
    for (var i = u.length, r = 0; l.indexOf(u[r]) < 0 && ++r < i; );
    return r < i;
  },
  ef = function () {
    var l = ui.length,
      u = ui.slice(0),
      i,
      r;
    for (Kh = {}, ui.length = 0, i = 0; i < l; i++)
      ((r = u[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  Ed = function (l) {
    return !!(l._initted || l._startAt || l.add);
  },
  Dg = function (l, u, i, r) {
    (ui.length && !an && ef(),
      l.render(u, i, !!(an && u < 0 && Ed(l))),
      ui.length && !an && ef());
  },
  Ng = function (l) {
    var u = parseFloat(l);
    return (u || u === 0) && (l + "").match(px).length < 2
      ? u
      : $e(l)
        ? l.trim()
        : l;
  },
  Rg = function (l) {
    return l;
  },
  sl = function (l, u) {
    for (var i in u) i in l || (l[i] = u[i]);
    return l;
  },
  vx = function (l) {
    return function (u, i) {
      for (var r in i)
        r in u || (r === "duration" && l) || r === "ease" || (u[r] = i[r]);
    };
  },
  Zu = function (l, u) {
    for (var i in u) l[i] = u[i];
    return l;
  },
  q1 = function d(l, u) {
    for (var i in u)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (l[i] = ea(u[i]) ? d(l[i] || (l[i] = {}), u[i]) : u[i]);
    return l;
  },
  nf = function (l, u) {
    var i = {},
      r;
    for (r in l) r in u || (i[r] = l[r]);
    return i;
  },
  $r = function (l) {
    var u = l.parent || xe,
      i = l.keyframes ? vx(mn(l.keyframes)) : sl;
    if (Yn(l.inherit))
      for (; u; ) (i(l, u.vars.defaults), (u = u.parent || u._dp));
    return l;
  },
  xx = function (l, u) {
    for (var i = l.length, r = i === u.length; r && i-- && l[i] === u[i]; );
    return i < 0;
  },
  wg = function (l, u, i, r, f) {
    var o = l[r],
      h;
    if (f) for (h = u[f]; o && o[f] > h; ) o = o._prev;
    return (
      o ? ((u._next = o._next), (o._next = u)) : ((u._next = l[i]), (l[i] = u)),
      u._next ? (u._next._prev = u) : (l[r] = u),
      (u._prev = o),
      (u.parent = u._dp = l),
      u
    );
  },
  hf = function (l, u, i, r) {
    (i === void 0 && (i = "_first"), r === void 0 && (r = "_last"));
    var f = u._prev,
      o = u._next;
    (f ? (f._next = o) : l[i] === u && (l[i] = o),
      o ? (o._prev = f) : l[r] === u && (l[r] = f),
      (u._next = u._prev = u.parent = null));
  },
  ci = function (l, u) {
    (l.parent &&
      (!u || l.parent.autoRemoveChildren) &&
      l.parent.remove &&
      l.parent.remove(l),
      (l._act = 0));
  },
  Li = function (l, u) {
    if (l && (!u || u._end > l._dur || u._start < 0))
      for (var i = l; i; ) ((i._dirty = 1), (i = i.parent));
    return l;
  },
  Sx = function (l) {
    for (var u = l.parent; u && u.parent; )
      ((u._dirty = 1), u.totalDuration(), (u = u.parent));
    return l;
  },
  Jh = function (l, u, i, r) {
    return (
      l._startAt &&
      (an
        ? l._startAt.revert(Zc)
        : (l.vars.immediateRender && !l.vars.autoRevert) ||
          l._startAt.render(u, !0, r))
    );
  },
  bx = function d(l) {
    return !l || (l._ts && d(l.parent));
  },
  L1 = function (l) {
    return l._repeat ? ku(l._tTime, (l = l.duration() + l._rDelay)) * l : 0;
  },
  ku = function (l, u) {
    var i = Math.floor((l = ve(l / u)));
    return l && i === l ? i - 1 : i;
  },
  lf = function (l, u) {
    return (
      (l - u._start) * u._ts +
      (u._ts >= 0 ? 0 : u._dirty ? u.totalDuration() : u._tDur)
    );
  },
  df = function (l) {
    return (l._end = ve(
      l._start + (l._tDur / Math.abs(l._ts || l._rts || ae) || 0),
    ));
  },
  pf = function (l, u) {
    var i = l._dp;
    return (
      i &&
        i.smoothChildTiming &&
        l._ts &&
        ((l._start = ve(
          i._time -
            (l._ts > 0
              ? u / l._ts
              : ((l._dirty ? l.totalDuration() : l._tDur) - u) / -l._ts),
        )),
        df(l),
        i._dirty || Li(i, l)),
      l
    );
  },
  jg = function (l, u) {
    var i;
    if (
      ((u._time ||
        (!u._dur && u._initted) ||
        (u._start < l._time && (u._dur || !u.add))) &&
        ((i = lf(l.rawTime(), u)),
        (!u._dur || vs(0, u.totalDuration(), i) - u._tTime > ae) &&
          u.render(i, !0)),
      Li(l, u)._dp && l._initted && l._time >= l._dur && l._ts)
    ) {
      if (l._dur < l.duration())
        for (i = l; i._dp; )
          (i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp));
      l._zTime = -ae;
    }
  },
  $l = function (l, u, i, r) {
    return (
      u.parent && ci(u),
      (u._start = ve(
        (Aa(i) ? i : i || l !== xe ? Al(l, i, u) : l._time) + u._delay,
      )),
      (u._end = ve(
        u._start + (u.totalDuration() / Math.abs(u.timeScale()) || 0),
      )),
      wg(l, u, "_first", "_last", l._sort ? "_start" : 0),
      Fh(u) || (l._recent = u),
      r || jg(l, u),
      l._ts < 0 && pf(l, l._tTime),
      l
    );
  },
  Ug = function (l, u) {
    return (
      (rl.ScrollTrigger || xd("scrollTrigger", u)) &&
      rl.ScrollTrigger.create(u, l)
    );
  },
  Hg = function (l, u, i, r, f) {
    if ((Ad(l, u, f), !l._initted)) return 1;
    if (
      !i &&
      l._pt &&
      !an &&
      ((l._dur && l.vars.lazy !== !1) || (!l._dur && l.vars.lazy)) &&
      Og !== nl.frame
    )
      return (ui.push(l), (l._lazy = [f, r]), 1);
  },
  Tx = function d(l) {
    var u = l.parent;
    return u && u._ts && u._initted && !u._lock && (u.rawTime() < 0 || d(u));
  },
  Fh = function (l) {
    var u = l.data;
    return u === "isFromStart" || u === "isStart";
  },
  Ex = function (l, u, i, r) {
    var f = l.ratio,
      o =
        u < 0 ||
        (!u &&
          ((!l._start && Tx(l) && !(!l._initted && Fh(l))) ||
            ((l._ts < 0 || l._dp._ts < 0) && !Fh(l))))
          ? 0
          : 1,
      h = l._rDelay,
      m = 0,
      g,
      _,
      v;
    if (
      (h &&
        l._repeat &&
        ((m = vs(0, l._tDur, u)),
        (_ = ku(m, h)),
        l._yoyo && _ & 1 && (o = 1 - o),
        _ !== ku(l._tTime, h) &&
          ((f = 1 - o), l.vars.repeatRefresh && l._initted && l.invalidate())),
      o !== f || an || r || l._zTime === ae || (!u && l._zTime))
    ) {
      if (!l._initted && Hg(l, u, r, i, m)) return;
      for (
        v = l._zTime,
          l._zTime = u || (i ? ae : 0),
          i || (i = u && !v),
          l.ratio = o,
          l._from && (o = 1 - o),
          l._time = 0,
          l._tTime = m,
          g = l._pt;
        g;
      )
        (g.r(o, g.d), (g = g._next));
      (u < 0 && Jh(l, u, i, !0),
        l._onUpdate && !i && al(l, "onUpdate"),
        m && l._repeat && !i && l.parent && al(l, "onRepeat"),
        (u >= l._tDur || u < 0) &&
          l.ratio === o &&
          (o && ci(l, 1),
          !i &&
            !an &&
            (al(l, o ? "onComplete" : "onReverseComplete", !0),
            l._prom && l._prom())));
    } else l._zTime || (l._zTime = u);
  },
  zx = function (l, u, i) {
    var r;
    if (i > u)
      for (r = l._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > u) return r;
        r = r._next;
      }
    else
      for (r = l._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < u) return r;
        r = r._prev;
      }
  },
  Ku = function (l, u, i, r) {
    var f = l._repeat,
      o = ve(u) || 0,
      h = l._tTime / l._tDur;
    return (
      h && !r && (l._time *= o / l._dur),
      (l._dur = o),
      (l._tDur = f ? (f < 0 ? 1e10 : ve(o * (f + 1) + l._rDelay * f)) : o),
      h > 0 && !r && pf(l, (l._tTime = l._tDur * h)),
      l.parent && df(l),
      i || Li(l.parent, l),
      l
    );
  },
  X1 = function (l) {
    return l instanceof zn ? Li(l) : Ku(l, l._dur);
  },
  Ax = { _start: 0, endTime: os, totalDuration: os },
  Al = function d(l, u, i) {
    var r = l.labels,
      f = l._recent || Ax,
      o = l.duration() >= Cl ? f.endTime(!1) : l._dur,
      h,
      m,
      g;
    return $e(u) && (isNaN(u) || u in r)
      ? ((m = u.charAt(0)),
        (g = u.substr(-1) === "%"),
        (h = u.indexOf("=")),
        m === "<" || m === ">"
          ? (h >= 0 && (u = u.replace(/=/, "")),
            (m === "<" ? f._start : f.endTime(f._repeat >= 0)) +
              (parseFloat(u.substr(1)) || 0) *
                (g ? (h < 0 ? f : i).totalDuration() / 100 : 1))
          : h < 0
            ? (u in r || (r[u] = o), r[u])
            : ((m = parseFloat(u.charAt(h - 1) + u.substr(h + 1))),
              g && i && (m = (m / 100) * (mn(i) ? i[0] : i).totalDuration()),
              h > 1 ? d(l, u.substr(0, h - 1), i) + m : o + m))
      : u == null
        ? o
        : +u;
  },
  Pr = function (l, u, i) {
    var r = Aa(u[1]),
      f = (r ? 2 : 1) + (l < 2 ? 0 : 1),
      o = u[f],
      h,
      m;
    if ((r && (o.duration = u[1]), (o.parent = i), l)) {
      for (h = o, m = i; m && !("immediateRender" in h); )
        ((h = m.vars.defaults || {}), (m = Yn(m.vars.inherit) && m.parent));
      ((o.immediateRender = Yn(h.immediateRender)),
        l < 2 ? (o.runBackwards = 1) : (o.startAt = u[f - 1]));
    }
    return new Xe(u[0], o, u[f + 1]);
  },
  di = function (l, u) {
    return l || l === 0 ? u(l) : u;
  },
  vs = function (l, u, i) {
    return i < l ? l : i > u ? u : i;
  },
  dn = function (l, u) {
    return !$e(l) || !(u = mx.exec(l)) ? "" : u[1];
  },
  Mx = function (l, u, i) {
    return di(i, function (r) {
      return vs(l, u, r);
    });
  },
  Wh = [].slice,
  Yg = function (l, u) {
    return (
      l &&
      ea(l) &&
      "length" in l &&
      ((!u && !l.length) || (l.length - 1 in l && ea(l[0]))) &&
      !l.nodeType &&
      l !== Fl
    );
  },
  Ox = function (l, u, i) {
    return (
      i === void 0 && (i = []),
      l.forEach(function (r) {
        var f;
        return ($e(r) && !u) || Yg(r, 1)
          ? (f = i).push.apply(f, Dl(r))
          : i.push(r);
      }) || i
    );
  },
  Dl = function (l, u, i) {
    return pe && !u && pe.selector
      ? pe.selector(l)
      : $e(l) && !i && (kh || !Ju())
        ? Wh.call((u || vd).querySelectorAll(l), 0)
        : mn(l)
          ? Ox(l, i)
          : Yg(l)
            ? Wh.call(l, 0)
            : l
              ? [l]
              : [];
  },
  $h = function (l) {
    return (
      (l = Dl(l)[0] || fs("Invalid scope") || {}),
      function (u) {
        var i = l.current || l.nativeElement || l;
        return Dl(
          u,
          i.querySelectorAll
            ? i
            : i === l
              ? fs("Invalid scope") || vd.createElement("div")
              : l,
        );
      }
    );
  },
  Bg = function (l) {
    return l.sort(function () {
      return 0.5 - Math.random();
    });
  },
  qg = function (l) {
    if (Ae(l)) return l;
    var u = ea(l) ? l : { each: l },
      i = Xi(u.ease),
      r = u.from || 0,
      f = parseFloat(u.base) || 0,
      o = {},
      h = r > 0 && r < 1,
      m = isNaN(r) || h,
      g = u.axis,
      _ = r,
      v = r;
    return (
      $e(r)
        ? (_ = v = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !h && m && ((_ = r[0]), (v = r[1])),
      function (S, x, O) {
        var b = (O || u).length,
          D = o[b],
          X,
          G,
          k,
          Y,
          Q,
          F,
          j,
          W,
          J;
        if (!D) {
          if (((J = u.grid === "auto" ? 0 : (u.grid || [1, Cl])[1]), !J)) {
            for (
              j = -Cl;
              j < (j = O[J++].getBoundingClientRect().left) && J < b;
            );
            J < b && J--;
          }
          for (
            D = o[b] = [],
              X = m ? Math.min(J, b) * _ - 0.5 : r % J,
              G = J === Cl ? 0 : m ? (b * v) / J - 0.5 : (r / J) | 0,
              j = 0,
              W = Cl,
              F = 0;
            F < b;
            F++
          )
            ((k = (F % J) - X),
              (Y = G - ((F / J) | 0)),
              (D[F] = Q = g ? Math.abs(g === "y" ? Y : k) : Sg(k * k + Y * Y)),
              Q > j && (j = Q),
              Q < W && (W = Q));
          (r === "random" && Bg(D),
            (D.max = j - W),
            (D.min = W),
            (D.v = b =
              (parseFloat(u.amount) ||
                parseFloat(u.each) *
                  (J > b
                    ? b - 1
                    : g
                      ? g === "y"
                        ? b / J
                        : J
                      : Math.max(J, b / J)) ||
                0) * (r === "edges" ? -1 : 1)),
            (D.b = b < 0 ? f - b : f),
            (D.u = dn(u.amount || u.each) || 0),
            (i = i && b < 0 ? Fg(i) : i));
        }
        return (
          (b = (D[S] - D.min) / D.max || 0),
          ve(D.b + (i ? i(b) : b) * D.v) + D.u
        );
      }
    );
  },
  Ph = function (l) {
    var u = Math.pow(10, ((l + "").split(".")[1] || "").length);
    return function (i) {
      var r = ve(Math.round(parseFloat(i) / l) * l * u);
      return (r - (r % 1)) / u + (Aa(i) ? 0 : dn(i));
    };
  },
  Lg = function (l, u) {
    var i = mn(l),
      r,
      f;
    return (
      !i &&
        ea(l) &&
        ((r = i = l.radius || Cl),
        l.values
          ? ((l = Dl(l.values)), (f = !Aa(l[0])) && (r *= r))
          : (l = Ph(l.increment))),
      di(
        u,
        i
          ? Ae(l)
            ? function (o) {
                return ((f = l(o)), Math.abs(f - o) <= r ? f : o);
              }
            : function (o) {
                for (
                  var h = parseFloat(f ? o.x : o),
                    m = parseFloat(f ? o.y : 0),
                    g = Cl,
                    _ = 0,
                    v = l.length,
                    S,
                    x;
                  v--;
                )
                  (f
                    ? ((S = l[v].x - h), (x = l[v].y - m), (S = S * S + x * x))
                    : (S = Math.abs(l[v] - h)),
                    S < g && ((g = S), (_ = v)));
                return (
                  (_ = !r || g <= r ? l[_] : o),
                  f || _ === o || Aa(o) ? _ : _ + dn(o)
                );
              }
          : Ph(l),
      )
    );
  },
  Xg = function (l, u, i, r) {
    return di(mn(l) ? !u : i === !0 ? !!(i = 0) : !r, function () {
      return mn(l)
        ? l[~~(Math.random() * l.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((l - i / 2 + Math.random() * (u - l + i * 0.99)) / i) *
                i *
                r,
            ) / r;
    });
  },
  Cx = function () {
    for (var l = arguments.length, u = new Array(l), i = 0; i < l; i++)
      u[i] = arguments[i];
    return function (r) {
      return u.reduce(function (f, o) {
        return o(f);
      }, r);
    };
  },
  Dx = function (l, u) {
    return function (i) {
      return l(parseFloat(i)) + (u || dn(i));
    };
  },
  Nx = function (l, u, i) {
    return Qg(l, u, 0, 1, i);
  },
  Gg = function (l, u, i) {
    return di(i, function (r) {
      return l[~~u(r)];
    });
  },
  Rx = function d(l, u, i) {
    var r = u - l;
    return mn(l)
      ? Gg(l, d(0, l.length), u)
      : di(i, function (f) {
          return ((r + ((f - l) % r)) % r) + l;
        });
  },
  wx = function d(l, u, i) {
    var r = u - l,
      f = r * 2;
    return mn(l)
      ? Gg(l, d(0, l.length - 1), u)
      : di(i, function (o) {
          return ((o = (f + ((o - l) % f)) % f || 0), l + (o > r ? f - o : o));
        });
  },
  hs = function (l) {
    return l.replace(hx, function (u) {
      var i = u.indexOf("[") + 1,
        r = u.substring(i || 7, i ? u.indexOf("]") : u.length - 1).split(dx);
      return Xg(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
    });
  },
  Qg = function (l, u, i, r, f) {
    var o = u - l,
      h = r - i;
    return di(f, function (m) {
      return i + (((m - l) / o) * h || 0);
    });
  },
  jx = function d(l, u, i, r) {
    var f = isNaN(l + u)
      ? 0
      : function (x) {
          return (1 - x) * l + x * u;
        };
    if (!f) {
      var o = $e(l),
        h = {},
        m,
        g,
        _,
        v,
        S;
      if ((i === !0 && (r = 1) && (i = null), o))
        ((l = { p: l }), (u = { p: u }));
      else if (mn(l) && !mn(u)) {
        for (_ = [], v = l.length, S = v - 2, g = 1; g < v; g++)
          _.push(d(l[g - 1], l[g]));
        (v--,
          (f = function (O) {
            O *= v;
            var b = Math.min(S, ~~O);
            return _[b](O - b);
          }),
          (i = u));
      } else r || (l = Zu(mn(l) ? [] : {}, l));
      if (!_) {
        for (m in u) zd.call(h, l, m, "get", u[m]);
        f = function (O) {
          return Cd(O, h) || (o ? l.p : l);
        };
      }
    }
    return di(i, f);
  },
  G1 = function (l, u, i) {
    var r = l.labels,
      f = Cl,
      o,
      h,
      m;
    for (o in r)
      ((h = r[o] - u),
        h < 0 == !!i && h && f > (h = Math.abs(h)) && ((m = o), (f = h)));
    return m;
  },
  al = function (l, u, i) {
    var r = l.vars,
      f = r[u],
      o = pe,
      h = l._ctx,
      m,
      g,
      _;
    if (f)
      return (
        (m = r[u + "Params"]),
        (g = r.callbackScope || l),
        i && ui.length && ef(),
        h && (pe = h),
        (_ = m ? f.apply(g, m) : f.call(g)),
        (pe = o),
        _
      );
  },
  Vr = function (l) {
    return (
      ci(l),
      l.scrollTrigger && l.scrollTrigger.kill(!!an),
      l.progress() < 1 && al(l, "onInterrupt"),
      l
    );
  },
  Hu,
  Vg = [],
  Zg = function (l) {
    if (l)
      if (((l = (!l.name && l.default) || l), yd() || l.headless)) {
        var u = l.name,
          i = Ae(l),
          r =
            u && !i && l.init
              ? function () {
                  this._props = [];
                }
              : l,
          f = {
            init: os,
            render: Cd,
            add: zd,
            kill: Wx,
            modifier: Fx,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Od,
            aliases: {},
            register: 0,
          };
        if ((Ju(), l !== r)) {
          if (tl[u]) return;
          (sl(r, sl(nf(l, f), o)),
            Zu(r.prototype, Zu(f, nf(l, o))),
            (tl[(r.prop = u)] = r),
            l.targetTest && (kc.push(r), (Sd[u] = 1)),
            (u =
              (u === "css" ? "CSS" : u.charAt(0).toUpperCase() + u.substr(1)) +
              "Plugin"));
        }
        (Mg(u, r), l.register && l.register(Xn, r, qn));
      } else Vg.push(l);
  },
  le = 255,
  Zr = {
    aqua: [0, le, le],
    lime: [0, le, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, le],
    navy: [0, 0, 128],
    white: [le, le, le],
    olive: [128, 128, 0],
    yellow: [le, le, 0],
    orange: [le, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [le, 0, 0],
    pink: [le, 192, 203],
    cyan: [0, le, le],
    transparent: [le, le, le, 0],
  },
  Rh = function (l, u, i) {
    return (
      (l += l < 0 ? 1 : l > 1 ? -1 : 0),
      ((l * 6 < 1
        ? u + (i - u) * l * 6
        : l < 0.5
          ? i
          : l * 3 < 2
            ? u + (i - u) * (2 / 3 - l) * 6
            : u) *
        le +
        0.5) |
        0
    );
  },
  kg = function (l, u, i) {
    var r = l ? (Aa(l) ? [l >> 16, (l >> 8) & le, l & le] : 0) : Zr.black,
      f,
      o,
      h,
      m,
      g,
      _,
      v,
      S,
      x,
      O;
    if (!r) {
      if ((l.substr(-1) === "," && (l = l.substr(0, l.length - 1)), Zr[l]))
        r = Zr[l];
      else if (l.charAt(0) === "#") {
        if (
          (l.length < 6 &&
            ((f = l.charAt(1)),
            (o = l.charAt(2)),
            (h = l.charAt(3)),
            (l =
              "#" +
              f +
              f +
              o +
              o +
              h +
              h +
              (l.length === 5 ? l.charAt(4) + l.charAt(4) : ""))),
          l.length === 9)
        )
          return (
            (r = parseInt(l.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & le, r & le, parseInt(l.substr(7), 16) / 255]
          );
        ((l = parseInt(l.substr(1), 16)),
          (r = [l >> 16, (l >> 8) & le, l & le]));
      } else if (l.substr(0, 3) === "hsl") {
        if (((r = O = l.match(Y1)), !u))
          ((m = (+r[0] % 360) / 360),
            (g = +r[1] / 100),
            (_ = +r[2] / 100),
            (o = _ <= 0.5 ? _ * (g + 1) : _ + g - _ * g),
            (f = _ * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Rh(m + 1 / 3, f, o)),
            (r[1] = Rh(m, f, o)),
            (r[2] = Rh(m - 1 / 3, f, o)));
        else if (~l.indexOf("="))
          return ((r = l.match(Tg)), i && r.length < 4 && (r[3] = 1), r);
      } else r = l.match(Y1) || Zr.transparent;
      r = r.map(Number);
    }
    return (
      u &&
        !O &&
        ((f = r[0] / le),
        (o = r[1] / le),
        (h = r[2] / le),
        (v = Math.max(f, o, h)),
        (S = Math.min(f, o, h)),
        (_ = (v + S) / 2),
        v === S
          ? (m = g = 0)
          : ((x = v - S),
            (g = _ > 0.5 ? x / (2 - v - S) : x / (v + S)),
            (m =
              v === f
                ? (o - h) / x + (o < h ? 6 : 0)
                : v === o
                  ? (h - f) / x + 2
                  : (f - o) / x + 4),
            (m *= 60)),
        (r[0] = ~~(m + 0.5)),
        (r[1] = ~~(g * 100 + 0.5)),
        (r[2] = ~~(_ * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Kg = function (l) {
    var u = [],
      i = [],
      r = -1;
    return (
      l.split(ri).forEach(function (f) {
        var o = f.match(Uu) || [];
        (u.push.apply(u, o), i.push((r += o.length + 1)));
      }),
      (u.c = i),
      u
    );
  },
  Q1 = function (l, u, i) {
    var r = "",
      f = (l + r).match(ri),
      o = u ? "hsla(" : "rgba(",
      h = 0,
      m,
      g,
      _,
      v;
    if (!f) return l;
    if (
      ((f = f.map(function (S) {
        return (
          (S = kg(S, u, 1)) &&
          o +
            (u ? S[0] + "," + S[1] + "%," + S[2] + "%," + S[3] : S.join(",")) +
            ")"
        );
      })),
      i && ((_ = Kg(l)), (m = i.c), m.join(r) !== _.c.join(r)))
    )
      for (g = l.replace(ri, "1").split(Uu), v = g.length - 1; h < v; h++)
        r +=
          g[h] +
          (~m.indexOf(h)
            ? f.shift() || o + "0,0,0,0)"
            : (_.length ? _ : f.length ? f : i).shift());
    if (!g)
      for (g = l.split(ri), v = g.length - 1; h < v; h++) r += g[h] + f[h];
    return r + g[v];
  },
  ri = (function () {
    var d =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      l;
    for (l in Zr) d += "|" + l + "\\b";
    return new RegExp(d + ")", "gi");
  })(),
  Ux = /hsl[a]?\(/,
  Jg = function (l) {
    var u = l.join(" "),
      i;
    if (((ri.lastIndex = 0), ri.test(u)))
      return (
        (i = Ux.test(u)),
        (l[1] = Q1(l[1], i)),
        (l[0] = Q1(l[0], i, Kg(l[1]))),
        !0
      );
  },
  ds,
  nl = (function () {
    var d = Date.now,
      l = 500,
      u = 33,
      i = d(),
      r = i,
      f = 1e3 / 240,
      o = f,
      h = [],
      m,
      g,
      _,
      v,
      S,
      x,
      O = function b(D) {
        var X = d() - r,
          G = D === !0,
          k,
          Y,
          Q,
          F;
        if (
          ((X > l || X < 0) && (i += X - u),
          (r += X),
          (Q = r - i),
          (k = Q - o),
          (k > 0 || G) &&
            ((F = ++v.frame),
            (S = Q - v.time * 1e3),
            (v.time = Q = Q / 1e3),
            (o += k + (k >= f ? 4 : f - k)),
            (Y = 1)),
          G || (m = g(b)),
          Y)
        )
          for (x = 0; x < h.length; x++) h[x](Q, S, F, D);
      };
    return (
      (v = {
        time: 0,
        frame: 0,
        tick: function () {
          O(!0);
        },
        deltaRatio: function (D) {
          return S / (1e3 / (D || 60));
        },
        wake: function () {
          zg &&
            (!kh &&
              yd() &&
              ((Fl = kh = window),
              (vd = Fl.document || {}),
              (rl.gsap = Xn),
              (Fl.gsapVersions || (Fl.gsapVersions = [])).push(Xn.version),
              Ag(tf || Fl.GreenSockGlobals || (!Fl.gsap && Fl) || {}),
              Vg.forEach(Zg)),
            (_ = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            m && v.sleep(),
            (g =
              _ ||
              function (D) {
                return setTimeout(D, (o - v.time * 1e3 + 1) | 0);
              }),
            (ds = 1),
            O(2));
        },
        sleep: function () {
          ((_ ? cancelAnimationFrame : clearTimeout)(m), (ds = 0), (g = os));
        },
        lagSmoothing: function (D, X) {
          ((l = D || 1 / 0), (u = Math.min(X || 33, l)));
        },
        fps: function (D) {
          ((f = 1e3 / (D || 240)), (o = v.time * 1e3 + f));
        },
        add: function (D, X, G) {
          var k = X
            ? function (Y, Q, F, j) {
                (D(Y, Q, F, j), v.remove(k));
              }
            : D;
          return (v.remove(D), h[G ? "unshift" : "push"](k), Ju(), k);
        },
        remove: function (D, X) {
          ~(X = h.indexOf(D)) && h.splice(X, 1) && x >= X && x--;
        },
        _listeners: h,
      }),
      v
    );
  })(),
  Ju = function () {
    return !ds && nl.wake();
  },
  Gt = {},
  Hx = /^[\d.\-M][\d.\-,\s]/,
  Yx = /["']/g,
  Bx = function (l) {
    for (
      var u = {},
        i = l.substr(1, l.length - 3).split(":"),
        r = i[0],
        f = 1,
        o = i.length,
        h,
        m,
        g;
      f < o;
      f++
    )
      ((m = i[f]),
        (h = f !== o - 1 ? m.lastIndexOf(",") : m.length),
        (g = m.substr(0, h)),
        (u[r] = isNaN(g) ? g.replace(Yx, "").trim() : +g),
        (r = m.substr(h + 1).trim()));
    return u;
  },
  qx = function (l) {
    var u = l.indexOf("(") + 1,
      i = l.indexOf(")"),
      r = l.indexOf("(", u);
    return l.substring(u, ~r && r < i ? l.indexOf(")", i + 1) : i);
  },
  Lx = function (l) {
    var u = (l + "").split("("),
      i = Gt[u[0]];
    return i && u.length > 1 && i.config
      ? i.config.apply(
          null,
          ~l.indexOf("{") ? [Bx(u[1])] : qx(l).split(",").map(Ng),
        )
      : Gt._CE && Hx.test(l)
        ? Gt._CE("", l)
        : i;
  },
  Fg = function (l) {
    return function (u) {
      return 1 - l(1 - u);
    };
  },
  Wg = function d(l, u) {
    for (var i = l._first, r; i; )
      (i instanceof zn
        ? d(i, u)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== u &&
          (i.timeline
            ? d(i.timeline, u)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = u))),
        (i = i._next));
  },
  Xi = function (l, u) {
    return (l && (Ae(l) ? l : Gt[l] || Lx(l))) || u;
  },
  Fi = function (l, u, i, r) {
    (i === void 0 &&
      (i = function (m) {
        return 1 - u(1 - m);
      }),
      r === void 0 &&
        (r = function (m) {
          return m < 0.5 ? u(m * 2) / 2 : 1 - u((1 - m) * 2) / 2;
        }));
    var f = { easeIn: u, easeOut: i, easeInOut: r },
      o;
    return (
      Bn(l, function (h) {
        ((Gt[h] = rl[h] = f), (Gt[(o = h.toLowerCase())] = i));
        for (var m in f)
          Gt[
            o + (m === "easeIn" ? ".in" : m === "easeOut" ? ".out" : ".inOut")
          ] = Gt[h + "." + m] = f[m];
      }),
      f
    );
  },
  $g = function (l) {
    return function (u) {
      return u < 0.5 ? (1 - l(1 - u * 2)) / 2 : 0.5 + l((u - 0.5) * 2) / 2;
    };
  },
  wh = function d(l, u, i) {
    var r = u >= 1 ? u : 1,
      f = (i || (l ? 0.3 : 0.45)) / (u < 1 ? u : 1),
      o = (f / Zh) * (Math.asin(1 / r) || 0),
      h = function (_) {
        return _ === 1 ? 1 : r * Math.pow(2, -10 * _) * ox((_ - o) * f) + 1;
      },
      m =
        l === "out"
          ? h
          : l === "in"
            ? function (g) {
                return 1 - h(1 - g);
              }
            : $g(h);
    return (
      (f = Zh / f),
      (m.config = function (g, _) {
        return d(l, g, _);
      }),
      m
    );
  },
  jh = function d(l, u) {
    u === void 0 && (u = 1.70158);
    var i = function (o) {
        return o ? --o * o * ((u + 1) * o + u) + 1 : 0;
      },
      r =
        l === "out"
          ? i
          : l === "in"
            ? function (f) {
                return 1 - i(1 - f);
              }
            : $g(i);
    return (
      (r.config = function (f) {
        return d(l, f);
      }),
      r
    );
  };
Bn("Linear,Quad,Cubic,Quart,Quint,Strong", function (d, l) {
  var u = l < 5 ? l + 1 : l;
  Fi(
    d + ",Power" + (u - 1),
    l
      ? function (i) {
          return Math.pow(i, u);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, u);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, u) / 2
        : 1 - Math.pow((1 - i) * 2, u) / 2;
    },
  );
});
Gt.Linear.easeNone = Gt.none = Gt.Linear.easeIn;
Fi("Elastic", wh("in"), wh("out"), wh());
(function (d, l) {
  var u = 1 / l,
    i = 2 * u,
    r = 2.5 * u,
    f = function (h) {
      return h < u
        ? d * h * h
        : h < i
          ? d * Math.pow(h - 1.5 / l, 2) + 0.75
          : h < r
            ? d * (h -= 2.25 / l) * h + 0.9375
            : d * Math.pow(h - 2.625 / l, 2) + 0.984375;
    };
  Fi(
    "Bounce",
    function (o) {
      return 1 - f(1 - o);
    },
    f,
  );
})(7.5625, 2.75);
Fi("Expo", function (d) {
  return Math.pow(2, 10 * (d - 1)) * d + d * d * d * d * d * d * (1 - d);
});
Fi("Circ", function (d) {
  return -(Sg(1 - d * d) - 1);
});
Fi("Sine", function (d) {
  return d === 1 ? 1 : -fx(d * sx) + 1;
});
Fi("Back", jh("in"), jh("out"), jh());
Gt.SteppedEase =
  Gt.steps =
  rl.SteppedEase =
    {
      config: function (l, u) {
        l === void 0 && (l = 1);
        var i = 1 / l,
          r = l + (u ? 0 : 1),
          f = u ? 1 : 0,
          o = 1 - ae;
        return function (h) {
          return (((r * vs(0, o, h)) | 0) + f) * i;
        };
      },
    };
Vu.ease = Gt["quad.out"];
Bn(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (d) {
    return (bd += d + "," + d + "Params,");
  },
);
var Pg = function (l, u) {
    ((this.id = cx++),
      (l._gsap = this),
      (this.target = l),
      (this.harness = u),
      (this.get = u ? u.get : Cg),
      (this.set = u ? u.getSetter : Od));
  },
  ps = (function () {
    function d(u) {
      ((this.vars = u),
        (this._delay = +u.delay || 0),
        (this._repeat = u.repeat === 1 / 0 ? -2 : u.repeat || 0) &&
          ((this._rDelay = u.repeatDelay || 0),
          (this._yoyo = !!u.yoyo || !!u.yoyoEase)),
        (this._ts = 1),
        Ku(this, +u.duration, 1, 1),
        (this.data = u.data),
        pe && ((this._ctx = pe), pe.data.push(this)),
        ds || nl.wake());
    }
    var l = d.prototype;
    return (
      (l.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (l.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i,
            )
          : this.totalDuration() && this._dur;
      }),
      (l.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Ku(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (l.totalTime = function (i, r) {
        if ((Ju(), !arguments.length)) return this._tTime;
        var f = this._dp;
        if (f && f.smoothChildTiming && this._ts) {
          for (pf(this, i), !f._dp || f.parent || jg(f, this); f && f.parent; )
            (f.parent._time !==
              f._start +
                (f._ts >= 0
                  ? f._tTime / f._ts
                  : (f.totalDuration() - f._tTime) / -f._ts) &&
              f.totalTime(f._tTime, !0),
              (f = f.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            $l(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === ae) ||
            (!this._initted && this._dur && i) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Dg(this, i, r)),
          this
        );
      }),
      (l.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + L1(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r,
            )
          : this._time;
      }),
      (l.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (l.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                L1(this),
              r,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (l.iteration = function (i, r) {
        var f = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * f, r)
          : this._repeat
            ? ku(this._tTime, f) + 1
            : 1;
      }),
      (l.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -ae ? 0 : this._rts;
        if (this._rts === i) return this;
        var f =
          this.parent && this._ts ? lf(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -ae ? 0 : this._rts),
          this.totalTime(
            vs(-Math.abs(this._delay), this.totalDuration(), f),
            r !== !1,
          ),
          df(this),
          Sx(this)
        );
      }),
      (l.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ju(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ae &&
                      (this._tTime -= ae),
                  ))),
            this)
          : this._ps;
      }),
      (l.startTime = function (i) {
        if (arguments.length) {
          this._start = ve(i);
          var r = this.parent || this._dp;
          return (
            r &&
              (r._sort || !this.parent) &&
              $l(r, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (l.endTime = function (i) {
        return (
          this._start +
          (Yn(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (l.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? lf(r.rawTime(i), this)
              : this._tTime
          : this._tTime;
      }),
      (l.revert = function (i) {
        i === void 0 && (i = _x);
        var r = an;
        return (
          (an = i),
          Ed(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (an = r),
          this
        );
      }),
      (l.globalTime = function (i) {
        for (var r = this, f = arguments.length ? i : r.rawTime(); r; )
          ((f = r._start + f / (Math.abs(r._ts) || 1)), (r = r._dp));
        return !this.parent && this._sat ? this._sat.globalTime(i) : f;
      }),
      (l.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), X1(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (l.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return ((this._rDelay = i), X1(this), r ? this.time(r) : this);
        }
        return this._rDelay;
      }),
      (l.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (l.seek = function (i, r) {
        return this.totalTime(Al(this, i), Yn(r));
      }),
      (l.restart = function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, Yn(r)),
          this._dur || (this._zTime = -ae),
          this
        );
      }),
      (l.play = function (i, r) {
        return (i != null && this.seek(i, r), this.reversed(!1).paused(!1));
      }),
      (l.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (l.pause = function (i, r) {
        return (i != null && this.seek(i, r), this.paused(!0));
      }),
      (l.resume = function () {
        return this.paused(!1);
      }),
      (l.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -ae : 0)),
            this)
          : this._rts < 0;
      }),
      (l.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -ae), this);
      }),
      (l.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          f;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (f = i.rawTime(!0)) >= r &&
            f < this.endTime(!0) - ae)
        );
      }),
      (l.eventCallback = function (i, r, f) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                f && (o[i + "Params"] = f),
                i === "onUpdate" && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i];
      }),
      (l.then = function (i) {
        var r = this,
          f = r._prom;
        return new Promise(function (o) {
          var h = Ae(i) ? i : Rg,
            m = function () {
              var _ = r.then;
              ((r.then = null),
                f && f(),
                Ae(h) && (h = h(r)) && (h.then || h === r) && (r.then = _),
                o(h),
                (r.then = _));
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? m()
            : (r._prom = m);
        });
      }),
      (l.kill = function () {
        Vr(this);
      }),
      d
    );
  })();
sl(ps.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ae,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var zn = (function (d) {
  xg(l, d);
  function l(i, r) {
    var f;
    return (
      i === void 0 && (i = {}),
      (f = d.call(this, i) || this),
      (f.labels = {}),
      (f.smoothChildTiming = !!i.smoothChildTiming),
      (f.autoRemoveChildren = !!i.autoRemoveChildren),
      (f._sort = Yn(i.sortChildren)),
      xe && $l(i.parent || xe, Sa(f), r),
      i.reversed && f.reverse(),
      i.paused && f.paused(!0),
      i.scrollTrigger && Ug(Sa(f), i.scrollTrigger),
      f
    );
  }
  var u = l.prototype;
  return (
    (u.to = function (r, f, o) {
      return (Pr(0, arguments, this), this);
    }),
    (u.from = function (r, f, o) {
      return (Pr(1, arguments, this), this);
    }),
    (u.fromTo = function (r, f, o, h) {
      return (Pr(2, arguments, this), this);
    }),
    (u.set = function (r, f, o) {
      return (
        (f.duration = 0),
        (f.parent = this),
        $r(f).repeatDelay || (f.repeat = 0),
        (f.immediateRender = !!f.immediateRender),
        new Xe(r, f, Al(this, o), 1),
        this
      );
    }),
    (u.call = function (r, f, o) {
      return $l(this, Xe.delayedCall(0, r, f), o);
    }),
    (u.staggerTo = function (r, f, o, h, m, g, _) {
      return (
        (o.duration = f),
        (o.stagger = o.stagger || h),
        (o.onComplete = g),
        (o.onCompleteParams = _),
        (o.parent = this),
        new Xe(r, o, Al(this, m)),
        this
      );
    }),
    (u.staggerFrom = function (r, f, o, h, m, g, _) {
      return (
        (o.runBackwards = 1),
        ($r(o).immediateRender = Yn(o.immediateRender)),
        this.staggerTo(r, f, o, h, m, g, _)
      );
    }),
    (u.staggerFromTo = function (r, f, o, h, m, g, _, v) {
      return (
        (h.startAt = o),
        ($r(h).immediateRender = Yn(h.immediateRender)),
        this.staggerTo(r, f, h, m, g, _, v)
      );
    }),
    (u.render = function (r, f, o) {
      var h = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        _ = r <= 0 ? 0 : ve(r),
        v = this._zTime < 0 != r < 0 && (this._initted || !g),
        S,
        x,
        O,
        b,
        D,
        X,
        G,
        k,
        Y,
        Q,
        F,
        j;
      if (
        (this !== xe && _ > m && r >= 0 && (_ = m), _ !== this._tTime || o || v)
      ) {
        if (
          (h !== this._time &&
            g &&
            ((_ += this._time - h), (r += this._time - h)),
          (S = _),
          (Y = this._start),
          (k = this._ts),
          (X = !k),
          v && (g || (h = this._zTime), (r || !f) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((F = this._yoyo),
            (D = g + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(D * 100 + r, f, o);
          if (
            ((S = ve(_ % D)),
            _ === m
              ? ((b = this._repeat), (S = g))
              : ((Q = ve(_ / D)),
                (b = ~~Q),
                b && b === Q && ((S = g), b--),
                S > g && (S = g)),
            (Q = ku(this._tTime, D)),
            !h &&
              this._tTime &&
              Q !== b &&
              this._tTime - Q * D - this._dur <= 0 &&
              (Q = b),
            F && b & 1 && ((S = g - S), (j = 1)),
            b !== Q && !this._lock)
          ) {
            var W = F && Q & 1,
              J = W === (F && b & 1);
            if (
              (b < Q && (W = !W),
              (h = W ? 0 : _ % g ? g : _),
              (this._lock = 1),
              (this.render(h || (j ? 0 : ve(b * D)), f, !g)._lock = 0),
              (this._tTime = _),
              !f && this.parent && al(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !j &&
                ((this.invalidate()._lock = 1), (Q = b)),
              (h && h !== this._time) ||
                X !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((g = this._dur),
              (m = this._tDur),
              J &&
                ((this._lock = 2),
                (h = W ? g : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !j && this.invalidate()),
              (this._lock = 0),
              !this._ts && !X)
            )
              return this;
            Wg(this, j);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((G = zx(this, ve(h), ve(S))), G && (_ -= S - (S = G._start))),
          (this._tTime = _),
          (this._time = S),
          (this._act = !k),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (h = 0)),
          !h && _ && g && !f && !Q && (al(this, "onStart"), this._tTime !== _))
        )
          return this;
        if (S >= h && r >= 0)
          for (x = this._first; x; ) {
            if (
              ((O = x._next), (x._act || S >= x._start) && x._ts && G !== x)
            ) {
              if (x.parent !== this) return this.render(r, f, o);
              if (
                (x.render(
                  x._ts > 0
                    ? (S - x._start) * x._ts
                    : (x._dirty ? x.totalDuration() : x._tDur) +
                        (S - x._start) * x._ts,
                  f,
                  o,
                ),
                S !== this._time || (!this._ts && !X))
              ) {
                ((G = 0), O && (_ += this._zTime = -ae));
                break;
              }
            }
            x = O;
          }
        else {
          x = this._last;
          for (var $ = r < 0 ? r : S; x; ) {
            if (((O = x._prev), (x._act || $ <= x._end) && x._ts && G !== x)) {
              if (x.parent !== this) return this.render(r, f, o);
              if (
                (x.render(
                  x._ts > 0
                    ? ($ - x._start) * x._ts
                    : (x._dirty ? x.totalDuration() : x._tDur) +
                        ($ - x._start) * x._ts,
                  f,
                  o || (an && Ed(x)),
                ),
                S !== this._time || (!this._ts && !X))
              ) {
                ((G = 0), O && (_ += this._zTime = $ ? -ae : ae));
                break;
              }
            }
            x = O;
          }
        }
        if (
          G &&
          !f &&
          (this.pause(),
          (G.render(S >= h ? 0 : -ae)._zTime = S >= h ? 1 : -1),
          this._ts)
        )
          return ((this._start = Y), df(this), this.render(r, f, o));
        (this._onUpdate && !f && al(this, "onUpdate", !0),
          ((_ === m && this._tTime >= this.totalDuration()) || (!_ && h)) &&
            (Y === this._start || Math.abs(k) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !g) &&
                ((_ === m && this._ts > 0) || (!_ && this._ts < 0)) &&
                ci(this, 1),
              !f &&
                !(r < 0 && !h) &&
                (_ || h || !m) &&
                (al(
                  this,
                  _ === m && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(_ < m && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (u.add = function (r, f) {
      var o = this;
      if ((Aa(f) || (f = Al(this, f, r)), !(r instanceof ps))) {
        if (mn(r))
          return (
            r.forEach(function (h) {
              return o.add(h, f);
            }),
            this
          );
        if ($e(r)) return this.addLabel(r, f);
        if (Ae(r)) r = Xe.delayedCall(0, r);
        else return this;
      }
      return this !== r ? $l(this, r, f) : this;
    }),
    (u.getChildren = function (r, f, o, h) {
      (r === void 0 && (r = !0),
        f === void 0 && (f = !0),
        o === void 0 && (o = !0),
        h === void 0 && (h = -Cl));
      for (var m = [], g = this._first; g; )
        (g._start >= h &&
          (g instanceof Xe
            ? f && m.push(g)
            : (o && m.push(g), r && m.push.apply(m, g.getChildren(!0, f, o)))),
          (g = g._next));
      return m;
    }),
    (u.getById = function (r) {
      for (var f = this.getChildren(1, 1, 1), o = f.length; o--; )
        if (f[o].vars.id === r) return f[o];
    }),
    (u.remove = function (r) {
      return $e(r)
        ? this.removeLabel(r)
        : Ae(r)
          ? this.killTweensOf(r)
          : (r.parent === this && hf(this, r),
            r === this._recent && (this._recent = this._last),
            Li(this));
    }),
    (u.totalTime = function (r, f) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = ve(
              nl.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts),
            )),
          d.prototype.totalTime.call(this, r, f),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (u.addLabel = function (r, f) {
      return ((this.labels[r] = Al(this, f)), this);
    }),
    (u.removeLabel = function (r) {
      return (delete this.labels[r], this);
    }),
    (u.addPause = function (r, f, o) {
      var h = Xe.delayedCall(0, f || os, o);
      return (
        (h.data = "isPause"),
        (this._hasPause = 1),
        $l(this, h, Al(this, r))
      );
    }),
    (u.removePause = function (r) {
      var f = this._first;
      for (r = Al(this, r); f; )
        (f._start === r && f.data === "isPause" && ci(f), (f = f._next));
    }),
    (u.killTweensOf = function (r, f, o) {
      for (var h = this.getTweensOf(r, o), m = h.length; m--; )
        ei !== h[m] && h[m].kill(r, f);
      return this;
    }),
    (u.getTweensOf = function (r, f) {
      for (var o = [], h = Dl(r), m = this._first, g = Aa(f), _; m; )
        (m instanceof Xe
          ? yx(m._targets, h) &&
            (g
              ? (!ei || (m._initted && m._ts)) &&
                m.globalTime(0) <= f &&
                m.globalTime(m.totalDuration()) > f
              : !f || m.isActive()) &&
            o.push(m)
          : (_ = m.getTweensOf(h, f)).length && o.push.apply(o, _),
          (m = m._next));
      return o;
    }),
    (u.tweenTo = function (r, f) {
      f = f || {};
      var o = this,
        h = Al(o, r),
        m = f,
        g = m.startAt,
        _ = m.onStart,
        v = m.onStartParams,
        S = m.immediateRender,
        x,
        O = Xe.to(
          o,
          sl(
            {
              ease: f.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                f.duration ||
                Math.abs(
                  (h - (g && "time" in g ? g.time : o._time)) / o.timeScale(),
                ) ||
                ae,
              onStart: function () {
                if ((o.pause(), !x)) {
                  var D =
                    f.duration ||
                    Math.abs(
                      (h - (g && "time" in g ? g.time : o._time)) /
                        o.timeScale(),
                    );
                  (O._dur !== D && Ku(O, D, 0, 1).render(O._time, !0, !0),
                    (x = 1));
                }
                _ && _.apply(O, v || []);
              },
            },
            f,
          ),
        );
      return S ? O.render(0) : O;
    }),
    (u.tweenFromTo = function (r, f, o) {
      return this.tweenTo(f, sl({ startAt: { time: Al(this, r) } }, o));
    }),
    (u.recent = function () {
      return this._recent;
    }),
    (u.nextLabel = function (r) {
      return (r === void 0 && (r = this._time), G1(this, Al(this, r)));
    }),
    (u.previousLabel = function (r) {
      return (r === void 0 && (r = this._time), G1(this, Al(this, r), 1));
    }),
    (u.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + ae);
    }),
    (u.shiftChildren = function (r, f, o) {
      o === void 0 && (o = 0);
      var h = this._first,
        m = this.labels,
        g;
      for (r = ve(r); h; )
        (h._start >= o && ((h._start += r), (h._end += r)), (h = h._next));
      if (f) for (g in m) m[g] >= o && (m[g] += r);
      return Li(this);
    }),
    (u.invalidate = function (r) {
      var f = this._first;
      for (this._lock = 0; f; ) (f.invalidate(r), (f = f._next));
      return d.prototype.invalidate.call(this, r);
    }),
    (u.clear = function (r) {
      r === void 0 && (r = !0);
      for (var f = this._first, o; f; )
        ((o = f._next), this.remove(f), (f = o));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Li(this)
      );
    }),
    (u.totalDuration = function (r) {
      var f = 0,
        o = this,
        h = o._last,
        m = Cl,
        g,
        _,
        v;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r),
        );
      if (o._dirty) {
        for (v = o.parent; h; )
          ((g = h._prev),
            h._dirty && h.totalDuration(),
            (_ = h._start),
            _ > m && o._sort && h._ts && !o._lock
              ? ((o._lock = 1), ($l(o, h, _ - h._delay, 1)._lock = 0))
              : (m = _),
            _ < 0 &&
              h._ts &&
              ((f -= _),
              ((!v && !o._dp) || (v && v.smoothChildTiming)) &&
                ((o._start += ve(_ / o._ts)), (o._time -= _), (o._tTime -= _)),
              o.shiftChildren(-_, !1, -1 / 0),
              (m = 0)),
            h._end > f && h._ts && (f = h._end),
            (h = g));
        (Ku(o, o === xe && o._time > f ? o._time : f, 1, 1), (o._dirty = 0));
      }
      return o._tDur;
    }),
    (l.updateRoot = function (r) {
      if ((xe._ts && (Dg(xe, lf(r, xe)), (Og = nl.frame)), nl.frame >= B1)) {
        B1 += ul.autoSleep || 120;
        var f = xe._first;
        if ((!f || !f._ts) && ul.autoSleep && nl._listeners.length < 2) {
          for (; f && !f._ts; ) f = f._next;
          f || nl.sleep();
        }
      }
    }),
    l
  );
})(ps);
sl(zn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Xx = function (l, u, i, r, f, o, h) {
    var m = new qn(this._pt, l, u, 0, 1, a_, null, f),
      g = 0,
      _ = 0,
      v,
      S,
      x,
      O,
      b,
      D,
      X,
      G;
    for (
      m.b = i,
        m.e = r,
        i += "",
        r += "",
        (X = ~r.indexOf("random(")) && (r = hs(r)),
        o && ((G = [i, r]), o(G, l, u), (i = G[0]), (r = G[1])),
        S = i.match(Dh) || [];
      (v = Dh.exec(r));
    )
      ((O = v[0]),
        (b = r.substring(g, v.index)),
        x ? (x = (x + 1) % 5) : b.substr(-5) === "rgba(" && (x = 1),
        O !== S[_++] &&
          ((D = parseFloat(S[_ - 1]) || 0),
          (m._pt = {
            _next: m._pt,
            p: b || _ === 1 ? b : ",",
            s: D,
            c: O.charAt(1) === "=" ? Bu(D, O) - D : parseFloat(O) - D,
            m: x && x < 4 ? Math.round : 0,
          }),
          (g = Dh.lastIndex)));
    return (
      (m.c = g < r.length ? r.substring(g, r.length) : ""),
      (m.fp = h),
      (Eg.test(r) || X) && (m.e = 0),
      (this._pt = m),
      m
    );
  },
  zd = function (l, u, i, r, f, o, h, m, g, _) {
    Ae(r) && (r = r(f || 0, l, o));
    var v = l[u],
      S =
        i !== "get"
          ? i
          : Ae(v)
            ? g
              ? l[
                  u.indexOf("set") || !Ae(l["get" + u.substr(3)])
                    ? u
                    : "get" + u.substr(3)
                ](g)
              : l[u]()
            : v,
      x = Ae(v) ? (g ? kx : n_) : Md,
      O;
    if (
      ($e(r) &&
        (~r.indexOf("random(") && (r = hs(r)),
        r.charAt(1) === "=" &&
          ((O = Bu(S, r) + (dn(S) || 0)), (O || O === 0) && (r = O))),
      !_ || S !== r || Ih)
    )
      return !isNaN(S * r) && r !== ""
        ? ((O = new qn(
            this._pt,
            l,
            u,
            +S || 0,
            r - (S || 0),
            typeof v == "boolean" ? Jx : l_,
            0,
            x,
          )),
          g && (O.fp = g),
          h && O.modifier(h, this, l),
          (this._pt = O))
        : (!v && !(u in l) && xd(u, r),
          Xx.call(this, l, u, S, r, x, m || ul.stringFilter, g));
  },
  Gx = function (l, u, i, r, f) {
    if (
      (Ae(l) && (l = Ir(l, f, u, i, r)),
      !ea(l) || (l.style && l.nodeType) || mn(l) || bg(l))
    )
      return $e(l) ? Ir(l, f, u, i, r) : l;
    var o = {},
      h;
    for (h in l) o[h] = Ir(l[h], f, u, i, r);
    return o;
  },
  Ig = function (l, u, i, r, f, o) {
    var h, m, g, _;
    if (
      tl[l] &&
      (h = new tl[l]()).init(
        f,
        h.rawVars ? u[l] : Gx(u[l], r, f, o, i),
        i,
        r,
        o,
      ) !== !1 &&
      ((i._pt = m = new qn(i._pt, f, l, 0, 1, h.render, h, 0, h.priority)),
      i !== Hu)
    )
      for (g = i._ptLookup[i._targets.indexOf(f)], _ = h._props.length; _--; )
        g[h._props[_]] = m;
    return h;
  },
  ei,
  Ih,
  Ad = function d(l, u, i) {
    var r = l.vars,
      f = r.ease,
      o = r.startAt,
      h = r.immediateRender,
      m = r.lazy,
      g = r.onUpdate,
      _ = r.runBackwards,
      v = r.yoyoEase,
      S = r.keyframes,
      x = r.autoRevert,
      O = l._dur,
      b = l._startAt,
      D = l._targets,
      X = l.parent,
      G = X && X.data === "nested" ? X.vars.targets : D,
      k = l._overwrite === "auto" && !gd,
      Y = l.timeline,
      Q,
      F,
      j,
      W,
      J,
      $,
      ot,
      P,
      bt,
      _t,
      vt,
      N,
      V;
    if (
      (Y && (!S || !f) && (f = "none"),
      (l._ease = Xi(f, Vu.ease)),
      (l._yEase = v ? Fg(Xi(v === !0 ? f : v, Vu.ease)) : 0),
      v &&
        l._yoyo &&
        !l._repeat &&
        ((v = l._yEase), (l._yEase = l._ease), (l._ease = v)),
      (l._from = !Y && !!r.runBackwards),
      !Y || (S && !r.stagger))
    ) {
      if (
        ((P = D[0] ? qi(D[0]).harness : 0),
        (N = P && r[P.prop]),
        (Q = nf(r, Sd)),
        b &&
          (b._zTime < 0 && b.progress(1),
          u < 0 && _ && h && !x ? b.render(-1, !0) : b.revert(_ && O ? Zc : gx),
          (b._lazy = 0)),
        o)
      ) {
        if (
          (ci(
            (l._startAt = Xe.set(
              D,
              sl(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: X,
                  immediateRender: !0,
                  lazy: !b && Yn(m),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    g &&
                    function () {
                      return al(l, "onUpdate");
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          u < 0 && (an || (!h && !x)) && l._startAt.revert(Zc),
          h && O && u <= 0 && i <= 0)
        ) {
          u && (l._zTime = u);
          return;
        }
      } else if (_ && O && !b) {
        if (
          (u && (h = !1),
          (j = sl(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !b && Yn(m),
              immediateRender: h,
              stagger: 0,
              parent: X,
            },
            Q,
          )),
          N && (j[P.prop] = N),
          ci((l._startAt = Xe.set(D, j))),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          u < 0 && (an ? l._startAt.revert(Zc) : l._startAt.render(-1, !0)),
          (l._zTime = u),
          !h)
        )
          d(l._startAt, ae, ae);
        else if (!u) return;
      }
      for (
        l._pt = l._ptCache = 0, m = (O && Yn(m)) || (m && !O), F = 0;
        F < D.length;
        F++
      ) {
        if (
          ((J = D[F]),
          (ot = J._gsap || Td(D)[F]._gsap),
          (l._ptLookup[F] = _t = {}),
          Kh[ot.id] && ui.length && ef(),
          (vt = G === D ? F : G.indexOf(J)),
          P &&
            (bt = new P()).init(J, N || Q, l, vt, G) !== !1 &&
            ((l._pt = W =
              new qn(l._pt, J, bt.name, 0, 1, bt.render, bt, 0, bt.priority)),
            bt._props.forEach(function (et) {
              _t[et] = W;
            }),
            bt.priority && ($ = 1)),
          !P || N)
        )
          for (j in Q)
            tl[j] && (bt = Ig(j, Q, l, vt, J, G))
              ? bt.priority && ($ = 1)
              : (_t[j] = W =
                  zd.call(l, J, j, "get", Q[j], vt, G, 0, r.stringFilter));
        (l._op && l._op[F] && l.kill(J, l._op[F]),
          k &&
            l._pt &&
            ((ei = l),
            xe.killTweensOf(J, _t, l.globalTime(u)),
            (V = !l.parent),
            (ei = 0)),
          l._pt && m && (Kh[ot.id] = 1));
      }
      ($ && i_(l), l._onInit && l._onInit(l));
    }
    ((l._onUpdate = g),
      (l._initted = (!l._op || l._pt) && !V),
      S && u <= 0 && Y.render(Cl, !0, !0));
  },
  Qx = function (l, u, i, r, f, o, h, m) {
    var g = ((l._pt && l._ptCache) || (l._ptCache = {}))[u],
      _,
      v,
      S,
      x;
    if (!g)
      for (
        g = l._ptCache[u] = [], S = l._ptLookup, x = l._targets.length;
        x--;
      ) {
        if (((_ = S[x][u]), _ && _.d && _.d._pt))
          for (_ = _.d._pt; _ && _.p !== u && _.fp !== u; ) _ = _._next;
        if (!_)
          return (
            (Ih = 1),
            (l.vars[u] = "+=0"),
            Ad(l, h),
            (Ih = 0),
            m ? fs(u + " not eligible for reset") : 1
          );
        g.push(_);
      }
    for (x = g.length; x--; )
      ((v = g[x]),
        (_ = v._pt || v),
        (_.s = (r || r === 0) && !f ? r : _.s + (r || 0) + o * _.c),
        (_.c = i - _.s),
        v.e && (v.e = Ne(i) + dn(v.e)),
        v.b && (v.b = _.s + dn(v.b)));
  },
  Vx = function (l, u) {
    var i = l[0] ? qi(l[0]).harness : 0,
      r = i && i.aliases,
      f,
      o,
      h,
      m;
    if (!r) return u;
    f = Zu({}, u);
    for (o in r)
      if (o in f) for (m = r[o].split(","), h = m.length; h--; ) f[m[h]] = f[o];
    return f;
  },
  Zx = function (l, u, i, r) {
    var f = u.ease || r || "power1.inOut",
      o,
      h;
    if (mn(u))
      ((h = i[l] || (i[l] = [])),
        u.forEach(function (m, g) {
          return h.push({ t: (g / (u.length - 1)) * 100, v: m, e: f });
        }));
    else
      for (o in u)
        ((h = i[o] || (i[o] = [])),
          o === "ease" || h.push({ t: parseFloat(l), v: u[o], e: f }));
  },
  Ir = function (l, u, i, r, f) {
    return Ae(l)
      ? l.call(u, i, r, f)
      : $e(l) && ~l.indexOf("random(")
        ? hs(l)
        : l;
  },
  t_ = bd + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  e_ = {};
Bn(t_ + ",id,stagger,delay,duration,paused,scrollTrigger", function (d) {
  return (e_[d] = 1);
});
var Xe = (function (d) {
  xg(l, d);
  function l(i, r, f, o) {
    var h;
    (typeof r == "number" && ((f.duration = r), (r = f), (f = null)),
      (h = d.call(this, o ? r : $r(r)) || this));
    var m = h.vars,
      g = m.duration,
      _ = m.delay,
      v = m.immediateRender,
      S = m.stagger,
      x = m.overwrite,
      O = m.keyframes,
      b = m.defaults,
      D = m.scrollTrigger,
      X = m.yoyoEase,
      G = r.parent || xe,
      k = (mn(i) || bg(i) ? Aa(i[0]) : "length" in r) ? [i] : Dl(i),
      Y,
      Q,
      F,
      j,
      W,
      J,
      $,
      ot;
    if (
      ((h._targets = k.length
        ? Td(k)
        : fs(
            "GSAP target " + i + " not found. https://gsap.com",
            !ul.nullTargetWarn,
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = x),
      O || S || Rc(g) || Rc(_))
    ) {
      if (
        ((r = h.vars),
        (Y = h.timeline =
          new zn({
            data: "nested",
            defaults: b || {},
            targets: G && G.data === "nested" ? G.vars.targets : k,
          })),
        Y.kill(),
        (Y.parent = Y._dp = Sa(h)),
        (Y._start = 0),
        S || Rc(g) || Rc(_))
      ) {
        if (((j = k.length), ($ = S && qg(S)), ea(S)))
          for (W in S) ~t_.indexOf(W) && (ot || (ot = {}), (ot[W] = S[W]));
        for (Q = 0; Q < j; Q++)
          ((F = nf(r, e_)),
            (F.stagger = 0),
            X && (F.yoyoEase = X),
            ot && Zu(F, ot),
            (J = k[Q]),
            (F.duration = +Ir(g, Sa(h), Q, J, k)),
            (F.delay = (+Ir(_, Sa(h), Q, J, k) || 0) - h._delay),
            !S &&
              j === 1 &&
              F.delay &&
              ((h._delay = _ = F.delay), (h._start += _), (F.delay = 0)),
            Y.to(J, F, $ ? $(Q, J, k) : 0),
            (Y._ease = Gt.none));
        Y.duration() ? (g = _ = 0) : (h.timeline = 0);
      } else if (O) {
        ($r(sl(Y.vars.defaults, { ease: "none" })),
          (Y._ease = Xi(O.ease || r.ease || "none")));
        var P = 0,
          bt,
          _t,
          vt;
        if (mn(O))
          (O.forEach(function (N) {
            return Y.to(k, N, ">");
          }),
            Y.duration());
        else {
          F = {};
          for (W in O)
            W === "ease" || W === "easeEach" || Zx(W, O[W], F, O.easeEach);
          for (W in F)
            for (
              bt = F[W].sort(function (N, V) {
                return N.t - V.t;
              }),
                P = 0,
                Q = 0;
              Q < bt.length;
              Q++
            )
              ((_t = bt[Q]),
                (vt = {
                  ease: _t.e,
                  duration: ((_t.t - (Q ? bt[Q - 1].t : 0)) / 100) * g,
                }),
                (vt[W] = _t.v),
                Y.to(k, vt, P),
                (P += vt.duration));
          Y.duration() < g && Y.to({}, { duration: g - Y.duration() });
        }
      }
      g || h.duration((g = Y.duration()));
    } else h.timeline = 0;
    return (
      x === !0 && !gd && ((ei = Sa(h)), xe.killTweensOf(k), (ei = 0)),
      $l(G, Sa(h), f),
      r.reversed && h.reverse(),
      r.paused && h.paused(!0),
      (v ||
        (!g &&
          !O &&
          h._start === ve(G._time) &&
          Yn(v) &&
          bx(Sa(h)) &&
          G.data !== "nested")) &&
        ((h._tTime = -ae), h.render(Math.max(0, -_) || 0)),
      D && Ug(Sa(h), D),
      h
    );
  }
  var u = l.prototype;
  return (
    (u.render = function (r, f, o) {
      var h = this._time,
        m = this._tDur,
        g = this._dur,
        _ = r < 0,
        v = r > m - ae && !_ ? m : r < ae ? 0 : r,
        S,
        x,
        O,
        b,
        D,
        X,
        G,
        k,
        Y;
      if (!g) Ex(this, r, f, o);
      else if (
        v !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== _) ||
        this._lazy
      ) {
        if (((S = v), (k = this.timeline), this._repeat)) {
          if (((b = g + this._rDelay), this._repeat < -1 && _))
            return this.totalTime(b * 100 + r, f, o);
          if (
            ((S = ve(v % b)),
            v === m
              ? ((O = this._repeat), (S = g))
              : ((D = ve(v / b)),
                (O = ~~D),
                O && O === D ? ((S = g), O--) : S > g && (S = g)),
            (X = this._yoyo && O & 1),
            X && ((Y = this._yEase), (S = g - S)),
            (D = ku(this._tTime, b)),
            S === h && !o && this._initted && O === D)
          )
            return ((this._tTime = v), this);
          O !== D &&
            (k && this._yEase && Wg(k, X),
            this.vars.repeatRefresh &&
              !X &&
              !this._lock &&
              S !== b &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(ve(b * O), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Hg(this, _ ? r : S, o, f, v)) return ((this._tTime = 0), this);
          if (h !== this._time && !(o && this.vars.repeatRefresh && O !== D))
            return this;
          if (g !== this._dur) return this.render(r, f, o);
        }
        if (
          ((this._tTime = v),
          (this._time = S),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = G = (Y || this._ease)(S / g)),
          this._from && (this.ratio = G = 1 - G),
          !h && v && !f && !D && (al(this, "onStart"), this._tTime !== v))
        )
          return this;
        for (x = this._pt; x; ) (x.r(G, x.d), (x = x._next));
        ((k && k.render(r < 0 ? r : k._dur * k._ease(S / this._dur), f, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !f &&
            (_ && Jh(this, r, f, o), al(this, "onUpdate")),
          this._repeat &&
            O !== D &&
            this.vars.onRepeat &&
            !f &&
            this.parent &&
            al(this, "onRepeat"),
          (v === this._tDur || !v) &&
            this._tTime === v &&
            (_ && !this._onUpdate && Jh(this, r, !0, !0),
            (r || !g) &&
              ((v === this._tDur && this._ts > 0) || (!v && this._ts < 0)) &&
              ci(this, 1),
            !f &&
              !(_ && !h) &&
              (v || h || X) &&
              (al(this, v === m ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(v < m && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (u.targets = function () {
      return this._targets;
    }),
    (u.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        d.prototype.invalidate.call(this, r)
      );
    }),
    (u.resetTo = function (r, f, o, h, m) {
      (ds || nl.wake(), this._ts || this.play());
      var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        _;
      return (
        this._initted || Ad(this, g),
        (_ = this._ease(g / this._dur)),
        Qx(this, r, f, o, h, _, g, m)
          ? this.resetTo(r, f, o, h, 1)
          : (pf(this, 0),
            this.parent ||
              wg(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (u.kill = function (r, f) {
      if ((f === void 0 && (f = "all"), !r && (!f || f === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Vr(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!an),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, f, ei && ei.vars.overwrite !== !0)
            ._first || Vr(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Ku(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var h = this._targets,
        m = r ? Dl(r) : h,
        g = this._ptLookup,
        _ = this._pt,
        v,
        S,
        x,
        O,
        b,
        D,
        X;
      if ((!f || f === "all") && xx(h, m))
        return (f === "all" && (this._pt = 0), Vr(this));
      for (
        v = this._op = this._op || [],
          f !== "all" &&
            ($e(f) &&
              ((b = {}),
              Bn(f, function (G) {
                return (b[G] = 1);
              }),
              (f = b)),
            (f = Vx(h, f))),
          X = h.length;
        X--;
      )
        if (~m.indexOf(h[X])) {
          ((S = g[X]),
            f === "all"
              ? ((v[X] = f), (O = S), (x = {}))
              : ((x = v[X] = v[X] || {}), (O = f)));
          for (b in O)
            ((D = S && S[b]),
              D &&
                ((!("kill" in D.d) || D.d.kill(b) === !0) && hf(this, D, "_pt"),
                delete S[b]),
              x !== "all" && (x[b] = 1));
        }
      return (this._initted && !this._pt && _ && Vr(this), this);
    }),
    (l.to = function (r, f) {
      return new l(r, f, arguments[2]);
    }),
    (l.from = function (r, f) {
      return Pr(1, arguments);
    }),
    (l.delayedCall = function (r, f, o, h) {
      return new l(f, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: f,
        onReverseComplete: f,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: h,
      });
    }),
    (l.fromTo = function (r, f, o) {
      return Pr(2, arguments);
    }),
    (l.set = function (r, f) {
      return ((f.duration = 0), f.repeatDelay || (f.repeat = 0), new l(r, f));
    }),
    (l.killTweensOf = function (r, f, o) {
      return xe.killTweensOf(r, f, o);
    }),
    l
  );
})(ps);
sl(Xe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Bn("staggerTo,staggerFrom,staggerFromTo", function (d) {
  Xe[d] = function () {
    var l = new zn(),
      u = Wh.call(arguments, 0);
    return (u.splice(d === "staggerFromTo" ? 5 : 4, 0, 0), l[d].apply(l, u));
  };
});
var Md = function (l, u, i) {
    return (l[u] = i);
  },
  n_ = function (l, u, i) {
    return l[u](i);
  },
  kx = function (l, u, i, r) {
    return l[u](r.fp, i);
  },
  Kx = function (l, u, i) {
    return l.setAttribute(u, i);
  },
  Od = function (l, u) {
    return Ae(l[u]) ? n_ : _d(l[u]) && l.setAttribute ? Kx : Md;
  },
  l_ = function (l, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * l) * 1e6) / 1e6, u);
  },
  Jx = function (l, u) {
    return u.set(u.t, u.p, !!(u.s + u.c * l), u);
  },
  a_ = function (l, u) {
    var i = u._pt,
      r = "";
    if (!l && u.b) r = u.b;
    else if (l === 1 && u.e) r = u.e;
    else {
      for (; i; )
        ((r =
          i.p +
          (i.m ? i.m(i.s + i.c * l) : Math.round((i.s + i.c * l) * 1e4) / 1e4) +
          r),
          (i = i._next));
      r += u.c;
    }
    u.set(u.t, u.p, r, u);
  },
  Cd = function (l, u) {
    for (var i = u._pt; i; ) (i.r(l, i.d), (i = i._next));
  },
  Fx = function (l, u, i, r) {
    for (var f = this._pt, o; f; )
      ((o = f._next), f.p === r && f.modifier(l, u, i), (f = o));
  },
  Wx = function (l) {
    for (var u = this._pt, i, r; u; )
      ((r = u._next),
        (u.p === l && !u.op) || u.op === l
          ? hf(this, u, "_pt")
          : u.dep || (i = 1),
        (u = r));
    return !i;
  },
  $x = function (l, u, i, r) {
    r.mSet(l, u, r.m.call(r.tween, i, r.mt), r);
  },
  i_ = function (l) {
    for (var u = l._pt, i, r, f, o; u; ) {
      for (i = u._next, r = f; r && r.pr > u.pr; ) r = r._next;
      ((u._prev = r ? r._prev : o) ? (u._prev._next = u) : (f = u),
        (u._next = r) ? (r._prev = u) : (o = u),
        (u = i));
    }
    l._pt = f;
  },
  qn = (function () {
    function d(u, i, r, f, o, h, m, g, _) {
      ((this.t = i),
        (this.s = f),
        (this.c = o),
        (this.p = r),
        (this.r = h || l_),
        (this.d = m || this),
        (this.set = g || Md),
        (this.pr = _ || 0),
        (this._next = u),
        u && (u._prev = this));
    }
    var l = d.prototype;
    return (
      (l.modifier = function (i, r, f) {
        ((this.mSet = this.mSet || this.set),
          (this.set = $x),
          (this.m = i),
          (this.mt = f),
          (this.tween = r));
      }),
      d
    );
  })();
Bn(
  bd +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (d) {
    return (Sd[d] = 1);
  },
);
rl.TweenMax = rl.TweenLite = Xe;
rl.TimelineLite = rl.TimelineMax = zn;
xe = new zn({
  sortChildren: !1,
  defaults: Vu,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
ul.stringFilter = Jg;
var Gi = [],
  Kc = {},
  Px = [],
  V1 = 0,
  Ix = 0,
  Uh = function (l) {
    return (Kc[l] || Px).map(function (u) {
      return u();
    });
  },
  td = function () {
    var l = Date.now(),
      u = [];
    l - V1 > 2 &&
      (Uh("matchMediaInit"),
      Gi.forEach(function (i) {
        var r = i.queries,
          f = i.conditions,
          o,
          h,
          m,
          g;
        for (h in r)
          ((o = Fl.matchMedia(r[h]).matches),
            o && (m = 1),
            o !== f[h] && ((f[h] = o), (g = 1)));
        g && (i.revert(), m && u.push(i));
      }),
      Uh("matchMediaRevert"),
      u.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (V1 = l),
      Uh("matchMedia"));
  },
  u_ = (function () {
    function d(u, i) {
      ((this.selector = i && $h(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Ix++),
        u && this.add(u));
    }
    var l = d.prototype;
    return (
      (l.add = function (i, r, f) {
        Ae(i) && ((f = r), (r = i), (i = Ae));
        var o = this,
          h = function () {
            var g = pe,
              _ = o.selector,
              v;
            return (
              g && g !== o && g.data.push(o),
              f && (o.selector = $h(f)),
              (pe = o),
              (v = r.apply(o, arguments)),
              Ae(v) && o._r.push(v),
              (pe = g),
              (o.selector = _),
              (o.isReverted = !1),
              v
            );
          };
        return (
          (o.last = h),
          i === Ae
            ? h(o, function (m) {
                return o.add(null, m);
              })
            : i
              ? (o[i] = h)
              : h
        );
      }),
      (l.ignore = function (i) {
        var r = pe;
        ((pe = null), i(this), (pe = r));
      }),
      (l.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof d
              ? i.push.apply(i, r.getTweens())
              : r instanceof Xe &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (l.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (l.kill = function (i, r) {
        var f = this;
        if (
          (i
            ? (function () {
                for (var h = f.getTweens(), m = f.data.length, g; m--; )
                  ((g = f.data[m]),
                    g.data === "isFlip" &&
                      (g.revert(),
                      g.getChildren(!0, !0, !1).forEach(function (_) {
                        return h.splice(h.indexOf(_), 1);
                      })));
                for (
                  h
                    .map(function (_) {
                      return {
                        g:
                          _._dur ||
                          _._delay ||
                          (_._sat && !_._sat.vars.immediateRender)
                            ? _.globalTime(0)
                            : -1 / 0,
                        t: _,
                      };
                    })
                    .sort(function (_, v) {
                      return v.g - _.g || -1 / 0;
                    })
                    .forEach(function (_) {
                      return _.t.revert(i);
                    }),
                    m = f.data.length;
                  m--;
                )
                  ((g = f.data[m]),
                    g instanceof zn
                      ? g.data !== "nested" &&
                        (g.scrollTrigger && g.scrollTrigger.revert(), g.kill())
                      : !(g instanceof Xe) && g.revert && g.revert(i));
                (f._r.forEach(function (_) {
                  return _(i, f);
                }),
                  (f.isReverted = !0));
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = Gi.length; o--; )
            Gi[o].id === this.id && Gi.splice(o, 1);
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      d
    );
  })(),
  tS = (function () {
    function d(u) {
      ((this.contexts = []), (this.scope = u), pe && pe.data.push(this));
    }
    var l = d.prototype;
    return (
      (l.add = function (i, r, f) {
        ea(i) || (i = { matches: i });
        var o = new u_(0, f || this.scope),
          h = (o.conditions = {}),
          m,
          g,
          _;
        (pe && !o.selector && (o.selector = pe.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = i));
        for (g in i)
          g === "all"
            ? (_ = 1)
            : ((m = Fl.matchMedia(i[g])),
              m &&
                (Gi.indexOf(o) < 0 && Gi.push(o),
                (h[g] = m.matches) && (_ = 1),
                m.addListener
                  ? m.addListener(td)
                  : m.addEventListener("change", td)));
        return (
          _ &&
            r(o, function (v) {
              return o.add(null, v);
            }),
          this
        );
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      (l.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      d
    );
  })(),
  af = {
    registerPlugin: function () {
      for (var l = arguments.length, u = new Array(l), i = 0; i < l; i++)
        u[i] = arguments[i];
      u.forEach(function (r) {
        return Zg(r);
      });
    },
    timeline: function (l) {
      return new zn(l);
    },
    getTweensOf: function (l, u) {
      return xe.getTweensOf(l, u);
    },
    getProperty: function (l, u, i, r) {
      $e(l) && (l = Dl(l)[0]);
      var f = qi(l || {}).get,
        o = i ? Rg : Ng;
      return (
        i === "native" && (i = ""),
        l &&
          (u
            ? o(((tl[u] && tl[u].get) || f)(l, u, i, r))
            : function (h, m, g) {
                return o(((tl[h] && tl[h].get) || f)(l, h, m, g));
              })
      );
    },
    quickSetter: function (l, u, i) {
      if (((l = Dl(l)), l.length > 1)) {
        var r = l.map(function (_) {
            return Xn.quickSetter(_, u, i);
          }),
          f = r.length;
        return function (_) {
          for (var v = f; v--; ) r[v](_);
        };
      }
      l = l[0] || {};
      var o = tl[u],
        h = qi(l),
        m = (h.harness && (h.harness.aliases || {})[u]) || u,
        g = o
          ? function (_) {
              var v = new o();
              ((Hu._pt = 0),
                v.init(l, i ? _ + i : _, Hu, 0, [l]),
                v.render(1, v),
                Hu._pt && Cd(1, Hu));
            }
          : h.set(l, m);
      return o
        ? g
        : function (_) {
            return g(l, m, i ? _ + i : _, h, 1);
          };
    },
    quickTo: function (l, u, i) {
      var r,
        f = Xn.to(
          l,
          sl(
            ((r = {}), (r[u] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {},
          ),
        ),
        o = function (m, g, _) {
          return f.resetTo(u, m, g, _);
        };
      return ((o.tween = f), o);
    },
    isTweening: function (l) {
      return xe.getTweensOf(l, !0).length > 0;
    },
    defaults: function (l) {
      return (l && l.ease && (l.ease = Xi(l.ease, Vu.ease)), q1(Vu, l || {}));
    },
    config: function (l) {
      return q1(ul, l || {});
    },
    registerEffect: function (l) {
      var u = l.name,
        i = l.effect,
        r = l.plugins,
        f = l.defaults,
        o = l.extendTimeline;
      ((r || "").split(",").forEach(function (h) {
        return (
          h && !tl[h] && !rl[h] && fs(u + " effect requires " + h + " plugin.")
        );
      }),
        (Nh[u] = function (h, m, g) {
          return i(Dl(h), sl(m || {}, f), g);
        }),
        o &&
          (zn.prototype[u] = function (h, m, g) {
            return this.add(Nh[u](h, ea(m) ? m : (g = m) && {}, this), g);
          }));
    },
    registerEase: function (l, u) {
      Gt[l] = Xi(u);
    },
    parseEase: function (l, u) {
      return arguments.length ? Xi(l, u) : Gt;
    },
    getById: function (l) {
      return xe.getById(l);
    },
    exportRoot: function (l, u) {
      l === void 0 && (l = {});
      var i = new zn(l),
        r,
        f;
      for (
        i.smoothChildTiming = Yn(l.smoothChildTiming),
          xe.remove(i),
          i._dp = 0,
          i._time = i._tTime = xe._time,
          r = xe._first;
        r;
      )
        ((f = r._next),
          (u ||
            !(
              !r._dur &&
              r instanceof Xe &&
              r.vars.onComplete === r._targets[0]
            )) &&
            $l(i, r, r._start - r._delay),
          (r = f));
      return ($l(xe, i, 0), i);
    },
    context: function (l, u) {
      return l ? new u_(l, u) : pe;
    },
    matchMedia: function (l) {
      return new tS(l);
    },
    matchMediaRefresh: function () {
      return (
        Gi.forEach(function (l) {
          var u = l.conditions,
            i,
            r;
          for (r in u) u[r] && ((u[r] = !1), (i = 1));
          i && l.revert();
        }) || td()
      );
    },
    addEventListener: function (l, u) {
      var i = Kc[l] || (Kc[l] = []);
      ~i.indexOf(u) || i.push(u);
    },
    removeEventListener: function (l, u) {
      var i = Kc[l],
        r = i && i.indexOf(u);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: Rx,
      wrapYoyo: wx,
      distribute: qg,
      random: Xg,
      snap: Lg,
      normalize: Nx,
      getUnit: dn,
      clamp: Mx,
      splitColor: kg,
      toArray: Dl,
      selector: $h,
      mapRange: Qg,
      pipe: Cx,
      unitize: Dx,
      interpolate: jx,
      shuffle: Bg,
    },
    install: Ag,
    effects: Nh,
    ticker: nl,
    updateRoot: zn.updateRoot,
    plugins: tl,
    globalTimeline: xe,
    core: {
      PropTween: qn,
      globals: Mg,
      Tween: Xe,
      Timeline: zn,
      Animation: ps,
      getCache: qi,
      _removeLinkedListItem: hf,
      reverting: function () {
        return an;
      },
      context: function (l) {
        return (l && pe && (pe.data.push(l), (l._ctx = pe)), pe);
      },
      suppressOverwrites: function (l) {
        return (gd = l);
      },
    },
  };
Bn("to,from,fromTo,delayedCall,set,killTweensOf", function (d) {
  return (af[d] = Xe[d]);
});
nl.add(zn.updateRoot);
Hu = af.to({}, { duration: 0 });
var eS = function (l, u) {
    for (var i = l._pt; i && i.p !== u && i.op !== u && i.fp !== u; )
      i = i._next;
    return i;
  },
  nS = function (l, u) {
    var i = l._targets,
      r,
      f,
      o;
    for (r in u)
      for (f = i.length; f--; )
        ((o = l._ptLookup[f][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = eS(o, r)),
            o && o.modifier && o.modifier(u[r], l, i[f], r)));
  },
  Hh = function (l, u) {
    return {
      name: l,
      headless: 1,
      rawVars: 1,
      init: function (r, f, o) {
        o._onInit = function (h) {
          var m, g;
          if (
            ($e(f) &&
              ((m = {}),
              Bn(f, function (_) {
                return (m[_] = 1);
              }),
              (f = m)),
            u)
          ) {
            m = {};
            for (g in f) m[g] = u(f[g]);
            f = m;
          }
          nS(h, f);
        };
      },
    };
  },
  Xn =
    af.registerPlugin(
      {
        name: "attr",
        init: function (l, u, i, r, f) {
          var o, h, m;
          this.tween = i;
          for (o in u)
            ((m = l.getAttribute(o) || ""),
              (h = this.add(
                l,
                "setAttribute",
                (m || 0) + "",
                u[o],
                r,
                f,
                0,
                0,
                o,
              )),
              (h.op = o),
              (h.b = m),
              this._props.push(o));
        },
        render: function (l, u) {
          for (var i = u._pt; i; )
            (an ? i.set(i.t, i.p, i.b, i) : i.r(l, i.d), (i = i._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (l, u) {
          for (var i = u.length; i--; )
            this.add(l, i, l[i] || 0, u[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Hh("roundProps", Ph),
      Hh("modifiers"),
      Hh("snap", Lg),
    ) || af;
Xe.version = zn.version = Xn.version = "3.14.2";
zg = 1;
yd() && Ju();
Gt.Power0;
Gt.Power1;
Gt.Power2;
Gt.Power3;
Gt.Power4;
Gt.Linear;
Gt.Quad;
Gt.Cubic;
Gt.Quart;
Gt.Quint;
Gt.Strong;
Gt.Elastic;
Gt.Back;
Gt.SteppedEase;
Gt.Bounce;
Gt.Sine;
Gt.Expo;
Gt.Circ;
var Z1,
  ni,
  qu,
  Dd,
  Yi,
  k1,
  Nd,
  lS = function () {
    return typeof window < "u";
  },
  Ma = {},
  ji = 180 / Math.PI,
  Lu = Math.PI / 180,
  Du = Math.atan2,
  K1 = 1e8,
  Rd = /([A-Z])/g,
  aS = /(left|right|width|margin|padding|x)/i,
  iS = /[\s,\(]\S/,
  Pl = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  ed = function (l, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * l) * 1e4) / 1e4 + u.u, u);
  },
  uS = function (l, u) {
    return u.set(
      u.t,
      u.p,
      l === 1 ? u.e : Math.round((u.s + u.c * l) * 1e4) / 1e4 + u.u,
      u,
    );
  },
  rS = function (l, u) {
    return u.set(
      u.t,
      u.p,
      l ? Math.round((u.s + u.c * l) * 1e4) / 1e4 + u.u : u.b,
      u,
    );
  },
  sS = function (l, u) {
    return u.set(
      u.t,
      u.p,
      l === 1 ? u.e : l ? Math.round((u.s + u.c * l) * 1e4) / 1e4 + u.u : u.b,
      u,
    );
  },
  cS = function (l, u) {
    var i = u.s + u.c * l;
    u.set(u.t, u.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + u.u, u);
  },
  r_ = function (l, u) {
    return u.set(u.t, u.p, l ? u.e : u.b, u);
  },
  s_ = function (l, u) {
    return u.set(u.t, u.p, l !== 1 ? u.b : u.e, u);
  },
  fS = function (l, u, i) {
    return (l.style[u] = i);
  },
  oS = function (l, u, i) {
    return l.style.setProperty(u, i);
  },
  hS = function (l, u, i) {
    return (l._gsap[u] = i);
  },
  dS = function (l, u, i) {
    return (l._gsap.scaleX = l._gsap.scaleY = i);
  },
  pS = function (l, u, i, r, f) {
    var o = l._gsap;
    ((o.scaleX = o.scaleY = i), o.renderTransform(f, o));
  },
  mS = function (l, u, i, r, f) {
    var o = l._gsap;
    ((o[u] = i), o.renderTransform(f, o));
  },
  Se = "transform",
  Ln = Se + "Origin",
  gS = function d(l, u) {
    var i = this,
      r = this.target,
      f = r.style,
      o = r._gsap;
    if (l in Ma && f) {
      if (((this.tfm = this.tfm || {}), l !== "transform"))
        ((l = Pl[l] || l),
          ~l.indexOf(",")
            ? l.split(",").forEach(function (h) {
                return (i.tfm[h] = ba(r, h));
              })
            : (this.tfm[l] = o.x ? o[l] : ba(r, l)),
          l === Ln && (this.tfm.zOrigin = o.zOrigin));
      else
        return Pl.transform.split(",").forEach(function (h) {
          return d.call(i, h, u);
        });
      if (this.props.indexOf(Se) >= 0) return;
      (o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Ln, u, "")),
        (l = Se));
    }
    (f || u) && this.props.push(l, u, f[l]);
  },
  c_ = function (l) {
    l.translate &&
      (l.removeProperty("translate"),
      l.removeProperty("scale"),
      l.removeProperty("rotate"));
  },
  _S = function () {
    var l = this.props,
      u = this.target,
      i = u.style,
      r = u._gsap,
      f,
      o;
    for (f = 0; f < l.length; f += 3)
      l[f + 1]
        ? l[f + 1] === 2
          ? u[l[f]](l[f + 2])
          : (u[l[f]] = l[f + 2])
        : l[f + 2]
          ? (i[l[f]] = l[f + 2])
          : i.removeProperty(
              l[f].substr(0, 2) === "--"
                ? l[f]
                : l[f].replace(Rd, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      (r.svg &&
        (r.renderTransform(),
        u.setAttribute("data-svg-origin", this.svgo || "")),
        (f = Nd()),
        (!f || !f.isStart) &&
          !i[Se] &&
          (c_(i),
          r.zOrigin &&
            i[Ln] &&
            ((i[Ln] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  f_ = function (l, u) {
    var i = { target: l, props: [], revert: _S, save: gS };
    return (
      l._gsap || Xn.core.getCache(l),
      u &&
        l.style &&
        l.nodeType &&
        u.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  o_,
  nd = function (l, u) {
    var i = ni.createElementNS
      ? ni.createElementNS(
          (u || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          l,
        )
      : ni.createElement(l);
    return i && i.style ? i : ni.createElement(l);
  },
  il = function d(l, u, i) {
    var r = getComputedStyle(l);
    return (
      r[u] ||
      r.getPropertyValue(u.replace(Rd, "-$1").toLowerCase()) ||
      r.getPropertyValue(u) ||
      (!i && d(l, Fu(u) || u, 1)) ||
      ""
    );
  },
  J1 = "O,Moz,ms,Ms,Webkit".split(","),
  Fu = function (l, u, i) {
    var r = u || Yi,
      f = r.style,
      o = 5;
    if (l in f && !i) return l;
    for (
      l = l.charAt(0).toUpperCase() + l.substr(1);
      o-- && !(J1[o] + l in f);
    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? J1[o] : "") + l;
  },
  ld = function () {
    lS() &&
      window.document &&
      ((Z1 = window),
      (ni = Z1.document),
      (qu = ni.documentElement),
      (Yi = nd("div") || { style: {} }),
      nd("div"),
      (Se = Fu(Se)),
      (Ln = Se + "Origin"),
      (Yi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (o_ = !!Fu("perspective")),
      (Nd = Xn.core.reverting),
      (Dd = 1));
  },
  F1 = function (l) {
    var u = l.ownerSVGElement,
      i = nd(
        "svg",
        (u && u.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      r = l.cloneNode(!0),
      f;
    ((r.style.display = "block"), i.appendChild(r), qu.appendChild(i));
    try {
      f = r.getBBox();
    } catch {}
    return (i.removeChild(r), qu.removeChild(i), f);
  },
  W1 = function (l, u) {
    for (var i = u.length; i--; )
      if (l.hasAttribute(u[i])) return l.getAttribute(u[i]);
  },
  h_ = function (l) {
    var u, i;
    try {
      u = l.getBBox();
    } catch {
      ((u = F1(l)), (i = 1));
    }
    return (
      (u && (u.width || u.height)) || i || (u = F1(l)),
      u && !u.width && !u.x && !u.y
        ? {
            x: +W1(l, ["x", "cx", "x1"]) || 0,
            y: +W1(l, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : u
    );
  },
  d_ = function (l) {
    return !!(l.getCTM && (!l.parentNode || l.ownerSVGElement) && h_(l));
  },
  fi = function (l, u) {
    if (u) {
      var i = l.style,
        r;
      (u in Ma && u !== Ln && (u = Se),
        i.removeProperty
          ? ((r = u.substr(0, 2)),
            (r === "ms" || u.substr(0, 6) === "webkit") && (u = "-" + u),
            i.removeProperty(
              r === "--" ? u : u.replace(Rd, "-$1").toLowerCase(),
            ))
          : i.removeAttribute(u));
    }
  },
  li = function (l, u, i, r, f, o) {
    var h = new qn(l._pt, u, i, 0, 1, o ? s_ : r_);
    return ((l._pt = h), (h.b = r), (h.e = f), l._props.push(i), h);
  },
  $1 = { deg: 1, rad: 1, turn: 1 },
  yS = { grid: 1, flex: 1 },
  oi = function d(l, u, i, r) {
    var f = parseFloat(i) || 0,
      o = (i + "").trim().substr((f + "").length) || "px",
      h = Yi.style,
      m = aS.test(u),
      g = l.tagName.toLowerCase() === "svg",
      _ = (g ? "client" : "offset") + (m ? "Width" : "Height"),
      v = 100,
      S = r === "px",
      x = r === "%",
      O,
      b,
      D,
      X;
    if (r === o || !f || $1[r] || $1[o]) return f;
    if (
      (o !== "px" && !S && (f = d(l, u, i, "px")),
      (X = l.getCTM && d_(l)),
      (x || o === "%") && (Ma[u] || ~u.indexOf("adius")))
    )
      return (
        (O = X ? l.getBBox()[m ? "width" : "height"] : l[_]),
        Ne(x ? (f / O) * v : (f / 100) * O)
      );
    if (
      ((h[m ? "width" : "height"] = v + (S ? o : r)),
      (b =
        (r !== "rem" && ~u.indexOf("adius")) ||
        (r === "em" && l.appendChild && !g)
          ? l
          : l.parentNode),
      X && (b = (l.ownerSVGElement || {}).parentNode),
      (!b || b === ni || !b.appendChild) && (b = ni.body),
      (D = b._gsap),
      D && x && D.width && m && D.time === nl.time && !D.uncache)
    )
      return Ne((f / D.width) * v);
    if (x && (u === "height" || u === "width")) {
      var G = l.style[u];
      ((l.style[u] = v + r), (O = l[_]), G ? (l.style[u] = G) : fi(l, u));
    } else
      ((x || o === "%") &&
        !yS[il(b, "display")] &&
        (h.position = il(l, "position")),
        b === l && (h.position = "static"),
        b.appendChild(Yi),
        (O = Yi[_]),
        b.removeChild(Yi),
        (h.position = "absolute"));
    return (
      m && x && ((D = qi(b)), (D.time = nl.time), (D.width = b[_])),
      Ne(S ? (O * f) / v : O && f ? (v / O) * f : 0)
    );
  },
  ba = function (l, u, i, r) {
    var f;
    return (
      Dd || ld(),
      u in Pl &&
        u !== "transform" &&
        ((u = Pl[u]), ~u.indexOf(",") && (u = u.split(",")[0])),
      Ma[u] && u !== "transform"
        ? ((f = gs(l, r)),
          (f =
            u !== "transformOrigin"
              ? f[u]
              : f.svg
                ? f.origin
                : rf(il(l, Ln)) + " " + f.zOrigin + "px"))
        : ((f = l.style[u]),
          (!f || f === "auto" || r || ~(f + "").indexOf("calc(")) &&
            (f =
              (uf[u] && uf[u](l, u, i)) ||
              il(l, u) ||
              Cg(l, u) ||
              (u === "opacity" ? 1 : 0))),
      i && !~(f + "").trim().indexOf(" ") ? oi(l, u, f, i) + i : f
    );
  },
  vS = function (l, u, i, r) {
    if (!i || i === "none") {
      var f = Fu(u, l, 1),
        o = f && il(l, f, 1);
      o && o !== i
        ? ((u = f), (i = o))
        : u === "borderColor" && (i = il(l, "borderTopColor"));
    }
    var h = new qn(this._pt, l.style, u, 0, 1, a_),
      m = 0,
      g = 0,
      _,
      v,
      S,
      x,
      O,
      b,
      D,
      X,
      G,
      k,
      Y,
      Q;
    if (
      ((h.b = i),
      (h.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = il(l, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((b = l.style[u]),
        (l.style[u] = r),
        (r = il(l, u) || r),
        b ? (l.style[u] = b) : fi(l, u)),
      (_ = [i, r]),
      Jg(_),
      (i = _[0]),
      (r = _[1]),
      (S = i.match(Uu) || []),
      (Q = r.match(Uu) || []),
      Q.length)
    ) {
      for (; (v = Uu.exec(r)); )
        ((D = v[0]),
          (G = r.substring(m, v.index)),
          O
            ? (O = (O + 1) % 5)
            : (G.substr(-5) === "rgba(" || G.substr(-5) === "hsla(") && (O = 1),
          D !== (b = S[g++] || "") &&
            ((x = parseFloat(b) || 0),
            (Y = b.substr((x + "").length)),
            D.charAt(1) === "=" && (D = Bu(x, D) + Y),
            (X = parseFloat(D)),
            (k = D.substr((X + "").length)),
            (m = Uu.lastIndex - k.length),
            k ||
              ((k = k || ul.units[u] || Y),
              m === r.length && ((r += k), (h.e += k))),
            Y !== k && (x = oi(l, u, b, k) || 0),
            (h._pt = {
              _next: h._pt,
              p: G || g === 1 ? G : ",",
              s: x,
              c: X - x,
              m: (O && O < 4) || u === "zIndex" ? Math.round : 0,
            })));
      h.c = m < r.length ? r.substring(m, r.length) : "";
    } else h.r = u === "display" && r === "none" ? s_ : r_;
    return (Eg.test(r) && (h.e = 0), (this._pt = h), h);
  },
  P1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  xS = function (l) {
    var u = l.split(" "),
      i = u[0],
      r = u[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((l = i), (i = r), (r = l)),
      (u[0] = P1[i] || i),
      (u[1] = P1[r] || r),
      u.join(" ")
    );
  },
  SS = function (l, u) {
    if (u.tween && u.tween._time === u.tween._dur) {
      var i = u.t,
        r = i.style,
        f = u.u,
        o = i._gsap,
        h,
        m,
        g;
      if (f === "all" || f === !0) ((r.cssText = ""), (m = 1));
      else
        for (f = f.split(","), g = f.length; --g > -1; )
          ((h = f[g]),
            Ma[h] && ((m = 1), (h = h === "transformOrigin" ? Ln : Se)),
            fi(i, h));
      m &&
        (fi(i, Se),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          gs(i, 1),
          (o.uncache = 1),
          c_(r)));
    }
  },
  uf = {
    clearProps: function (l, u, i, r, f) {
      if (f.data !== "isFromStart") {
        var o = (l._pt = new qn(l._pt, u, i, 0, 0, SS));
        return ((o.u = r), (o.pr = -10), (o.tween = f), l._props.push(i), 1);
      }
    },
  },
  ms = [1, 0, 0, 1, 0, 0],
  p_ = {},
  m_ = function (l) {
    return l === "matrix(1, 0, 0, 1, 0, 0)" || l === "none" || !l;
  },
  I1 = function (l) {
    var u = il(l, Se);
    return m_(u) ? ms : u.substr(7).match(Tg).map(Ne);
  },
  wd = function (l, u) {
    var i = l._gsap || qi(l),
      r = l.style,
      f = I1(l),
      o,
      h,
      m,
      g;
    return i.svg && l.getAttribute("transform")
      ? ((m = l.transform.baseVal.consolidate().matrix),
        (f = [m.a, m.b, m.c, m.d, m.e, m.f]),
        f.join(",") === "1,0,0,1,0,0" ? ms : f)
      : (f === ms &&
          !l.offsetParent &&
          l !== qu &&
          !i.svg &&
          ((m = r.display),
          (r.display = "block"),
          (o = l.parentNode),
          (!o || (!l.offsetParent && !l.getBoundingClientRect().width)) &&
            ((g = 1), (h = l.nextElementSibling), qu.appendChild(l)),
          (f = I1(l)),
          m ? (r.display = m) : fi(l, "display"),
          g &&
            (h
              ? o.insertBefore(l, h)
              : o
                ? o.appendChild(l)
                : qu.removeChild(l))),
        u && f.length > 6 ? [f[0], f[1], f[4], f[5], f[12], f[13]] : f);
  },
  ad = function (l, u, i, r, f, o) {
    var h = l._gsap,
      m = f || wd(l, !0),
      g = h.xOrigin || 0,
      _ = h.yOrigin || 0,
      v = h.xOffset || 0,
      S = h.yOffset || 0,
      x = m[0],
      O = m[1],
      b = m[2],
      D = m[3],
      X = m[4],
      G = m[5],
      k = u.split(" "),
      Y = parseFloat(k[0]) || 0,
      Q = parseFloat(k[1]) || 0,
      F,
      j,
      W,
      J;
    (i
      ? m !== ms &&
        (j = x * D - O * b) &&
        ((W = Y * (D / j) + Q * (-b / j) + (b * G - D * X) / j),
        (J = Y * (-O / j) + Q * (x / j) - (x * G - O * X) / j),
        (Y = W),
        (Q = J))
      : ((F = h_(l)),
        (Y = F.x + (~k[0].indexOf("%") ? (Y / 100) * F.width : Y)),
        (Q = F.y + (~(k[1] || k[0]).indexOf("%") ? (Q / 100) * F.height : Q))),
      r || (r !== !1 && h.smooth)
        ? ((X = Y - g),
          (G = Q - _),
          (h.xOffset = v + (X * x + G * b) - X),
          (h.yOffset = S + (X * O + G * D) - G))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = Y),
      (h.yOrigin = Q),
      (h.smooth = !!r),
      (h.origin = u),
      (h.originIsAbsolute = !!i),
      (l.style[Ln] = "0px 0px"),
      o &&
        (li(o, h, "xOrigin", g, Y),
        li(o, h, "yOrigin", _, Q),
        li(o, h, "xOffset", v, h.xOffset),
        li(o, h, "yOffset", S, h.yOffset)),
      l.setAttribute("data-svg-origin", Y + " " + Q));
  },
  gs = function (l, u) {
    var i = l._gsap || new Pg(l);
    if ("x" in i && !u && !i.uncache) return i;
    var r = l.style,
      f = i.scaleX < 0,
      o = "px",
      h = "deg",
      m = getComputedStyle(l),
      g = il(l, Ln) || "0",
      _,
      v,
      S,
      x,
      O,
      b,
      D,
      X,
      G,
      k,
      Y,
      Q,
      F,
      j,
      W,
      J,
      $,
      ot,
      P,
      bt,
      _t,
      vt,
      N,
      V,
      et,
      ht,
      M,
      E,
      q,
      I,
      tt,
      ut;
    return (
      (_ = v = S = b = D = X = G = k = Y = 0),
      (x = O = 1),
      (i.svg = !!(l.getCTM && d_(l))),
      m.translate &&
        ((m.translate !== "none" ||
          m.scale !== "none" ||
          m.rotate !== "none") &&
          (r[Se] =
            (m.translate !== "none"
              ? "translate3d(" +
                (m.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (m.rotate !== "none" ? "rotate(" + m.rotate + ") " : "") +
            (m.scale !== "none"
              ? "scale(" + m.scale.split(" ").join(",") + ") "
              : "") +
            (m[Se] !== "none" ? m[Se] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (j = wd(l, i.svg)),
      i.svg &&
        (i.uncache
          ? ((et = l.getBBox()),
            (g = i.xOrigin - et.x + "px " + (i.yOrigin - et.y) + "px"),
            (V = ""))
          : (V = !u && l.getAttribute("data-svg-origin")),
        ad(l, V || g, !!V || i.originIsAbsolute, i.smooth !== !1, j)),
      (Q = i.xOrigin || 0),
      (F = i.yOrigin || 0),
      j !== ms &&
        ((ot = j[0]),
        (P = j[1]),
        (bt = j[2]),
        (_t = j[3]),
        (_ = vt = j[4]),
        (v = N = j[5]),
        j.length === 6
          ? ((x = Math.sqrt(ot * ot + P * P)),
            (O = Math.sqrt(_t * _t + bt * bt)),
            (b = ot || P ? Du(P, ot) * ji : 0),
            (G = bt || _t ? Du(bt, _t) * ji + b : 0),
            G && (O *= Math.abs(Math.cos(G * Lu))),
            i.svg &&
              ((_ -= Q - (Q * ot + F * bt)), (v -= F - (Q * P + F * _t))))
          : ((ut = j[6]),
            (I = j[7]),
            (M = j[8]),
            (E = j[9]),
            (q = j[10]),
            (tt = j[11]),
            (_ = j[12]),
            (v = j[13]),
            (S = j[14]),
            (W = Du(ut, q)),
            (D = W * ji),
            W &&
              ((J = Math.cos(-W)),
              ($ = Math.sin(-W)),
              (V = vt * J + M * $),
              (et = N * J + E * $),
              (ht = ut * J + q * $),
              (M = vt * -$ + M * J),
              (E = N * -$ + E * J),
              (q = ut * -$ + q * J),
              (tt = I * -$ + tt * J),
              (vt = V),
              (N = et),
              (ut = ht)),
            (W = Du(-bt, q)),
            (X = W * ji),
            W &&
              ((J = Math.cos(-W)),
              ($ = Math.sin(-W)),
              (V = ot * J - M * $),
              (et = P * J - E * $),
              (ht = bt * J - q * $),
              (tt = _t * $ + tt * J),
              (ot = V),
              (P = et),
              (bt = ht)),
            (W = Du(P, ot)),
            (b = W * ji),
            W &&
              ((J = Math.cos(W)),
              ($ = Math.sin(W)),
              (V = ot * J + P * $),
              (et = vt * J + N * $),
              (P = P * J - ot * $),
              (N = N * J - vt * $),
              (ot = V),
              (vt = et)),
            D &&
              Math.abs(D) + Math.abs(b) > 359.9 &&
              ((D = b = 0), (X = 180 - X)),
            (x = Ne(Math.sqrt(ot * ot + P * P + bt * bt))),
            (O = Ne(Math.sqrt(N * N + ut * ut))),
            (W = Du(vt, N)),
            (G = Math.abs(W) > 2e-4 ? W * ji : 0),
            (Y = tt ? 1 / (tt < 0 ? -tt : tt) : 0)),
        i.svg &&
          ((V = l.getAttribute("transform")),
          (i.forceCSS = l.setAttribute("transform", "") || !m_(il(l, Se))),
          V && l.setAttribute("transform", V))),
      Math.abs(G) > 90 &&
        Math.abs(G) < 270 &&
        (f
          ? ((x *= -1), (G += b <= 0 ? 180 : -180), (b += b <= 0 ? 180 : -180))
          : ((O *= -1), (G += G <= 0 ? 180 : -180))),
      (u = u || i.uncache),
      (i.x =
        _ -
        ((i.xPercent =
          _ &&
          ((!u && i.xPercent) ||
            (Math.round(l.offsetWidth / 2) === Math.round(-_) ? -50 : 0)))
          ? (l.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        v -
        ((i.yPercent =
          v &&
          ((!u && i.yPercent) ||
            (Math.round(l.offsetHeight / 2) === Math.round(-v) ? -50 : 0)))
          ? (l.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = S + o),
      (i.scaleX = Ne(x)),
      (i.scaleY = Ne(O)),
      (i.rotation = Ne(b) + h),
      (i.rotationX = Ne(D) + h),
      (i.rotationY = Ne(X) + h),
      (i.skewX = G + h),
      (i.skewY = k + h),
      (i.transformPerspective = Y + o),
      (i.zOrigin = parseFloat(g.split(" ")[2]) || (!u && i.zOrigin) || 0) &&
        (r[Ln] = rf(g)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = ul.force3D),
      (i.renderTransform = i.svg ? TS : o_ ? g_ : bS),
      (i.uncache = 0),
      i
    );
  },
  rf = function (l) {
    return (l = l.split(" "))[0] + " " + l[1];
  },
  Yh = function (l, u, i) {
    var r = dn(u);
    return Ne(parseFloat(u) + parseFloat(oi(l, "x", i + "px", r))) + r;
  },
  bS = function (l, u) {
    ((u.z = "0px"),
      (u.rotationY = u.rotationX = "0deg"),
      (u.force3D = 0),
      g_(l, u));
  },
  Ri = "0deg",
  Xr = "0px",
  wi = ") ",
  g_ = function (l, u) {
    var i = u || this,
      r = i.xPercent,
      f = i.yPercent,
      o = i.x,
      h = i.y,
      m = i.z,
      g = i.rotation,
      _ = i.rotationY,
      v = i.rotationX,
      S = i.skewX,
      x = i.skewY,
      O = i.scaleX,
      b = i.scaleY,
      D = i.transformPerspective,
      X = i.force3D,
      G = i.target,
      k = i.zOrigin,
      Y = "",
      Q = (X === "auto" && l && l !== 1) || X === !0;
    if (k && (v !== Ri || _ !== Ri)) {
      var F = parseFloat(_) * Lu,
        j = Math.sin(F),
        W = Math.cos(F),
        J;
      ((F = parseFloat(v) * Lu),
        (J = Math.cos(F)),
        (o = Yh(G, o, j * J * -k)),
        (h = Yh(G, h, -Math.sin(F) * -k)),
        (m = Yh(G, m, W * J * -k + k)));
    }
    (D !== Xr && (Y += "perspective(" + D + wi),
      (r || f) && (Y += "translate(" + r + "%, " + f + "%) "),
      (Q || o !== Xr || h !== Xr || m !== Xr) &&
        (Y +=
          m !== Xr || Q
            ? "translate3d(" + o + ", " + h + ", " + m + ") "
            : "translate(" + o + ", " + h + wi),
      g !== Ri && (Y += "rotate(" + g + wi),
      _ !== Ri && (Y += "rotateY(" + _ + wi),
      v !== Ri && (Y += "rotateX(" + v + wi),
      (S !== Ri || x !== Ri) && (Y += "skew(" + S + ", " + x + wi),
      (O !== 1 || b !== 1) && (Y += "scale(" + O + ", " + b + wi),
      (G.style[Se] = Y || "translate(0, 0)"));
  },
  TS = function (l, u) {
    var i = u || this,
      r = i.xPercent,
      f = i.yPercent,
      o = i.x,
      h = i.y,
      m = i.rotation,
      g = i.skewX,
      _ = i.skewY,
      v = i.scaleX,
      S = i.scaleY,
      x = i.target,
      O = i.xOrigin,
      b = i.yOrigin,
      D = i.xOffset,
      X = i.yOffset,
      G = i.forceCSS,
      k = parseFloat(o),
      Y = parseFloat(h),
      Q,
      F,
      j,
      W,
      J;
    ((m = parseFloat(m)),
      (g = parseFloat(g)),
      (_ = parseFloat(_)),
      _ && ((_ = parseFloat(_)), (g += _), (m += _)),
      m || g
        ? ((m *= Lu),
          (g *= Lu),
          (Q = Math.cos(m) * v),
          (F = Math.sin(m) * v),
          (j = Math.sin(m - g) * -S),
          (W = Math.cos(m - g) * S),
          g &&
            ((_ *= Lu),
            (J = Math.tan(g - _)),
            (J = Math.sqrt(1 + J * J)),
            (j *= J),
            (W *= J),
            _ &&
              ((J = Math.tan(_)),
              (J = Math.sqrt(1 + J * J)),
              (Q *= J),
              (F *= J))),
          (Q = Ne(Q)),
          (F = Ne(F)),
          (j = Ne(j)),
          (W = Ne(W)))
        : ((Q = v), (W = S), (F = j = 0)),
      ((k && !~(o + "").indexOf("px")) || (Y && !~(h + "").indexOf("px"))) &&
        ((k = oi(x, "x", o, "px")), (Y = oi(x, "y", h, "px"))),
      (O || b || D || X) &&
        ((k = Ne(k + O - (O * Q + b * j) + D)),
        (Y = Ne(Y + b - (O * F + b * W) + X))),
      (r || f) &&
        ((J = x.getBBox()),
        (k = Ne(k + (r / 100) * J.width)),
        (Y = Ne(Y + (f / 100) * J.height))),
      (J =
        "matrix(" + Q + "," + F + "," + j + "," + W + "," + k + "," + Y + ")"),
      x.setAttribute("transform", J),
      G && (x.style[Se] = J));
  },
  ES = function (l, u, i, r, f) {
    var o = 360,
      h = $e(f),
      m = parseFloat(f) * (h && ~f.indexOf("rad") ? ji : 1),
      g = m - r,
      _ = r + g + "deg",
      v,
      S;
    return (
      h &&
        ((v = f.split("_")[1]),
        v === "short" && ((g %= o), g !== g % (o / 2) && (g += g < 0 ? o : -o)),
        v === "cw" && g < 0
          ? (g = ((g + o * K1) % o) - ~~(g / o) * o)
          : v === "ccw" && g > 0 && (g = ((g - o * K1) % o) - ~~(g / o) * o)),
      (l._pt = S = new qn(l._pt, u, i, r, g, uS)),
      (S.e = _),
      (S.u = "deg"),
      l._props.push(i),
      S
    );
  },
  tg = function (l, u) {
    for (var i in u) l[i] = u[i];
    return l;
  },
  zS = function (l, u, i) {
    var r = tg({}, i._gsap),
      f = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      h,
      m,
      g,
      _,
      v,
      S,
      x,
      O;
    r.svg
      ? ((g = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[Se] = u),
        (h = gs(i, 1)),
        fi(i, Se),
        i.setAttribute("transform", g))
      : ((g = getComputedStyle(i)[Se]),
        (o[Se] = u),
        (h = gs(i, 1)),
        (o[Se] = g));
    for (m in Ma)
      ((g = r[m]),
        (_ = h[m]),
        g !== _ &&
          f.indexOf(m) < 0 &&
          ((x = dn(g)),
          (O = dn(_)),
          (v = x !== O ? oi(i, m, g, O) : parseFloat(g)),
          (S = parseFloat(_)),
          (l._pt = new qn(l._pt, h, m, v, S - v, ed)),
          (l._pt.u = O || 0),
          l._props.push(m)));
    tg(h, r);
  };
Bn("padding,margin,Width,Radius", function (d, l) {
  var u = "Top",
    i = "Right",
    r = "Bottom",
    f = "Left",
    o = (l < 3 ? [u, i, r, f] : [u + f, u + i, r + i, r + f]).map(function (h) {
      return l < 2 ? d + h : "border" + h + d;
    });
  uf[l > 1 ? "border" + d : d] = function (h, m, g, _, v) {
    var S, x;
    if (arguments.length < 4)
      return (
        (S = o.map(function (O) {
          return ba(h, O, g);
        })),
        (x = S.join(" ")),
        x.split(S[0]).length === 5 ? S[0] : x
      );
    ((S = (_ + "").split(" ")),
      (x = {}),
      o.forEach(function (O, b) {
        return (x[O] = S[b] = S[b] || S[((b - 1) / 2) | 0]);
      }),
      h.init(m, x, v));
  };
});
var __ = {
  name: "css",
  register: ld,
  targetTest: function (l) {
    return l.style && l.nodeType;
  },
  init: function (l, u, i, r, f) {
    var o = this._props,
      h = l.style,
      m = i.vars.startAt,
      g,
      _,
      v,
      S,
      x,
      O,
      b,
      D,
      X,
      G,
      k,
      Y,
      Q,
      F,
      j,
      W,
      J;
    (Dd || ld(),
      (this.styles = this.styles || f_(l)),
      (W = this.styles.props),
      (this.tween = i));
    for (b in u)
      if (b !== "autoRound" && ((_ = u[b]), !(tl[b] && Ig(b, u, i, r, l, f)))) {
        if (
          ((x = typeof _),
          (O = uf[b]),
          x === "function" && ((_ = _.call(i, r, l, f)), (x = typeof _)),
          x === "string" && ~_.indexOf("random(") && (_ = hs(_)),
          O)
        )
          O(this, l, b, _, i) && (j = 1);
        else if (b.substr(0, 2) === "--")
          ((g = (getComputedStyle(l).getPropertyValue(b) + "").trim()),
            (_ += ""),
            (ri.lastIndex = 0),
            ri.test(g) ||
              ((D = dn(g)),
              (X = dn(_)),
              X ? D !== X && (g = oi(l, b, g, X) + X) : D && (_ += D)),
            this.add(h, "setProperty", g, _, r, f, 0, 0, b),
            o.push(b),
            W.push(b, 0, h[b]));
        else if (x !== "undefined") {
          if (
            (m && b in m
              ? ((g = typeof m[b] == "function" ? m[b].call(i, r, l, f) : m[b]),
                $e(g) && ~g.indexOf("random(") && (g = hs(g)),
                dn(g + "") ||
                  g === "auto" ||
                  (g += ul.units[b] || dn(ba(l, b)) || ""),
                (g + "").charAt(1) === "=" && (g = ba(l, b)))
              : (g = ba(l, b)),
            (S = parseFloat(g)),
            (G = x === "string" && _.charAt(1) === "=" && _.substr(0, 2)),
            G && (_ = _.substr(2)),
            (v = parseFloat(_)),
            b in Pl &&
              (b === "autoAlpha" &&
                (S === 1 && ba(l, "visibility") === "hidden" && v && (S = 0),
                W.push("visibility", 0, h.visibility),
                li(
                  this,
                  h,
                  "visibility",
                  S ? "inherit" : "hidden",
                  v ? "inherit" : "hidden",
                  !v,
                )),
              b !== "scale" &&
                b !== "transform" &&
                ((b = Pl[b]), ~b.indexOf(",") && (b = b.split(",")[0]))),
            (k = b in Ma),
            k)
          ) {
            if (
              (this.styles.save(b),
              (J = _),
              x === "string" && _.substring(0, 6) === "var(--")
            ) {
              if (
                ((_ = il(l, _.substring(4, _.indexOf(")")))),
                _.substring(0, 5) === "calc(")
              ) {
                var $ = l.style.perspective;
                ((l.style.perspective = _),
                  (_ = il(l, "perspective")),
                  $ ? (l.style.perspective = $) : fi(l, "perspective"));
              }
              v = parseFloat(_);
            }
            if (
              (Y ||
                ((Q = l._gsap),
                (Q.renderTransform && !u.parseTransform) ||
                  gs(l, u.parseTransform),
                (F = u.smoothOrigin !== !1 && Q.smooth),
                (Y = this._pt =
                  new qn(this._pt, h, Se, 0, 1, Q.renderTransform, Q, 0, -1)),
                (Y.dep = 1)),
              b === "scale")
            )
              ((this._pt = new qn(
                this._pt,
                Q,
                "scaleY",
                Q.scaleY,
                (G ? Bu(Q.scaleY, G + v) : v) - Q.scaleY || 0,
                ed,
              )),
                (this._pt.u = 0),
                o.push("scaleY", b),
                (b += "X"));
            else if (b === "transformOrigin") {
              (W.push(Ln, 0, h[Ln]),
                (_ = xS(_)),
                Q.svg
                  ? ad(l, _, 0, F, 0, this)
                  : ((X = parseFloat(_.split(" ")[2]) || 0),
                    X !== Q.zOrigin && li(this, Q, "zOrigin", Q.zOrigin, X),
                    li(this, h, b, rf(g), rf(_))));
              continue;
            } else if (b === "svgOrigin") {
              ad(l, _, 1, F, 0, this);
              continue;
            } else if (b in p_) {
              ES(this, Q, b, S, G ? Bu(S, G + _) : _);
              continue;
            } else if (b === "smoothOrigin") {
              li(this, Q, "smooth", Q.smooth, _);
              continue;
            } else if (b === "force3D") {
              Q[b] = _;
              continue;
            } else if (b === "transform") {
              zS(this, _, l);
              continue;
            }
          } else b in h || (b = Fu(b) || b);
          if (k || ((v || v === 0) && (S || S === 0) && !iS.test(_) && b in h))
            ((D = (g + "").substr((S + "").length)),
              v || (v = 0),
              (X = dn(_) || (b in ul.units ? ul.units[b] : D)),
              D !== X && (S = oi(l, b, g, X)),
              (this._pt = new qn(
                this._pt,
                k ? Q : h,
                b,
                S,
                (G ? Bu(S, G + v) : v) - S,
                !k && (X === "px" || b === "zIndex") && u.autoRound !== !1
                  ? cS
                  : ed,
              )),
              (this._pt.u = X || 0),
              k && J !== _
                ? ((this._pt.b = g), (this._pt.e = J), (this._pt.r = sS))
                : D !== X &&
                  X !== "%" &&
                  ((this._pt.b = g), (this._pt.r = rS)));
          else if (b in h) vS.call(this, l, b, g, G ? G + _ : _);
          else if (b in l) this.add(l, b, g || l[b], G ? G + _ : _, r, f);
          else if (b !== "parseTransform") {
            xd(b, _);
            continue;
          }
          (k ||
            (b in h
              ? W.push(b, 0, h[b])
              : typeof l[b] == "function"
                ? W.push(b, 2, l[b]())
                : W.push(b, 1, g || l[b])),
            o.push(b));
        }
      }
    j && i_(this);
  },
  render: function (l, u) {
    if (u.tween._time || !Nd())
      for (var i = u._pt; i; ) (i.r(l, i.d), (i = i._next));
    else u.styles.revert();
  },
  get: ba,
  aliases: Pl,
  getSetter: function (l, u, i) {
    var r = Pl[u];
    return (
      r && r.indexOf(",") < 0 && (u = r),
      u in Ma && u !== Ln && (l._gsap.x || ba(l, "x"))
        ? i && k1 === i
          ? u === "scale"
            ? dS
            : hS
          : (k1 = i || {}) && (u === "scale" ? pS : mS)
        : l.style && !_d(l.style[u])
          ? fS
          : ~u.indexOf("-")
            ? oS
            : Od(l, u)
    );
  },
  core: { _removeProperty: fi, _getMatrix: wd },
};
Xn.utils.checkPrefix = Fu;
Xn.core.getStyleSaver = f_;
(function (d, l, u, i) {
  var r = Bn(d + "," + l + "," + u, function (f) {
    Ma[f] = 1;
  });
  (Bn(l, function (f) {
    ((ul.units[f] = "deg"), (p_[f] = 1));
  }),
    (Pl[r[13]] = d + "," + l),
    Bn(i, function (f) {
      var o = f.split(":");
      Pl[o[1]] = r[o[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
Bn(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (d) {
    ul.units[d] = "px";
  },
);
Xn.registerPlugin(__);
var Lt = Xn.registerPlugin(__) || Xn;
Lt.core.Tween;
function AS(d, l) {
  for (var u = 0; u < l.length; u++) {
    var i = l[u];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(d, i.key, i));
  }
}
function MS(d, l, u) {
  return (l && AS(d.prototype, l), d);
}
var ln,
  Jc,
  ll,
  ai,
  ii,
  Xu,
  y_,
  Ui,
  ts,
  v_,
  Ea,
  Bl,
  x_,
  S_ = function () {
    return (
      ln ||
      (typeof window < "u" && (ln = window.gsap) && ln.registerPlugin && ln)
    );
  },
  b_ = 1,
  Yu = [],
  jt = [],
  ta = [],
  es = Date.now,
  id = function (l, u) {
    return u;
  },
  OS = function () {
    var l = ts.core,
      u = l.bridge || {},
      i = l._scrollers,
      r = l._proxies;
    (i.push.apply(i, jt),
      r.push.apply(r, ta),
      (jt = i),
      (ta = r),
      (id = function (o, h) {
        return u[o](h);
      }));
  },
  si = function (l, u) {
    return ~ta.indexOf(l) && ta[ta.indexOf(l) + 1][u];
  },
  ns = function (l) {
    return !!~v_.indexOf(l);
  },
  Sn = function (l, u, i, r, f) {
    return l.addEventListener(u, i, { passive: r !== !1, capture: !!f });
  },
  xn = function (l, u, i, r) {
    return l.removeEventListener(u, i, !!r);
  },
  wc = "scrollLeft",
  jc = "scrollTop",
  ud = function () {
    return (Ea && Ea.isPressed) || jt.cache++;
  },
  sf = function (l, u) {
    var i = function r(f) {
      if (f || f === 0) {
        b_ && (ll.history.scrollRestoration = "manual");
        var o = Ea && Ea.isPressed;
        ((f = r.v = Math.round(f) || (Ea && Ea.iOS ? 1 : 0)),
          l(f),
          (r.cacheID = jt.cache),
          o && id("ss", f));
      } else
        (u || jt.cache !== r.cacheID || id("ref")) &&
          ((r.cacheID = jt.cache), (r.v = l()));
      return r.v + r.offset;
    };
    return ((i.offset = 0), l && i);
  },
  An = {
    s: wc,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: sf(function (d) {
      return arguments.length
        ? ll.scrollTo(d, ke.sc())
        : ll.pageXOffset || ai[wc] || ii[wc] || Xu[wc] || 0;
    }),
  },
  ke = {
    s: jc,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: An,
    sc: sf(function (d) {
      return arguments.length
        ? ll.scrollTo(An.sc(), d)
        : ll.pageYOffset || ai[jc] || ii[jc] || Xu[jc] || 0;
    }),
  },
  Hn = function (l, u) {
    return (
      ((u && u._ctx && u._ctx.selector) || ln.utils.toArray)(l)[0] ||
      (typeof l == "string" && ln.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", l)
        : null)
    );
  },
  CS = function (l, u) {
    for (var i = u.length; i--; ) if (u[i] === l || u[i].contains(l)) return !0;
    return !1;
  },
  hi = function (l, u) {
    var i = u.s,
      r = u.sc;
    ns(l) && (l = ai.scrollingElement || ii);
    var f = jt.indexOf(l),
      o = r === ke.sc ? 1 : 2;
    (!~f && (f = jt.push(l) - 1), jt[f + o] || Sn(l, "scroll", ud));
    var h = jt[f + o],
      m =
        h ||
        (jt[f + o] =
          sf(si(l, i), !0) ||
          (ns(l)
            ? r
            : sf(function (g) {
                return arguments.length ? (l[i] = g) : l[i];
              })));
    return (
      (m.target = l),
      h || (m.smooth = ln.getProperty(l, "scrollBehavior") === "smooth"),
      m
    );
  },
  rd = function (l, u, i) {
    var r = l,
      f = l,
      o = es(),
      h = o,
      m = u || 50,
      g = Math.max(500, m * 3),
      _ = function (O, b) {
        var D = es();
        b || D - o > m
          ? ((f = r), (r = O), (h = o), (o = D))
          : i
            ? (r += O)
            : (r = f + ((O - f) / (D - h)) * (o - h));
      },
      v = function () {
        ((f = r = i ? 0 : r), (h = o = 0));
      },
      S = function (O) {
        var b = h,
          D = f,
          X = es();
        return (
          (O || O === 0) && O !== r && _(O),
          o === h || X - h > g
            ? 0
            : ((r + (i ? D : -D)) / ((i ? X : o) - b)) * 1e3
        );
      };
    return { update: _, reset: v, getVelocity: S };
  },
  Gr = function (l, u) {
    return (
      u && !l._gsapAllow && l.preventDefault(),
      l.changedTouches ? l.changedTouches[0] : l
    );
  },
  eg = function (l) {
    var u = Math.max.apply(Math, l),
      i = Math.min.apply(Math, l);
    return Math.abs(u) >= Math.abs(i) ? u : i;
  },
  T_ = function () {
    ((ts = ln.core.globals().ScrollTrigger), ts && ts.core && OS());
  },
  E_ = function (l) {
    return (
      (ln = l || S_()),
      !Jc &&
        ln &&
        typeof document < "u" &&
        document.body &&
        ((ll = window),
        (ai = document),
        (ii = ai.documentElement),
        (Xu = ai.body),
        (v_ = [ll, ai, ii, Xu]),
        ln.utils.clamp,
        (x_ = ln.core.context || function () {}),
        (Ui = "onpointerenter" in Xu ? "pointer" : "mouse"),
        (y_ = Re.isTouch =
          ll.matchMedia &&
          ll.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in ll ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Bl = Re.eventTypes =
          (
            "ontouchstart" in ii
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ii
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (b_ = 0);
        }, 500),
        T_(),
        (Jc = 1)),
      Jc
    );
  };
An.op = ke;
jt.cache = 0;
var Re = (function () {
  function d(u) {
    this.init(u);
  }
  var l = d.prototype;
  return (
    (l.init = function (i) {
      (Jc || E_(ln) || console.warn("Please gsap.registerPlugin(Observer)"),
        ts || T_());
      var r = i.tolerance,
        f = i.dragMinimum,
        o = i.type,
        h = i.target,
        m = i.lineHeight,
        g = i.debounce,
        _ = i.preventDefault,
        v = i.onStop,
        S = i.onStopDelay,
        x = i.ignore,
        O = i.wheelSpeed,
        b = i.event,
        D = i.onDragStart,
        X = i.onDragEnd,
        G = i.onDrag,
        k = i.onPress,
        Y = i.onRelease,
        Q = i.onRight,
        F = i.onLeft,
        j = i.onUp,
        W = i.onDown,
        J = i.onChangeX,
        $ = i.onChangeY,
        ot = i.onChange,
        P = i.onToggleX,
        bt = i.onToggleY,
        _t = i.onHover,
        vt = i.onHoverEnd,
        N = i.onMove,
        V = i.ignoreCheck,
        et = i.isNormalizer,
        ht = i.onGestureStart,
        M = i.onGestureEnd,
        E = i.onWheel,
        q = i.onEnable,
        I = i.onDisable,
        tt = i.onClick,
        ut = i.scrollSpeed,
        dt = i.capture,
        pt = i.allowClicks,
        Kt = i.lockAxis,
        Dt = i.onLockAxis;
      ((this.target = h = Hn(h) || ii),
        (this.vars = i),
        x && (x = ln.utils.toArray(x)),
        (r = r || 1e-9),
        (f = f || 0),
        (O = O || 1),
        (ut = ut || 1),
        (o = o || "wheel,touch,pointer"),
        (g = g !== !1),
        m || (m = parseFloat(ll.getComputedStyle(Xu).lineHeight) || 22));
      var Mn,
        we,
        Ge,
        Yt,
        Wt,
        Ke,
        Pe,
        B = this,
        un = 0,
        Gn = 0,
        cl = i.passive || (!_ && i.passive !== !1),
        ie = hi(h, An),
        Rl = hi(h, ke),
        ql = ie(),
        Me = Rl(),
        je =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          Bl[0] === "pointerdown",
        wl = ns(h),
        oe = h.ownerDocument || ai,
        rn = [0, 0, 0],
        On = [0, 0, 0],
        fl = 0,
        pi = function () {
          return (fl = es());
        },
        be = function (st, Vt) {
          return (
            ((B.event = st) && x && CS(st.target, x)) ||
            (Vt && je && st.pointerType !== "touch") ||
            (V && V(st, Vt))
          );
        },
        Ll = function () {
          (B._vx.reset(), B._vy.reset(), we.pause(), v && v(B));
        },
        me = function () {
          var st = (B.deltaX = eg(rn)),
            Vt = (B.deltaY = eg(On)),
            nt = Math.abs(st) >= r,
            St = Math.abs(Vt) >= r;
          (ot && (nt || St) && ot(B, st, Vt, rn, On),
            nt &&
              (Q && B.deltaX > 0 && Q(B),
              F && B.deltaX < 0 && F(B),
              J && J(B),
              P && B.deltaX < 0 != un < 0 && P(B),
              (un = B.deltaX),
              (rn[0] = rn[1] = rn[2] = 0)),
            St &&
              (W && B.deltaY > 0 && W(B),
              j && B.deltaY < 0 && j(B),
              $ && $(B),
              bt && B.deltaY < 0 != Gn < 0 && bt(B),
              (Gn = B.deltaY),
              (On[0] = On[1] = On[2] = 0)),
            (Yt || Ge) &&
              (N && N(B),
              Ge && (D && Ge === 1 && D(B), G && G(B), (Ge = 0)),
              (Yt = !1)),
            Ke && !(Ke = !1) && Dt && Dt(B),
            Wt && (E(B), (Wt = !1)),
            (Mn = 0));
        },
        gn = function (st, Vt, nt) {
          ((rn[nt] += st),
            (On[nt] += Vt),
            B._vx.update(st),
            B._vy.update(Vt),
            g ? Mn || (Mn = requestAnimationFrame(me)) : me());
        },
        Ue = function (st, Vt) {
          (Kt &&
            !Pe &&
            ((B.axis = Pe = Math.abs(st) > Math.abs(Vt) ? "x" : "y"),
            (Ke = !0)),
            Pe !== "y" && ((rn[2] += st), B._vx.update(st, !0)),
            Pe !== "x" && ((On[2] += Vt), B._vy.update(Vt, !0)),
            g ? Mn || (Mn = requestAnimationFrame(me)) : me());
        },
        Xl = function (st) {
          if (!be(st, 1)) {
            st = Gr(st, _);
            var Vt = st.clientX,
              nt = st.clientY,
              St = Vt - B.x,
              ct = nt - B.y,
              yt = B.isDragging;
            ((B.x = Vt),
              (B.y = nt),
              (yt ||
                ((St || ct) &&
                  (Math.abs(B.startX - Vt) >= f ||
                    Math.abs(B.startY - nt) >= f))) &&
                (Ge || (Ge = yt ? 2 : 1),
                yt || (B.isDragging = !0),
                Ue(St, ct)));
          }
        },
        na = (B.onPress = function (xt) {
          be(xt, 1) ||
            (xt && xt.button) ||
            ((B.axis = Pe = null),
            we.pause(),
            (B.isPressed = !0),
            (xt = Gr(xt)),
            (un = Gn = 0),
            (B.startX = B.x = xt.clientX),
            (B.startY = B.y = xt.clientY),
            B._vx.reset(),
            B._vy.reset(),
            Sn(et ? h : oe, Bl[1], Xl, cl, !0),
            (B.deltaX = B.deltaY = 0),
            k && k(B));
        }),
        Mt = (B.onRelease = function (xt) {
          if (!be(xt, 1)) {
            xn(et ? h : oe, Bl[1], Xl, !0);
            var st = !isNaN(B.y - B.startY),
              Vt = B.isDragging,
              nt =
                Vt &&
                (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3),
              St = Gr(xt);
            (!nt &&
              st &&
              (B._vx.reset(),
              B._vy.reset(),
              _ &&
                pt &&
                ln.delayedCall(0.08, function () {
                  if (es() - fl > 300 && !xt.defaultPrevented) {
                    if (xt.target.click) xt.target.click();
                    else if (oe.createEvent) {
                      var ct = oe.createEvent("MouseEvents");
                      (ct.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        ll,
                        1,
                        St.screenX,
                        St.screenY,
                        St.clientX,
                        St.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        xt.target.dispatchEvent(ct));
                    }
                  }
                })),
              (B.isDragging = B.isGesturing = B.isPressed = !1),
              v && Vt && !et && we.restart(!0),
              Ge && me(),
              X && Vt && X(B),
              Y && Y(B, nt));
          }
        }),
        ol = function (st) {
          return (
            st.touches &&
            st.touches.length > 1 &&
            (B.isGesturing = !0) &&
            ht(st, B.isDragging)
          );
        },
        sn = function () {
          return (B.isGesturing = !1) || M(B);
        },
        cn = function (st) {
          if (!be(st)) {
            var Vt = ie(),
              nt = Rl();
            (gn((Vt - ql) * ut, (nt - Me) * ut, 1),
              (ql = Vt),
              (Me = nt),
              v && we.restart(!0));
          }
        },
        Qe = function (st) {
          if (!be(st)) {
            ((st = Gr(st, _)), E && (Wt = !0));
            var Vt =
              (st.deltaMode === 1
                ? m
                : st.deltaMode === 2
                  ? ll.innerHeight
                  : 1) * O;
            (gn(st.deltaX * Vt, st.deltaY * Vt, 0), v && !et && we.restart(!0));
          }
        },
        hl = function (st) {
          if (!be(st)) {
            var Vt = st.clientX,
              nt = st.clientY,
              St = Vt - B.x,
              ct = nt - B.y;
            ((B.x = Vt),
              (B.y = nt),
              (Yt = !0),
              v && we.restart(!0),
              (St || ct) && Ue(St, ct));
          }
        },
        dl = function (st) {
          ((B.event = st), _t(B));
        },
        jl = function (st) {
          ((B.event = st), vt(B));
        },
        Ca = function (st) {
          return be(st) || (Gr(st, _) && tt(B));
        };
      ((we = B._dc = ln.delayedCall(S || 0.25, Ll).pause()),
        (B.deltaX = B.deltaY = 0),
        (B._vx = rd(0, 50, !0)),
        (B._vy = rd(0, 50, !0)),
        (B.scrollX = ie),
        (B.scrollY = Rl),
        (B.isDragging = B.isGesturing = B.isPressed = !1),
        x_(this),
        (B.enable = function (xt) {
          return (
            B.isEnabled ||
              (Sn(wl ? oe : h, "scroll", ud),
              o.indexOf("scroll") >= 0 && Sn(wl ? oe : h, "scroll", cn, cl, dt),
              o.indexOf("wheel") >= 0 && Sn(h, "wheel", Qe, cl, dt),
              ((o.indexOf("touch") >= 0 && y_) || o.indexOf("pointer") >= 0) &&
                (Sn(h, Bl[0], na, cl, dt),
                Sn(oe, Bl[2], Mt),
                Sn(oe, Bl[3], Mt),
                pt && Sn(h, "click", pi, !0, !0),
                tt && Sn(h, "click", Ca),
                ht && Sn(oe, "gesturestart", ol),
                M && Sn(oe, "gestureend", sn),
                _t && Sn(h, Ui + "enter", dl),
                vt && Sn(h, Ui + "leave", jl),
                N && Sn(h, Ui + "move", hl)),
              (B.isEnabled = !0),
              (B.isDragging = B.isGesturing = B.isPressed = Yt = Ge = !1),
              B._vx.reset(),
              B._vy.reset(),
              (ql = ie()),
              (Me = Rl()),
              xt && xt.type && na(xt),
              q && q(B)),
            B
          );
        }),
        (B.disable = function () {
          B.isEnabled &&
            (Yu.filter(function (xt) {
              return xt !== B && ns(xt.target);
            }).length || xn(wl ? oe : h, "scroll", ud),
            B.isPressed &&
              (B._vx.reset(), B._vy.reset(), xn(et ? h : oe, Bl[1], Xl, !0)),
            xn(wl ? oe : h, "scroll", cn, dt),
            xn(h, "wheel", Qe, dt),
            xn(h, Bl[0], na, dt),
            xn(oe, Bl[2], Mt),
            xn(oe, Bl[3], Mt),
            xn(h, "click", pi, !0),
            xn(h, "click", Ca),
            xn(oe, "gesturestart", ol),
            xn(oe, "gestureend", sn),
            xn(h, Ui + "enter", dl),
            xn(h, Ui + "leave", jl),
            xn(h, Ui + "move", hl),
            (B.isEnabled = B.isPressed = B.isDragging = !1),
            I && I(B));
        }),
        (B.kill = B.revert =
          function () {
            B.disable();
            var xt = Yu.indexOf(B);
            (xt >= 0 && Yu.splice(xt, 1), Ea === B && (Ea = 0));
          }),
        Yu.push(B),
        et && ns(h) && (Ea = B),
        B.enable(b));
    }),
    MS(d, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    d
  );
})();
Re.version = "3.14.2";
Re.create = function (d) {
  return new Re(d);
};
Re.register = E_;
Re.getAll = function () {
  return Yu.slice();
};
Re.getById = function (d) {
  return Yu.filter(function (l) {
    return l.vars.id === d;
  })[0];
};
S_() && ln.registerPlugin(Re);
var at,
  wu,
  wt,
  ue,
  el,
  Ft,
  jd,
  cf,
  _s,
  ls,
  kr,
  Uc,
  on,
  mf,
  sd,
  Tn,
  ng,
  lg,
  ju,
  z_,
  Bh,
  A_,
  bn,
  cd,
  M_,
  O_,
  ti,
  fd,
  Ud,
  Gu,
  Hd,
  as,
  od,
  qh,
  Hc = 1,
  hn = Date.now,
  Lh = hn(),
  Nl = 0,
  Kr = 0,
  ag = function (l, u, i) {
    var r = In(l) && (l.substr(0, 6) === "clamp(" || l.indexOf("max") > -1);
    return ((i["_" + u + "Clamp"] = r), r ? l.substr(6, l.length - 7) : l);
  },
  ig = function (l, u) {
    return u && (!In(l) || l.substr(0, 6) !== "clamp(")
      ? "clamp(" + l + ")"
      : l;
  },
  DS = function d() {
    return Kr && requestAnimationFrame(d);
  },
  ug = function () {
    return (mf = 1);
  },
  rg = function () {
    return (mf = 0);
  },
  Wl = function (l) {
    return l;
  },
  Jr = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  C_ = function () {
    return typeof window < "u";
  },
  D_ = function () {
    return at || (C_() && (at = window.gsap) && at.registerPlugin && at);
  },
  ki = function (l) {
    return !!~jd.indexOf(l);
  },
  N_ = function (l) {
    return (
      (l === "Height" ? Hd : wt["inner" + l]) ||
      el["client" + l] ||
      Ft["client" + l]
    );
  },
  R_ = function (l) {
    return (
      si(l, "getBoundingClientRect") ||
      (ki(l)
        ? function () {
            return ((Ic.width = wt.innerWidth), (Ic.height = Hd), Ic);
          }
        : function () {
            return Ta(l);
          })
    );
  },
  NS = function (l, u, i) {
    var r = i.d,
      f = i.d2,
      o = i.a;
    return (o = si(l, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (u ? N_(f) : l["client" + f]) || 0;
        };
  },
  RS = function (l, u) {
    return !u || ~ta.indexOf(l)
      ? R_(l)
      : function () {
          return Ic;
        };
  },
  Il = function (l, u) {
    var i = u.s,
      r = u.d2,
      f = u.d,
      o = u.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (o = si(l, i))
        ? o() - R_(l)()[f]
        : ki(l)
          ? (el[i] || Ft[i]) - N_(r)
          : l[i] - l["offset" + r],
    );
  },
  Yc = function (l, u) {
    for (var i = 0; i < ju.length; i += 3)
      (!u || ~u.indexOf(ju[i + 1])) && l(ju[i], ju[i + 1], ju[i + 2]);
  },
  In = function (l) {
    return typeof l == "string";
  },
  pn = function (l) {
    return typeof l == "function";
  },
  Fr = function (l) {
    return typeof l == "number";
  },
  Hi = function (l) {
    return typeof l == "object";
  },
  Qr = function (l, u, i) {
    return l && l.progress(u ? 0 : 1) && i && l.pause();
  },
  Xh = function (l, u) {
    if (l.enabled) {
      var i = l._ctx
        ? l._ctx.add(function () {
            return u(l);
          })
        : u(l);
      i && i.totalTime && (l.callbackAnimation = i);
    }
  },
  Nu = Math.abs,
  w_ = "left",
  j_ = "top",
  Yd = "right",
  Bd = "bottom",
  Qi = "width",
  Vi = "height",
  is = "Right",
  us = "Left",
  rs = "Top",
  ss = "Bottom",
  Le = "padding",
  Ml = "margin",
  Wu = "Width",
  qd = "Height",
  Ze = "px",
  Ol = function (l) {
    return wt.getComputedStyle(l);
  },
  wS = function (l) {
    var u = Ol(l).position;
    l.style.position = u === "absolute" || u === "fixed" ? u : "relative";
  },
  sg = function (l, u) {
    for (var i in u) i in l || (l[i] = u[i]);
    return l;
  },
  Ta = function (l, u) {
    var i =
        u &&
        Ol(l)[sd] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        at
          .to(l, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = l.getBoundingClientRect();
    return (i && i.progress(0).kill(), r);
  },
  ff = function (l, u) {
    var i = u.d2;
    return l["offset" + i] || l["client" + i] || 0;
  },
  U_ = function (l) {
    var u = [],
      i = l.labels,
      r = l.duration(),
      f;
    for (f in i) u.push(i[f] / r);
    return u;
  },
  jS = function (l) {
    return function (u) {
      return at.utils.snap(U_(l), u);
    };
  },
  Ld = function (l) {
    var u = at.utils.snap(l),
      i =
        Array.isArray(l) &&
        l.slice(0).sort(function (r, f) {
          return r - f;
        });
    return i
      ? function (r, f, o) {
          o === void 0 && (o = 0.001);
          var h;
          if (!f) return u(r);
          if (f > 0) {
            for (r -= o, h = 0; h < i.length; h++) if (i[h] >= r) return i[h];
            return i[h - 1];
          } else for (h = i.length, r += o; h--; ) if (i[h] <= r) return i[h];
          return i[0];
        }
      : function (r, f, o) {
          o === void 0 && (o = 0.001);
          var h = u(r);
          return !f || Math.abs(h - r) < o || h - r < 0 == f < 0
            ? h
            : u(f < 0 ? r - l : r + l);
        };
  },
  US = function (l) {
    return function (u, i) {
      return Ld(U_(l))(u, i.direction);
    };
  },
  Bc = function (l, u, i, r) {
    return i.split(",").forEach(function (f) {
      return l(u, f, r);
    });
  },
  We = function (l, u, i, r, f) {
    return l.addEventListener(u, i, { passive: !r, capture: !!f });
  },
  Fe = function (l, u, i, r) {
    return l.removeEventListener(u, i, !!r);
  },
  qc = function (l, u, i) {
    ((i = i && i.wheelHandler), i && (l(u, "wheel", i), l(u, "touchmove", i)));
  },
  cg = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Lc = { toggleActions: "play", anticipatePin: 0 },
  of = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Fc = function (l, u) {
    if (In(l)) {
      var i = l.indexOf("="),
        r = ~i ? +(l.charAt(i - 1) + 1) * parseFloat(l.substr(i + 1)) : 0;
      (~i && (l.indexOf("%") > i && (r *= u / 100), (l = l.substr(0, i - 1))),
        (l =
          r +
          (l in of
            ? of[l] * u
            : ~l.indexOf("%")
              ? (parseFloat(l) * u) / 100
              : parseFloat(l) || 0)));
    }
    return l;
  },
  Xc = function (l, u, i, r, f, o, h, m) {
    var g = f.startColor,
      _ = f.endColor,
      v = f.fontSize,
      S = f.indent,
      x = f.fontWeight,
      O = ue.createElement("div"),
      b = ki(i) || si(i, "pinType") === "fixed",
      D = l.indexOf("scroller") !== -1,
      X = b ? Ft : i,
      G = l.indexOf("start") !== -1,
      k = G ? g : _,
      Y =
        "border-color:" +
        k +
        ";font-size:" +
        v +
        ";color:" +
        k +
        ";font-weight:" +
        x +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (Y += "position:" + ((D || m) && b ? "fixed;" : "absolute;")),
      (D || m || !b) &&
        (Y += (r === ke ? Yd : Bd) + ":" + (o + parseFloat(S)) + "px;"),
      h &&
        (Y +=
          "box-sizing:border-box;text-align:left;width:" +
          h.offsetWidth +
          "px;"),
      (O._isStart = G),
      O.setAttribute("class", "gsap-marker-" + l + (u ? " marker-" + u : "")),
      (O.style.cssText = Y),
      (O.innerText = u || u === 0 ? l + "-" + u : l),
      X.children[0] ? X.insertBefore(O, X.children[0]) : X.appendChild(O),
      (O._offset = O["offset" + r.op.d2]),
      Wc(O, 0, r, G),
      O
    );
  },
  Wc = function (l, u, i, r) {
    var f = { display: "block" },
      o = i[r ? "os2" : "p2"],
      h = i[r ? "p2" : "os2"];
    ((l._isFlipped = r),
      (f[i.a + "Percent"] = r ? -100 : 0),
      (f[i.a] = r ? "1px" : 0),
      (f["border" + o + Wu] = 1),
      (f["border" + h + Wu] = 0),
      (f[i.p] = u + "px"),
      at.set(l, f));
  },
  Ct = [],
  hd = {},
  ys,
  fg = function () {
    return hn() - Nl > 34 && (ys || (ys = requestAnimationFrame(za)));
  },
  Ru = function () {
    (!bn || !bn.isPressed || bn.startX > Ft.clientWidth) &&
      (jt.cache++,
      bn ? ys || (ys = requestAnimationFrame(za)) : za(),
      Nl || Ji("scrollStart"),
      (Nl = hn()));
  },
  Gh = function () {
    ((O_ = wt.innerWidth), (M_ = wt.innerHeight));
  },
  Wr = function (l) {
    (jt.cache++,
      (l === !0 ||
        (!on &&
          !A_ &&
          !ue.fullscreenElement &&
          !ue.webkitFullscreenElement &&
          (!cd ||
            O_ !== wt.innerWidth ||
            Math.abs(wt.innerHeight - M_) > wt.innerHeight * 0.25))) &&
        cf.restart(!0));
  },
  Ki = {},
  HS = [],
  H_ = function d() {
    return Fe(gt, "scrollEnd", d) || Bi(!0);
  },
  Ji = function (l) {
    return (
      (Ki[l] &&
        Ki[l].map(function (u) {
          return u();
        })) ||
      HS
    );
  },
  Pn = [],
  Y_ = function (l) {
    for (var u = 0; u < Pn.length; u += 5)
      (!l || (Pn[u + 4] && Pn[u + 4].query === l)) &&
        ((Pn[u].style.cssText = Pn[u + 1]),
        Pn[u].getBBox && Pn[u].setAttribute("transform", Pn[u + 2] || ""),
        (Pn[u + 3].uncache = 1));
  },
  B_ = function () {
    return jt.forEach(function (l) {
      return pn(l) && ++l.cacheID && (l.rec = l());
    });
  },
  Xd = function (l, u) {
    var i;
    for (Tn = 0; Tn < Ct.length; Tn++)
      ((i = Ct[Tn]),
        i && (!u || i._ctx === u) && (l ? i.kill(1) : i.revert(!0, !0)));
    ((as = !0), u && Y_(u), u || Ji("revert"));
  },
  q_ = function (l, u) {
    (jt.cache++,
      (u || !En) &&
        jt.forEach(function (i) {
          return pn(i) && i.cacheID++ && (i.rec = 0);
        }),
      In(l) && (wt.history.scrollRestoration = Ud = l));
  },
  En,
  Zi = 0,
  og,
  YS = function () {
    if (og !== Zi) {
      var l = (og = Zi);
      requestAnimationFrame(function () {
        return l === Zi && Bi(!0);
      });
    }
  },
  L_ = function () {
    (Ft.appendChild(Gu),
      (Hd = (!bn && Gu.offsetHeight) || wt.innerHeight),
      Ft.removeChild(Gu));
  },
  hg = function (l) {
    return _s(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (u) {
      return (u.style.display = l ? "none" : "block");
    });
  },
  Bi = function (l, u) {
    if (
      ((el = ue.documentElement),
      (Ft = ue.body),
      (jd = [wt, ue, el, Ft]),
      Nl && !l && !as)
    ) {
      We(gt, "scrollEnd", H_);
      return;
    }
    (L_(), (En = gt.isRefreshing = !0), as || B_());
    var i = Ji("refreshInit");
    (z_ && gt.sort(),
      u || Xd(),
      jt.forEach(function (r) {
        pn(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      Ct.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (as = !1),
      Ct.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var f = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = r.pin[f];
          (r.revert(!0, 1), r.adjustPinSpacing(r.pin[f] - o), r.refresh());
        }
      }),
      (od = 1),
      hg(!0),
      Ct.forEach(function (r) {
        var f = Il(r.scroller, r._dir),
          o = r.vars.end === "max" || (r._endClamp && r.end > f),
          h = r._startClamp && r.start >= f;
        (o || h) &&
          r.setPositions(
            h ? f - 1 : r.start,
            o ? Math.max(h ? f : r.start + 1, f) : r.end,
            !0,
          );
      }),
      hg(!1),
      (od = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      jt.forEach(function (r) {
        pn(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      q_(Ud, 1),
      cf.pause(),
      Zi++,
      (En = 2),
      za(2),
      Ct.forEach(function (r) {
        return pn(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (En = gt.isRefreshing = !1),
      Ji("refresh"));
  },
  dd = 0,
  $c = 1,
  cs,
  za = function (l) {
    if (l === 2 || (!En && !as)) {
      ((gt.isUpdating = !0), cs && cs.update(0));
      var u = Ct.length,
        i = hn(),
        r = i - Lh >= 50,
        f = u && Ct[0].scroll();
      if (
        (($c = dd > f ? -1 : 1),
        En || (dd = f),
        r &&
          (Nl && !mf && i - Nl > 200 && ((Nl = 0), Ji("scrollEnd")),
          (kr = Lh),
          (Lh = i)),
        $c < 0)
      ) {
        for (Tn = u; Tn-- > 0; ) Ct[Tn] && Ct[Tn].update(0, r);
        $c = 1;
      } else for (Tn = 0; Tn < u; Tn++) Ct[Tn] && Ct[Tn].update(0, r);
      gt.isUpdating = !1;
    }
    ys = 0;
  },
  pd = [
    w_,
    j_,
    Bd,
    Yd,
    Ml + ss,
    Ml + is,
    Ml + rs,
    Ml + us,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Pc = pd.concat([
    Qi,
    Vi,
    "boxSizing",
    "max" + Wu,
    "max" + qd,
    "position",
    Ml,
    Le,
    Le + rs,
    Le + is,
    Le + ss,
    Le + us,
  ]),
  BS = function (l, u, i) {
    Qu(i);
    var r = l._gsap;
    if (r.spacerIsNative) Qu(r.spacerState);
    else if (l._gsap.swappedIn) {
      var f = u.parentNode;
      f && (f.insertBefore(l, u), f.removeChild(u));
    }
    l._gsap.swappedIn = !1;
  },
  Qh = function (l, u, i, r) {
    if (!l._gsap.swappedIn) {
      for (var f = pd.length, o = u.style, h = l.style, m; f--; )
        ((m = pd[f]), (o[m] = i[m]));
      ((o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (h[Bd] = h[Yd] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Qi] = ff(l, An) + Ze),
        (o[Vi] = ff(l, ke) + Ze),
        (o[Le] = h[Ml] = h[j_] = h[w_] = "0"),
        Qu(r),
        (h[Qi] = h["max" + Wu] = i[Qi]),
        (h[Vi] = h["max" + qd] = i[Vi]),
        (h[Le] = i[Le]),
        l.parentNode !== u &&
          (l.parentNode.insertBefore(u, l), u.appendChild(l)),
        (l._gsap.swappedIn = !0));
    }
  },
  qS = /([A-Z])/g,
  Qu = function (l) {
    if (l) {
      var u = l.t.style,
        i = l.length,
        r = 0,
        f,
        o;
      for ((l.t._gsap || at.core.getCache(l.t)).uncache = 1; r < i; r += 2)
        ((o = l[r + 1]),
          (f = l[r]),
          o
            ? (u[f] = o)
            : u[f] && u.removeProperty(f.replace(qS, "-$1").toLowerCase()));
    }
  },
  Gc = function (l) {
    for (var u = Pc.length, i = l.style, r = [], f = 0; f < u; f++)
      r.push(Pc[f], i[Pc[f]]);
    return ((r.t = l), r);
  },
  LS = function (l, u, i) {
    for (var r = [], f = l.length, o = i ? 8 : 0, h; o < f; o += 2)
      ((h = l[o]), r.push(h, h in u ? u[h] : l[o + 1]));
    return ((r.t = l.t), r);
  },
  Ic = { left: 0, top: 0 },
  dg = function (l, u, i, r, f, o, h, m, g, _, v, S, x, O) {
    (pn(l) && (l = l(m)),
      In(l) &&
        l.substr(0, 3) === "max" &&
        (l = S + (l.charAt(4) === "=" ? Fc("0" + l.substr(3), i) : 0)));
    var b = x ? x.time() : 0,
      D,
      X,
      G;
    if ((x && x.seek(0), isNaN(l) || (l = +l), Fr(l)))
      (x &&
        (l = at.utils.mapRange(
          x.scrollTrigger.start,
          x.scrollTrigger.end,
          0,
          S,
          l,
        )),
        h && Wc(h, i, r, !0));
    else {
      pn(u) && (u = u(m));
      var k = (l || "0").split(" "),
        Y,
        Q,
        F,
        j;
      ((G = Hn(u, m) || Ft),
        (Y = Ta(G) || {}),
        (!Y || (!Y.left && !Y.top)) &&
          Ol(G).display === "none" &&
          ((j = G.style.display),
          (G.style.display = "block"),
          (Y = Ta(G)),
          j ? (G.style.display = j) : G.style.removeProperty("display")),
        (Q = Fc(k[0], Y[r.d])),
        (F = Fc(k[1] || "0", i)),
        (l = Y[r.p] - g[r.p] - _ + Q + f - F),
        h && Wc(h, F, r, i - F < 20 || (h._isStart && F > 20)),
        (i -= i - F));
    }
    if ((O && ((m[O] = l || -0.001), l < 0 && (l = 0)), o)) {
      var W = l + i,
        J = o._isStart;
      ((D = "scroll" + r.d2),
        Wc(
          o,
          W,
          r,
          (J && W > 20) ||
            (!J && (v ? Math.max(Ft[D], el[D]) : o.parentNode[D]) <= W + 1),
        ),
        v &&
          ((g = Ta(h)),
          v && (o.style[r.op.p] = g[r.op.p] - r.op.m - o._offset + Ze)));
    }
    return (
      x &&
        G &&
        ((D = Ta(G)),
        x.seek(S),
        (X = Ta(G)),
        (x._caScrollDist = D[r.p] - X[r.p]),
        (l = (l / x._caScrollDist) * S)),
      x && x.seek(b),
      x ? l : Math.round(l)
    );
  },
  XS = /(webkit|moz|length|cssText|inset)/i,
  pg = function (l, u, i, r) {
    if (l.parentNode !== u) {
      var f = l.style,
        o,
        h;
      if (u === Ft) {
        ((l._stOrig = f.cssText), (h = Ol(l)));
        for (o in h)
          !+o &&
            !XS.test(o) &&
            h[o] &&
            typeof f[o] == "string" &&
            o !== "0" &&
            (f[o] = h[o]);
        ((f.top = i), (f.left = r));
      } else f.cssText = l._stOrig;
      ((at.core.getCache(l).uncache = 1), u.appendChild(l));
    }
  },
  X_ = function (l, u, i) {
    var r = u,
      f = r;
    return function (o) {
      var h = Math.round(l());
      return (
        h !== r &&
          h !== f &&
          Math.abs(h - r) > 3 &&
          Math.abs(h - f) > 3 &&
          ((o = h), i && i()),
        (f = r),
        (r = Math.round(o)),
        r
      );
    };
  },
  Qc = function (l, u, i) {
    var r = {};
    ((r[u.p] = "+=" + i), at.set(l, r));
  },
  mg = function (l, u) {
    var i = hi(l, u),
      r = "_scroll" + u.p2,
      f = function o(h, m, g, _, v) {
        var S = o.tween,
          x = m.onComplete,
          O = {};
        g = g || i();
        var b = X_(i, g, function () {
          (S.kill(), (o.tween = 0));
        });
        return (
          (v = (_ && v) || 0),
          (_ = _ || h - g),
          S && S.kill(),
          (m[r] = h),
          (m.inherit = !1),
          (m.modifiers = O),
          (O[r] = function () {
            return b(g + _ * S.ratio + v * S.ratio * S.ratio);
          }),
          (m.onUpdate = function () {
            (jt.cache++, o.tween && za());
          }),
          (m.onComplete = function () {
            ((o.tween = 0), x && x.call(S));
          }),
          (S = o.tween = at.to(l, m)),
          S
        );
      };
    return (
      (l[r] = i),
      (i.wheelHandler = function () {
        return f.tween && f.tween.kill() && (f.tween = 0);
      }),
      We(l, "wheel", i.wheelHandler),
      gt.isTouch && We(l, "touchmove", i.wheelHandler),
      f
    );
  },
  gt = (function () {
    function d(u, i) {
      (wu ||
        d.register(at) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        fd(this),
        this.init(u, i));
    }
    var l = d.prototype;
    return (
      (l.init = function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Kr)
        ) {
          this.update = this.refresh = this.kill = Wl;
          return;
        }
        i = sg(In(i) || Fr(i) || i.nodeType ? { trigger: i } : i, Lc);
        var f = i,
          o = f.onUpdate,
          h = f.toggleClass,
          m = f.id,
          g = f.onToggle,
          _ = f.onRefresh,
          v = f.scrub,
          S = f.trigger,
          x = f.pin,
          O = f.pinSpacing,
          b = f.invalidateOnRefresh,
          D = f.anticipatePin,
          X = f.onScrubComplete,
          G = f.onSnapComplete,
          k = f.once,
          Y = f.snap,
          Q = f.pinReparent,
          F = f.pinSpacer,
          j = f.containerAnimation,
          W = f.fastScrollEnd,
          J = f.preventOverlaps,
          $ =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? An
              : ke,
          ot = !v && v !== 0,
          P = Hn(i.scroller || wt),
          bt = at.core.getCache(P),
          _t = ki(P),
          vt =
            ("pinType" in i
              ? i.pinType
              : si(P, "pinType") || (_t && "fixed")) === "fixed",
          N = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          V = ot && i.toggleActions.split(" "),
          et = "markers" in i ? i.markers : Lc.markers,
          ht = _t ? 0 : parseFloat(Ol(P)["border" + $.p2 + Wu]) || 0,
          M = this,
          E =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(M);
            },
          q = NS(P, _t, $),
          I = RS(P, _t),
          tt = 0,
          ut = 0,
          dt = 0,
          pt = hi(P, $),
          Kt,
          Dt,
          Mn,
          we,
          Ge,
          Yt,
          Wt,
          Ke,
          Pe,
          B,
          un,
          Gn,
          cl,
          ie,
          Rl,
          ql,
          Me,
          je,
          wl,
          oe,
          rn,
          On,
          fl,
          pi,
          be,
          Ll,
          me,
          gn,
          Ue,
          Xl,
          na,
          Mt,
          ol,
          sn,
          cn,
          Qe,
          hl,
          dl,
          jl;
        if (
          ((M._startClamp = M._endClamp = !1),
          (M._dir = $),
          (D *= 45),
          (M.scroller = P),
          (M.scroll = j ? j.time.bind(j) : pt),
          (we = pt()),
          (M.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((z_ = 1), i.refreshPriority === -9999 && (cs = M)),
          (bt.tweenScroll = bt.tweenScroll || {
            top: mg(P, ke),
            left: mg(P, An),
          }),
          (M.tweenTo = Kt = bt.tweenScroll[$.p]),
          (M.scrubDuration = function (nt) {
            ((ol = Fr(nt) && nt),
              ol
                ? Mt
                  ? Mt.duration(nt)
                  : (Mt = at.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: ol,
                      paused: !0,
                      onComplete: function () {
                        return X && X(M);
                      },
                    }))
                : (Mt && Mt.progress(1).kill(), (Mt = 0)));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !M.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (M.animation = r.pause()),
            (r.scrollTrigger = M),
            M.scrubDuration(v),
            (Xl = 0),
            m || (m = r.vars.id)),
          Y &&
            ((!Hi(Y) || Y.push) && (Y = { snapTo: Y }),
            "scrollBehavior" in Ft.style &&
              at.set(_t ? [Ft, el] : P, { scrollBehavior: "auto" }),
            jt.forEach(function (nt) {
              return (
                pn(nt) &&
                nt.target === (_t ? ue.scrollingElement || el : P) &&
                (nt.smooth = !1)
              );
            }),
            (Mn = pn(Y.snapTo)
              ? Y.snapTo
              : Y.snapTo === "labels"
                ? jS(r)
                : Y.snapTo === "labelsDirectional"
                  ? US(r)
                  : Y.directional !== !1
                    ? function (nt, St) {
                        return Ld(Y.snapTo)(
                          nt,
                          hn() - ut < 500 ? 0 : St.direction,
                        );
                      }
                    : at.utils.snap(Y.snapTo)),
            (sn = Y.duration || { min: 0.1, max: 2 }),
            (sn = Hi(sn) ? ls(sn.min, sn.max) : ls(sn, sn)),
            (cn = at
              .delayedCall(Y.delay || ol / 2 || 0.1, function () {
                var nt = pt(),
                  St = hn() - ut < 500,
                  ct = Kt.tween;
                if (
                  (St || Math.abs(M.getVelocity()) < 10) &&
                  !ct &&
                  !mf &&
                  tt !== nt
                ) {
                  var yt = (nt - Yt) / ie,
                    Te = r && !ot ? r.totalProgress() : yt,
                    Nt = St ? 0 : ((Te - na) / (hn() - kr)) * 1e3 || 0,
                    he = at.utils.clamp(-yt, 1 - yt, (Nu(Nt / 2) * Nt) / 0.185),
                    re = yt + (Y.inertia === !1 ? 0 : he),
                    At,
                    Ot,
                    Qt = Y,
                    _n = Qt.onStart,
                    se = Qt.onInterrupt,
                    yn = Qt.onComplete;
                  if (
                    ((At = Mn(re, M)),
                    Fr(At) || (At = re),
                    (Ot = Math.max(0, Math.round(Yt + At * ie))),
                    nt <= Wt && nt >= Yt && Ot !== nt)
                  ) {
                    if (ct && !ct._initted && ct.data <= Nu(Ot - nt)) return;
                    (Y.inertia === !1 && (he = At - yt),
                      Kt(
                        Ot,
                        {
                          duration: sn(
                            Nu(
                              (Math.max(Nu(re - Te), Nu(At - Te)) * 0.185) /
                                Nt /
                                0.05 || 0,
                            ),
                          ),
                          ease: Y.ease || "power3",
                          data: Nu(Ot - nt),
                          onInterrupt: function () {
                            return cn.restart(!0) && se && se(M);
                          },
                          onComplete: function () {
                            (M.update(),
                              (tt = pt()),
                              r &&
                                !ot &&
                                (Mt
                                  ? Mt.resetTo(
                                      "totalProgress",
                                      At,
                                      r._tTime / r._tDur,
                                    )
                                  : r.progress(At)),
                              (Xl = na =
                                r && !ot ? r.totalProgress() : M.progress),
                              G && G(M),
                              yn && yn(M));
                          },
                        },
                        nt,
                        he * ie,
                        Ot - nt - he * ie,
                      ),
                      _n && _n(M, Kt.tween));
                  }
                } else M.isActive && tt !== nt && cn.restart(!0);
              })
              .pause())),
          m && (hd[m] = M),
          (S = M.trigger = Hn(S || (x !== !0 && x))),
          (jl = S && S._gsap && S._gsap.stRevert),
          jl && (jl = jl(M)),
          (x = x === !0 ? S : Hn(x)),
          In(h) && (h = { targets: S, className: h }),
          x &&
            (O === !1 ||
              O === Ml ||
              (O =
                !O &&
                x.parentNode &&
                x.parentNode.style &&
                Ol(x.parentNode).display === "flex"
                  ? !1
                  : Le),
            (M.pin = x),
            (Dt = at.core.getCache(x)),
            Dt.spacer
              ? (Rl = Dt.pinState)
              : (F &&
                  ((F = Hn(F)),
                  F && !F.nodeType && (F = F.current || F.nativeElement),
                  (Dt.spacerIsNative = !!F),
                  F && (Dt.spacerState = Gc(F))),
                (Dt.spacer = je = F || ue.createElement("div")),
                je.classList.add("pin-spacer"),
                m && je.classList.add("pin-spacer-" + m),
                (Dt.pinState = Rl = Gc(x))),
            i.force3D !== !1 && at.set(x, { force3D: !0 }),
            (M.spacer = je = Dt.spacer),
            (Ue = Ol(x)),
            (pi = Ue[O + $.os2]),
            (oe = at.getProperty(x)),
            (rn = at.quickSetter(x, $.a, Ze)),
            Qh(x, je, Ue),
            (Me = Gc(x))),
          et)
        ) {
          ((Gn = Hi(et) ? sg(et, cg) : cg),
            (B = Xc("scroller-start", m, P, $, Gn, 0)),
            (un = Xc("scroller-end", m, P, $, Gn, 0, B)),
            (wl = B["offset" + $.op.d2]));
          var Ca = Hn(si(P, "content") || P);
          ((Ke = this.markerStart = Xc("start", m, Ca, $, Gn, wl, 0, j)),
            (Pe = this.markerEnd = Xc("end", m, Ca, $, Gn, wl, 0, j)),
            j && (dl = at.quickSetter([Ke, Pe], $.a, Ze)),
            !vt &&
              !(ta.length && si(P, "fixedMarkers") === !0) &&
              (wS(_t ? Ft : P),
              at.set([B, un], { force3D: !0 }),
              (Ll = at.quickSetter(B, $.a, Ze)),
              (gn = at.quickSetter(un, $.a, Ze))));
        }
        if (j) {
          var xt = j.vars.onUpdate,
            st = j.vars.onUpdateParams;
          j.eventCallback("onUpdate", function () {
            (M.update(0, 0, 1), xt && xt.apply(j, st || []));
          });
        }
        if (
          ((M.previous = function () {
            return Ct[Ct.indexOf(M) - 1];
          }),
          (M.next = function () {
            return Ct[Ct.indexOf(M) + 1];
          }),
          (M.revert = function (nt, St) {
            if (!St) return M.kill(!0);
            var ct = nt !== !1 || !M.enabled,
              yt = on;
            ct !== M.isReverted &&
              (ct &&
                ((Qe = Math.max(pt(), M.scroll.rec || 0)),
                (dt = M.progress),
                (hl = r && r.progress())),
              Ke &&
                [Ke, Pe, B, un].forEach(function (Te) {
                  return (Te.style.display = ct ? "none" : "block");
                }),
              ct && ((on = M), M.update(ct)),
              x &&
                (!Q || !M.isActive) &&
                (ct ? BS(x, je, Rl) : Qh(x, je, Ol(x), be)),
              ct || M.update(ct),
              (on = yt),
              (M.isReverted = ct));
          }),
          (M.refresh = function (nt, St, ct, yt) {
            if (!((on || !M.enabled) && !St)) {
              if (x && nt && Nl) {
                We(d, "scrollEnd", H_);
                return;
              }
              (!En && E && E(M),
                (on = M),
                Kt.tween && !ct && (Kt.tween.kill(), (Kt.tween = 0)),
                Mt && Mt.pause(),
                b &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren
                    ? r.getChildren(!0, !0, !1).forEach(function (Vl) {
                        return Vl.vars.immediateRender && Vl.render(0, !0, !0);
                      })
                    : r.vars.immediateRender && r.render(0, !0, !0)),
                M.isReverted || M.revert(!0, !0),
                (M._subPinOffset = !1));
              var Te = q(),
                Nt = I(),
                he = j ? j.duration() : Il(P, $),
                re = ie <= 0.01 || !ie,
                At = 0,
                Ot = yt || 0,
                Qt = Hi(ct) ? ct.end : i.end,
                _n = i.endTrigger || S,
                se = Hi(ct)
                  ? ct.start
                  : i.start || (i.start === 0 || !S ? 0 : x ? "0 0" : "0 100%"),
                yn = (M.pinnedContainer =
                  i.pinnedContainer && Hn(i.pinnedContainer, M)),
                Qn = (S && Math.max(0, Ct.indexOf(M))) || 0,
                ge = Qn,
                Oe,
                _e,
                Cn,
                Gl,
                ye,
                Rt,
                Vn,
                Wi,
                Ql,
                pl,
                ml,
                Da,
                mi;
              for (
                et &&
                Hi(ct) &&
                ((Da = at.getProperty(B, $.p)), (mi = at.getProperty(un, $.p)));
                ge-- > 0;
              )
                ((Rt = Ct[ge]),
                  Rt.end || Rt.refresh(0, 1) || (on = M),
                  (Vn = Rt.pin),
                  Vn &&
                    (Vn === S || Vn === x || Vn === yn) &&
                    !Rt.isReverted &&
                    (pl || (pl = []), pl.unshift(Rt), Rt.revert(!0, !0)),
                  Rt !== Ct[ge] && (Qn--, ge--));
              for (
                pn(se) && (se = se(M)),
                  se = ag(se, "start", M),
                  Yt =
                    dg(
                      se,
                      S,
                      Te,
                      $,
                      pt(),
                      Ke,
                      B,
                      M,
                      Nt,
                      ht,
                      vt,
                      he,
                      j,
                      M._startClamp && "_startClamp",
                    ) || (x ? -0.001 : 0),
                  pn(Qt) && (Qt = Qt(M)),
                  In(Qt) &&
                    !Qt.indexOf("+=") &&
                    (~Qt.indexOf(" ")
                      ? (Qt = (In(se) ? se.split(" ")[0] : "") + Qt)
                      : ((At = Fc(Qt.substr(2), Te)),
                        (Qt = In(se)
                          ? se
                          : (j
                              ? at.utils.mapRange(
                                  0,
                                  j.duration(),
                                  j.scrollTrigger.start,
                                  j.scrollTrigger.end,
                                  Yt,
                                )
                              : Yt) + At),
                        (_n = S))),
                  Qt = ag(Qt, "end", M),
                  Wt =
                    Math.max(
                      Yt,
                      dg(
                        Qt || (_n ? "100% 0" : he),
                        _n,
                        Te,
                        $,
                        pt() + At,
                        Pe,
                        un,
                        M,
                        Nt,
                        ht,
                        vt,
                        he,
                        j,
                        M._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  At = 0,
                  ge = Qn;
                ge--;
              )
                ((Rt = Ct[ge] || {}),
                  (Vn = Rt.pin),
                  Vn &&
                    Rt.start - Rt._pinPush <= Yt &&
                    !j &&
                    Rt.end > 0 &&
                    ((Oe =
                      Rt.end -
                      (M._startClamp ? Math.max(0, Rt.start) : Rt.start)),
                    ((Vn === S && Rt.start - Rt._pinPush < Yt) || Vn === yn) &&
                      isNaN(se) &&
                      (At += Oe * (1 - Rt.progress)),
                    Vn === x && (Ot += Oe)));
              if (
                ((Yt += At),
                (Wt += At),
                M._startClamp && (M._startClamp += At),
                M._endClamp &&
                  !En &&
                  ((M._endClamp = Wt || -0.001), (Wt = Math.min(Wt, Il(P, $)))),
                (ie = Wt - Yt || ((Yt -= 0.01) && 0.001)),
                re &&
                  (dt = at.utils.clamp(0, 1, at.utils.normalize(Yt, Wt, Qe))),
                (M._pinPush = Ot),
                Ke &&
                  At &&
                  ((Oe = {}),
                  (Oe[$.a] = "+=" + At),
                  yn && (Oe[$.p] = "-=" + pt()),
                  at.set([Ke, Pe], Oe)),
                x && !(od && M.end >= Il(P, $)))
              )
                ((Oe = Ol(x)),
                  (Gl = $ === ke),
                  (Cn = pt()),
                  (On = parseFloat(oe($.a)) + Ot),
                  !he &&
                    Wt > 1 &&
                    ((ml = (_t ? ue.scrollingElement || el : P).style),
                    (ml = {
                      style: ml,
                      value: ml["overflow" + $.a.toUpperCase()],
                    }),
                    _t &&
                      Ol(Ft)["overflow" + $.a.toUpperCase()] !== "scroll" &&
                      (ml.style["overflow" + $.a.toUpperCase()] = "scroll")),
                  Qh(x, je, Oe),
                  (Me = Gc(x)),
                  (_e = Ta(x, !0)),
                  (Wi = vt && hi(P, Gl ? An : ke)()),
                  O
                    ? ((be = [O + $.os2, ie + Ot + Ze]),
                      (be.t = je),
                      (ge = O === Le ? ff(x, $) + ie + Ot : 0),
                      ge &&
                        (be.push($.d, ge + Ze),
                        je.style.flexBasis !== "auto" &&
                          (je.style.flexBasis = ge + Ze)),
                      Qu(be),
                      yn &&
                        Ct.forEach(function (Vl) {
                          Vl.pin === yn &&
                            Vl.vars.pinSpacing !== !1 &&
                            (Vl._subPinOffset = !0);
                        }),
                      vt && pt(Qe))
                    : ((ge = ff(x, $)),
                      ge &&
                        je.style.flexBasis !== "auto" &&
                        (je.style.flexBasis = ge + Ze)),
                  vt &&
                    ((ye = {
                      top: _e.top + (Gl ? Cn - Yt : Wi) + Ze,
                      left: _e.left + (Gl ? Wi : Cn - Yt) + Ze,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (ye[Qi] = ye["max" + Wu] = Math.ceil(_e.width) + Ze),
                    (ye[Vi] = ye["max" + qd] = Math.ceil(_e.height) + Ze),
                    (ye[Ml] =
                      ye[Ml + rs] =
                      ye[Ml + is] =
                      ye[Ml + ss] =
                      ye[Ml + us] =
                        "0"),
                    (ye[Le] = Oe[Le]),
                    (ye[Le + rs] = Oe[Le + rs]),
                    (ye[Le + is] = Oe[Le + is]),
                    (ye[Le + ss] = Oe[Le + ss]),
                    (ye[Le + us] = Oe[Le + us]),
                    (ql = LS(Rl, ye, Q)),
                    En && pt(0)),
                  r
                    ? ((Ql = r._initted),
                      Bh(1),
                      r.render(r.duration(), !0, !0),
                      (fl = oe($.a) - On + ie + Ot),
                      (me = Math.abs(ie - fl) > 1),
                      vt && me && ql.splice(ql.length - 2, 2),
                      r.render(0, !0, !0),
                      Ql || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      Bh(0))
                    : (fl = ie),
                  ml &&
                    (ml.value
                      ? (ml.style["overflow" + $.a.toUpperCase()] = ml.value)
                      : ml.style.removeProperty("overflow-" + $.a)));
              else if (S && pt() && !j)
                for (_e = S.parentNode; _e && _e !== Ft; )
                  (_e._pinOffset &&
                    ((Yt -= _e._pinOffset), (Wt -= _e._pinOffset)),
                    (_e = _e.parentNode));
              (pl &&
                pl.forEach(function (Vl) {
                  return Vl.revert(!1, !0);
                }),
                (M.start = Yt),
                (M.end = Wt),
                (we = Ge = En ? Qe : pt()),
                !j && !En && (we < Qe && pt(Qe), (M.scroll.rec = 0)),
                M.revert(!1, !0),
                (ut = hn()),
                cn && ((tt = -1), cn.restart(!0)),
                (on = 0),
                r &&
                  ot &&
                  (r._initted || hl) &&
                  r.progress() !== hl &&
                  r.progress(hl || 0, !0).render(r.time(), !0, !0),
                (re || dt !== M.progress || j || b || (r && !r._initted)) &&
                  (r &&
                    !ot &&
                    (r._initted || dt || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      j && Yt < -0.001 && !dt
                        ? at.utils.normalize(Yt, Wt, 0)
                        : dt,
                      !0,
                    ),
                  (M.progress = re || (we - Yt) / ie === dt ? 0 : dt)),
                x && O && (je._pinOffset = Math.round(M.progress * fl)),
                Mt && Mt.invalidate(),
                isNaN(Da) ||
                  ((Da -= at.getProperty(B, $.p)),
                  (mi -= at.getProperty(un, $.p)),
                  Qc(B, $, Da),
                  Qc(Ke, $, Da - (yt || 0)),
                  Qc(un, $, mi),
                  Qc(Pe, $, mi - (yt || 0))),
                re && !En && M.update(),
                _ && !En && !cl && ((cl = !0), _(M), (cl = !1)));
            }
          }),
          (M.getVelocity = function () {
            return ((pt() - Ge) / (hn() - kr)) * 1e3 || 0;
          }),
          (M.endAnimation = function () {
            (Qr(M.callbackAnimation),
              r &&
                (Mt
                  ? Mt.progress(1)
                  : r.paused()
                    ? ot || Qr(r, M.direction < 0, 1)
                    : Qr(r, r.reversed())));
          }),
          (M.labelToScroll = function (nt) {
            return (
              (r &&
                r.labels &&
                (Yt || M.refresh() || Yt) +
                  (r.labels[nt] / r.duration()) * ie) ||
              0
            );
          }),
          (M.getTrailing = function (nt) {
            var St = Ct.indexOf(M),
              ct =
                M.direction > 0 ? Ct.slice(0, St).reverse() : Ct.slice(St + 1);
            return (
              In(nt)
                ? ct.filter(function (yt) {
                    return yt.vars.preventOverlaps === nt;
                  })
                : ct
            ).filter(function (yt) {
              return M.direction > 0 ? yt.end <= Yt : yt.start >= Wt;
            });
          }),
          (M.update = function (nt, St, ct) {
            if (!(j && !ct && !nt)) {
              var yt = En === !0 ? Qe : M.scroll(),
                Te = nt ? 0 : (yt - Yt) / ie,
                Nt = Te < 0 ? 0 : Te > 1 ? 1 : Te || 0,
                he = M.progress,
                re,
                At,
                Ot,
                Qt,
                _n,
                se,
                yn,
                Qn;
              if (
                (St &&
                  ((Ge = we),
                  (we = j ? pt() : yt),
                  Y && ((na = Xl), (Xl = r && !ot ? r.totalProgress() : Nt))),
                D &&
                  x &&
                  !on &&
                  !Hc &&
                  Nl &&
                  (!Nt && Yt < yt + ((yt - Ge) / (hn() - kr)) * D
                    ? (Nt = 1e-4)
                    : Nt === 1 &&
                      Wt > yt + ((yt - Ge) / (hn() - kr)) * D &&
                      (Nt = 0.9999)),
                Nt !== he && M.enabled)
              ) {
                if (
                  ((re = M.isActive = !!Nt && Nt < 1),
                  (At = !!he && he < 1),
                  (se = re !== At),
                  (_n = se || !!Nt != !!he),
                  (M.direction = Nt > he ? 1 : -1),
                  (M.progress = Nt),
                  _n &&
                    !on &&
                    ((Ot = Nt && !he ? 0 : Nt === 1 ? 1 : he === 1 ? 2 : 3),
                    ot &&
                      ((Qt =
                        (!se && V[Ot + 1] !== "none" && V[Ot + 1]) || V[Ot]),
                      (Qn =
                        r &&
                        (Qt === "complete" || Qt === "reset" || Qt in r)))),
                  J &&
                    (se || Qn) &&
                    (Qn || v || !r) &&
                    (pn(J)
                      ? J(M)
                      : M.getTrailing(J).forEach(function (Cn) {
                          return Cn.endAnimation();
                        })),
                  ot ||
                    (Mt && !on && !Hc
                      ? (Mt._dp._time - Mt._start !== Mt._time &&
                          Mt.render(Mt._dp._time - Mt._start),
                        Mt.resetTo
                          ? Mt.resetTo("totalProgress", Nt, r._tTime / r._tDur)
                          : ((Mt.vars.totalProgress = Nt),
                            Mt.invalidate().restart()))
                      : r && r.totalProgress(Nt, !!(on && (ut || nt)))),
                  x)
                ) {
                  if ((nt && O && (je.style[O + $.os2] = pi), !vt))
                    rn(Jr(On + fl * Nt));
                  else if (_n) {
                    if (
                      ((yn =
                        !nt && Nt > he && Wt + 1 > yt && yt + 1 >= Il(P, $)),
                      Q)
                    )
                      if (!nt && (re || yn)) {
                        var ge = Ta(x, !0),
                          Oe = yt - Yt;
                        pg(
                          x,
                          Ft,
                          ge.top + ($ === ke ? Oe : 0) + Ze,
                          ge.left + ($ === ke ? 0 : Oe) + Ze,
                        );
                      } else pg(x, je);
                    (Qu(re || yn ? ql : Me),
                      (me && Nt < 1 && re) ||
                        rn(On + (Nt === 1 && !yn ? fl : 0)));
                  }
                }
                (Y && !Kt.tween && !on && !Hc && cn.restart(!0),
                  h &&
                    (se || (k && Nt && (Nt < 1 || !qh))) &&
                    _s(h.targets).forEach(function (Cn) {
                      return Cn.classList[re || k ? "add" : "remove"](
                        h.className,
                      );
                    }),
                  o && !ot && !nt && o(M),
                  _n && !on
                    ? (ot &&
                        (Qn &&
                          (Qt === "complete"
                            ? r.pause().totalProgress(1)
                            : Qt === "reset"
                              ? r.restart(!0).pause()
                              : Qt === "restart"
                                ? r.restart(!0)
                                : r[Qt]()),
                        o && o(M)),
                      (se || !qh) &&
                        (g && se && Xh(M, g),
                        N[Ot] && Xh(M, N[Ot]),
                        k && (Nt === 1 ? M.kill(!1, 1) : (N[Ot] = 0)),
                        se || ((Ot = Nt === 1 ? 1 : 3), N[Ot] && Xh(M, N[Ot]))),
                      W &&
                        !re &&
                        Math.abs(M.getVelocity()) > (Fr(W) ? W : 2500) &&
                        (Qr(M.callbackAnimation),
                        Mt
                          ? Mt.progress(1)
                          : Qr(r, Qt === "reverse" ? 1 : !Nt, 1)))
                    : ot && o && !on && o(M));
              }
              if (gn) {
                var _e = j ? (yt / j.duration()) * (j._caScrollDist || 0) : yt;
                (Ll(_e + (B._isFlipped ? 1 : 0)), gn(_e));
              }
              dl && dl((-yt / j.duration()) * (j._caScrollDist || 0));
            }
          }),
          (M.enable = function (nt, St) {
            M.enabled ||
              ((M.enabled = !0),
              We(P, "resize", Wr),
              _t || We(P, "scroll", Ru),
              E && We(d, "refreshInit", E),
              nt !== !1 && ((M.progress = dt = 0), (we = Ge = tt = pt())),
              St !== !1 && M.refresh());
          }),
          (M.getTween = function (nt) {
            return nt && Kt ? Kt.tween : Mt;
          }),
          (M.setPositions = function (nt, St, ct, yt) {
            if (j) {
              var Te = j.scrollTrigger,
                Nt = j.duration(),
                he = Te.end - Te.start;
              ((nt = Te.start + (he * nt) / Nt),
                (St = Te.start + (he * St) / Nt));
            }
            (M.refresh(
              !1,
              !1,
              {
                start: ig(nt, ct && !!M._startClamp),
                end: ig(St, ct && !!M._endClamp),
              },
              yt,
            ),
              M.update());
          }),
          (M.adjustPinSpacing = function (nt) {
            if (be && nt) {
              var St = be.indexOf($.d) + 1;
              ((be[St] = parseFloat(be[St]) + nt + Ze),
                (be[1] = parseFloat(be[1]) + nt + Ze),
                Qu(be));
            }
          }),
          (M.disable = function (nt, St) {
            if (
              (nt !== !1 && M.revert(!0, !0),
              M.enabled &&
                ((M.enabled = M.isActive = !1),
                St || (Mt && Mt.pause()),
                (Qe = 0),
                Dt && (Dt.uncache = 1),
                E && Fe(d, "refreshInit", E),
                cn &&
                  (cn.pause(), Kt.tween && Kt.tween.kill() && (Kt.tween = 0)),
                !_t))
            ) {
              for (var ct = Ct.length; ct--; )
                if (Ct[ct].scroller === P && Ct[ct] !== M) return;
              (Fe(P, "resize", Wr), _t || Fe(P, "scroll", Ru));
            }
          }),
          (M.kill = function (nt, St) {
            (M.disable(nt, St), Mt && !St && Mt.kill(), m && delete hd[m]);
            var ct = Ct.indexOf(M);
            (ct >= 0 && Ct.splice(ct, 1),
              ct === Tn && $c > 0 && Tn--,
              (ct = 0),
              Ct.forEach(function (yt) {
                return yt.scroller === M.scroller && (ct = 1);
              }),
              ct || En || (M.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                nt && r.revert({ kill: !1 }),
                St || r.kill()),
              Ke &&
                [Ke, Pe, B, un].forEach(function (yt) {
                  return yt.parentNode && yt.parentNode.removeChild(yt);
                }),
              cs === M && (cs = 0),
              x &&
                (Dt && (Dt.uncache = 1),
                (ct = 0),
                Ct.forEach(function (yt) {
                  return yt.pin === x && ct++;
                }),
                ct || (Dt.spacer = 0)),
              i.onKill && i.onKill(M));
          }),
          Ct.push(M),
          M.enable(!1, !1),
          jl && jl(M),
          r && r.add && !ie)
        ) {
          var Vt = M.update;
          ((M.update = function () {
            ((M.update = Vt), jt.cache++, Yt || Wt || M.refresh());
          }),
            at.delayedCall(0.01, M.update),
            (ie = 0.01),
            (Yt = Wt = 0));
        } else M.refresh();
        x && YS();
      }),
      (d.register = function (i) {
        return (
          wu ||
            ((at = i || D_()),
            C_() && window.document && d.enable(),
            (wu = Kr)),
          wu
        );
      }),
      (d.defaults = function (i) {
        if (i) for (var r in i) Lc[r] = i[r];
        return Lc;
      }),
      (d.disable = function (i, r) {
        ((Kr = 0),
          Ct.forEach(function (o) {
            return o[r ? "kill" : "disable"](i);
          }),
          Fe(wt, "wheel", Ru),
          Fe(ue, "scroll", Ru),
          clearInterval(Uc),
          Fe(ue, "touchcancel", Wl),
          Fe(Ft, "touchstart", Wl),
          Bc(Fe, ue, "pointerdown,touchstart,mousedown", ug),
          Bc(Fe, ue, "pointerup,touchend,mouseup", rg),
          cf.kill(),
          Yc(Fe));
        for (var f = 0; f < jt.length; f += 3)
          (qc(Fe, jt[f], jt[f + 1]), qc(Fe, jt[f], jt[f + 2]));
      }),
      (d.enable = function () {
        if (
          ((wt = window),
          (ue = document),
          (el = ue.documentElement),
          (Ft = ue.body),
          at &&
            ((_s = at.utils.toArray),
            (ls = at.utils.clamp),
            (fd = at.core.context || Wl),
            (Bh = at.core.suppressOverwrites || Wl),
            (Ud = wt.history.scrollRestoration || "auto"),
            (dd = wt.pageYOffset || 0),
            at.core.globals("ScrollTrigger", d),
            Ft))
        ) {
          ((Kr = 1),
            (Gu = document.createElement("div")),
            (Gu.style.height = "100vh"),
            (Gu.style.position = "absolute"),
            L_(),
            DS(),
            Re.register(at),
            (d.isTouch = Re.isTouch),
            (ti =
              Re.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (cd = Re.isTouch === 1),
            We(wt, "wheel", Ru),
            (jd = [wt, ue, el, Ft]),
            at.matchMedia
              ? ((d.matchMedia = function (g) {
                  var _ = at.matchMedia(),
                    v;
                  for (v in g) _.add(v, g[v]);
                  return _;
                }),
                at.addEventListener("matchMediaInit", function () {
                  (B_(), Xd());
                }),
                at.addEventListener("matchMediaRevert", function () {
                  return Y_();
                }),
                at.addEventListener("matchMedia", function () {
                  (Bi(0, 1), Ji("matchMedia"));
                }),
                at.matchMedia().add("(orientation: portrait)", function () {
                  return (Gh(), Gh);
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Gh(),
            We(ue, "scroll", Ru));
          var i = Ft.hasAttribute("style"),
            r = Ft.style,
            f = r.borderTopStyle,
            o = at.core.Animation.prototype,
            h,
            m;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              h = Ta(Ft),
              ke.m = Math.round(h.top + ke.sc()) || 0,
              An.m = Math.round(h.left + An.sc()) || 0,
              f ? (r.borderTopStyle = f) : r.removeProperty("border-top-style"),
              i || (Ft.setAttribute("style", ""), Ft.removeAttribute("style")),
              Uc = setInterval(fg, 250),
              at.delayedCall(0.5, function () {
                return (Hc = 0);
              }),
              We(ue, "touchcancel", Wl),
              We(Ft, "touchstart", Wl),
              Bc(We, ue, "pointerdown,touchstart,mousedown", ug),
              Bc(We, ue, "pointerup,touchend,mouseup", rg),
              sd = at.utils.checkPrefix("transform"),
              Pc.push(sd),
              wu = hn(),
              cf = at.delayedCall(0.2, Bi).pause(),
              ju = [
                ue,
                "visibilitychange",
                function () {
                  var g = wt.innerWidth,
                    _ = wt.innerHeight;
                  ue.hidden
                    ? ((ng = g), (lg = _))
                    : (ng !== g || lg !== _) && Wr();
                },
                ue,
                "DOMContentLoaded",
                Bi,
                wt,
                "load",
                Bi,
                wt,
                "resize",
                Wr,
              ],
              Yc(We),
              Ct.forEach(function (g) {
                return g.enable(0, 1);
              }),
              m = 0;
            m < jt.length;
            m += 3
          )
            (qc(Fe, jt[m], jt[m + 1]), qc(Fe, jt[m], jt[m + 2]));
        }
      }),
      (d.config = function (i) {
        "limitCallbacks" in i && (qh = !!i.limitCallbacks);
        var r = i.syncInterval;
        ((r && clearInterval(Uc)) || ((Uc = r) && setInterval(fg, r)),
          "ignoreMobileResize" in i &&
            (cd = d.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Yc(Fe) || Yc(We, i.autoRefreshEvents || "none"),
            (A_ = (i.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (d.scrollerProxy = function (i, r) {
        var f = Hn(i),
          o = jt.indexOf(f),
          h = ki(f);
        (~o && jt.splice(o, h ? 6 : 2),
          r && (h ? ta.unshift(wt, r, Ft, r, el, r) : ta.unshift(f, r)));
      }),
      (d.clearMatchMedia = function (i) {
        Ct.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }),
      (d.isInViewport = function (i, r, f) {
        var o = (In(i) ? Hn(i) : i).getBoundingClientRect(),
          h = o[f ? Qi : Vi] * r || 0;
        return f
          ? o.right - h > 0 && o.left + h < wt.innerWidth
          : o.bottom - h > 0 && o.top + h < wt.innerHeight;
      }),
      (d.positionInViewport = function (i, r, f) {
        In(i) && (i = Hn(i));
        var o = i.getBoundingClientRect(),
          h = o[f ? Qi : Vi],
          m =
            r == null
              ? h / 2
              : r in of
                ? of[r] * h
                : ~r.indexOf("%")
                  ? (parseFloat(r) * h) / 100
                  : parseFloat(r) || 0;
        return f ? (o.left + m) / wt.innerWidth : (o.top + m) / wt.innerHeight;
      }),
      (d.killAll = function (i) {
        if (
          (Ct.slice(0).forEach(function (f) {
            return f.vars.id !== "ScrollSmoother" && f.kill();
          }),
          i !== !0)
        ) {
          var r = Ki.killAll || [];
          ((Ki = {}),
            r.forEach(function (f) {
              return f();
            }));
        }
      }),
      d
    );
  })();
gt.version = "3.14.2";
gt.saveStyles = function (d) {
  return d
    ? _s(d).forEach(function (l) {
        if (l && l.style) {
          var u = Pn.indexOf(l);
          (u >= 0 && Pn.splice(u, 5),
            Pn.push(
              l,
              l.style.cssText,
              l.getBBox && l.getAttribute("transform"),
              at.core.getCache(l),
              fd(),
            ));
        }
      })
    : Pn;
};
gt.revert = function (d, l) {
  return Xd(!d, l);
};
gt.create = function (d, l) {
  return new gt(d, l);
};
gt.refresh = function (d) {
  return d ? Wr(!0) : (wu || gt.register()) && Bi(!0);
};
gt.update = function (d) {
  return ++jt.cache && za(d === !0 ? 2 : 0);
};
gt.clearScrollMemory = q_;
gt.maxScroll = function (d, l) {
  return Il(d, l ? An : ke);
};
gt.getScrollFunc = function (d, l) {
  return hi(Hn(d), l ? An : ke);
};
gt.getById = function (d) {
  return hd[d];
};
gt.getAll = function () {
  return Ct.filter(function (d) {
    return d.vars.id !== "ScrollSmoother";
  });
};
gt.isScrolling = function () {
  return !!Nl;
};
gt.snapDirectional = Ld;
gt.addEventListener = function (d, l) {
  var u = Ki[d] || (Ki[d] = []);
  ~u.indexOf(l) || u.push(l);
};
gt.removeEventListener = function (d, l) {
  var u = Ki[d],
    i = u && u.indexOf(l);
  i >= 0 && u.splice(i, 1);
};
gt.batch = function (d, l) {
  var u = [],
    i = {},
    r = l.interval || 0.016,
    f = l.batchMax || 1e9,
    o = function (g, _) {
      var v = [],
        S = [],
        x = at
          .delayedCall(r, function () {
            (_(v, S), (v = []), (S = []));
          })
          .pause();
      return function (O) {
        (v.length || x.restart(!0),
          v.push(O.trigger),
          S.push(O),
          f <= v.length && x.progress(1));
      };
    },
    h;
  for (h in l)
    i[h] =
      h.substr(0, 2) === "on" && pn(l[h]) && h !== "onRefreshInit"
        ? o(h, l[h])
        : l[h];
  return (
    pn(f) &&
      ((f = f()),
      We(gt, "refresh", function () {
        return (f = l.batchMax());
      })),
    _s(d).forEach(function (m) {
      var g = {};
      for (h in i) g[h] = i[h];
      ((g.trigger = m), u.push(gt.create(g)));
    }),
    u
  );
};
var gg = function (l, u, i, r) {
    return (
      u > r ? l(r) : u < 0 && l(0),
      i > r ? (r - u) / (i - u) : i < 0 ? u / (u - i) : 1
    );
  },
  Vh = function d(l, u) {
    (u === !0
      ? l.style.removeProperty("touch-action")
      : (l.style.touchAction =
          u === !0
            ? "auto"
            : u
              ? "pan-" + u + (Re.isTouch ? " pinch-zoom" : "")
              : "none"),
      l === el && d(Ft, u));
  },
  Vc = { auto: 1, scroll: 1 },
  GS = function (l) {
    var u = l.event,
      i = l.target,
      r = l.axis,
      f = (u.changedTouches ? u.changedTouches[0] : u).target,
      o = f._gsap || at.core.getCache(f),
      h = hn(),
      m;
    if (!o._isScrollT || h - o._isScrollT > 2e3) {
      for (
        ;
        f &&
        f !== Ft &&
        ((f.scrollHeight <= f.clientHeight && f.scrollWidth <= f.clientWidth) ||
          !(Vc[(m = Ol(f)).overflowY] || Vc[m.overflowX]));
      )
        f = f.parentNode;
      ((o._isScroll =
        f &&
        f !== i &&
        !ki(f) &&
        (Vc[(m = Ol(f)).overflowY] || Vc[m.overflowX])),
        (o._isScrollT = h));
    }
    (o._isScroll || r === "x") && (u.stopPropagation(), (u._gsapAllow = !0));
  },
  G_ = function (l, u, i, r) {
    return Re.create({
      target: l,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: u,
      onWheel: (r = r && GS),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return i && We(ue, Re.eventTypes[0], yg, !1, !0);
      },
      onDisable: function () {
        return Fe(ue, Re.eventTypes[0], yg, !0);
      },
    });
  },
  QS = /(input|label|select|textarea)/i,
  _g,
  yg = function (l) {
    var u = QS.test(l.target.tagName);
    (u || _g) && ((l._gsapAllow = !0), (_g = u));
  },
  VS = function (l) {
    (Hi(l) || (l = {}),
      (l.preventDefault = l.isNormalizer = l.allowClicks = !0),
      l.type || (l.type = "wheel,touch"),
      (l.debounce = !!l.debounce),
      (l.id = l.id || "normalizer"));
    var u = l,
      i = u.normalizeScrollX,
      r = u.momentum,
      f = u.allowNestedScroll,
      o = u.onRelease,
      h,
      m,
      g = Hn(l.target) || el,
      _ = at.core.globals().ScrollSmoother,
      v = _ && _.get(),
      S =
        ti &&
        ((l.content && Hn(l.content)) ||
          (v && l.content !== !1 && !v.smooth() && v.content())),
      x = hi(g, ke),
      O = hi(g, An),
      b = 1,
      D =
        (Re.isTouch && wt.visualViewport
          ? wt.visualViewport.scale * wt.visualViewport.width
          : wt.outerWidth) / wt.innerWidth,
      X = 0,
      G = pn(r)
        ? function () {
            return r(h);
          }
        : function () {
            return r || 2.8;
          },
      k,
      Y,
      Q = G_(g, l.type, !0, f),
      F = function () {
        return (Y = !1);
      },
      j = Wl,
      W = Wl,
      J = function () {
        ((m = Il(g, ke)),
          (W = ls(ti ? 1 : 0, m)),
          i && (j = ls(0, Il(g, An))),
          (k = Zi));
      },
      $ = function () {
        ((S._gsap.y = Jr(parseFloat(S._gsap.y) + x.offset) + "px"),
          (S.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(S._gsap.y) +
            ", 0, 1)"),
          (x.offset = x.cacheID = 0));
      },
      ot = function () {
        if (Y) {
          requestAnimationFrame(F);
          var et = Jr(h.deltaY / 2),
            ht = W(x.v - et);
          if (S && ht !== x.v + x.offset) {
            x.offset = ht - x.v;
            var M = Jr((parseFloat(S && S._gsap.y) || 0) - x.offset);
            ((S.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              M +
              ", 0, 1)"),
              (S._gsap.y = M + "px"),
              (x.cacheID = jt.cache),
              za());
          }
          return !0;
        }
        (x.offset && $(), (Y = !0));
      },
      P,
      bt,
      _t,
      vt,
      N = function () {
        (J(),
          P.isActive() &&
            P.vars.scrollY > m &&
            (x() > m ? P.progress(1) && x(m) : P.resetTo("scrollY", m)));
      };
    return (
      S && at.set(S, { y: "+=0" }),
      (l.ignoreCheck = function (V) {
        return (
          (ti && V.type === "touchmove" && ot()) ||
          (b > 1.05 && V.type !== "touchstart") ||
          h.isGesturing ||
          (V.touches && V.touches.length > 1)
        );
      }),
      (l.onPress = function () {
        Y = !1;
        var V = b;
        ((b = Jr(((wt.visualViewport && wt.visualViewport.scale) || 1) / D)),
          P.pause(),
          V !== b && Vh(g, b > 1.01 ? !0 : i ? !1 : "x"),
          (bt = O()),
          (_t = x()),
          J(),
          (k = Zi));
      }),
      (l.onRelease = l.onGestureStart =
        function (V, et) {
          if ((x.offset && $(), !et)) vt.restart(!0);
          else {
            jt.cache++;
            var ht = G(),
              M,
              E;
            (i &&
              ((M = O()),
              (E = M + (ht * 0.05 * -V.velocityX) / 0.227),
              (ht *= gg(O, M, E, Il(g, An))),
              (P.vars.scrollX = j(E))),
              (M = x()),
              (E = M + (ht * 0.05 * -V.velocityY) / 0.227),
              (ht *= gg(x, M, E, Il(g, ke))),
              (P.vars.scrollY = W(E)),
              P.invalidate().duration(ht).play(0.01),
              ((ti && P.vars.scrollY >= m) || M >= m - 1) &&
                at.to({}, { onUpdate: N, duration: ht }));
          }
          o && o(V);
        }),
      (l.onWheel = function () {
        (P._ts && P.pause(), hn() - X > 1e3 && ((k = 0), (X = hn())));
      }),
      (l.onChange = function (V, et, ht, M, E) {
        if (
          (Zi !== k && J(),
          et &&
            i &&
            O(j(M[2] === et ? bt + (V.startX - V.x) : O() + et - M[1])),
          ht)
        ) {
          x.offset && $();
          var q = E[2] === ht,
            I = q ? _t + V.startY - V.y : x() + ht - E[1],
            tt = W(I);
          (q && I !== tt && (_t += tt - I), x(tt));
        }
        (ht || et) && za();
      }),
      (l.onEnable = function () {
        (Vh(g, i ? !1 : "x"),
          gt.addEventListener("refresh", N),
          We(wt, "resize", N),
          x.smooth &&
            ((x.target.style.scrollBehavior = "auto"),
            (x.smooth = O.smooth = !1)),
          Q.enable());
      }),
      (l.onDisable = function () {
        (Vh(g, !0),
          Fe(wt, "resize", N),
          gt.removeEventListener("refresh", N),
          Q.kill());
      }),
      (l.lockAxis = l.lockAxis !== !1),
      (h = new Re(l)),
      (h.iOS = ti),
      ti && !x() && x(1),
      ti && at.ticker.add(Wl),
      (vt = h._dc),
      (P = at.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: X_(x, x(), function () {
            return P.pause();
          }),
        },
        onUpdate: za,
        onComplete: vt.vars.onComplete,
      })),
      h
    );
  };
gt.sort = function (d) {
  if (pn(d)) return Ct.sort(d);
  var l = wt.pageYOffset || 0;
  return (
    gt.getAll().forEach(function (u) {
      return (u._sortY = u.trigger
        ? l + u.trigger.getBoundingClientRect().top
        : u.start + wt.innerHeight);
    }),
    Ct.sort(
      d ||
        function (u, i) {
          return (
            (u.vars.refreshPriority || 0) * -1e6 +
            (u.vars.containerAnimation ? 1e6 : u._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
gt.observe = function (d) {
  return new Re(d);
};
gt.normalizeScroll = function (d) {
  if (typeof d > "u") return bn;
  if (d === !0 && bn) return bn.enable();
  if (d === !1) {
    (bn && bn.kill(), (bn = d));
    return;
  }
  var l = d instanceof Re ? d : VS(d);
  return (
    bn && bn.target === l.target && bn.kill(),
    ki(l.target) && (bn = l),
    l
  );
};
gt.core = {
  _getVelocityProp: rd,
  _inputObserver: G_,
  _scrollers: jt,
  _proxies: ta,
  bridge: {
    ss: function () {
      (Nl || Ji("scrollStart"), (Nl = hn()));
    },
    ref: function () {
      return on;
    },
  },
};
D_() && at.registerPlugin(gt);
const ZS = (d) => d.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  kS = (d) =>
    d.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, u, i) =>
      i ? i.toUpperCase() : u.toLowerCase(),
    ),
  vg = (d) => {
    const l = kS(d);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  Q_ = (...d) =>
    d
      .filter((l, u, i) => !!l && l.trim() !== "" && i.indexOf(l) === u)
      .join(" ")
      .trim(),
  KS = (d) => {
    for (const l in d)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
var JS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const FS = rt.forwardRef(
  (
    {
      color: d = "currentColor",
      size: l = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: i,
      className: r = "",
      children: f,
      iconNode: o,
      ...h
    },
    m,
  ) =>
    rt.createElement(
      "svg",
      {
        ref: m,
        ...JS,
        width: l,
        height: l,
        stroke: d,
        strokeWidth: i ? (Number(u) * 24) / Number(l) : u,
        className: Q_("lucide", r),
        ...(!f && !KS(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...o.map(([g, _]) => rt.createElement(g, _)),
        ...(Array.isArray(f) ? f : [f]),
      ],
    ),
);
const Oa = (d, l) => {
  const u = rt.forwardRef(({ className: i, ...r }, f) =>
    rt.createElement(FS, {
      ref: f,
      iconNode: l,
      className: Q_(`lucide-${ZS(vg(d))}`, `lucide-${d}`, i),
      ...r,
    }),
  );
  return ((u.displayName = vg(d)), u);
};
const WS = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  $u = Oa("arrow-right", WS);
const $S = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  PS = Oa("clock", $S);
const IS = [
    [
      "path",
      {
        d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
        key: "nnexq3",
      },
    ],
    [
      "path",
      { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
    ],
  ],
  V_ = Oa("leaf", IS);
const t2 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  e2 = Oa("mail", t2);
const n2 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  l2 = Oa("map-pin", n2);
const a2 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  i2 = Oa("menu", a2);
const u2 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  r2 = Oa("plus", u2);
const s2 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  c2 = Oa("send", s2);
const f2 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  o2 = Oa("x", f2),
  h2 = () => {
    const [d, l] = rt.useState(!1),
      [u, i] = rt.useState(!1);
    rt.useEffect(() => {
      const f = () => {
        l(window.scrollY > 100);
      };
      return (
        window.addEventListener("scroll", f, { passive: !0 }),
        () => window.removeEventListener("scroll", f)
      );
    }, []);
    const r = [
      { label: "Shop", href: "#products" },
      { label: "Lookbook", href: "#lifestyle" },
      { label: "Care", href: "#feature" },
      { label: "Contact", href: "#contact" },
    ];
    return z.jsxs(z.Fragment, {
      children: [
        z.jsx("div", {
          "code-path": "src/components/Navigation.tsx:27:7",
          className: "fixed top-6 left-6 z-[1000]",
          children: z.jsxs("a", {
            "code-path": "src/components/Navigation.tsx:28:9",
            href: "#",
            className:
              "flex items-center gap-2 text-cream font-heading font-bold text-lg tracking-tight",
            children: [
              z.jsx(V_, {
                "code-path": "src/components/Navigation.tsx:32:11",
                className: "w-5 h-5 text-mint",
              }),
              z.jsx("span", {
                "code-path": "src/components/Navigation.tsx:33:11",
                children: "Bold Growth",
              }),
            ],
          }),
        }),
        z.jsx("nav", {
          "code-path": "src/components/Navigation.tsx:38:7",
          className: `fixed top-6 right-6 z-[1000] hidden md:block transition-all duration-500 ${d ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`,
          children: z.jsx("div", {
            "code-path": "src/components/Navigation.tsx:43:9",
            className: "glass rounded-xl px-2 py-2",
            children: z.jsx("ul", {
              "code-path": "src/components/Navigation.tsx:44:11",
              className: "flex items-center gap-1",
              children: r.map((f) =>
                z.jsx(
                  "li",
                  {
                    "code-path": "src/components/Navigation.tsx:46:15",
                    children: z.jsx("a", {
                      "code-path": "src/components/Navigation.tsx:47:17",
                      href: f.href,
                      className:
                        "px-4 py-2 text-sm text-cream/80 hover:text-cream rounded-lg transition-colors duration-200 hover:bg-cream/5",
                      children: f.label,
                    }),
                  },
                  f.label,
                ),
              ),
            }),
          }),
        }),
        z.jsx("button", {
          "code-path": "src/components/Navigation.tsx:60:7",
          onClick: () => i(!u),
          className: `fixed top-5 right-5 z-[1001] md:hidden glass rounded-xl p-3 transition-all duration-300 ${d || u ? "opacity-100" : "opacity-0 pointer-events-none"}`,
          children: u
            ? z.jsx(o2, {
                "code-path": "src/components/Navigation.tsx:67:11",
                className: "w-5 h-5 text-cream",
              })
            : z.jsx(i2, {
                "code-path": "src/components/Navigation.tsx:69:11",
                className: "w-5 h-5 text-cream",
              }),
        }),
        z.jsxs("div", {
          "code-path": "src/components/Navigation.tsx:74:7",
          className: `fixed inset-0 z-[999] md:hidden transition-all duration-500 ${u ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
          children: [
            z.jsx("div", {
              "code-path": "src/components/Navigation.tsx:79:9",
              className: "absolute inset-0 bg-forest/95 backdrop-blur-xl",
            }),
            z.jsx("div", {
              "code-path": "src/components/Navigation.tsx:80:9",
              className:
                "relative h-full flex flex-col items-center justify-center gap-8",
              children: r.map((f, o) =>
                z.jsx(
                  "a",
                  {
                    "code-path": "src/components/Navigation.tsx:82:13",
                    href: f.href,
                    onClick: () => i(!1),
                    className:
                      "text-2xl font-heading font-bold text-cream hover:text-mint transition-colors",
                    style: { animationDelay: `${o * 100}ms` },
                    children: f.label,
                  },
                  f.label,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  };
Lt.registerPlugin(gt);
const d2 = ({ className: d = "" }) => {
  const l = rt.useRef(null),
    u = rt.useRef(null),
    i = rt.useRef(null),
    r = rt.useRef(null),
    f = rt.useRef(null);
  return (
    rt.useEffect(() => {
      const o = Lt.context(() => {
        const h = Lt.timeline({ defaults: { ease: "power3.out" } });
        h.fromTo(
          u.current,
          { scale: 1.08, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 },
          0,
        );
        const m = i.current?.querySelectorAll(".word");
        (m &&
          h.fromTo(
            m,
            { y: 40, opacity: 0, rotateX: 18 },
            { y: 0, opacity: 1, rotateX: 0, stagger: 0.08, duration: 0.8 },
            0.3,
          ),
          h.fromTo(
            r.current,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            0.7,
          ),
          h.fromTo(
            f.current,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            0.85,
          ));
      }, l);
      return () => o.revert();
    }, []),
    rt.useLayoutEffect(() => {
      const o = l.current;
      if (!o) return;
      const h = Lt.context(() => {
        const m = Lt.timeline({
          scrollTrigger: {
            trigger: o,
            start: "top top",
            end: "+=130%",
            pin: !0,
            scrub: 0.6,
            onLeaveBack: () => {
              (Lt.set([i.current, r.current, f.current], {
                opacity: 1,
                x: 0,
                y: 0,
              }),
                Lt.set(u.current, { scale: 1, y: 0 }));
            },
          },
        });
        (m.fromTo(
          i.current,
          { x: 0, opacity: 1 },
          { x: "-18vw", opacity: 0, ease: "power2.in" },
          0.7,
        ),
          m.fromTo(
            r.current,
            { y: 0, opacity: 1 },
            { y: "10vh", opacity: 0, ease: "power2.in" },
            0.72,
          ),
          m.fromTo(
            f.current,
            { y: 0, opacity: 1 },
            { y: "10vh", opacity: 0, ease: "power2.in" },
            0.74,
          ),
          m.fromTo(
            u.current,
            { scale: 1, y: 0 },
            { scale: 1.06, y: "-4vh", ease: "none" },
            0.7,
          ));
      }, o);
      return () => h.revert();
    }, []),
    z.jsxs("section", {
      "code-path": "src/sections/HeroSection.tsx:125:5",
      ref: l,
      id: "hero",
      className: `section-pinned bg-forest ${d}`,
      children: [
        z.jsxs("div", {
          "code-path": "src/sections/HeroSection.tsx:131:7",
          ref: u,
          className: "absolute inset-0 w-full h-full",
          style: { opacity: 0 },
          children: [
            z.jsx("img", {
              "code-path": "src/sections/HeroSection.tsx:136:9",
              src: "/images/hero-bg.jpg",
              alt: "Liquid glass botanical background",
              className: "w-full h-full object-cover img-botanical",
            }),
            z.jsx("div", {
              "code-path": "src/sections/HeroSection.tsx:142:9",
              className:
                "absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/50 to-transparent",
            }),
            z.jsx("div", {
              "code-path": "src/sections/HeroSection.tsx:143:9",
              className:
                "absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-forest/30",
            }),
          ],
        }),
        z.jsxs("div", {
          "code-path": "src/sections/HeroSection.tsx:147:7",
          className:
            "relative z-10 h-full flex flex-col justify-center px-6 md:px-[7vw]",
          children: [
            z.jsx("div", {
              "code-path": "src/sections/HeroSection.tsx:149:9",
              ref: i,
              className: "max-w-[62vw] mt-[10vh]",
              style: { perspective: "1000px" },
              children: z.jsxs("h1", {
                "code-path": "src/sections/HeroSection.tsx:154:11",
                className:
                  "font-heading font-black text-hero text-cream uppercase leading-[0.95] tracking-[-0.02em]",
                children: [
                  z.jsx("span", {
                    "code-path": "src/sections/HeroSection.tsx:155:13",
                    className: "word inline-block",
                    children: "BRING",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/HeroSection.tsx:156:13",
                    className: "word inline-block liquid-glass",
                    children: "NATURE",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/HeroSection.tsx:157:13",
                    className: "word inline-block",
                    children: "HOME",
                  }),
                ],
              }),
            }),
            z.jsx("div", {
              "code-path": "src/sections/HeroSection.tsx:162:9",
              ref: r,
              className: "mt-8 md:mt-12",
              children: z.jsxs("a", {
                "code-path": "src/sections/HeroSection.tsx:163:11",
                href: "#products",
                className: "btn-primary inline-flex items-center gap-3 group",
                children: [
                  z.jsx("span", {
                    "code-path": "src/sections/HeroSection.tsx:167:13",
                    children: "Shop the collection",
                  }),
                  z.jsx($u, {
                    "code-path": "src/sections/HeroSection.tsx:168:13",
                    className:
                      "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                  }),
                ],
              }),
            }),
            z.jsx("p", {
              "code-path": "src/sections/HeroSection.tsx:173:9",
              ref: f,
              className:
                "mt-6 text-body text-sage max-w-[34vw] hidden md:block",
              children:
                "Handpicked plants, delivered with care. Styled for modern living.",
            }),
          ],
        }),
      ],
    })
  );
};
Lt.registerPlugin(gt);
const p2 = ({ className: d = "" }) => {
  const l = rt.useRef(null),
    u = rt.useRef(null),
    i = rt.useRef(null),
    r = rt.useRef(null),
    f = rt.useRef(null);
  return (
    rt.useLayoutEffect(() => {
      const o = l.current;
      if (!o) return;
      const h = Lt.context(() => {
        const m = Lt.timeline({
          scrollTrigger: {
            trigger: o,
            start: "top top",
            end: "+=130%",
            pin: !0,
            scrub: 0.6,
          },
        });
        m.fromTo(
          u.current,
          { scale: 1.1, y: "6vh", opacity: 0.6 },
          { scale: 1, y: 0, opacity: 1, ease: "none" },
          0,
        );
        const g = i.current?.querySelectorAll(".word");
        (g &&
          m.fromTo(
            g,
            { x: "-18vw", opacity: 0, rotateY: -18 },
            { x: 0, opacity: 1, rotateY: 0, stagger: 0.03, ease: "none" },
            0,
          ),
          m.fromTo(
            [r.current, f.current],
            { y: "10vh", opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.02, ease: "none" },
            0.1,
          ),
          m.fromTo(
            i.current,
            { y: 0, opacity: 1 },
            { y: "-10vh", opacity: 0, ease: "power2.in" },
            0.7,
          ),
          m.fromTo(
            [r.current, f.current],
            { y: 0, opacity: 1 },
            { y: "-8vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
            0.72,
          ),
          m.fromTo(
            u.current,
            { scale: 1, x: 0 },
            { scale: 1.05, x: "3vw", ease: "none" },
            0.7,
          ));
      }, o);
      return () => h.revert();
    }, []),
    z.jsxs("section", {
      "code-path": "src/sections/LifestyleSection.tsx:88:5",
      ref: l,
      id: "lifestyle",
      className: `section-pinned bg-forest ${d}`,
      children: [
        z.jsxs("div", {
          "code-path": "src/sections/LifestyleSection.tsx:94:7",
          ref: u,
          className: "absolute inset-0 w-full h-full",
          children: [
            z.jsx("img", {
              "code-path": "src/sections/LifestyleSection.tsx:95:9",
              src: "/images/palm.jpg",
              alt: "Modern living room with palm tree",
              className: "w-full h-full object-cover img-botanical",
            }),
            z.jsx("div", {
              "code-path": "src/sections/LifestyleSection.tsx:101:9",
              className:
                "absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/60 to-transparent",
            }),
            z.jsx("div", {
              "code-path": "src/sections/LifestyleSection.tsx:102:9",
              className:
                "absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/40",
            }),
          ],
        }),
        z.jsxs("div", {
          "code-path": "src/sections/LifestyleSection.tsx:106:7",
          className:
            "relative z-10 h-full flex flex-col justify-center px-6 md:px-[7vw]",
          children: [
            z.jsx("div", {
              "code-path": "src/sections/LifestyleSection.tsx:108:9",
              ref: i,
              className: "max-w-[62vw] mt-[15vh]",
              style: { perspective: "1000px" },
              children: z.jsxs("h2", {
                "code-path": "src/sections/LifestyleSection.tsx:113:11",
                className:
                  "font-heading font-black text-section text-cream uppercase leading-[1.0] tracking-[-0.01em]",
                children: [
                  z.jsx("span", {
                    "code-path": "src/sections/LifestyleSection.tsx:114:13",
                    className: "word inline-block",
                    children: "A",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/LifestyleSection.tsx:115:13",
                    className: "word inline-block",
                    children: "LIVING",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/LifestyleSection.tsx:116:13",
                    className: "word inline-block",
                    children: "ROOM,",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/LifestyleSection.tsx:117:13",
                    className: "word inline-block liquid-glass",
                    children: "REIMAGINED",
                  }),
                ],
              }),
            }),
            z.jsx("p", {
              "code-path": "src/sections/LifestyleSection.tsx:122:9",
              ref: r,
              className:
                "mt-6 md:mt-8 text-lg md:text-xl text-sage max-w-[38vw]",
              children: "Statement plants for calm, curated spaces.",
            }),
            z.jsxs("a", {
              "code-path": "src/sections/LifestyleSection.tsx:130:9",
              ref: f,
              href: "#products",
              className:
                "btn-primary inline-flex items-center gap-3 mt-8 w-fit group",
              children: [
                z.jsx("span", {
                  "code-path": "src/sections/LifestyleSection.tsx:135:11",
                  children: "Explore the lookbook",
                }),
                z.jsx($u, {
                  "code-path": "src/sections/LifestyleSection.tsx:136:11",
                  className:
                    "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
Lt.registerPlugin(gt);
const m2 = [
    {
      id: 1,
      name: "Eucalyptus",
      basePrice: 49,
      options: [
        { size: "Small", price: 4 },
        { size: "Medium", price: 49 },
        { size: "Large", price: 89 },
      ],
      image: import.meta.env.BASE_URL + "images/eucalyptus.jpg",
      description: "Aromatic silver-dollar leaves",
    },
    {
      id: 2,
      name: "Palm Tree",
      basePrice: 89,
      options: [
        { size: "Small", price: 15 },
        { size: "Medium", price: 89 },
        { size: "Large", price: 149 },
      ],
      image: "/images/palm.jpg",
      description: "Tropical elegance for any space",
    },
    {
      id: 3,
      name: "Snake Plant",
      basePrice: 35,
      options: [
        { size: "Small", price: 35 },
        { size: "Medium", price: 55 },
        { size: "Large", price: 85 },
      ],
      image: "/images/snake-plant.jpg",
      description: "Architectural and low-maintenance",
    },
    {
      id: 4,
      name: "Money Plant",
      basePrice: 42,
      options: [
        { size: "Small", price: 42 },
        { size: "Medium", price: 65 },
        { size: "Large", price: 95 },
      ],
      image: "/images/money-plant.jpg",
      description: "Braided trunk, glossy leaves",
    },
    {
      id: 5,
      name: "Tomato Plant",
      basePrice: 28,
      options: [
        { size: "Small", price: 5 },
        { size: "Medium", price: 28 },
        { size: "Large", price: 45 },
      ],
      image: "/images/tomato-plant.jpg",
      description: "Grow your own fresh tomatoes",
    },
    {
      id: 6,
      name: "Monstera",
      basePrice: 59,
      options: [
        { size: "Small", price: 59 },
        { size: "Medium", price: 89 },
        { size: "Large", price: 129 },
      ],
      image: import.meta.env.BASE_URL + "images/eucalyptus.jpg",
      description: "Iconic split leaves",
    },
  ],
  g2 = ({ options: d, selectedIndex: l, onChange: u }) =>
    z.jsx("div", {
      "code-path": "src/sections/ProductsSection.tsx:107:5",
      className: "relative flex items-center",
      children: z.jsxs("div", {
        "code-path": "src/sections/ProductsSection.tsx:109:7",
        className:
          "relative h-8 bg-forest-light/80 rounded-full flex items-center px-1 cursor-pointer",
        style: { width: "140px" },
        children: [
          z.jsxs("span", {
            "code-path": "src/sections/ProductsSection.tsx:114:9",
            className: "absolute left-3 text-xs text-sage/70 font-medium",
            children: ["Make it ", d[l].price, "$"],
          }),
          z.jsx("div", {
            "code-path": "src/sections/ProductsSection.tsx:119:9",
            className:
              "absolute w-7 h-7 bg-[#3B82F6] rounded-full shadow-lg transition-all duration-300 ease-out flex items-center justify-center cursor-pointer hover:bg-[#2563EB]",
            style: { left: l === 0 ? "4px" : l === 1 ? "52px" : "100px" },
            onClick: () => u((l + 1) % d.length),
            children: z.jsx("div", {
              "code-path": "src/sections/ProductsSection.tsx:126:11",
              className: "w-2 h-2 bg-white/80 rounded-full",
            }),
          }),
          z.jsx("div", {
            "code-path": "src/sections/ProductsSection.tsx:130:9",
            className: "flex w-full",
            children: d.map((i, r) =>
              z.jsx(
                "div",
                {
                  "code-path": "src/sections/ProductsSection.tsx:132:13",
                  className: "flex-1 h-full cursor-pointer",
                  onClick: () => u(r),
                },
                r,
              ),
            ),
          }),
        ],
      }),
    }),
  _2 = ({ product: d, cardRef: l }) => {
    const [u, i] = rt.useState(1);
    return z.jsxs("div", {
      "code-path": "src/sections/ProductsSection.tsx:155:5",
      ref: l,
      className: "plant-card group cursor-pointer",
      children: [
        z.jsxs("div", {
          "code-path": "src/sections/ProductsSection.tsx:160:7",
          className: "relative aspect-[4/5] overflow-hidden",
          children: [
            z.jsx("img", {
              "code-path": "src/sections/ProductsSection.tsx:161:9",
              src: d.image,
              alt: d.name,
              className:
                "w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] img-botanical",
            }),
            z.jsx("div", {
              "code-path": "src/sections/ProductsSection.tsx:167:9",
              className:
                "absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300",
              children: z.jsxs("button", {
                "code-path": "src/sections/ProductsSection.tsx:168:11",
                className:
                  "glass-accent rounded-full px-4 py-2 flex items-center gap-2 text-mint text-sm font-medium",
                children: [
                  z.jsx(r2, {
                    "code-path": "src/sections/ProductsSection.tsx:169:13",
                    className: "w-4 h-4",
                  }),
                  z.jsx("span", {
                    "code-path": "src/sections/ProductsSection.tsx:170:13",
                    children: "Quick add",
                  }),
                ],
              }),
            }),
          ],
        }),
        z.jsxs("div", {
          "code-path": "src/sections/ProductsSection.tsx:176:7",
          className: "p-5",
          children: [
            z.jsxs("div", {
              "code-path": "src/sections/ProductsSection.tsx:178:9",
              className: "flex items-center justify-between mb-2",
              children: [
                z.jsx("h3", {
                  "code-path": "src/sections/ProductsSection.tsx:179:11",
                  className: "font-heading font-bold text-cream text-lg",
                  children: d.name,
                }),
                z.jsx(g2, {
                  "code-path": "src/sections/ProductsSection.tsx:182:11",
                  options: d.options,
                  selectedIndex: u,
                  onChange: i,
                }),
              ],
            }),
            z.jsx("p", {
              "code-path": "src/sections/ProductsSection.tsx:190:9",
              className: "text-sage/70 text-sm mb-3",
              children: d.description,
            }),
            z.jsx("div", {
              "code-path": "src/sections/ProductsSection.tsx:195:9",
              className: "flex items-center justify-end",
              children: z.jsxs("span", {
                "code-path": "src/sections/ProductsSection.tsx:196:11",
                className: "text-mint font-medium whitespace-nowrap",
                children: ["From $", d.options[u].price],
              }),
            }),
          ],
        }),
      ],
    });
  },
  y2 = ({ className: d = "" }) => {
    const l = rt.useRef(null),
      u = rt.useRef(null),
      i = rt.useRef([]);
    return (
      rt.useLayoutEffect(() => {
        const r = l.current;
        if (!r) return;
        const f = Lt.context(() => {
          (Lt.fromTo(
            u.current,
            { x: "-8vw", opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: u.current,
                start: "top 80%",
                end: "top 40%",
                toggleActions: "play none none reverse",
              },
            },
          ),
            i.current.forEach((o, h) => {
              o &&
                Lt.fromTo(
                  o,
                  { y: "10vh", opacity: 0, scale: 0.96 },
                  {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    delay: h * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: o,
                      start: "top 85%",
                      end: "top 55%",
                      toggleActions: "play none none reverse",
                    },
                  },
                );
            }));
        }, r);
        return () => f.revert();
      }, []),
      z.jsxs("section", {
        "code-path": "src/sections/ProductsSection.tsx:261:5",
        ref: l,
        id: "products",
        className: `relative bg-forest py-20 md:py-32 ${d}`,
        children: [
          z.jsx("div", {
            "code-path": "src/sections/ProductsSection.tsx:267:7",
            className:
              "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,26,18,0.4)_100%)]",
          }),
          z.jsxs("div", {
            "code-path": "src/sections/ProductsSection.tsx:269:7",
            className: "relative z-10 px-6 md:px-[7vw]",
            children: [
              z.jsxs("h2", {
                "code-path": "src/sections/ProductsSection.tsx:271:9",
                ref: u,
                className:
                  "font-heading font-black text-section text-cream uppercase leading-[1.0] tracking-[-0.01em] mb-16 md:mb-24",
                children: [
                  "GREENERY FOR EVERY",
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/ProductsSection.tsx:276:11",
                    className: "liquid-glass",
                    children: "CORNER",
                  }),
                ],
              }),
              z.jsx("div", {
                "code-path": "src/sections/ProductsSection.tsx:280:9",
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                children: m2.map((r, f) =>
                  z.jsx(
                    _2,
                    {
                      "code-path": "src/sections/ProductsSection.tsx:282:13",
                      product: r,
                      cardRef: (o) => {
                        i.current[f] = o;
                      },
                    },
                    r.id,
                  ),
                ),
              }),
            ],
          }),
        ],
      })
    );
  };
Lt.registerPlugin(gt);
const v2 = ({ className: d = "" }) => {
  const l = rt.useRef(null),
    u = rt.useRef(null),
    i = rt.useRef(null),
    r = rt.useRef(null),
    f = rt.useRef(null);
  return (
    rt.useLayoutEffect(() => {
      const h = l.current;
      if (!h) return;
      const m = Lt.context(() => {
        const g = Lt.timeline({
          scrollTrigger: {
            trigger: h,
            start: "top top",
            end: "+=130%",
            pin: !0,
            scrub: 0.6,
          },
        });
        g.fromTo(
          u.current,
          { scale: 1.12, opacity: 0.5 },
          { scale: 1, opacity: 1, ease: "none" },
          0,
        );
        const _ = i.current?.querySelectorAll(".char");
        (_ &&
          g.fromTo(
            _,
            { y: "6vh", opacity: 0, rotateX: 22 },
            { y: 0, opacity: 1, rotateX: 0, stagger: 0.01, ease: "none" },
            0,
          ),
          g.fromTo(
            r.current,
            { scale: 0.92, opacity: 0, y: "4vh" },
            { scale: 1, opacity: 1, y: 0, ease: "none" },
            0.15,
          ),
          g.fromTo(
            f.current,
            { opacity: 0, y: "3vh" },
            { opacity: 1, y: 0, ease: "none" },
            0.25,
          ),
          g.fromTo(
            [i.current, r.current],
            { scale: 1, opacity: 1 },
            { scale: 1.06, opacity: 0, ease: "power2.in" },
            0.7,
          ),
          g.fromTo(
            f.current,
            { opacity: 1 },
            { opacity: 0, ease: "power2.in" },
            0.72,
          ),
          g.fromTo(
            u.current,
            { x: 0, scale: 1 },
            { x: "-4vw", scale: 1.05, ease: "none" },
            0.7,
          ));
      }, h);
      return () => m.revert();
    }, []),
    z.jsxs("section", {
      "code-path": "src/sections/PhilosophySection.tsx:97:5",
      ref: l,
      id: "philosophy",
      className: `section-pinned bg-forest ${d}`,
      children: [
        z.jsxs("div", {
          "code-path": "src/sections/PhilosophySection.tsx:103:7",
          ref: u,
          className: "absolute inset-0 w-full h-full",
          children: [
            z.jsx("img", {
              "code-path": "src/sections/PhilosophySection.tsx:104:9",
              src: "/images/snake-plant.jpg",
              alt: "Snake plant close-up",
              className: "w-full h-full object-cover img-botanical",
            }),
            z.jsx("div", {
              "code-path": "src/sections/PhilosophySection.tsx:110:9",
              className:
                "absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/50 to-forest/70",
            }),
            z.jsx("div", {
              "code-path": "src/sections/PhilosophySection.tsx:111:9",
              className:
                "absolute inset-0 bg-gradient-to-b from-forest/60 via-transparent to-forest/80",
            }),
          ],
        }),
        z.jsxs("div", {
          "code-path": "src/sections/PhilosophySection.tsx:115:7",
          className:
            "relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-[7vw]",
          children: [
            z.jsxs("div", {
              "code-path": "src/sections/PhilosophySection.tsx:117:9",
              className: "text-center",
              style: { perspective: "1000px" },
              children: [
                z.jsx("div", {
                  "code-path": "src/sections/PhilosophySection.tsx:118:11",
                  ref: i,
                  className:
                    "font-heading font-black text-hero text-cream uppercase leading-[0.95] tracking-[-0.02em]",
                  children: "MINIMAL. MODERN.".split("").map((h, m) =>
                    z.jsx(
                      "span",
                      {
                        "code-path":
                          "src/sections/PhilosophySection.tsx:123:15",
                        className: "char inline-block",
                        style: {
                          display: h === " " ? "inline" : "inline-block",
                        },
                        children: h === " " ? " " : h,
                      },
                      m,
                    ),
                  ),
                }),
                z.jsx("div", {
                  "code-path": "src/sections/PhilosophySection.tsx:132:11",
                  className: "mt-2 md:mt-4",
                  children: z.jsx("span", {
                    "code-path": "src/sections/PhilosophySection.tsx:133:13",
                    ref: r,
                    className:
                      "font-heading font-black text-hero liquid-glass uppercase leading-[0.95] tracking-[-0.02em]",
                    children: "ALIVE.",
                  }),
                }),
              ],
            }),
            z.jsxs("a", {
              "code-path": "src/sections/PhilosophySection.tsx:143:9",
              ref: f,
              href: "#feature",
              className:
                "btn-primary inline-flex items-center gap-3 mt-12 group",
              children: [
                z.jsx("span", {
                  "code-path": "src/sections/PhilosophySection.tsx:148:11",
                  children: "Read our story",
                }),
                z.jsx($u, {
                  "code-path": "src/sections/PhilosophySection.tsx:149:11",
                  className:
                    "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
Lt.registerPlugin(gt);
const x2 = ({ className: d = "" }) => {
  const l = rt.useRef(null),
    u = rt.useRef(null),
    i = rt.useRef(null),
    r = rt.useRef(null),
    f = rt.useRef(null);
  return (
    rt.useLayoutEffect(() => {
      const o = l.current;
      if (!o) return;
      const h = Lt.context(() => {
        const m = Lt.timeline({
          scrollTrigger: {
            trigger: o,
            start: "top top",
            end: "+=130%",
            pin: !0,
            scrub: 0.6,
          },
        });
        m.fromTo(
          u.current,
          { x: "6vw", scale: 1.08, opacity: 0.6 },
          { x: 0, scale: 1, opacity: 1, ease: "none" },
          0,
        );
        const g = i.current?.querySelectorAll(".word");
        (g &&
          m.fromTo(
            g,
            { x: "-20vw", opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.03, ease: "none" },
            0,
          ),
          m.fromTo(
            [r.current, f.current],
            { y: "8vh", opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.02, ease: "none" },
            0.15,
          ),
          m.fromTo(
            i.current,
            { x: 0, opacity: 1 },
            { x: "12vw", opacity: 0, ease: "power2.in" },
            0.7,
          ),
          m.fromTo(
            [r.current, f.current],
            { y: 0, opacity: 1 },
            { y: "-6vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
            0.72,
          ),
          m.fromTo(
            u.current,
            { scale: 1, y: 0 },
            { scale: 1.06, y: "-3vh", ease: "none" },
            0.7,
          ));
      }, o);
      return () => h.revert();
    }, []),
    z.jsxs("section", {
      "code-path": "src/sections/FeatureSection.tsx:88:5",
      ref: l,
      id: "feature",
      className: `section-pinned bg-forest ${d}`,
      children: [
        z.jsxs("div", {
          "code-path": "src/sections/FeatureSection.tsx:94:7",
          ref: u,
          className: "absolute inset-0 w-full h-full",
          children: [
            z.jsx("img", {
              "code-path": "src/sections/FeatureSection.tsx:95:9",
              src: "/images/money-plant.jpg",
              alt: "Money plant in interior",
              className: "w-full h-full object-cover img-botanical",
            }),
            z.jsx("div", {
              "code-path": "src/sections/FeatureSection.tsx:101:9",
              className:
                "absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/60 to-transparent",
            }),
            z.jsx("div", {
              "code-path": "src/sections/FeatureSection.tsx:102:9",
              className:
                "absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/40",
            }),
          ],
        }),
        z.jsxs("div", {
          "code-path": "src/sections/FeatureSection.tsx:106:7",
          className:
            "relative z-10 h-full flex flex-col justify-center px-6 md:px-[7vw]",
          children: [
            z.jsx("div", {
              "code-path": "src/sections/FeatureSection.tsx:108:9",
              ref: i,
              className: "max-w-[62vw]",
              children: z.jsxs("h2", {
                "code-path": "src/sections/FeatureSection.tsx:109:11",
                className:
                  "font-heading font-black text-section text-cream uppercase leading-[1.0] tracking-[-0.01em]",
                children: [
                  z.jsx("span", {
                    "code-path": "src/sections/FeatureSection.tsx:110:13",
                    className: "word inline-block",
                    children: "CLEAN",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/FeatureSection.tsx:111:13",
                    className: "word inline-block",
                    children: "LINES.",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/FeatureSection.tsx:112:13",
                    className: "word inline-block liquid-glass",
                    children: "LUSH",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/FeatureSection.tsx:113:13",
                    className: "word inline-block",
                    children: "LIFE.",
                  }),
                ],
              }),
            }),
            z.jsx("p", {
              "code-path": "src/sections/FeatureSection.tsx:118:9",
              ref: r,
              className:
                "mt-6 md:mt-8 text-lg md:text-xl text-sage max-w-[40vw]",
              children: "Easy-care varieties that thrive indoors.",
            }),
            z.jsxs("a", {
              "code-path": "src/sections/FeatureSection.tsx:126:9",
              ref: f,
              href: "#sizes",
              className:
                "btn-primary inline-flex items-center gap-3 mt-8 w-fit group",
              children: [
                z.jsx("span", {
                  "code-path": "src/sections/FeatureSection.tsx:131:11",
                  children: "See plant care tips",
                }),
                z.jsx($u, {
                  "code-path": "src/sections/FeatureSection.tsx:132:11",
                  className:
                    "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
Lt.registerPlugin(gt);
const S2 = [
    {
      id: 1,
      name: "Small & Desktop",
      description: "Compact beauties for shelves, desks, and windowsills.",
      cta: "Shop small plants",
      image: "/images/snake-plant.jpg",
    },
    {
      id: 2,
      name: "Medium & Statement",
      description: "Floor plants that fill corners without overwhelming.",
      cta: "Shop medium plants",
      image: import.meta.env.BASE_URL + "images/eucalyptus.jpg",
    },
    {
      id: 3,
      name: "Large & Dramatic",
      description: "Bold silhouettes for high ceilings and open plans.",
      cta: "Shop large plants",
      image: "/images/palm.jpg",
    },
  ],
  b2 = ({ className: d = "" }) => {
    const l = rt.useRef(null),
      u = rt.useRef(null),
      i = rt.useRef([]);
    return (
      rt.useLayoutEffect(() => {
        const r = l.current;
        if (!r) return;
        const f = Lt.context(() => {
          (Lt.fromTo(
            u.current,
            { x: "-6vw", opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: u.current,
                start: "top 80%",
                end: "top 40%",
                toggleActions: "play none none reverse",
              },
            },
          ),
            i.current.forEach((o) => {
              if (!o) return;
              const h = o.querySelector(".card-image"),
                m = o.querySelector(".card-text");
              (Lt.fromTo(
                h,
                { x: "-8vw", opacity: 0, scale: 0.98 },
                {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.7,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: o,
                    start: "top 80%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                  },
                },
              ),
                Lt.fromTo(
                  m,
                  { x: "8vw", opacity: 0 },
                  {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: o,
                      start: "top 80%",
                      end: "top 50%",
                      toggleActions: "play none none reverse",
                    },
                  },
                ));
            }));
        }, r);
        return () => f.revert();
      }, []),
      z.jsx("section", {
        "code-path": "src/sections/SizeCategoriesSection.tsx:112:5",
        ref: l,
        id: "sizes",
        className: `relative bg-forest py-20 md:py-32 ${d}`,
        children: z.jsxs("div", {
          "code-path": "src/sections/SizeCategoriesSection.tsx:117:7",
          className: "relative z-10 px-6 md:px-[7vw]",
          children: [
            z.jsxs("h2", {
              "code-path": "src/sections/SizeCategoriesSection.tsx:119:9",
              ref: u,
              className:
                "font-heading font-black text-section text-cream uppercase leading-[1.0] tracking-[-0.01em] mb-16 md:mb-24",
              children: [
                "PLANTS THAT FIT YOUR",
                " ",
                z.jsx("span", {
                  "code-path": "src/sections/SizeCategoriesSection.tsx:124:11",
                  className: "liquid-glass",
                  children: "SPACE",
                }),
              ],
            }),
            z.jsx("div", {
              "code-path": "src/sections/SizeCategoriesSection.tsx:128:9",
              className: "space-y-16 md:space-y-24",
              children: S2.map((r, f) =>
                z.jsxs(
                  "div",
                  {
                    "code-path":
                      "src/sections/SizeCategoriesSection.tsx:130:13",
                    ref: (o) => {
                      i.current[f] = o;
                    },
                    className: `flex flex-col ${f % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`,
                    children: [
                      z.jsx("div", {
                        "code-path":
                          "src/sections/SizeCategoriesSection.tsx:138:15",
                        className:
                          "card-image w-full md:w-[40vw] aspect-video rounded-2xl overflow-hidden",
                        children: z.jsx("img", {
                          "code-path":
                            "src/sections/SizeCategoriesSection.tsx:139:17",
                          src: r.image,
                          alt: r.name,
                          className: "w-full h-full object-cover img-botanical",
                        }),
                      }),
                      z.jsxs("div", {
                        "code-path":
                          "src/sections/SizeCategoriesSection.tsx:147:15",
                        className: "card-text flex-1 md:px-8",
                        children: [
                          z.jsx("h3", {
                            "code-path":
                              "src/sections/SizeCategoriesSection.tsx:148:17",
                            className:
                              "font-heading font-bold text-2xl md:text-3xl text-cream mb-4",
                            children: r.name,
                          }),
                          z.jsx("p", {
                            "code-path":
                              "src/sections/SizeCategoriesSection.tsx:151:17",
                            className: "text-sage text-lg mb-6",
                            children: r.description,
                          }),
                          z.jsxs("a", {
                            "code-path":
                              "src/sections/SizeCategoriesSection.tsx:154:17",
                            href: "#products",
                            className:
                              "inline-flex items-center gap-2 text-mint font-medium hover:gap-3 transition-all duration-300 group",
                            children: [
                              z.jsx("span", {
                                "code-path":
                                  "src/sections/SizeCategoriesSection.tsx:158:19",
                                children: r.cta,
                              }),
                              z.jsx($u, {
                                "code-path":
                                  "src/sections/SizeCategoriesSection.tsx:159:19",
                                className:
                                  "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  r.id,
                ),
              ),
            }),
          ],
        }),
      })
    );
  };
Lt.registerPlugin(gt);
const T2 = ({ className: d = "" }) => {
  const l = rt.useRef(null),
    u = rt.useRef(null),
    i = rt.useRef(null),
    r = rt.useRef(null),
    f = rt.useRef(null);
  return (
    rt.useLayoutEffect(() => {
      const o = l.current;
      if (!o) return;
      const h = Lt.context(() => {
        const m = Lt.timeline({
          scrollTrigger: {
            trigger: o,
            start: "top top",
            end: "+=130%",
            pin: !0,
            scrub: 0.6,
          },
        });
        m.fromTo(
          u.current,
          { scale: 1.1, opacity: 0.5, y: "6vh" },
          { scale: 1, opacity: 1, y: 0, ease: "none" },
          0,
        );
        const g = i.current?.querySelectorAll(".word");
        (g &&
          m.fromTo(
            g,
            { x: "-18vw", opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.03, ease: "none" },
            0,
          ),
          m.fromTo(
            [r.current, f.current],
            { y: "10vh", opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.02, ease: "none" },
            0.15,
          ),
          m.fromTo(
            i.current,
            { y: 0, opacity: 1 },
            { y: "-10vh", opacity: 0, ease: "power2.in" },
            0.7,
          ),
          m.fromTo(
            [r.current, f.current],
            { y: 0, opacity: 1 },
            { y: "-8vh", opacity: 0, stagger: 0.02, ease: "power2.in" },
            0.72,
          ),
          m.fromTo(
            u.current,
            { scale: 1, x: 0 },
            { scale: 1.05, x: "3vw", ease: "none" },
            0.7,
          ));
      }, o);
      return () => h.revert();
    }, []),
    z.jsxs("section", {
      "code-path": "src/sections/DeliverySection.tsx:88:5",
      ref: l,
      id: "delivery",
      className: `section-pinned bg-forest ${d}`,
      children: [
        z.jsxs("div", {
          "code-path": "src/sections/DeliverySection.tsx:94:7",
          ref: u,
          className: "absolute inset-0 w-full h-full",
          children: [
            z.jsx("img", {
              "code-path": "src/sections/DeliverySection.tsx:95:9",
              src: "/images/tomato-plant.jpg",
              alt: "Plant packaging and delivery",
              className: "w-full h-full object-cover img-botanical",
            }),
            z.jsx("div", {
              "code-path": "src/sections/DeliverySection.tsx:101:9",
              className:
                "absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/60 to-transparent",
            }),
            z.jsx("div", {
              "code-path": "src/sections/DeliverySection.tsx:102:9",
              className:
                "absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/40",
            }),
          ],
        }),
        z.jsxs("div", {
          "code-path": "src/sections/DeliverySection.tsx:106:7",
          className:
            "relative z-10 h-full flex flex-col justify-center px-6 md:px-[7vw]",
          children: [
            z.jsx("div", {
              "code-path": "src/sections/DeliverySection.tsx:108:9",
              ref: i,
              className: "max-w-[62vw]",
              children: z.jsxs("h2", {
                "code-path": "src/sections/DeliverySection.tsx:109:11",
                className:
                  "font-heading font-black text-section text-cream uppercase leading-[1.0] tracking-[-0.01em]",
                children: [
                  z.jsx("span", {
                    "code-path": "src/sections/DeliverySection.tsx:110:13",
                    className: "word inline-block",
                    children: "FROM",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/DeliverySection.tsx:111:13",
                    className: "word inline-block",
                    children: "OUR",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/DeliverySection.tsx:112:13",
                    className: "word inline-block liquid-glass",
                    children: "GREENHOUSE",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/DeliverySection.tsx:113:13",
                    className: "word inline-block",
                    children: "TO",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/DeliverySection.tsx:114:13",
                    className: "word inline-block",
                    children: "YOUR",
                  }),
                  " ",
                  z.jsx("span", {
                    "code-path": "src/sections/DeliverySection.tsx:115:13",
                    className: "word inline-block",
                    children: "HOME",
                  }),
                ],
              }),
            }),
            z.jsx("p", {
              "code-path": "src/sections/DeliverySection.tsx:120:9",
              ref: r,
              className:
                "mt-6 md:mt-8 text-lg md:text-xl text-sage max-w-[40vw]",
              children: "Carefully packed, with guidance to help them thrive.",
            }),
            z.jsxs("a", {
              "code-path": "src/sections/DeliverySection.tsx:128:9",
              ref: f,
              href: "#contact",
              className:
                "btn-primary inline-flex items-center gap-3 mt-8 w-fit group",
              children: [
                z.jsx("span", {
                  "code-path": "src/sections/DeliverySection.tsx:133:11",
                  children: "See how we deliver",
                }),
                z.jsx($u, {
                  "code-path": "src/sections/DeliverySection.tsx:134:11",
                  className:
                    "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
Lt.registerPlugin(gt);
const E2 = ({ className: d = "" }) => {
  const l = rt.useRef(null),
    u = rt.useRef(null),
    i = rt.useRef(null),
    r = rt.useRef(null),
    f = rt.useRef(null),
    [o, h] = rt.useState({ name: "", email: "", message: "" }),
    [m, g] = rt.useState(!1),
    _ = (S) => {
      (S.preventDefault(),
        g(!0),
        setTimeout(() => {
          (h({ name: "", email: "", message: "" }), g(!1));
        }, 3e3));
    };
  rt.useLayoutEffect(() => {
    const S = l.current;
    if (!S) return;
    const x = Lt.context(() => {
      (Lt.fromTo(
        u.current,
        { y: "6vh", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: u.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      ),
        Lt.fromTo(
          i.current,
          { x: "-4vw", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: i.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        ),
        Lt.fromTo(
          r.current,
          { x: "4vw", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: r.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        ),
        Lt.fromTo(
          f.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: f.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        ));
    }, S);
    return () => x.revert();
  }, []);
  const v = [
    { label: "Shop", href: "#products" },
    { label: "Lookbook", href: "#lifestyle" },
    { label: "Plant Care", href: "#feature" },
    { label: "Shipping", href: "#delivery" },
    { label: "Privacy", href: "#" },
  ];
  return z.jsxs("section", {
    "code-path": "src/sections/ContactSection.tsx:123:5",
    ref: l,
    id: "contact",
    className: `relative bg-forest-light ${d}`,
    children: [
      z.jsx("div", {
        "code-path": "src/sections/ContactSection.tsx:129:7",
        className: "absolute inset-0 opacity-10",
        children: z.jsx("img", {
          "code-path": "src/sections/ContactSection.tsx:130:9",
          src: "/images/hero-bg.jpg",
          alt: "",
          className: "w-full h-full object-cover",
        }),
      }),
      z.jsxs("div", {
        "code-path": "src/sections/ContactSection.tsx:137:7",
        className: "relative z-10",
        children: [
          z.jsx("div", {
            "code-path": "src/sections/ContactSection.tsx:139:9",
            className: "px-6 md:px-[7vw] py-20 md:py-32",
            children: z.jsxs("div", {
              "code-path": "src/sections/ContactSection.tsx:140:11",
              className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24",
              children: [
                z.jsxs("div", {
                  "code-path": "src/sections/ContactSection.tsx:142:13",
                  children: [
                    z.jsxs("div", {
                      "code-path": "src/sections/ContactSection.tsx:144:15",
                      ref: u,
                      children: [
                        z.jsxs("h2", {
                          "code-path": "src/sections/ContactSection.tsx:145:17",
                          className:
                            "font-heading font-black text-section text-cream uppercase leading-[1.0] tracking-[-0.01em] mb-6",
                          children: [
                            "READY TO",
                            " ",
                            z.jsx("span", {
                              "code-path":
                                "src/sections/ContactSection.tsx:147:19",
                              className: "liquid-glass",
                              children: "GROW?",
                            }),
                          ],
                        }),
                        z.jsx("p", {
                          "code-path": "src/sections/ContactSection.tsx:149:17",
                          className: "text-sage text-lg mb-12",
                          children:
                            "Ask us about sizing, care, or styling. We reply within one business day.",
                        }),
                      ],
                    }),
                    z.jsxs("div", {
                      "code-path": "src/sections/ContactSection.tsx:155:15",
                      ref: i,
                      className: "space-y-6",
                      children: [
                        z.jsxs("div", {
                          "code-path": "src/sections/ContactSection.tsx:156:17",
                          className: "flex items-start gap-4",
                          children: [
                            z.jsx("div", {
                              "code-path":
                                "src/sections/ContactSection.tsx:157:19",
                              className:
                                "w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0",
                              children: z.jsx(e2, {
                                "code-path":
                                  "src/sections/ContactSection.tsx:158:21",
                                className: "w-5 h-5 text-mint",
                              }),
                            }),
                            z.jsxs("div", {
                              "code-path":
                                "src/sections/ContactSection.tsx:160:19",
                              children: [
                                z.jsx("p", {
                                  "code-path":
                                    "src/sections/ContactSection.tsx:161:21",
                                  className: "text-sage text-sm mb-1",
                                  children: "Email",
                                }),
                                z.jsx("p", {
                                  "code-path":
                                    "src/sections/ContactSection.tsx:162:21",
                                  className: "text-cream font-medium",
                                  children: "XXXX",
                                }),
                              ],
                            }),
                          ],
                        }),
                        z.jsxs("div", {
                          "code-path": "src/sections/ContactSection.tsx:166:17",
                          className: "flex items-start gap-4",
                          children: [
                            z.jsx("div", {
                              "code-path":
                                "src/sections/ContactSection.tsx:167:19",
                              className:
                                "w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0",
                              children: z.jsx(l2, {
                                "code-path":
                                  "src/sections/ContactSection.tsx:168:21",
                                className: "w-5 h-5 text-mint",
                              }),
                            }),
                            z.jsxs("div", {
                              "code-path":
                                "src/sections/ContactSection.tsx:170:19",
                              children: [
                                z.jsx("p", {
                                  "code-path":
                                    "src/sections/ContactSection.tsx:171:21",
                                  className: "text-sage text-sm mb-1",
                                  children: "Location",
                                }),
                                z.jsx("p", {
                                  "code-path":
                                    "src/sections/ContactSection.tsx:172:21",
                                  className: "text-cream font-medium",
                                  children: "XXXX",
                                }),
                              ],
                            }),
                          ],
                        }),
                        z.jsxs("div", {
                          "code-path": "src/sections/ContactSection.tsx:176:17",
                          className: "flex items-start gap-4",
                          children: [
                            z.jsx("div", {
                              "code-path":
                                "src/sections/ContactSection.tsx:177:19",
                              className:
                                "w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0",
                              children: z.jsx(PS, {
                                "code-path":
                                  "src/sections/ContactSection.tsx:178:21",
                                className: "w-5 h-5 text-mint",
                              }),
                            }),
                            z.jsxs("div", {
                              "code-path":
                                "src/sections/ContactSection.tsx:180:19",
                              children: [
                                z.jsx("p", {
                                  "code-path":
                                    "src/sections/ContactSection.tsx:181:21",
                                  className: "text-sage text-sm mb-1",
                                  children: "Hours",
                                }),
                                z.jsx("p", {
                                  "code-path":
                                    "src/sections/ContactSection.tsx:182:21",
                                  className: "text-cream font-medium",
                                  children: "XXXX",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                z.jsxs("form", {
                  "code-path": "src/sections/ContactSection.tsx:189:13",
                  ref: r,
                  onSubmit: _,
                  className: "space-y-6",
                  children: [
                    z.jsxs("div", {
                      "code-path": "src/sections/ContactSection.tsx:194:15",
                      children: [
                        z.jsx("label", {
                          "code-path": "src/sections/ContactSection.tsx:195:17",
                          htmlFor: "name",
                          className: "block text-sage text-sm mb-2",
                          children: "Name",
                        }),
                        z.jsx("input", {
                          "code-path": "src/sections/ContactSection.tsx:198:17",
                          type: "text",
                          id: "name",
                          value: o.name,
                          onChange: (S) => h({ ...o, name: S.target.value }),
                          placeholder: "Your name",
                          className: "w-full",
                          required: !0,
                        }),
                      ],
                    }),
                    z.jsxs("div", {
                      "code-path": "src/sections/ContactSection.tsx:209:15",
                      children: [
                        z.jsx("label", {
                          "code-path": "src/sections/ContactSection.tsx:210:17",
                          htmlFor: "email",
                          className: "block text-sage text-sm mb-2",
                          children: "Email",
                        }),
                        z.jsx("input", {
                          "code-path": "src/sections/ContactSection.tsx:213:17",
                          type: "email",
                          id: "email",
                          value: o.email,
                          onChange: (S) => h({ ...o, email: S.target.value }),
                          placeholder: "your@email.com",
                          className: "w-full",
                          required: !0,
                        }),
                      ],
                    }),
                    z.jsxs("div", {
                      "code-path": "src/sections/ContactSection.tsx:224:15",
                      children: [
                        z.jsx("label", {
                          "code-path": "src/sections/ContactSection.tsx:225:17",
                          htmlFor: "message",
                          className: "block text-sage text-sm mb-2",
                          children: "Message",
                        }),
                        z.jsx("textarea", {
                          "code-path": "src/sections/ContactSection.tsx:228:17",
                          id: "message",
                          value: o.message,
                          onChange: (S) => h({ ...o, message: S.target.value }),
                          placeholder: "How can we help?",
                          rows: 5,
                          className: "w-full resize-none",
                          required: !0,
                        }),
                      ],
                    }),
                    z.jsx("button", {
                      "code-path": "src/sections/ContactSection.tsx:239:15",
                      type: "submit",
                      disabled: m,
                      className: `btn-accent w-full flex items-center justify-center gap-2 ${m ? "opacity-70 cursor-not-allowed" : ""}`,
                      children: m
                        ? z.jsx("span", {
                            "code-path":
                              "src/sections/ContactSection.tsx:247:19",
                            children: "Message sent!",
                          })
                        : z.jsxs(z.Fragment, {
                            children: [
                              z.jsx("span", {
                                "code-path":
                                  "src/sections/ContactSection.tsx:250:21",
                                children: "Send message",
                              }),
                              z.jsx(c2, {
                                "code-path":
                                  "src/sections/ContactSection.tsx:251:21",
                                className: "w-4 h-4",
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          z.jsx("footer", {
            "code-path": "src/sections/ContactSection.tsx:260:9",
            ref: f,
            className: "border-t border-cream/10 px-6 md:px-[7vw] py-8",
            children: z.jsxs("div", {
              "code-path": "src/sections/ContactSection.tsx:264:11",
              className:
                "flex flex-col md:flex-row items-center justify-between gap-6",
              children: [
                z.jsxs("a", {
                  "code-path": "src/sections/ContactSection.tsx:266:13",
                  href: "#",
                  className:
                    "flex items-center gap-2 text-cream font-heading font-bold text-lg tracking-tight",
                  children: [
                    z.jsx(V_, {
                      "code-path": "src/sections/ContactSection.tsx:270:15",
                      className: "w-5 h-5 text-mint",
                    }),
                    z.jsx("span", {
                      "code-path": "src/sections/ContactSection.tsx:271:15",
                      children: "Bold Growth",
                    }),
                  ],
                }),
                z.jsx("nav", {
                  "code-path": "src/sections/ContactSection.tsx:275:13",
                  className: "flex flex-wrap items-center justify-center gap-6",
                  children: v.map((S) =>
                    z.jsx(
                      "a",
                      {
                        "code-path": "src/sections/ContactSection.tsx:277:17",
                        href: S.href,
                        className:
                          "text-sage hover:text-cream transition-colors text-sm",
                        children: S.label,
                      },
                      S.label,
                    ),
                  ),
                }),
                z.jsx("p", {
                  "code-path": "src/sections/ContactSection.tsx:288:13",
                  className: "text-sage/60 text-sm",
                  children: "© 2026 Bold Growth. All rights reserved.",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
};
Lt.registerPlugin(gt);
function z2() {
  const d = rt.useRef(null);
  return (
    rt.useEffect(() => {
      const l = setTimeout(() => {
        const u = gt
            .getAll()
            .filter((f) => f.vars.pin)
            .sort((f, o) => f.start - o.start),
          i = gt.maxScroll(window);
        if (!i || u.length === 0) return;
        const r = u.map((f) => ({
          start: f.start / i,
          end: (f.end ?? f.start) / i,
          center: (f.start + ((f.end ?? f.start) - f.start) * 0.5) / i,
        }));
        gt.create({
          snap: {
            snapTo: (f) =>
              r.some((m) => f >= m.start - 0.02 && f <= m.end + 0.02)
                ? r.reduce(
                    (m, g) =>
                      Math.abs(g.center - f) < Math.abs(m - f) ? g.center : m,
                    r[0]?.center ?? 0,
                  )
                : f,
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: "power2.out",
          },
        });
      }, 500);
      return () => {
        (clearTimeout(l), gt.getAll().forEach((u) => u.kill()));
      };
    }, []),
    z.jsxs("div", {
      "code-path": "src/App.tsx:68:5",
      ref: d,
      className: "relative bg-forest",
      children: [
        z.jsx("div", {
          "code-path": "src/App.tsx:70:7",
          className: "noise-overlay",
        }),
        z.jsx(h2, { "code-path": "src/App.tsx:73:7" }),
        z.jsxs("main", {
          "code-path": "src/App.tsx:76:7",
          className: "relative",
          children: [
            z.jsx(d2, { "code-path": "src/App.tsx:77:9", className: "z-10" }),
            z.jsx(p2, { "code-path": "src/App.tsx:78:9", className: "z-20" }),
            z.jsx(y2, { "code-path": "src/App.tsx:79:9", className: "z-30" }),
            z.jsx(v2, { "code-path": "src/App.tsx:80:9", className: "z-40" }),
            z.jsx(x2, { "code-path": "src/App.tsx:81:9", className: "z-50" }),
            z.jsx(b2, { "code-path": "src/App.tsx:82:9", className: "z-[60]" }),
            z.jsx(T2, { "code-path": "src/App.tsx:83:9", className: "z-[70]" }),
            z.jsx(E2, { "code-path": "src/App.tsx:84:9", className: "z-[80]" }),
          ],
        }),
      ],
    })
  );
}
rx.createRoot(document.getElementById("root")).render(
  z.jsx(rt.StrictMode, {
    "code-path": "src/main.tsx:7:3",
    children: z.jsx(z2, { "code-path": "src/main.tsx:8:5" }),
  }),
);
