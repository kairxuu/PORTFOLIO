module.exports = [
"[project]/src/actions/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"405e78d561017e500b6fc9dbe7b27251d4ed20bc88":"sendContactEmail"},"",""] */ __turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'resend'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
async function sendContactEmail(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const type = formData.get("type");
    const message = formData.get("message");
    if (!name || !email || !message) {
        return {
            error: "Veuillez remplir tous les champs requis."
        };
    }
    const typeLabels = {
        webapp: "Application Web Front-End",
        design: "Design UI/UX & Prototypage",
        audit: "Audit de Performance Web",
        other: "Autre / Conseil",
        default: "Non spécifié"
    };
    const projectType = typeLabels[type] || typeLabels.default;
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouveau message de contact</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #050505; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <div style="padding: 40px 20px; text-align: center;">
                <div style="max-width: 600px; margin: 0 auto; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; padding: 40px; text-align: left; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);">
                    <h1 style="font-size: 28px; font-weight: bold; margin-top: 0; margin-bottom: 30px; letter-spacing: -0.5px; color: #ffffff;">Nouveau projet.</h1>
                    
                    <div style="margin-bottom: 24px;">
                        <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255, 255, 255, 0.4); margin-bottom: 8px; margin-top: 0;">Expéditeur</p>
                        <p style="font-size: 18px; margin: 0; color: #ffffff;">${name}</p>
                        <p style="font-size: 16px; margin: 4px 0 0 0; color: rgba(255, 255, 255, 0.7);"><a href="mailto:${email}" style="color: #ffffff; text-decoration: none;">${email}</a></p>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255, 255, 255, 0.4); margin-bottom: 8px; margin-top: 0;">Type de projet</p>
                        <p style="font-size: 16px; margin: 0; color: #ffffff; padding: 8px 16px; background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05); display: inline-block;">${projectType}</p>
                    </div>

                    <div style="margin-bottom: 0;">
                        <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255, 255, 255, 0.4); margin-bottom: 12px; margin-top: 0;">Message</p>
                        <div style="font-size: 16px; line-height: 1.6; color: rgba(255, 255, 255, 0.8); background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 20px; white-space: pre-wrap;">${message}</div>
                    </div>
                    
                    <div style="margin-top: 40px; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 20px;">
                        <p style="font-size: 12px; color: rgba(255, 255, 255, 0.4); margin: 0; text-align: center;">Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    try {
        if (!process.env.RESEND_API_KEY) {
            console.warn("RESEND_API_KEY non définie. Simulation de l'envoi de l'email :", {
                name,
                email,
                projectType,
                message
            });
            // Simulate network delay
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            return {
                success: true
            };
        }
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [
                "klsyalex495@gmail.com"
            ],
            replyTo: email,
            subject: `Nouveau projet de ${name} - ${projectType}`,
            html: htmlContent
        });
        if (data.error) {
            return {
                error: data.error.message
            };
        }
        return {
            success: true
        };
    } catch (error) {
        return {
            error: "Une erreur est survenue lors de l'envoi de l'email."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendContactEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendContactEmail, "405e78d561017e500b6fc9dbe7b27251d4ed20bc88", null);
}),
"[project]/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/contact.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "405e78d561017e500b6fc9dbe7b27251d4ed20bc88",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendContactEmail"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$contact$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/contact.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/contact.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_dd4058bc._.js.map