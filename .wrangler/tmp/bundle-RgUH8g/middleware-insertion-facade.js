				import worker, * as OTHER_EXPORTS from "D:\\Implementation\\Projects\\Aadhan\\Aadhan-election-Tracker\\dev-branch\\Aadhan-LiveResults\\.wrangler\\tmp\\pages-NYcTSl\\4s0804ycb0n.js";
				import * as __MIDDLEWARE_0__ from "D:\\Implementation\\Projects\\Aadhan\\Aadhan-election-Tracker\\dev-branch\\Aadhan-LiveResults\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "D:\\Implementation\\Projects\\Aadhan\\Aadhan-election-Tracker\\dev-branch\\Aadhan-LiveResults\\.wrangler\\tmp\\pages-NYcTSl\\4s0804ycb0n.js";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;