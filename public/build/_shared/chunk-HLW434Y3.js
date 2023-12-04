import {
  useQuery
} from "/build/_shared/chunk-YIC4LTS5.js";
import {
  ballot_1_default
} from "/build/_shared/chunk-HGNUIF6L.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2MI4DQA3.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/services/context/ConstituencyService.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\services\\\\context\\\\ConstituencyService.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\services\\context\\ConstituencyService.jsx"
  );
  import.meta.hot.lastModified = "1701662591455.127";
}
var ConstituencyContext = (0, import_react.createContext)("aadhan mobile");
var getElectionData = async () => {
  const response = await fetch(`https://cmsapis.aadhan.in/election-results/average-party`);
  const electionData = await response.json();
  const data = await electionData;
  console.log("eld", data);
  return data;
};
var ConstituencyProvider = ({
  children
}) => {
  _s();
  const [webSocketData, setWebSocketData] = (0, import_react.useState)(null);
  const [select, setSelect] = (0, import_react.useState)(true);
  const [stateNameMobile, setStateNameMobile] = (0, import_react.useState)("Mizoram");
  const [webSocket2Data, setWebSocket2Data] = (0, import_react.useState)(null);
  const [constituency, setConstituency] = (0, import_react.useState)("Gajwel");
  const [interval, setInterval] = (0, import_react.useState)(3e4);
  const apiDataQuery = useQuery({
    queryKey: ["election2"],
    queryFn: getElectionData,
    refetchInterval: interval,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true
  });
  (0, import_react.useEffect)(() => {
    setWebSocketData(apiDataQuery.data);
  }, [apiDataQuery.data]);
  console.log("rest2, rest3 api data", webSocketData, apiDataQuery.data, apiDataQuery.status);
  if (apiDataQuery.isLoading || webSocketData === null || webSocketData === void 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen grid place-content-center", style: {
      background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)`
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ballot_1_default, alt: "ballot gif" }, void 0, false, {
      fileName: "app/services/context/ConstituencyService.jsx",
      lineNumber: 102,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/services/context/ConstituencyService.jsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/services/context/ConstituencyService.jsx",
      lineNumber: 98,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstituencyContext.Provider, { value: [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency], children }, void 0, false, {
    fileName: "app/services/context/ConstituencyService.jsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
};
_s(ConstituencyProvider, "MUhbV9oSw4zWnAjNyR2p+eI8GYQ=", false, function() {
  return [useQuery];
});
_c = ConstituencyProvider;
var _c;
$RefreshReg$(_c, "ConstituencyProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ConstituencyContext,
  ConstituencyProvider
};
//# sourceMappingURL=/build/_shared/chunk-HLW434Y3.js.map
