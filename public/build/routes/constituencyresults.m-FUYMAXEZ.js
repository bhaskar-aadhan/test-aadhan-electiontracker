import {
  ConstituencyLevel_default,
  Share_default,
  StateLevel_default,
  TabBar_default
} from "/build/_shared/chunk-DJ3KN6CJ.js";
import {
  ConstituencyContext
} from "/build/_shared/chunk-ZSNSUS4S.js";
import "/build/_shared/chunk-75ZNDNQW.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-N2P3VMHH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2MI4DQA3.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/constituencyresults.m.jsx
var import_react = __toESM(require_react(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\constituencyresults.m.jsx"
  );
  import.meta.hot.lastModified = "1701570237022.6106";
}
var ConstituencyResults = () => {
  _s();
  const [webSocketData, select, setSelect] = (0, import_react.useContext)(ConstituencyContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#050D3E] w-full min-h-screen flex items-center text-white  overflow-y-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabBar_default, {}, void 0, false, {
      fileName: "app/routes/constituencyresults.m.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    select ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StateLevel_default, {}, void 0, false, {
      fileName: "app/routes/constituencyresults.m.jsx",
      lineNumber: 31,
      columnNumber: 19
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstituencyLevel_default, {}, void 0, false, {
      fileName: "app/routes/constituencyresults.m.jsx",
      lineNumber: 31,
      columnNumber: 36
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] mx-auto mt-[2rem] flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share_default, {}, void 0, false, {
      fileName: "app/routes/constituencyresults.m.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/constituencyresults.m.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/constituencyresults.m.jsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/constituencyresults.m.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_s(ConstituencyResults, "26cRGiioaZx6PKK1osz8urmYGaw=");
_c = ConstituencyResults;
var constituencyresults_m_default = ConstituencyResults;
var _c;
$RefreshReg$(_c, "ConstituencyResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  constituencyresults_m_default as default
};
//# sourceMappingURL=/build/routes/constituencyresults.m-FUYMAXEZ.js.map
