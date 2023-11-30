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
  hideOthers
} from "/build/_shared/chunk-5JYQUXBT.js";
import {
  Link
} from "/build/_shared/chunk-NEMJIZPC.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  Election_default,
  aadhan_logo_default,
  down_arrow_default,
  share_default,
  whatsapp_default
} from "/build/_shared/chunk-O6BE6AWN.js";
import {
  createHotContext
} from "/build/_shared/chunk-XGDSMD3A.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
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
    window.$RefreshRuntime$.register(type, '"app/services/context/ConstituencyService.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/services/context/ConstituencyService.jsx"
  );
  import.meta.hot.lastModified = "1701334795716.1187";
}
var ConstituencyContext = (0, import_react.createContext)("aadhan mobile");
var ConstituencyProvider = ({
  children
}) => {
  _s();
  const [select, setSelect] = (0, import_react.useState)(true);
  const [state, setState] = (0, import_react.useState)("Telangana");
  const [constituency, setConstituency] = (0, import_react.useState)("Gajwel");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConstituencyContext.Provider, { value: [select, setSelect, state, setState, constituency, setConstituency], children }, void 0, false, {
    fileName: "app/services/context/ConstituencyService.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(ConstituencyProvider, "0ZT+7/iPC/JbigSwD92akdQ4ucg=");
_c = ConstituencyProvider;
var _c;
$RefreshReg$(_c, "ConstituencyProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/Constituency.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ConstituencyResultsMobile/Constituency.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConstituencyResultsMobile/Constituency.jsx"
  );
  import.meta.hot.lastModified = "1701348707526.6287";
}
var Constituency = () => {
  _s2();
  const [select, setSelect] = (0, import_react2.useContext)(ConstituencyContext);
  console.log("iT", select);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#050D3E] min-h-screen text-white pt-[1rem]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "brand-mobile-logo pt-[1rem] pb-[2rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: aadhan_logo_default, alt: "aadhan app logo", className: "block mx-auto w-[23%]" }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabBar_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    select ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StateLevel_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 35,
      columnNumber: 23
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ConstituencyLevel_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 35,
      columnNumber: 40
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[95%] mx-auto mt-[2rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Share_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 37,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/Constituency.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(Constituency, "ek9CEhCG4zcMDheZwvRzZ16a8cI=");
_c2 = Constituency;
var Constituency_default = Constituency;
var _c2;
$RefreshReg$(_c2, "Constituency");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/StateLevel.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ConstituencyResultsMobile/StateLevel.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConstituencyResultsMobile/StateLevel.jsx"
  );
  import.meta.hot.lastModified = "1701329461648.5076";
}
var StateLevel = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "entity-1-container w-[95%] my-3 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-mobile-continer w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "results-mobile-container my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PartyResults_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 29,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "my-3", children: [
      "Total Seats: ",
      ""
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-start items-center gap-2 my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Magic figure:" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-fit px-4 bg-[#FFA500] text-black rounded-md font-medium", children: "" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/StateLevel.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c3 = StateLevel;
var StateLevel_default = StateLevel;
var _c3;
$RefreshReg$(_c3, "StateLevel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx"
  );
  import.meta.hot.lastModified = "1701329448655.0928";
}
var ConstituencyLevel = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "entity-1-container w-[95%] my-3 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-mobile-continer w-full flex justify-start items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, {}, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, {}, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
        lineNumber: 27,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "my-3", children: "Round No: 5" }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "results-mobile-container my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PartyResults_default, {}, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/ConstituencyLevel.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c4 = ConstituencyLevel;
