// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: ["/*"],
  exclude: ["/favicon.ico", "/build/*"]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "D:\\Implementation\\Projects\\Aadhan\\Aadhan-election-Tracker\\dev-branch\\Aadhan-LiveResults\\.wrangler\\tmp\\pages-rLVvWb\\functionsWorker-0.37966955221988474.mjs";
export * from "D:\\Implementation\\Projects\\Aadhan\\Aadhan-election-Tracker\\dev-branch\\Aadhan-LiveResults\\.wrangler\\tmp\\pages-rLVvWb\\functionsWorker-0.37966955221988474.mjs";
import { isRoutingRuleMatch } from "D:\\Implementation\\Projects\\Aadhan\\Aadhan-election-Tracker\\dev-branch\\Aadhan-LiveResults\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=hv6vd2i0dnl.js.map
