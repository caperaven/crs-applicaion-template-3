
globalThis.installFiles = [
    "./app/about/about.css",
    "./app/about/about.html",
    "./app/about/about.js",
    "./app/routes.json",
    "./app/welcome/welcome.css",
    "./app/welcome/welcome.html",
    "./app/welcome/welcome.js",
    "./icons/icon-128x128.png",
    "./icons/icon-144x144.png",
    "./icons/icon-152x152.png",
    "./icons/icon-192x192.png",
    "./icons/icon-384x384.png",
    "./icons/icon-512x512.png",
    "./icons/icon-72x72.png",
    "./icons/icon-96x96.png",
    "./index.html",
    "./index.js",
    "./manifest.json",
    "./packages/binding-engine3/classes/bindable-element.js",
    "./packages/binding-engine3/classes/crs-widget.js",
    "./packages/binding-engine3/classes/observable.js",
    "./packages/binding-engine3/classes/perspective-element.js",
    "./packages/binding-engine3/classes/view-base.js",
    "./packages/binding-engine3/crs-binding.js",
    "./packages/binding-engine3/events/dom-events.js",
    "./packages/binding-engine3/events/event-emitter.js",
    "./packages/binding-engine3/events.js",
    "./packages/binding-engine3/expressions/code-factories/case.js",
    "./packages/binding-engine3/expressions/code-factories/if.js",
    "./packages/binding-engine3/expressions/code-factories/inflation.js",
    "./packages/binding-engine3/expressions/code-factories/translate.js",
    "./packages/binding-engine3/expressions/compiler.js",
    "./packages/binding-engine3/expressions/exp-sanitizer.js",
    "./packages/binding-engine3/expressions/exp-tokenizer.js",
    "./packages/binding-engine3/expressions.js",
    "./packages/binding-engine3/idle/idleCallback.js",
    "./packages/binding-engine3/idle/idleTaskManager.js",
    "./packages/binding-engine3/managers/inflation-manager.js",
    "./packages/binding-engine3/managers/static-inflation-manager.js",
    "./packages/binding-engine3/managers/templates-manager.js",
    "./packages/binding-engine3/managers/translations-manager.js",
    "./packages/binding-engine3/managers/value-converters-manager.js",
    "./packages/binding-engine3/managers.js",
    "./packages/binding-engine3/parsers/attribute.js",
    "./packages/binding-engine3/parsers/attributes.js",
    "./packages/binding-engine3/parsers/element.js",
    "./packages/binding-engine3/parsers/elements.js",
    "./packages/binding-engine3/parsers.js",
    "./packages/binding-engine3/providers/attributes/attr-base.js",
    "./packages/binding-engine3/providers/attributes/attr-case.js",
    "./packages/binding-engine3/providers/attributes/attr-if.js",
    "./packages/binding-engine3/providers/attributes/attr.js",
    "./packages/binding-engine3/providers/attributes/call.js",
    "./packages/binding-engine3/providers/attributes/classlist-base.js",
    "./packages/binding-engine3/providers/attributes/classlist-case.js",
    "./packages/binding-engine3/providers/attributes/classlist-if.js",
    "./packages/binding-engine3/providers/attributes/emit.js",
    "./packages/binding-engine3/providers/attributes/post.js",
    "./packages/binding-engine3/providers/attributes/process.js",
    "./packages/binding-engine3/providers/attributes/ref.js",
    "./packages/binding-engine3/providers/attributes/set-value.js",
    "./packages/binding-engine3/providers/attributes/style-base.js",
    "./packages/binding-engine3/providers/attributes/style-case.js",
    "./packages/binding-engine3/providers/attributes/style-if.js",
    "./packages/binding-engine3/providers/attributes/style-property.js",
    "./packages/binding-engine3/providers/attributes/utils/create-event-parameters.js",
    "./packages/binding-engine3/providers/attributes/utils/parse-event.js",
    "./packages/binding-engine3/providers/element/template-repeat-for.js",
    "./packages/binding-engine3/providers/element/template-src.js",
    "./packages/binding-engine3/providers/element/template.js",
    "./packages/binding-engine3/providers/events/keyboard-event.js",
    "./packages/binding-engine3/providers/properties/bind.js",
    "./packages/binding-engine3/providers/properties/once.js",
    "./packages/binding-engine3/providers/properties/one-way.js",
    "./packages/binding-engine3/providers/properties/utils/binding-parse.js",
    "./packages/binding-engine3/providers/properties/utils/binding-update.js",
    "./packages/binding-engine3/providers/text/text.js",
    "./packages/binding-engine3/providers.js",
    "./packages/binding-engine3/proxies/array-proxy.js",
    "./packages/binding-engine3/store/binding-data.js",
    "./packages/binding-engine3/store/data-def-store.js",
    "./packages/binding-engine3/store/event-store.js",
    "./packages/binding-engine3/store/template-inflation-store.js",
    "./packages/binding-engine3/store/template-provider-store.js",
    "./packages/binding-engine3/utils/converter-parts.js",
    "./packages/binding-engine3/utils/dispose-properties.js",
    "./packages/binding-engine3/utils/dom-collection-manager.js",
    "./packages/binding-engine3/utils/get-path-of-file.js",
    "./packages/binding-engine3/utils/get-value-on-path.js",
    "./packages/binding-engine3/utils/mark-element.js",
    "./packages/binding-engine3/utils/relative-path.js",
    "./packages/binding-engine3/utils/set-value-on-path.js",
    "./packages/binding-engine3/utils.js",
    "./packages/crs-process-api/action-systems/action-actions.js",
    "./packages/crs-process-api/action-systems/array-actions.js",
    "./packages/crs-process-api/action-systems/binding-actions.js",
    "./packages/crs-process-api/action-systems/colors-actions.js",
    "./packages/crs-process-api/action-systems/compile-actions.js",
    "./packages/crs-process-api/action-systems/component-actions.js",
    "./packages/crs-process-api/action-systems/condition-actions.js",
    "./packages/crs-process-api/action-systems/console-actions.js",
    "./packages/crs-process-api/action-systems/css-grid-actions.js",
    "./packages/crs-process-api/action-systems/data-actions.js",
    "./packages/crs-process-api/action-systems/data-processing-actions.js",
    "./packages/crs-process-api/action-systems/date-actions.js",
    "./packages/crs-process-api/action-systems/debug-actions.js",
    "./packages/crs-process-api/action-systems/dom-actions.js",
    "./packages/crs-process-api/action-systems/dom-binding-actions.js",
    "./packages/crs-process-api/action-systems/dom-collection-actions.js",
    "./packages/crs-process-api/action-systems/dom-interactive-actions.js",
    "./packages/crs-process-api/action-systems/dom-observer-actions.js",
    "./packages/crs-process-api/action-systems/dom-utils-actions.js",
    "./packages/crs-process-api/action-systems/dom-widgets-actions.js",
    "./packages/crs-process-api/action-systems/events-actions.js",
    "./packages/crs-process-api/action-systems/files-actions.js",
    "./packages/crs-process-api/action-systems/fixed-layout-actions.js",
    "./packages/crs-process-api/action-systems/fixed-position-actions.js",
    "./packages/crs-process-api/action-systems/fs-actions.js",
    "./packages/crs-process-api/action-systems/html-actions.js",
    "./packages/crs-process-api/action-systems/local-storage-actions.js",
    "./packages/crs-process-api/action-systems/loop-actions.js",
    "./packages/crs-process-api/action-systems/managers/dragdrop-manager/drag-utils.js",
    "./packages/crs-process-api/action-systems/managers/dragdrop-manager/drag.js",
    "./packages/crs-process-api/action-systems/managers/dragdrop-manager/drop.js",
    "./packages/crs-process-api/action-systems/managers/dragdrop-manager/marker.js",
    "./packages/crs-process-api/action-systems/managers/dragdrop-manager/options.js",
    "./packages/crs-process-api/action-systems/managers/dragdrop-manager/placeholder.js",
    "./packages/crs-process-api/action-systems/managers/dragdrop-manager.js",
    "./packages/crs-process-api/action-systems/managers/grid-resize-manager.js",
    "./packages/crs-process-api/action-systems/managers/indexdb-manager/indexdb-worker.js",
    "./packages/crs-process-api/action-systems/managers/indexdb-manager.js",
    "./packages/crs-process-api/action-systems/managers/input-mapping.js",
    "./packages/crs-process-api/action-systems/managers/move-manager.js",
    "./packages/crs-process-api/action-systems/managers/resize-element-manager.js",
    "./packages/crs-process-api/action-systems/managers/router-manager.js",
    "./packages/crs-process-api/action-systems/managers/size-manager.js",
    "./packages/crs-process-api/action-systems/markdown-actions.js",
    "./packages/crs-process-api/action-systems/math-actions.js",
    "./packages/crs-process-api/action-systems/media-actions.js",
    "./packages/crs-process-api/action-systems/module-actions.js",
    "./packages/crs-process-api/action-systems/object-actions.js",
    "./packages/crs-process-api/action-systems/process-actions.js",
    "./packages/crs-process-api/action-systems/random-actions.js",
    "./packages/crs-process-api/action-systems/rest-services-actions.js",
    "./packages/crs-process-api/action-systems/route-actions.js",
    "./packages/crs-process-api/action-systems/schema-actions.js",
    "./packages/crs-process-api/action-systems/scripts-actions.js",
    "./packages/crs-process-api/action-systems/session-storage-actions.js",
    "./packages/crs-process-api/action-systems/string-actions.js",
    "./packages/crs-process-api/action-systems/styles-actions.js",
    "./packages/crs-process-api/action-systems/system-actions.js",
    "./packages/crs-process-api/action-systems/translations-actions.js",
    "./packages/crs-process-api/action-systems/validate-actions.js",
    "./packages/crs-process-api/bin/.gitignore",
    "./packages/crs-process-api/bin/data.d.ts",
    "./packages/crs-process-api/bin/data.js",
    "./packages/crs-process-api/bin/data_bg.wasm",
    "./packages/crs-process-api/bin/data_bg.wasm.d.ts",
    "./packages/crs-process-api/bin/data_processing.d.ts",
    "./packages/crs-process-api/bin/data_processing.js",
    "./packages/crs-process-api/bin/data_processing_bg.wasm",
    "./packages/crs-process-api/bin/data_processing_bg.wasm.d.ts",
    "./packages/crs-process-api/bin/exports.d.ts",
    "./packages/crs-process-api/bin/exports.js",
    "./packages/crs-process-api/bin/exports_bg.wasm",
    "./packages/crs-process-api/bin/exports_bg.wasm.d.ts",
    "./packages/crs-process-api/bin/markdown.d.ts",
    "./packages/crs-process-api/bin/markdown.js",
    "./packages/crs-process-api/bin/markdown_bg.wasm",
    "./packages/crs-process-api/bin/markdown_bg.wasm.d.ts",
    "./packages/crs-process-api/bin/package.json",
    "./packages/crs-process-api/bin/README.md",
    "./packages/crs-process-api/components/view-loader/view-loader.js",
    "./packages/crs-process-api/crs-process-api.js",
    "./packages/crs-process-api/docs/src/action-systems/action-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/array-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/binding-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/colors-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/compile-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/component-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/condition-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/console-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/css-grid-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/data-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/data-processing-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/date-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/debug-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/dom-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/dom-binding-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/dom-collection-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/dom-interactive-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/dom-observer-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/dom-utils-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/dom-widgets-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/events-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/files-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/fixed-layout-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/fixed-position-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/fs-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/html-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/local-storage-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/loop-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/dragdrop-manager/drag-utils.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/dragdrop-manager/drag.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/dragdrop-manager/drop.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/dragdrop-manager/marker.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/dragdrop-manager/options.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/dragdrop-manager/placeholder.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/dragdrop-manager.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/grid-resize-manager.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/indexdb-manager/indexdb-worker.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/indexdb-manager.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/move-manager.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/resize-element-manager.md",
    "./packages/crs-process-api/docs/src/action-systems/managers/size-manager.md",
    "./packages/crs-process-api/docs/src/action-systems/markdown-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/math-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/media-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/module-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/object-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/process-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/random-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/rest-services-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/schema-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/scripts-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/session-storage-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/string-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/styles-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/system-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/translations-actions.md",
    "./packages/crs-process-api/docs/src/action-systems/validate-actions.md",
    "./packages/crs-process-api/tools/checksource.js",
    "./pwa.js",
    "./service-worker-files.js",
    "./service-worker.js",
    "./styles/font/OpenSans-Bold.ttf",
    "./styles/font/OpenSans-BoldItalic.ttf",
    "./styles/font/OpenSans-ExtraBold.ttf",
    "./styles/font/OpenSans-ExtraBoldItalic.ttf",
    "./styles/font/OpenSans-Italic.ttf",
    "./styles/font/OpenSans-Light.ttf",
    "./styles/font/OpenSans-LightItalic.ttf",
    "./styles/font/OpenSans-Medium.ttf",
    "./styles/font/OpenSans-MediumItalic.ttf",
    "./styles/font/OpenSans-Regular.ttf",
    "./styles/font/OpenSans-SemiBold.ttf",
    "./styles/font/OpenSans-SemiBoldItalic.ttf",
    "./styles/font/OpenSans_Condensed-Bold.ttf",
    "./styles/font/OpenSans_Condensed-BoldItalic.ttf",
    "./styles/font/OpenSans_Condensed-ExtraBold.ttf",
    "./styles/font/OpenSans_Condensed-ExtraBoldItalic.ttf",
    "./styles/font/OpenSans_Condensed-Italic.ttf",
    "./styles/font/OpenSans_Condensed-Light.ttf",
    "./styles/font/OpenSans_Condensed-LightItalic.ttf",
    "./styles/font/OpenSans_Condensed-Medium.ttf",
    "./styles/font/OpenSans_Condensed-MediumItalic.ttf",
    "./styles/font/OpenSans_Condensed-Regular.ttf",
    "./styles/font/OpenSans_Condensed-SemiBold.ttf",
    "./styles/font/OpenSans_Condensed-SemiBoldItalic.ttf",
    "./styles/font/OpenSans_SemiCondensed-Bold.ttf",
    "./styles/font/OpenSans_SemiCondensed-BoldItalic.ttf",
    "./styles/font/OpenSans_SemiCondensed-ExtraBold.ttf",
    "./styles/font/OpenSans_SemiCondensed-ExtraBoldItalic.ttf",
    "./styles/font/OpenSans_SemiCondensed-Italic.ttf",
    "./styles/font/OpenSans_SemiCondensed-Light.ttf",
    "./styles/font/OpenSans_SemiCondensed-LightItalic.ttf",
    "./styles/font/OpenSans_SemiCondensed-Medium.ttf",
    "./styles/font/OpenSans_SemiCondensed-MediumItalic.ttf",
    "./styles/font/OpenSans_SemiCondensed-Regular.ttf",
    "./styles/font/OpenSans_SemiCondensed-SemiBold.ttf",
    "./styles/font/OpenSans_SemiCondensed-SemiBoldItalic.ttf",
    "./styles/styles.css"
]
