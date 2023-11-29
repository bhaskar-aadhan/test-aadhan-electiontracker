import {
  Button,
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
  TableRow
} from "/build/_shared/chunk-4ZT2URJD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  aadhan_app_logo_default,
  down_arrow_default
} from "/build/_shared/chunk-RBI47FRD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-XGDSMD3A.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ElectionTrackerMobile/TabBar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ElectionTrackerMobile/TabBar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ElectionTrackerMobile/TabBar.jsx"
  );
  import.meta.hot.lastModified = "1701171756037.847";
}
var TabBar = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tabBar-container text-center rounded-sm w-[95%] mx-auto bg-white text-[#0165FF] flex justify-center items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `entity-1 rounded-sm flex-1 text-white bg-[#0165FF] py-1`, children: "State" }, void 0, false, {
      fileName: "app/components/ElectionTrackerMobile/TabBar.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `entity-2 rounded-sm flex-1 py-1`, children: "Constituency" }, void 0, false, {
      fileName: "app/components/ElectionTrackerMobile/TabBar.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ElectionTrackerMobile/TabBar.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c = TabBar;
var TabBar_default = TabBar;
var _c;
$RefreshReg$(_c, "TabBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ElectionTrackerMobile/Dropdown.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ElectionTrackerMobile/Dropdown.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ElectionTrackerMobile/Dropdown.jsx"
  );
  import.meta.hot.lastModified = "1701173367309.0356";
}
var Dropdown = ({
  sx
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${sx}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { className: "min-w-[155px] justify-start", variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
        lineNumber: 37,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: down_arrow_default, alt: "down icon" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
      lineNumber: 36,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuContent, { className: "w-[180px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuLabel, { children: "Select a State" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuRadioGroup, { value: "", onValueChange: "" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
        lineNumber: 45,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
      lineNumber: 42,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/ElectionTrackerMobile/Dropdown.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c2 = Dropdown;
var Dropdown_default = Dropdown;
var _c2;
$RefreshReg$(_c2, "Dropdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ElectionTrackerMobile/PartyResults.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ElectionTrackerMobile/PartyResults.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ElectionTrackerMobile/PartyResults.jsx"
  );
  import.meta.hot.lastModified = "1701173018232.8374";
}
var PartyResults = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Table, { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { className: "text-center bg-[#34509d] border-0 border-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { className: "text-white ps-3", children: "Party" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { className: "text-center text-white", children: "Leading" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { className: "text-center text-white", children: "Won" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { className: "text-center text-white", children: "Total" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { className: "bg-[#dff1df]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { className: "font-medium text-black ps-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-start items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "w-5 h-5 rounded-full", src: "", alt: "" }, void 0, false, {
          fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
          lineNumber: 38,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {}, void 0, false, {
          fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
          lineNumber: 39,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { className: "text-center text-black", children: "" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { className: "text-center text-black", children: "" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { className: "text-center text-[indigo]", children: "" }, void 0, false, {
        fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, "", true, {
      fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ElectionTrackerMobile/PartyResults.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c3 = PartyResults;
var PartyResults_default = PartyResults;
var _c3;
$RefreshReg$(_c3, "PartyResults");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ElectionTrackerMobile/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ElectionTrackerMobile/index.js"
  );
  import.meta.hot.lastModified = "1701172921377.3733";
}

// app/routes/mobile.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mobile.jsx"
  );
  import.meta.hot.lastModified = "1701174109360.6821";
}
var mobile = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-[#050D3E] min-h-screen text-white pt-[1rem]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "brand-mobile-logo pt-[1rem] pb-[2rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: aadhan_app_logo_default, alt: "aadhan app logo", className: "block mx-auto w-[23%]" }, void 0, false, {
      fileName: "app/routes/mobile.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/mobile.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TabBar_default, {}, void 0, false, {
      fileName: "app/routes/mobile.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "entity-1-container w-[95%] my-3 mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-mobile-continer w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, {}, void 0, false, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "results-mobile-container my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PartyResults_default, {}, void 0, false, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "my-3", children: [
        "Total Seats: ",
        ""
      ] }, void 0, true, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-start items-center gap-2 my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Magic figure:" }, void 0, false, {
          fileName: "app/routes/mobile.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-fit px-4 bg-[#FFA500] text-black rounded-md font-medium", children: "" }, void 0, false, {
          fileName: "app/routes/mobile.jsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mobile.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "entity-1-container w-[95%] my-3 mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-mobile-continer w-full flex justify-start items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, {}, void 0, false, {
          fileName: "app/routes/mobile.jsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, {}, void 0, false, {
          fileName: "app/routes/mobile.jsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "my-3", children: "Round No: 5" }, void 0, false, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "results-mobile-container my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PartyResults_default, {}, void 0, false, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/mobile.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mobile.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mobile.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var mobile_default = mobile;
export {
  mobile_default as default
};
//# sourceMappingURL=/build/routes/mobile-CSBYYJL5.js.map
