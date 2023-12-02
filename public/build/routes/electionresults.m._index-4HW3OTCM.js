import {
  Card_default,
  Download_default,
  InfoBar_default
} from "/build/_shared/chunk-2LN3JORB.js";
import {
  ElectionContext
} from "/build/_shared/chunk-OENJDHUC.js";
import {
  getSateData
} from "/build/_shared/chunk-A3FDAV5G.js";
import "/build/_shared/chunk-HW4VQ743.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-2PUATGZI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-XGDSMD3A.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/electionresults.m._index.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/electionresults.m._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/electionresults.m._index.jsx"
  );
  import.meta.hot.lastModified = "1701505174915.155";
}
var ElectionresultsMobile = () => {
  _s();
  const [webSocketData, stateName] = (0, import_react.useContext)(ElectionContext);
  const stateData = getSateData(webSocketData[0]["states"], stateName);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full min-h-screen font__nunitosans flex flex-col items-center bg-[#050D3E]", style: {
    background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "info-bar-container w-full flex items-center  bg-[#003D75] px-2 md:px-6", style: {
      alignSelf: "flex-start"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoBar_default, {}, void 0, false, {
        fileName: "app/routes/electionresults.m._index.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download_default, {}, void 0, false, {
        fileName: "app/routes/electionresults.m._index.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/electionresults.m._index.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full result-cards-container my-5 md:my-0 flex flex-1 justify-center md:content-center gap-y-5 md:gap-x-8 md:gap-y-11 flex-wrap overflow-y-auto", children: stateData[0]["media_sources"].map((media) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { sx: `w-[90%] mx-auto md:w-[30%]`, media: media["name"], parties: media["party_wise_data"] }, media["name"], false, {
      fileName: "app/routes/electionresults.m._index.jsx",
      lineNumber: 41,
      columnNumber: 55
    }, this)) }, void 0, false, {
      fileName: "app/routes/electionresults.m._index.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/electionresults.m._index.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s(ElectionresultsMobile, "EZ3g08IGcPKmzS6wWYvG2jd4Thw=");
_c = ElectionresultsMobile;
var electionresults_m_index_default = ElectionresultsMobile;
var _c;
$RefreshReg$(_c, "ElectionresultsMobile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  electionresults_m_index_default as default
};
//# sourceMappingURL=/build/routes/electionresults.m._index-4HW3OTCM.js.map
