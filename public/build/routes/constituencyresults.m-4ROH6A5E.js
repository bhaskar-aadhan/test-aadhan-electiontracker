import {
  Outlet
} from "/build/_shared/chunk-3LKACQQP.js";
import {
  ConstituencyProvider
} from "/build/_shared/chunk-XHVTE3EL.js";
import "/build/_shared/chunk-YIC4LTS5.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-I5JZWTUL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2MI4DQA3.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/constituencyresults.m.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\constituencyresults.m.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\constituencyresults.m.jsx"
  );
  import.meta.hot.lastModified = "1701575385995.7268";
}
var meta = () => {
  return [{
    title: "Aadhan Election Tracker"
  }, {
    name: "description",
    content: "Aadhan Media Short News App"
  }];
};
var ConstituencyResults = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstituencyProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/constituencyresults.m.jsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/constituencyresults.m.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c = ConstituencyResults;
var constituencyresults_m_default = ConstituencyResults;
var _c;
$RefreshReg$(_c, "ConstituencyResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  constituencyresults_m_default as default,
  meta
};
//# sourceMappingURL=/build/routes/constituencyresults.m-4ROH6A5E.js.map
