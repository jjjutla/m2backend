// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cGspb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a4925bb8f9064f1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hm1t5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class implements Connex interface
 */ parcelHelpers.export(exports, "Framework", ()=>Framework);
parcelHelpers.export(exports, "newVendor", ()=>(0, _vendor.newVendor));
var _thor = require("./thor");
var _vendor = require("./vendor");
var _driverGuard = require("./driver-guard");
class Framework {
    /**
     * constructor
     * @param driver the driver instance
     */ constructor(driver){
        this.thor = (0, _thor.newThor)(driver);
        this.vendor = (0, _vendor.newVendor)(driver);
    }
    /**
     * create a wrapper for driver, to validate responses. it should be helpful to make sure driver is properly
     * implemented in development stage.
     * @param driver the driver to be wrapped
     * @param errorHandler optional error handler. If omitted, error message will be printed via console.warn.
     */ static guardDriver(driver, errorHandler) {
        return (0, _driverGuard.newDriverGuard)(driver, errorHandler);
    }
}

},{"./thor":"bUDiX","./vendor":"gn89H","./driver-guard":"6EsFJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUDiX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newThor", ()=>newThor);
var _accountVisitor = require("./account-visitor");
var _blockVisitor = require("./block-visitor");
var _txVisitor = require("./tx-visitor");
var _filter = require("./filter");
var _headTracker = require("./head-tracker");
var _explainer = require("./explainer");
var _rules = require("./rules");
var _validatorTs = require("validator-ts");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function newThor(driver) {
    const headTracker = (0, _headTracker.newHeadTracker)(driver);
    const readyDriver = (()=>__awaiter(this, void 0, void 0, function*() {
            if (headTracker.head.number > 0) return driver;
            yield headTracker.ticker().next();
            return driver;
        }))();
    const genesis = JSON.parse(JSON.stringify(driver.genesis));
    return {
        get genesis () {
            return genesis;
        },
        get status () {
            return {
                head: headTracker.head,
                progress: headTracker.progress,
                finalized: headTracker.finalized
            };
        },
        ticker: ()=>headTracker.ticker(),
        account: (addr)=>{
            addr = _rules.test(addr, _rules.address, "arg0").toLowerCase();
            return (0, _accountVisitor.newAccountVisitor)(readyDriver, addr);
        },
        block: (revision)=>{
            if (typeof revision === "undefined") revision = driver.head.id;
            else _rules.ensure(typeof revision === "string" ? _rules.isHexBytes(revision, 32) : _rules.isUInt(revision, 32), "arg0: expected bytes32 or unsigned 32-bit integer");
            return (0, _blockVisitor.newBlockVisitor)(driver, typeof revision === "string" ? revision.toLowerCase() : revision);
        },
        transaction: (id)=>{
            id = _rules.test(id, _rules.bytes32, "arg0").toLowerCase();
            return (0, _txVisitor.newTxVisitor)(readyDriver, id);
        },
        filter: (kind, criteria)=>{
            _rules.ensure(kind === "event" || kind === "transfer", `arg0: expected 'event' or 'transfer'`);
            if (kind === "event") {
                _rules.test(criteria, [
                    eventCriteriaScheme
                ], "arg1");
                return (0, _filter.newFilter)(readyDriver, "event", criteria.map((c)=>{
                    return {
                        address: c.address ? c.address.toLowerCase() : undefined,
                        topic0: c.topic0 ? c.topic0.toLowerCase() : undefined,
                        topic1: c.topic1 ? c.topic1.toLowerCase() : undefined,
                        topic2: c.topic2 ? c.topic2.toLowerCase() : undefined,
                        topic3: c.topic3 ? c.topic3.toLowerCase() : undefined,
                        topic4: c.topic4 ? c.topic4.toLowerCase() : undefined
                    };
                }));
            } else {
                _rules.test(criteria, [
                    transferCriteriaScheme
                ], "arg1");
                return (0, _filter.newFilter)(readyDriver, "transfer", criteria.map((c)=>{
                    return {
                        txOrigin: c.txOrigin ? c.txOrigin.toLowerCase() : undefined,
                        sender: c.sender ? c.sender.toLowerCase() : undefined,
                        recipient: c.recipient ? c.recipient.toLowerCase() : undefined
                    };
                }));
            }
        },
        explain: (clauses)=>{
            _rules.test(clauses, [
                clauseScheme
            ], "arg0");
            return (0, _explainer.newExplainer)(readyDriver, clauses);
        }
    };
}
const clauseScheme = {
    to: _validatorTs.nullable(_rules.address),
    value: _rules.bigInt,
    data: _validatorTs.optional(_rules.bytes)
};
const eventCriteriaScheme = {
    address: _validatorTs.optional(_rules.address),
    topic0: _validatorTs.optional(_rules.bytes32),
    topic1: _validatorTs.optional(_rules.bytes32),
    topic2: _validatorTs.optional(_rules.bytes32),
    topic3: _validatorTs.optional(_rules.bytes32),
    topic4: _validatorTs.optional(_rules.bytes32)
};
const transferCriteriaScheme = {
    sender: _validatorTs.optional(_rules.address),
    recipient: _validatorTs.optional(_rules.address),
    txOrigin: _validatorTs.optional(_rules.address)
};

},{"./account-visitor":"hd8Tr","./block-visitor":"kOKDY","./tx-visitor":"Uurv3","./filter":"lM9k5","./head-tracker":"ekIzq","./explainer":"lhtP8","./rules":"dVGG1","validator-ts":"gmnCR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hd8Tr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newAccountVisitor", ()=>newAccountVisitor);
var _thorDevkit = require("thor-devkit");
var _revertReason = require("./revert-reason");
var _filter = require("./filter");
var _vendor = require("./vendor");
var _rules = require("./rules");
function newAccountVisitor(readyDriver, addr) {
    return {
        get address () {
            return addr;
        },
        get: ()=>{
            return readyDriver.then((d)=>d.getAccount(addr, d.head.id));
        },
        getCode: ()=>{
            return readyDriver.then((d)=>d.getCode(addr, d.head.id));
        },
        getStorage: (key)=>{
            key = _rules.test(key, _rules.bytes32, "arg0").toLowerCase();
            return readyDriver.then((d)=>d.getStorage(addr, key, d.head.id));
        },
        method: (jsonABI)=>{
            let coder;
            try {
                coder = new (0, _thorDevkit.abi).Function(JSON.parse(JSON.stringify(jsonABI)));
            } catch (err) {
                throw new _rules.BadParameter(`arg0: expected valid ABI (${err.message})`);
            }
            return newMethod(readyDriver, addr, coder);
        },
        event: (jsonABI)=>{
            let coder;
            try {
                coder = new (0, _thorDevkit.abi).Event(JSON.parse(JSON.stringify(jsonABI)));
            } catch (err) {
                throw new _rules.BadParameter(`arg0: expected valid ABI (${err.message})`);
            }
            return newEvent(readyDriver, addr, coder);
        }
    };
}
function newMethod(readyDriver, addr, coder) {
    let value = 0;
    const opts = {};
    let cacheHints;
    return {
        value (val) {
            value = _rules.test(val, _rules.bigInt, "arg0");
            return this;
        },
        caller (addr) {
            opts.caller = _rules.test(addr, _rules.address, "arg0").toLowerCase();
            return this;
        },
        gas (gas) {
            opts.gas = _rules.test(gas, _rules.uint64, "arg0");
            return this;
        },
        gasPrice (gp) {
            opts.gasPrice = _rules.test(gp, _rules.bigInt, "arg0").toString().toLowerCase();
            return this;
        },
        gasPayer (addr) {
            opts.gasPayer = _rules.test(addr, _rules.address, "arg0").toLowerCase();
            return this;
        },
        cache (hints) {
            cacheHints = _rules.test(hints, [
                _rules.address
            ], "arg0").map((t)=>t.toLowerCase());
            return this;
        },
        asClause: (...args)=>{
            const inputsLen = (coder.definition.inputs || []).length;
            _rules.ensure(inputsLen === args.length, `args count expected ${inputsLen}`);
            try {
                const data = coder.encode(...args);
                return {
                    to: addr,
                    value: value.toString().toLowerCase(),
                    data
                };
            } catch (err) {
                throw new _rules.BadParameter(`args can not be encoded (${err.message})`);
            }
        },
        call (...args) {
            const clause = this.asClause(...args);
            return readyDriver.then((d)=>d.explain(Object.assign({
                    clauses: [
                        clause
                    ]
                }, opts), d.head.id, cacheHints)).then((outputs)=>outputs[0]).then((output)=>{
                if (output.reverted) {
                    const revertReason = (0, _revertReason.decodeRevertReason)(output.data);
                    return Object.assign(Object.assign({}, output), {
                        revertReason,
                        decoded: {}
                    });
                } else {
                    const decoded = coder.decode(output.data);
                    return Object.assign(Object.assign({}, output), {
                        decoded
                    });
                }
            });
        },
        transact (...args) {
            const clause = this.asClause(...args);
            return (0, _vendor.newTxSigningService)(readyDriver, [
                Object.assign(Object.assign({}, clause), {
                    abi: coder.definition
                })
            ]);
        }
    };
}
function newEvent(readyDriver, addr, coder) {
    const encode = (indexed)=>{
        const topics = coder.encode(indexed);
        return {
            address: addr,
            topic0: topics[0] || undefined,
            topic1: topics[1] || undefined,
            topic2: topics[2] || undefined,
            topic3: topics[3] || undefined,
            topic4: topics[4] || undefined
        };
    };
    return {
        asCriteria: (indexed)=>{
            try {
                return encode(indexed);
            } catch (err) {
                throw new _rules.BadParameter(`arg0: can not be encoded (${err.message})`);
            }
        },
        filter: (indexed)=>{
            _rules.test(indexed, [
                {}
            ], "arg0");
            if (indexed.length === 0) indexed = [
                {}
            ];
            const criteria = indexed.map((o, i)=>{
                try {
                    return encode(o);
                } catch (err) {
                    throw new _rules.BadParameter(`arg0.#${i}: can not be encoded (${err.message})`);
                }
            });
            const filter = (0, _filter.newFilter)(readyDriver, "event", criteria);
            return {
                range (range) {
                    filter.range(range);
                    return this;
                },
                order (order) {
                    filter.order(order);
                    return this;
                },
                cache (hints) {
                    filter.cache(hints);
                    return this;
                },
                apply (offset, limit) {
                    return filter.apply(offset, limit).then((events)=>events.map((event)=>{
                            const decoded = coder.decode(event.data, event.topics);
                            return Object.assign(Object.assign({}, event), {
                                decoded
                            });
                        }));
                }
            };
        }
    };
}

},{"thor-devkit":"47wiJ","./revert-reason":"f8uJB","./filter":"lM9k5","./vendor":"gn89H","./rules":"dVGG1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8uJB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeRevertReason", ()=>decodeRevertReason);
var _thorDevkit = require("thor-devkit");
// https://docs.soliditylang.org/en/v0.8.16/control-structures.html#error-handling-assert-require-revert-and-exceptions
// builtin errors in solidity, Error(string) and Panic(uint256)
const errorSelector = "0x" + (0, _thorDevkit.keccak256)("Error(string)").toString("hex").slice(0, 8);
const panicSelector = "0x" + (0, _thorDevkit.keccak256)("Panic(uint256)").toString("hex").slice(0, 8);
function decodeRevertReason(data) {
    try {
        if (data.startsWith(errorSelector)) return (0, _thorDevkit.abi).decodeParameter("string", "0x" + data.slice(errorSelector.length));
        else if (data.startsWith(panicSelector)) {
            const decoded = (0, _thorDevkit.abi).decodeParameter("uint256", "0x" + data.slice(panicSelector.length));
            return `Panic(0x${parseInt(decoded).toString(16).padStart(2, "0")})`;
        }
        return "";
    } catch (_a) {
        return "";
    }
}

},{"thor-devkit":"47wiJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lM9k5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newFilter", ()=>newFilter);
var _rules = require("./rules");
const MAX_LIMIT = 256;
function newFilter(readyDriver, kind, criteria) {
    const filterBody = {
        range: {
            unit: "block",
            from: 0,
            to: Math.pow(2, 32) - 1
        },
        options: {
            offset: 0,
            limit: 10
        },
        criteriaSet: criteria,
        order: "asc"
    };
    let cacheHints;
    return {
        range (range) {
            _rules.test(range, {
                unit: (v)=>v === "block" || v === "time" ? "" : `expected 'block' or 'time'`,
                from: _rules.uint64,
                to: _rules.uint64
            }, "arg0");
            _rules.ensure(range.from <= range.to, "arg0.from: expected <= arg0.to");
            filterBody.range = Object.assign({}, range);
            return this;
        },
        order (order) {
            _rules.ensure(order === "asc" || order === "desc", `arg0: expected 'asc' or 'desc'`);
            filterBody.order = order;
            return this;
        },
        cache (hints) {
            cacheHints = _rules.test(hints, [
                _rules.address
            ], "arg0").map((t)=>t.toLowerCase());
            return this;
        },
        apply (offset, limit) {
            _rules.test(offset, _rules.uint64, "arg0");
            _rules.ensure(limit >= 0 && limit <= MAX_LIMIT && Number.isInteger(limit), `arg1: expected unsigned integer <= ${MAX_LIMIT}`);
            filterBody.options.offset = offset;
            filterBody.options.limit = limit;
            if (kind === "transfer") return readyDriver.then((d)=>d.filterTransferLogs(filterBody, cacheHints));
            else return readyDriver.then((d)=>d.filterEventLogs(filterBody, cacheHints));
        }
    };
}

},{"./rules":"dVGG1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVGG1":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDecString", ()=>isDecString);
parcelHelpers.export(exports, "isHexString", ()=>isHexString);
parcelHelpers.export(exports, "isHexBytes", ()=>isHexBytes);
parcelHelpers.export(exports, "isUInt", ()=>isUInt);
parcelHelpers.export(exports, "isBigInt", ()=>isBigInt);
parcelHelpers.export(exports, "BadParameter", ()=>BadParameter);
parcelHelpers.export(exports, "ensure", ()=>ensure);
parcelHelpers.export(exports, "test", ()=>test);
// rules
parcelHelpers.export(exports, "bytes", ()=>bytes);
parcelHelpers.export(exports, "bytes8", ()=>bytes8);
parcelHelpers.export(exports, "bytes32", ()=>bytes32);
parcelHelpers.export(exports, "uint8", ()=>uint8);
parcelHelpers.export(exports, "uint32", ()=>uint32);
parcelHelpers.export(exports, "uint64", ()=>uint64);
parcelHelpers.export(exports, "bool", ()=>bool);
parcelHelpers.export(exports, "bigInt", ()=>bigInt);
parcelHelpers.export(exports, "hexString", ()=>hexString);
parcelHelpers.export(exports, "address", ()=>address);
parcelHelpers.export(exports, "string", ()=>string);
var _validatorTs = require("validator-ts");
function isDecString(val) {
    return typeof val === "string" && /^[0-9]+$/.test(val);
}
function isHexString(val) {
    return typeof val === "string" && /^0x[0-9a-f]+$/i.test(val);
}
function isHexBytes(val, n) {
    if (typeof val !== "string" || !/^0x[0-9a-f]*$/i.test(val)) return false;
    return n ? val.length === n * 2 + 2 : val.length % 2 === 0;
}
function isUInt(val, bit) {
    if (val < 0 || !Number.isInteger(val)) return false;
    return bit ? val < Math.pow(2, bit) : true;
}
function isBigInt(v) {
    return typeof v === "string" ? isDecString(v) || isHexString(v) : isUInt(v, 0);
}
class BadParameter extends Error {
    constructor(msg){
        super(msg);
    }
}
BadParameter.prototype.name = "BadParameter";
function ensure(b, msg) {
    if (!b) throw new BadParameter(msg);
}
function test(value, scheme, context) {
    try {
        return _validatorTs.validate(value, scheme, context);
    } catch (err) {
        if (err instanceof _validatorTs.ValidationError) throw new BadParameter(err.message);
        throw err;
    }
}
function bytes(v) {
    return isHexBytes(v) ? "" : "expected bytes in hex string";
}
function bytes8(v) {
    return isHexBytes(v, 8) ? "" : "expected bytes8";
}
function bytes32(v) {
    return isHexBytes(v, 32) ? "" : "expected bytes32";
}
function uint8(v) {
    return isUInt(v, 8) ? "" : "expected 8-bit unsigned integer";
}
function uint32(v) {
    return isUInt(v, 32) ? "" : "expected 32-bit unsigned integer";
}
function uint64(v) {
    return isUInt(v, 64) ? "" : "expected 64-bit unsigned integer";
}
function bool(v) {
    return typeof v === "boolean" ? "" : "expected boolean";
}
function bigInt(v) {
    return isBigInt(v) ? "" : "expected unsigned integer in number or string";
}
function hexString(v) {
    return isHexString(v) ? "" : "expected integer in hex string";
}
function address(v) {
    return isHexBytes(v, 20) ? "" : "expected address";
}
function string(v) {
    return typeof v === "string" ? "" : "expected string";
}

},{"validator-ts":"gmnCR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmnCR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * convert the given Scheme into a Rule that allows undefined value
 * @param scheme the scheme
 */ function optional(scheme) {
    return (value, context)=>{
        if (value !== undefined) validate(value, scheme, context);
        return "";
    };
}
exports.optional = optional;
/**
 * convert the given Scheme into a Rule that allows null value
 * @param scheme the scheme
 */ function nullable(scheme) {
    return (value, context)=>{
        if (value !== null) validate(value, scheme, context);
        return "";
    };
}
exports.nullable = nullable;
/** Validator class */ class Validator {
    constructor(scheme){
        this.scheme = scheme;
    }
    test(value, context) {
        return validate(value, this.scheme, context);
    }
}
exports.Validator = Validator;
/** Error class describes validation error */ class ValidationError extends Error {
    constructor(rawMessage, context){
        super(context ? `${context}: ${rawMessage}` : rawMessage);
        this.rawMessage = rawMessage;
        this.context = context;
    }
}
exports.ValidationError = ValidationError;
ValidationError.prototype.name = "ValidationError";
/**
 * direct function to validate value without construct Validator object
 * @param value value to be validated
 * @param scheme scheme
 * @param context context string appears in error object
 */ function validate(value, scheme, context) {
    if (Array.isArray(scheme)) {
        if (!Array.isArray(value)) throw new ValidationError("expected array", context || "");
        value.forEach((el, i)=>validate(el, scheme[0], context ? `${context}.#${i}` : `#${i}`));
    } else if (scheme instanceof Function) {
        const errMsg = scheme(value, context);
        if (errMsg) throw new ValidationError(errMsg, context || "");
    } else {
        if (!(value instanceof Object)) throw new ValidationError("expected object", context || "");
        for(const key in scheme)if (scheme.hasOwnProperty(key)) validate(value[key], scheme[key], context ? `${context}.${key}` : key);
    }
    return value;
}
exports.validate = validate;

},{}],"gn89H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newVendor", ()=>newVendor);
parcelHelpers.export(exports, "newTxSigningService", ()=>newTxSigningService);
var _rules = require("./rules");
var _validatorTs = require("validator-ts");
var _thorDevkit = require("thor-devkit");
var _bignumberJs = require("bignumber.js");
var _bignumberJsDefault = parcelHelpers.interopDefault(_bignumberJs);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function newVendor(driver) {
    return {
        sign: (kind, msg)=>{
            if (kind === "tx") {
                _rules.test(msg, [
                    clauseScheme
                ], "arg1");
                return newTxSigningService(Promise.resolve(driver), msg);
            } else if (kind === "cert") {
                _rules.test(msg, {
                    purpose: (v)=>v === "agreement" || v === "identification" ? "" : `expected 'agreement' or 'identification'`,
                    payload: {
                        type: (v)=>v === "text" ? "" : `expected 'text'`,
                        content: _rules.string
                    }
                }, "arg1");
                return newCertSigningService(Promise.resolve(driver), msg);
            } else throw new _rules.BadParameter(`arg0: expected 'tx' or 'cert'`);
        }
    };
}
function newTxSigningService(readyDriver, msg) {
    const opts = {};
    return {
        signer (addr) {
            opts.signer = _rules.test(addr, _rules.address, "arg0").toLowerCase();
            return this;
        },
        gas (gas) {
            opts.gas = _rules.test(gas, _rules.uint64, "arg0");
            return this;
        },
        dependsOn (txid) {
            opts.dependsOn = _rules.test(txid, _rules.bytes32, "arg0").toLowerCase();
            return this;
        },
        link (url) {
            opts.link = _rules.test(url, _rules.string, "arg0");
            return this;
        },
        comment (text) {
            opts.comment = _rules.test(text, _rules.string, "arg0");
            return this;
        },
        delegate (url, signer) {
            _rules.ensure(typeof url === "string", `arg0: expected url string`);
            _rules.test(signer, _validatorTs.optional(_rules.address), "arg1");
            opts.delegator = {
                url,
                signer: signer && signer.toLowerCase()
            };
            return this;
        },
        accepted (cb) {
            _rules.ensure(typeof cb === "function", "arg0: expected function");
            opts.onAccepted = cb;
            return this;
        },
        request () {
            const transformedMsg = msg.map((c)=>Object.assign(Object.assign({}, c), {
                    value: new (0, _bignumberJsDefault.default)(c.value).toString(10)
                }));
            return (()=>__awaiter(this, void 0, void 0, function*() {
                    try {
                        const driver = yield readyDriver;
                        return yield driver.signTx(transformedMsg, opts);
                    } catch (err) {
                        throw new Rejected(err.message);
                    }
                }))();
        }
    };
}
function newCertSigningService(readyDriver, msg) {
    const opts = {};
    return {
        signer (addr) {
            opts.signer = _rules.test(addr, _rules.address, "arg0").toLowerCase();
            return this;
        },
        link (url) {
            opts.link = _rules.test(url, _rules.string, "arg0");
            return this;
        },
        accepted (cb) {
            _rules.ensure(typeof cb === "function", "arg0: expected function");
            opts.onAccepted = cb;
            return this;
        },
        request () {
            return (()=>__awaiter(this, void 0, void 0, function*() {
                    try {
                        const driver = yield readyDriver;
                        return yield driver.signCert(msg, opts);
                    } catch (err) {
                        throw new Rejected(err.message);
                    }
                }))();
        }
    };
}
class Rejected extends Error {
    constructor(msg){
        super(msg);
    }
}
Rejected.prototype.name = "Rejected";
const clauseScheme = {
    to: _validatorTs.nullable(_rules.address),
    value: _rules.bigInt,
    data: _validatorTs.optional(_rules.bytes),
    comment: _validatorTs.optional(_rules.string),
    abi: _validatorTs.optional((v)=>{
        if (!(v instanceof Object)) return "expected object";
        try {
            new (0, _thorDevkit.abi).Function(v).signature;
            return "";
        } catch (err) {
            return `expected valid ABI (${err.message})`;
        }
    })
};

},{"./rules":"dVGG1","validator-ts":"gmnCR","thor-devkit":"47wiJ","bignumber.js":"57qkX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOKDY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newBlockVisitor", ()=>newBlockVisitor);
function newBlockVisitor(driver, revision) {
    return {
        get revision () {
            return revision;
        },
        get: ()=>driver.getBlock(revision)
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Uurv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newTxVisitor", ()=>newTxVisitor);
function newTxVisitor(readyDriver, id) {
    let allowPending = false;
    return {
        get id () {
            return id;
        },
        allowPending () {
            allowPending = true;
            return this;
        },
        get: ()=>readyDriver.then((d)=>d.getTransaction(id, allowPending)),
        getReceipt: ()=>readyDriver.then((d)=>d.getReceipt(id))
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ekIzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newHeadTracker", ()=>newHeadTracker);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const checkpointInterval = 180;
function newHeadTracker(driver) {
    let head = Object.assign({}, driver.head);
    let finalized = driver.genesis.id;
    let resolvers = [];
    (()=>__awaiter(this, void 0, void 0, function*() {
            for(;;)try {
                const newHead = yield driver.pollHead();
                if (newHead.id !== head.id && newHead.number >= head.number) {
                    if (head.number === 0 || (newHead.number + 1) % checkpointInterval === 0) try {
                        const finalizedBlk = yield driver.getBlock("finalized");
                        if (finalizedBlk && finalizedBlk.id != finalized) finalized = finalizedBlk.id;
                    } catch (_a) {}
                    head = Object.assign({}, newHead);
                    const resolversCopy = resolvers;
                    resolvers = [];
                    resolversCopy.forEach((r)=>r(newHead));
                } else yield new Promise((resolve)=>setTimeout(resolve, 1000));
            } catch (_b) {
                break;
            }
        }))();
    const genesisTs = driver.genesis.timestamp;
    return {
        get head () {
            return head;
        },
        get progress () {
            const nowTsMs = Date.now();
            const headTsMs = head.timestamp * 1000;
            if (nowTsMs - headTsMs < 30000) return 1;
            const genesisTsMs = genesisTs * 1000;
            const p = (headTsMs - genesisTsMs) / (nowTsMs - genesisTsMs);
            return p < 0 ? NaN : p;
        },
        get finalized () {
            return finalized;
        },
        ticker: ()=>{
            let lastHeadId = head.id;
            return {
                next: ()=>{
                    return new Promise((resolve)=>{
                        if (lastHeadId !== head.id) return resolve(Object.assign({}, head));
                        resolvers.push((newHead)=>{
                            resolve(Object.assign({}, newHead));
                        });
                    }).then((h)=>{
                        lastHeadId = h.id;
                        return h;
                    });
                }
            };
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lhtP8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newExplainer", ()=>newExplainer);
var _revertReason = require("./revert-reason");
var _rules = require("./rules");
var _bignumberJs = require("bignumber.js");
var _bignumberJsDefault = parcelHelpers.interopDefault(_bignumberJs);
function newExplainer(readyDriver, clauses) {
    const opts = {};
    let cacheHints;
    return {
        caller (addr) {
            opts.caller = _rules.test(addr, _rules.address, "arg0").toLowerCase();
            return this;
        },
        gas (gas) {
            opts.gas = _rules.test(gas, _rules.uint64, "arg0");
            return this;
        },
        gasPrice (gp) {
            opts.gasPrice = _rules.test(gp, _rules.bigInt, "arg0").toString().toLowerCase();
            return this;
        },
        gasPayer (addr) {
            opts.gasPayer = _rules.test(addr, _rules.address, "arg0").toLowerCase();
            return this;
        },
        cache (hints) {
            cacheHints = _rules.test(hints, [
                _rules.address
            ], "arg0").map((t)=>t.toLowerCase());
            return this;
        },
        execute () {
            const transformedClauses = clauses.map((c)=>{
                return {
                    to: c.to ? c.to.toLowerCase() : null,
                    value: new (0, _bignumberJsDefault.default)(c.value).toString(10),
                    data: (c.data || "0x").toLowerCase()
                };
            });
            return readyDriver.then((d)=>d.explain(Object.assign({
                    clauses: transformedClauses
                }, opts), d.head.id, cacheHints)).then((outputs)=>{
                return outputs.map((o)=>{
                    if (o.reverted) {
                        const revertReason = (0, _revertReason.decodeRevertReason)(o.data);
                        return Object.assign(Object.assign({}, o), {
                            revertReason
                        });
                    }
                    return o;
                });
            });
        }
    };
}

},{"./revert-reason":"f8uJB","./rules":"dVGG1","bignumber.js":"57qkX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6EsFJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newDriverGuard", ()=>newDriverGuard);
var _validatorTs = require("validator-ts");
var _rules = require("./rules");
function newDriverGuard(driver, errHandler) {
    const test = (obj, scheme, path)=>{
        try {
            _validatorTs.validate(obj, scheme, path);
        } catch (err) {
            if (errHandler) errHandler(err);
            else // tslint:disable-next-line:no-console
            console.warn(`Connex-Driver[MALFORMED RESPONSE]: ${err.message}`);
        }
        return obj;
    };
    const genesis = test(driver.genesis, blockScheme, "genesis");
    return {
        genesis,
        get head () {
            return test(driver.head, headScheme, "head");
        },
        pollHead () {
            return driver.pollHead().then((h)=>test(h, headScheme, "getHead()"));
        },
        getBlock (revision) {
            return driver.getBlock(revision).then((b)=>b ? test(b, blockScheme, "getBlock()") : b);
        },
        getTransaction (id, allowPending) {
            return driver.getTransaction(id, allowPending).then((tx)=>tx ? test(tx, txScheme, "getTransaction()") : tx);
        },
        getReceipt (id) {
            return driver.getReceipt(id).then((r)=>r ? test(r, receiptScheme, "getReceipt()") : r);
        },
        getAccount (addr, revision) {
            return driver.getAccount(addr, revision).then((a)=>test(a, {
                    balance: _rules.hexString,
                    energy: _rules.hexString,
                    hasCode: _rules.bool
                }, "getAccount()"));
        },
        getCode (addr, revision) {
            return driver.getCode(addr, revision).then((c)=>test(c, {
                    code: _rules.bytes
                }, "getCode()"));
        },
        getStorage (addr, key, revision) {
            return driver.getStorage(addr, key, revision).then((s)=>test(s, {
                    value: _rules.bytes32
                }, "getStorage()"));
        },
        explain (arg, revision) {
            return driver.explain(arg, revision).then((r)=>test(r, [
                    vmOutputScheme
                ], "explain()"));
        },
        filterEventLogs (arg) {
            return driver.filterEventLogs(arg).then((r)=>test(r, [
                    eventWithMetaScheme
                ], "filterEventLogs()"));
        },
        filterTransferLogs (arg) {
            return driver.filterTransferLogs(arg).then((r)=>test(r, [
                    transferWithMetaScheme
                ], "filterTransferLogs()"));
        },
        signTx (msg, options) {
            return driver.signTx(msg, options).then((r)=>test(r, {
                    txid: _rules.bytes32,
                    signer: _rules.address
                }, "signTx()"));
        },
        signCert (msg, options) {
            return driver.signCert(msg, options).then((r)=>test(r, {
                    annex: {
                        domain: _rules.string,
                        timestamp: _rules.uint64,
                        signer: _rules.address
                    },
                    signature: (v)=>_rules.isHexBytes(v, 65) ? "" : "expected 65 bytes"
                }, "signCert()"));
        }
    };
}
const headScheme = {
    id: _rules.bytes32,
    number: _rules.uint32,
    timestamp: _rules.uint64,
    parentID: _rules.bytes32,
    txsFeatures: _validatorTs.optional(_rules.uint32),
    gasLimit: _rules.uint64
};
const blockScheme = {
    id: _rules.bytes32,
    number: _rules.uint32,
    size: _rules.uint32,
    parentID: _rules.bytes32,
    timestamp: _rules.uint64,
    gasLimit: _rules.uint64,
    beneficiary: _rules.address,
    gasUsed: _rules.uint64,
    totalScore: _rules.uint64,
    txsRoot: _rules.bytes32,
    txsFeatures: _validatorTs.optional(_rules.uint32),
    stateRoot: _rules.bytes32,
    receiptsRoot: _rules.bytes32,
    signer: _rules.address,
    com: _validatorTs.optional(_rules.bool),
    isFinalized: _validatorTs.optional(_rules.bool),
    isTrunk: _rules.bool,
    transactions: [
        _rules.bytes32
    ]
};
const txScheme = {
    id: _rules.bytes32,
    chainTag: _rules.uint8,
    blockRef: _rules.bytes8,
    expiration: _rules.uint32,
    gasPriceCoef: _rules.uint8,
    gas: _rules.uint64,
    origin: _rules.address,
    delegator: _validatorTs.nullable(_validatorTs.optional(_rules.address)),
    nonce: _rules.hexString,
    dependsOn: _validatorTs.nullable(_rules.bytes32),
    size: _rules.uint32,
    clauses: [
        {
            to: _validatorTs.nullable(_rules.address),
            value: _rules.hexString,
            data: _rules.bytes
        }
    ],
    meta: _validatorTs.nullable({
        blockID: _rules.bytes32,
        blockNumber: _rules.uint32,
        blockTimestamp: _rules.uint64
    })
};
const logMetaScheme = {
    blockID: _rules.bytes32,
    blockNumber: _rules.uint32,
    blockTimestamp: _rules.uint64,
    txID: _rules.bytes32,
    txOrigin: _rules.address,
    clauseIndex: _rules.uint32
};
const eventScheme = {
    address: _rules.address,
    topics: [
        _rules.bytes32
    ],
    data: _rules.bytes
};
const eventWithMetaScheme = Object.assign(Object.assign({}, eventScheme), {
    meta: logMetaScheme
});
const transferScheme = {
    sender: _rules.address,
    recipient: _rules.address,
    amount: _rules.hexString
};
const transferWithMetaScheme = Object.assign(Object.assign({}, transferScheme), {
    meta: logMetaScheme
});
const receiptScheme = {
    gasUsed: _rules.uint64,
    gasPayer: _rules.address,
    paid: _rules.hexString,
    reward: _rules.hexString,
    reverted: _rules.bool,
    outputs: [
        {
            contractAddress: _validatorTs.nullable(_rules.address),
            events: [
                eventScheme
            ],
            transfers: [
                transferScheme
            ]
        }
    ],
    meta: {
        blockID: _rules.bytes32,
        blockNumber: _rules.uint32,
        blockTimestamp: _rules.uint64,
        txID: _rules.bytes32,
        txOrigin: _rules.address
    }
};
const vmOutputScheme = {
    data: _rules.bytes,
    vmError: _rules.string,
    gasUsed: _rules.uint64,
    reverted: _rules.bool,
    revertReason: ()=>"",
    events: [
        {
            address: _rules.address,
            topics: [
                _rules.bytes32
            ],
            data: _rules.bytes
        }
    ],
    transfers: [
        {
            sender: _rules.address,
            recipient: _rules.address,
            amount: _rules.hexString
        }
    ]
};

},{"validator-ts":"gmnCR","./rules":"dVGG1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cGspb"], null, "parcelRequire94c2")

//# sourceMappingURL=esm.8f9064f1.js.map
