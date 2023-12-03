import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $c512c27ab02ef895$export$fd42f52fd3ae1109,
  $d3863c46a17e8a28$export$20e40289641fbbb6,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $f1701beae083dbae$export$602eac185826482c,
  Button,
  Combination_default,
  Cross2Icon,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  _extends,
  cn,
  copyTextToClipboard,
  cva,
  getConstituenciesData,
  getMagicFigureSateLevelData,
  getRoundNo,
  getSateLevelStateData,
  hideOthers
} from "/build/_shared/chunk-USUA3K4S.js";
import {
  ConstituencyContext
} from "/build/_shared/chunk-O4GFZPHB.js";
import {
  Election_default,
  aadhan_logo_default,
  carrot_up_default,
  down_arrow_default,
  whatsapp_default
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

// app/components/ConstituencyResultsMobile/Constituency.jsx
var import_react12 = __toESM(require_react(), 1);

// app/components/ConstituencyResultsMobile/StateLevel.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\StateLevel.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\StateLevel.jsx"
  );
  import.meta.hot.lastModified = "1701575385979.235";
}
var StateLevel = () => {
  _s();
  const [webSocketData, select, setSelect, stateName, setStateName] = (0, import_react.useContext)(ConstituencyContext);
  const stateLevelData = getSateLevelStateData(webSocketData, stateName);
  const magicFigure = getMagicFigureSateLevelData(webSocketData, stateName);
  console.log("state level sdata: ", stateLevelData, "mfd sld: ", magicFigure);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "entity-1-container w-[95%] my-3 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-mobile-continer w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "results-mobile-container my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PartyResults_default, { stateLevelData }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 37,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-3 text-white font-medium", children: [
      "Total Seats: ",
      stateLevelData[0]["total_constituencies"]
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-start items-center gap-2 my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: [
      "Magic figure: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#FFA500]", children: magicFigure }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
        lineNumber: 41,
        columnNumber: 58
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s(StateLevel, "L2PwLGeBCngZOz+KYh/Yvtg0xlU=");
_c = StateLevel;
var StateLevel_default = StateLevel;
var _c;
$RefreshReg$(_c, "StateLevel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx
var import_react4 = __toESM(require_react(), 1);

// app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\CandidateWiseResults\\\\Dropdown.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\CandidateWiseResults\\Dropdown.jsx"
  );
  import.meta.hot.lastModified = "1701575385971.8254";
}
var Dropdown = ({
  sx
}) => {
  _s2();
  const [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency] = (0, import_react2.useContext)(ConstituencyContext);
  console.log("state name", stateNameMobile);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${sx}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { className: "min-w-[155px] justify-start", variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: stateNameMobile }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: down_arrow_default, alt: "down icon" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
        lineNumber: 39,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
      lineNumber: 37,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuContent, { className: "w-[180px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuLabel, { children: "Select a State" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioGroup, { value: stateNameMobile, onValueChange: setStateNameMobile, children: webSocket2Data?.map((state) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioItem, { value: state["state"], children: state["state"] }, state["state"], false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
        lineNumber: 47,
        columnNumber: 55
      }, this)) }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
      lineNumber: 43,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
    lineNumber: 34,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s2(Dropdown, "ntk5niLXDptED6EtkbGKclLAHOc=");
_c2 = Dropdown;
var Dropdown_default2 = Dropdown;
var _c2;
$RefreshReg$(_c2, "Dropdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\CandidateWiseResults\\\\Dropdown2.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\CandidateWiseResults\\Dropdown2.jsx"
  );
  import.meta.hot.lastModified = "1701575385971.8254";
}
var Dropdown2 = ({
  sx
}) => {
  _s3();
  const [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency] = (0, import_react3.useContext)(ConstituencyContext);
  const stateData = getSateLevelStateData(webSocket2Data, stateNameMobile);
  console.log("state data dd2", stateData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${sx}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "min-w-[155px] justify-start", variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: constituency }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
        lineNumber: 40,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: down_arrow_default, alt: "down icon" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
        lineNumber: 41,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
      lineNumber: 39,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
      lineNumber: 38,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
      lineNumber: 37,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuContent, { className: "w-[180px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuLabel, { children: "Select a constituency" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuRadioGroup, { value: constituency, onValueChange: setConstituency, children: stateData?.[0]?.["constituencies"]?.map((constituencie) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuRadioItem, { value: constituencie["name"], children: constituencie["name"] }, constituencie["name"], false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
        lineNumber: 49,
        columnNumber: 83
      }, this)) }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
      lineNumber: 45,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
    lineNumber: 36,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/ConstituencyResultsMobile/CandidateWiseResults/Dropdown2.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s3(Dropdown2, "vJbg+1iy+EPMpzsDUp0GxBdkxAk=");