var ConstituencyLevel_default = ConstituencyLevel;
var _c4;
$RefreshReg$(_c4, "ConstituencyLevel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/TabBar.jsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ConstituencyResultsMobile/TabBar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConstituencyResultsMobile/TabBar.jsx"
  );
  import.meta.hot.lastModified = "1701348645496.6602";
}
var TabBar = () => {
  _s3();
  const [select, setSelect] = (0, import_react3.useContext)(ConstituencyContext);
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
_s3(TabBar, "vu5N2OkH55PDYIqM0z/L3e4zs2k=");
_c5 = TabBar;
var TabBar_default = TabBar;
var _c5;
$RefreshReg$(_c5, "TabBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/Dropdown.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ConstituencyResultsMobile/Dropdown.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConstituencyResultsMobile/Dropdown.jsx"
  );
  import.meta.hot.lastModified = "1701173367309.0356";
}
var Dropdown = ({
  sx
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `${sx}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { className: "min-w-[155px] justify-start", variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 37,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: down_arrow_default, alt: "down icon" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
      lineNumber: 36,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuContent, { className: "w-[180px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuLabel, { children: "Select a State" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DropdownMenuRadioGroup, { value: "", onValueChange: "" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
        lineNumber: 45,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
      lineNumber: 42,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/ConstituencyResultsMobile/Dropdown.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c6 = Dropdown;
var Dropdown_default = Dropdown;
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
    window.$RefreshRuntime$.register(type, '"app/components/ConstituencyResultsMobile/PartyResults.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConstituencyResultsMobile/PartyResults.jsx"
  );
  import.meta.hot.lastModified = "1701173018232.8374";
}
var PartyResults = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Table, { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { className: "text-center bg-[#34509d] border-0 border-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "text-white ps-3", children: "Party" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "text-center text-white", children: "Leading" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "text-center text-white", children: "Won" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { className: "text-center text-white", children: "Total" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { className: "bg-[#dff1df]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "font-medium text-black ps-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-start items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "w-5 h-5 rounded-full", src: "", alt: "" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
          lineNumber: 38,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", {}, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
          lineNumber: 39,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "text-center text-black", children: "" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "text-center text-black", children: "" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { className: "text-center text-[indigo]", children: "" }, void 0, false, {
        fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, "", true, {
      fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/PartyResults.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c7 = PartyResults;
var PartyResults_default = PartyResults;
var _c7;
$RefreshReg$(_c7, "PartyResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConstituencyResultsMobile/Share.jsx
var import_react7 = __toESM(require_react(), 1);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react4 = __toESM(require_react());

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
  const Component = (0, import_react4.forwardRef)(
    ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref) => (0, import_react4.createElement)(
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
        ...iconNode.map(([tag, attrs]) => (0, import_react4.createElement)(tag, attrs)),
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
var React4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react5.useRef)(null);
  const contentRef = (0, import_react5.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react5.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react5.useCallback)(
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
var $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  return /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
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
  return /* @__PURE__ */ (0, import_react5.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react5.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react5.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react5.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react5.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react5.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react5.createElement)(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
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
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react5.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react5.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react5.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react5.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  (0, import_react5.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react5.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
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
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react5.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react5.useRef)(false);
  return /* @__PURE__ */ (0, import_react5.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
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
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react5.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react5.createElement)(import_react5.Fragment, null, /* @__PURE__ */ (0, import_react5.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react5.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
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
var $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
var $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
    id: context.descriptionId
  }, descriptionProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
var $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ (0, import_react5.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react5.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
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
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/dialog.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/dialog.jsx"
  );
  import.meta.hot.lastModified = "1701336220826.3528";
}
var Dialog = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
var DialogTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
var DialogPortal = $5d3850c4d0b4e6c7$export$602eac185826482c;
var DialogOverlay = React4.forwardRef(_c8 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { ref, className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c22 = DialogOverlay;
DialogOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
var DialogContent = React4.forwardRef(_c32 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogOverlay, {}, void 0, false, {
    fileName: "app/components/ui/dialog.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Cross2Icon, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/ui/dialog.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
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
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 54,
  columnNumber: 7
}, this);
_c52 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 60,
  columnNumber: 7
}, this);
_c62 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React4.forwardRef(_c72 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)($5d3850c4d0b4e6c7$export$f99233281efd08a0, { ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 66,
  columnNumber: 12
}, this));
_c82 = DialogTitle;
DialogTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
var DialogDescription = React4.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)($5d3850c4d0b4e6c7$export$393edc798c47379d, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dialog.jsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c10 = DialogDescription;
DialogDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
var _c8;
var _c22;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c9;
var _c10;
$RefreshReg$(_c8, "DialogOverlay$React.forwardRef");
$RefreshReg$(_c22, "DialogOverlay");
$RefreshReg$(_c32, "DialogContent$React.forwardRef");
$RefreshReg$(_c42, "DialogContent");
$RefreshReg$(_c52, "DialogHeader");
$RefreshReg$(_c62, "DialogFooter");
$RefreshReg$(_c72, "DialogTitle$React.forwardRef");
$RefreshReg$(_c82, "DialogTitle");
$RefreshReg$(_c9, "DialogDescription$React.forwardRef");
$RefreshReg$(_c10, "DialogDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/input.jsx
var React5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/input.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/input.jsx"
  );
  import.meta.hot.lastModified = "1701336391897.3142";
}
var Input = React5.forwardRef(_c11 = ({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type, className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ref, ...props }, void 0, false, {
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
var React6 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react6.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
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
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/label.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/label.jsx"
  );
  import.meta.hot.lastModified = "1701336407287.338";
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React6.forwardRef(_c12 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
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
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ConstituencyResultsMobile/Share.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConstituencyResultsMobile/Share.jsx"
  );
  import.meta.hot.lastModified = "1701348777770.358";
}
var Share = () => {
  _s4();
  const [copyText, setCopyText] = (0, import_react7.useState)("https://aadhan.in");
  const [isClicked, setIsClicked] = (0, import_react7.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Dialog, { className: "rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { className: "table__shadow rounded-full p-1 w-8 h-8 border-0 bg-blue-400 hover:rotate-[20deg] transition-transform ", variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: share_default, className: "hover:text-[black]", alt: "share" }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DialogContent, { className: "sm:max-w-md rounded-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DialogTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: Election_default, className: "w-[95%] mx-auto rounded-lg", alt: "preview" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DialogDescription, { className: "text-[15px] text-black font-medium", children: "Assembly Election Results" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "grid flex-1 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Label, { htmlFor: "link", className: "sr-only", children: "Link" }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Input, { id: "link", defaultValue: copyText, readOnly: true }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Link, { target: "_blank", to: copyText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: whatsapp_default, className: "w-8", alt: "whatsapp" }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 57,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { type: "submit", size: "sm", className: "px-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "sr-only", children: "Copy" }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Copy, { className: `h-4 w-4 ${isClicked && "scale-[0.8]"}`, onClick: () => {
            copyTextToClipboard(copyText);
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 100);
          } }, void 0, false, {
            fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ConstituencyResultsMobile/Share.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s4(Share, "nZhmKJWkkEfx6YGtYX861e1hFjc=");
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
    "app/components/ConstituencyResultsMobile/index.js"
  );
  import.meta.hot.lastModified = "1701347672144.251";
}

// app/routes/constituencyresults.jsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/constituencyresults.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/constituencyresults.jsx"
  );
  import.meta.hot.lastModified = "1701331380337.3093";
}
var ConstituencyResults = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ConstituencyProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Constituency_default, {}, void 0, false, {
    fileName: "app/routes/constituencyresults.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/constituencyresults.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c14 = ConstituencyResults;
var constituencyresults_default = ConstituencyResults;
var _c14;
$RefreshReg$(_c14, "ConstituencyResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  constituencyresults_default as default
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
//# sourceMappingURL=/build/routes/constituencyresults-CEBLTI7D.js.map
