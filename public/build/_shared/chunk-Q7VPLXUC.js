import {
  useQuery
} from "/build/_shared/chunk-YIC4LTS5.js";
import {
  ballot_1_default
} from "/build/_shared/chunk-I5JZWTUL.js";
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

// app/services/context/ElectionService.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\services\\\\context\\\\ElectionService.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\services\\context\\ElectionService.jsx"
  );
  import.meta.hot.lastModified = "1701589468434.7798";
}
var ElectionContext = (0, import_react.createContext)("aadhan");
var getElectionData = async () => {
  const response = await fetch(`https://cmsapis.aadhan.in/election-results/election`);
  const electionData = await response.json();
  const data = await electionData;
  console.log("eld", data);
  return data;
};
var WebscoketProvider = ({
  children
}) => {
  _s();
  const [webSocketData, setWebSocketData] = (0, import_react.useState)(null);
  const [stateName, setStateName] = (0, import_react.useState)("Telangana");
  const [interval, setInterval] = (0, import_react.useState)(3e4);
  const apiDataQuery = useQuery({
    queryKey: ["election"],
    queryFn: getElectionData,
    refetchInterval: interval,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true
  });
  (0, import_react.useEffect)(() => {
    setWebSocketData(apiDataQuery.data);
  }, [apiDataQuery.data]);
  console.log("rest api data", webSocketData);
  if (apiDataQuery.isLoading || webSocketData === null) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen grid place-content-center", style: {
      background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)`
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ballot_1_default, alt: "ballot gif" }, void 0, false, {
      fileName: "app/services/context/ElectionService.jsx",
      lineNumber: 72,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/services/context/ElectionService.jsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/services/context/ElectionService.jsx",
      lineNumber: 68,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ElectionContext.Provider, { value: [webSocketData, stateName, setStateName], children }, void 0, false, {
    fileName: "app/services/context/ElectionService.jsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
};
_s(WebscoketProvider, "n1qAvqhfPcgHywpm5DgNZn7W4zA=", false, function() {
  return [useQuery];
});
_c = WebscoketProvider;
var _c;
$RefreshReg$(_c, "WebscoketProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ElectionContext,
  WebscoketProvider
};
//# sourceMappingURL=/build/_shared/chunk-Q7VPLXUC.js.map