_c3 = Dropdown2;
var Dropdown2_default = Dropdown2;
var _c3;
$RefreshReg$(_c3, "Dropdown2");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/CandidateWiseResults/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\CandidateWiseResults\\index.js"
  );
  import.meta.hot.lastModified = "1701575385972.8264";
}

// app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\ConstituencyLevel.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\ConstituencyLevel.jsx"
  );
  import.meta.hot.lastModified = "1701575385974.8203";
}
var ConstituencyLevel = () => {
  _s4();
  const [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency] = (0, import_react4.useContext)(ConstituencyContext);
  const lastkey = getRoundNo(webSocket2Data, stateNameMobile, constituency);
  console.log("last key", lastkey);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "entity-1-container w-[95%] my-3 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-mobile-continer w-full flex justify-start items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default2, {}, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown2_default, {}, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    lastkey > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "my-3", children: [
      "Round No: ",
      lastkey
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
      lineNumber: 37,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "results-mobile-container my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ConstituencyResults_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s4(ConstituencyLevel, "vJbg+1iy+EPMpzsDUp0GxBdkxAk=");
_c4 = ConstituencyLevel;
var ConstituencyLevel_default = ConstituencyLevel;
var _c4;
$RefreshReg$(_c4, "ConstituencyLevel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/TabBar.jsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\TabBar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\TabBar.jsx"
  );
  import.meta.hot.lastModified = "1701575385980.232";
}
var TabBar = () => {
  _s5();
  const [webSocketData, select, setSelect] = (0, import_react5.useContext)(ConstituencyContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "tabBar-container text-center rounded-md w-[95%] mx-auto bg-white text-[#0165FF] flex justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { onClick: () => setSelect(true), onKeyDown: () => {
    }, className: `entity-1 w-full cursor-pointer rounded-s-md flex-1 py-1 ${select && "text-white bg-[#0165FF]"}`, children: "State" }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/TabBar.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { onClick: () => setSelect(false), onKeyDown: () => {
    }, className: `entity-2 rounded-e-sm w-full cursor-pointer flex-1 py-1 ${!select && "text-white bg-[#0165FF]"}`, children: "Constituency" }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/TabBar.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/TabBar.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_s5(TabBar, "NdbN7J5WSc38xRPT2XRFC8oMqOI=");
