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
  import.meta.hot.lastModified = "1701575386003.7114";
}
var ConstituencyContext = (0, import_react.createContext)("aadhan mobile");
var ConstituencyProvider = ({
  children
}) => {
  _s();
  const [webSocketData, setWebSocketData] = (0, import_react.useState)(null);
  const [select, setSelect] = (0, import_react.useState)(true);
  const [stateNameMobile, setStateNameMobile] = (0, import_react.useState)("Telangana");
  const [webSocket2Data, setWebSocket2Data] = (0, import_react.useState)(null);
  const [constituency, setConstituency] = (0, import_react.useState)("Gajwel");
  (0, import_react.useEffect)(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        initializeWebSocket();
        initializeWebSocket2();
      }
    }
    const initializeWebSocket = () => {
      const socket = new WebSocket("wss://cmsapis.aadhan.in/election-results/ws2");
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
    const initializeWebSocket2 = () => {
      const socket2 = new WebSocket("wss://cmsapis.aadhan.in/election-results/ws1");
      socket2.onopen = () => {
        console.log("WebSocket2 connection opened");
      };
      socket2.onmessage = (event) => {
        const wsdata = event.data;
        const wsData = JSON.parse(wsdata);
        setWebSocket2Data(wsData);
        console.log("websocket2 data: ", wsData, typeof wsData);
      };
      socket2.onclose = (event) => {
        console.log(`WebSocket connection closed code=${event.code}, reason=${event.reason}`);
        if (event.wasClean) {
          console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
        } else {
          console.error("WebSocket connection abruptly closed");
          setTimeout(initializeWebSocket2, 1e3);
        }
      };
      socket2.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    };
    initializeWebSocket();
    initializeWebSocket2();
  }, []);
  if (webSocketData === null || webSocket2Data === null) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen grid place-content-center", style: {
      background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)`
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ballot_1_default, alt: "ballot gif" }, void 0, false, {
      fileName: "app/services/context/ConstituencyService.jsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/services/context/ConstituencyService.jsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/services/context/ConstituencyService.jsx",
      lineNumber: 99,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstituencyContext.Provider, { value: [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency], children }, void 0, false, {
    fileName: "app/services/context/ConstituencyService.jsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
};
_s(ConstituencyProvider, "XnAiUd+dUvar17GWAJ24yS7D3JE=");
_c = ConstituencyProvider;
var _c;
$RefreshReg$(_c, "ConstituencyProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ConstituencyContext,
  ConstituencyProvider
};
//# sourceMappingURL=/build/_shared/chunk-P7PZ3XW2.js.map
