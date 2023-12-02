import {
  ballot_1_default
} from "/build/_shared/chunk-2PUATGZI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-XGDSMD3A.js";
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
    window.$RefreshRuntime$.register(type, '"app/services/context/ElectionService.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/services/context/ElectionService.jsx"
  );
  import.meta.hot.lastModified = "1701422658831.0056";
}
var ElectionContext = (0, import_react.createContext)("aadhan");
var WebscoketProvider = ({
  children
}) => {
  _s();
  const [webSocketData, setWebSocketData] = (0, import_react.useState)(null);
  const [stateName, setStateName] = (0, import_react.useState)("Telangana");
  (0, import_react.useEffect)(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        initializeWebSocket();
      }
    }
    const initializeWebSocket = () => {
      console.log("initializeWebSocket");
      const socket = new WebSocket("wss://stage-cmsapis.aadhan.in/election-results/ws");
      socket.onopen = () => {
        console.log("WebSocket connection opened");
      };
      socket.onmessage = (event) => {
        const wsdata = event.data;
        const wsData = JSON.parse(wsdata);
        setWebSocketData(wsData);
        console.log("websocket data: ", wsData, typeof wsData);
      };
      socket.onclose = (event) => {
        console.log(`WebSocket connection closed code=${event.code}, reason=${event.reason}`);
        if (event.wasClean) {
          console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
        } else {
          console.error("WebSocket connection abruptly closed");
          setTimeout(initializeWebSocket, 1e3);
        }
      };
      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    };
    initializeWebSocket();
  }, []);
  if (webSocketData === null) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen grid place-content-center", style: {
      background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)`
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ballot_1_default, alt: "ballot gif" }, void 0, false, {
      fileName: "app/services/context/ElectionService.jsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/services/context/ElectionService.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/services/context/ElectionService.jsx",
      lineNumber: 69,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ElectionContext.Provider, { value: [webSocketData, stateName, setStateName], children }, void 0, false, {
    fileName: "app/services/context/ElectionService.jsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
};
_s(WebscoketProvider, "dE570sUPBi++wcjFzMofoPYbWz4=");
_c = WebscoketProvider;
var _c;
$RefreshReg$(_c, "WebscoketProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ElectionContext,
  WebscoketProvider
};
//# sourceMappingURL=/build/_shared/chunk-OENJDHUC.js.map