_c5 = TabBar;
var TabBar_default = TabBar;
var _c5;
$RefreshReg$(_c5, "TabBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/Dropdown.jsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\Dropdown.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\Dropdown.jsx"
  );
  import.meta.hot.lastModified = "1701575385977.233";
}
var Dropdown3 = ({
  sx
}) => {
  _s6();
  const [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile] = (0, import_react6.useContext)(ConstituencyContext);
  console.log("state name", stateNameMobile);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `${sx}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { className: "min-w-[155px] justify-start", variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: stateNameMobile }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: down_arrow_default, alt: "down icon" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 39,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
      lineNumber: 37,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuContent, { className: "w-[180px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuLabel, { children: "Select a State" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuRadioGroup, { value: stateNameMobile, onValueChange: setStateNameMobile, children: webSocketData?.map((state) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuRadioItem, { value: state["state"], children: state["state"] }, state["state"], false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 47,
        columnNumber: 54
      }, this)) }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
      lineNumber: 43,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
    lineNumber: 34,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s6(Dropdown3, "RHZyciVKXUix7WkAQLop6U49Ass=");
_c6 = Dropdown3;
var Dropdown_default = Dropdown3;
var _c6;
$RefreshReg$(_c6, "Dropdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/PartyResults.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\PartyResults.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\PartyResults.jsx"
  );
  import.meta.hot.lastModified = "1701575385978.2375";
}
var PartyResults = ({
  stateLevelData
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Table, { className: "state-level-table", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { className: "text-center bg-[#34509d] border-0 border-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "text-white ps-3", children: "Party" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "text-center text-white", children: "Leading" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "text-center text-white", children: "Won" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "text-center text-white", children: "Total" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 32,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableBody, { children: stateLevelData?.[0]?.["parties"].map((party) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { className: "bg-[#2A3654]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "font-medium text-white ps-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-start items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "w-5 h-5 rounded-full", src: party["logo"], alt: "party logo" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
          lineNumber: 39,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: party["name"] }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
          lineNumber: 40,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "text-center text-white", children: party["leading"] }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 43,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "text-center text-white", children: party["won"] }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 44,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "text-center font-semibold text-white", children: party["leading"] + party["won"] }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 45,
        columnNumber: 25
      }, this)
    ] }, party["name"], true, {
      fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
      lineNumber: 36,
      columnNumber: 64
    }, this)) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c7 = PartyResults;
var PartyResults_default = PartyResults;
var _c7;
$RefreshReg$(_c7, "PartyResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/ConstituencyResults.jsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\ConstituencyResults.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\ConstituencyResults.jsx"
  );
  import.meta.hot.lastModified = "1701575385976.1494";
}
var ConstituencyResults = ({
  stateLevelData
}) => {
  _s7();
  const [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency] = (0, import_react7.useContext)(ConstituencyContext);
  const constituenciesData = getConstituenciesData(webSocket2Data, stateNameMobile, constituency);
  console.log("can data", constituenciesData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Table, { className: "state-level-table", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableRow, { className: "text-center bg-[#34509d] border-0 border-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableHead, { className: "text-white ps-3", children: "Candidate" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableHead, { className: "text-center text-white", children: "Votes" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableHead, { className: "text-center text-white", children: "Status" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
        lineNumber: 39,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
      lineNumber: 36,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableBody, { children: constituenciesData?.[0]?.["candidates"]?.map((candidate) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableRow, { className: "bg-[#2A3654]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableCell, { className: "font-medium text-white ps-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex justify-start items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "w-5 h-5 rounded-full", src: candidate["party_logo"], alt: "party logo" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
          lineNumber: 46,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: candidate["name"] }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
          lineNumber: 47,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
        lineNumber: 45,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
        lineNumber: 44,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableCell, { className: "text-center text-white", children: candidate["total_votes"] }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
        lineNumber: 50,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableCell, { className: "text-center text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col justify-center items-center", style: {
        color: `${candidate["color"]}`
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "font-medium", children: candidate["status"] }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
          lineNumber: 55,
          columnNumber: 33
        }, this),
        candidate["differData"] !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-[12px] flex justify-center items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: carrot_up_default, className: "filter-green", alt: "up arrow" }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
            lineNumber: 57,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: candidate["differData"] }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
            lineNumber: 58,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
          lineNumber: 56,
          columnNumber: 67
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
        lineNumber: 52,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
        lineNumber: 51,
        columnNumber: 25
      }, this)
    ] }, candidate["id"], true, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
      lineNumber: 43,
      columnNumber: 76
    }, this)) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/ConstituencyResults.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s7(ConstituencyResults, "vJbg+1iy+EPMpzsDUp0GxBdkxAk=");
_c8 = ConstituencyResults;
var ConstituencyResults_default = ConstituencyResults;
var _c8;
$RefreshReg$(_c8, "ConstituencyResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/Share.jsx
var import_react11 = __toESM(require_react(), 1);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react8 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react8.forwardRef)(
    ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref) => (0, import_react8.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react8.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/copy.js
var Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// app/components/ui/dialog.jsx
var React8 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_react9 = __toESM(require_react(), 1);
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react9.useRef)(null);
  const contentRef = (0, import_react9.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react9.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$TRIGGER_NAME = "DialogTrigger";
var $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  return /* @__PURE__ */ (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react9.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react9.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react9.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react9.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react9.createElement)(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react9.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  (0, import_react9.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react9.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react9.useRef)(false);
  return /* @__PURE__ */ (0, import_react9.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react9.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react9.createElement)(import_react9.Fragment, null, /* @__PURE__ */ (0, import_react9.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react9.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
var $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
var $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
    id: context.descriptionId
  }, descriptionProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
var $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
var $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
var $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
var $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;

// app/components/ui/dialog.jsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\dialog.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\dialog.jsx"
  );
  import.meta.hot.lastModified = "1701575385985.558";
}
var Dialog = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
var DialogTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
var DialogPortal = $5d3850c4d0b4e6c7$export$602eac185826482c;
var DialogOverlay = React8.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { ref, className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c22 = DialogOverlay;
DialogOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
var DialogContent = React8.forwardRef(_c32 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DialogOverlay, {}, void 0, false, {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Cross2Icon, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/ui/dialog.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "app/components/ui/dialog.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/dialog.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c42 = DialogContent;
DialogContent.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 54,
  columnNumber: 7
}, this);
_c52 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 60,
  columnNumber: 7
}, this);
_c62 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React8.forwardRef(_c72 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)($5d3850c4d0b4e6c7$export$f99233281efd08a0, { ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 66,
  columnNumber: 12
}, this));
_c82 = DialogTitle;
DialogTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
var DialogDescription = React8.forwardRef(_c92 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)($5d3850c4d0b4e6c7$export$393edc798c47379d, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c10 = DialogDescription;
DialogDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
var _c9;
var _c22;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c92;
var _c10;
$RefreshReg$(_c9, "DialogOverlay$React.forwardRef");
$RefreshReg$(_c22, "DialogOverlay");
$RefreshReg$(_c32, "DialogContent$React.forwardRef");
$RefreshReg$(_c42, "DialogContent");
$RefreshReg$(_c52, "DialogHeader");
$RefreshReg$(_c62, "DialogFooter");
$RefreshReg$(_c72, "DialogTitle$React.forwardRef");
$RefreshReg$(_c82, "DialogTitle");
$RefreshReg$(_c92, "DialogDescription$React.forwardRef");
$RefreshReg$(_c10, "DialogDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/input.jsx
var React9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\input.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\input.jsx"
  );
  import.meta.hot.lastModified = "1701575385986.922";
}
var Input = React9.forwardRef(_c11 = ({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type, className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/input.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
});
_c23 = Input;
Input.displayName = "Input";
var _c11;
var _c23;
$RefreshReg$(_c11, "Input$React.forwardRef");
$RefreshReg$(_c23, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/label.jsx
var React10 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_react10 = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react10.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react10.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

// app/components/ui/label.jsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\label.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\label.jsx"
  );
  import.meta.hot.lastModified = "1701575385986.922";
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React10.forwardRef(_c12 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "app/components/ui/label.jsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c24 = Label;
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;
var _c12;
var _c24;
$RefreshReg$(_c12, "Label$React.forwardRef");
$RefreshReg$(_c24, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/Share.jsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\Share.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\Share.jsx"
  );
  import.meta.hot.lastModified = "1701575385979.235";
}
var Share = ({
  text
}) => {
  _s8();
  const [copyText, setCopyText] = (0, import_react11.useState)("https://adan.page.link/rkVr2Vr5xZs1S2p39");
  const [isClicked, setIsClicked] = (0, import_react11.useState)(false);
  const handleClick = () => {
    if (navigator?.share) {
      navigator.share({
        title: "Aadhan News App",
        url: `${text}`
      }).then(() => console.log("share response happened")).catch((err) => console.log("share error happened", err));
    } else {
      console.log("native not happened");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Dialog, { className: "rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { className: "wa-app-icon table__shadow p-1 w-10 h-10 border-0 bg-transparent hover:rotate-[20deg] transition-transform ", variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: whatsapp_default, className: "hover:text-[black]", alt: "share" }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogContent, { className: "sm:max-w-md rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: Election_default, className: "w-[95%] mx-auto rounded-lg", alt: "preview" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 55,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DialogDescription, { className: "text-[15px] text-black font-medium", children: "Assembly Election Results" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid flex-1 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Label, { htmlFor: "link", className: "sr-only", children: "Link" }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Input, { id: "link", defaultValue: text, readOnly: true }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: handleClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: whatsapp_default, className: "w-8", alt: "whatsapp" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 68,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { type: "submit", size: "sm", className: "px-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "sr-only", children: "Copy" }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Copy, { className: `h-4 w-4 ${isClicked && "scale-[0.8]"}`, onClick: () => {
            copyTextToClipboard(text);
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 100);
          } }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_s8(Share, "Vi5nsiL4izDdVo7bTSC6z3MOMn8=");
_c13 = Share;
var Share_default = Share;
var _c13;
$RefreshReg$(_c13, "Share");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\index.js"
  );
  import.meta.hot.lastModified = "1701575385980.232";
}

// app/components/ConstituencyResultsMobile/Constituency.jsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ConstituencyResultsMobile\\\\Constituency.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ConstituencyResultsMobile\\Constituency.jsx"
  );
  import.meta.hot.lastModified = "1701575385973.8213";
}
var Constituency = ({
  text
}) => {
  _s9();
  const [webSocketData, select, setSelect] = (0, import_react12.useContext)(ConstituencyContext);
  const handleClick = () => {
    if (navigator?.share) {
      navigator.share({
        title: "Aadhan News App",
        url: "https://adan.page.link/fC66EuG84gz654tj6"
      }).then(() => console.log("share response happened")).catch((err) => console.log("share error happened", err));
    } else {
      console.log("native not happened");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-[#050D3E] min-h-screen text-white pt-[1rem] overflow-y-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "brand-mobile-logo pt-[1rem] pb-[2rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: aadhan_logo_default, alt: "aadhan app logo", className: "block mx-auto w-[23%]" }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 43,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TabBar_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    select ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(StateLevel_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 46,
      columnNumber: 23
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ConstituencyLevel_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 46,
      columnNumber: 40
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w-[95%] mx-auto mt-[2rem] flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Share_default, { text: "" }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 47,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s9(Constituency, "26cRGiioaZx6PKK1osz8urmYGaw=");
_c14 = Constituency;
var Constituency_default = Constituency;
var _c14;
$RefreshReg$(_c14, "Constituency");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Constituency_default,
  StateLevel_default,
  ConstituencyLevel_default,
  TabBar_default,
  Share_default
};
/*! Bundled license information:

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/copy.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-2O3AL4NQ.js.map
