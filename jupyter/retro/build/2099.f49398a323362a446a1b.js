(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2099],{52099:(e,t,s)=>{"use strict";s.r(t),s.d(t,{editorSyntaxStatus:()=>b,default:()=>v});var o,n=s(50715),r=s(95848),i=s(9784),c=s(57561),a=s(59834),d=s(99553),l=s(49934),m=s(68627),u=s(26260),g=s.n(u);!function(e){e.changeKeyMap="codemirror:change-keymap",e.changeTheme="codemirror:change-theme",e.changeMode="codemirror:change-mode",e.find="codemirror:find",e.goToLine="codemirror:go-to-line"}(o||(o={}));const h={id:"@jupyterlab/codemirror-extension:codemirror",provides:i.ICodeMirror,activate:function(e){return new k}},p={id:"@jupyterlab/codemirror-extension:services",provides:r.IEditorServices,activate:function(e){return g().prototype.save=()=>{e.commands.execute("docmanager:save")},i.editorServices}},y={id:"@jupyterlab/codemirror-extension:commands",requires:[c.IEditorTracker,d.ISettingRegistry,m.ITranslator,i.ICodeMirror],optional:[a.IMainMenu],activate:function(e,t,n,r,c,a){var d;const l=r.load("jupyterlab"),{commands:m,restored:u}=e;let{theme:g,keyMap:h,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k}=i.CodeMirrorEditor.defaultConfig;async function x(e){var t,o,n,r,i;if(h=e.get("keyMap").composite||h,"vim"===h&&await c.ensureVimKeymap(),g=e.get("theme").composite||g,"jupyter"!==g&&"default"!==g){const e="solarized light"===g||"solarized dark"===g?"solarized":g;await s(98908)(`./${e}.css`)}p=null!==(t=e.get("scrollPastEnd").composite)&&void 0!==t?t:p,y=null!==(o=e.get("styleActiveLine").composite)&&void 0!==o?o:y,b=null!==(n=e.get("styleSelectedText").composite)&&void 0!==n?n:b,v=null!==(r=e.get("selectionPointer").composite)&&void 0!==r?r:v,k=null!==(i=e.get("lineWiseCopyCut").composite)&&void 0!==i?i:k}function M(){const e={keyMap:h,theme:g,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k};t.forEach((t=>{t.content.editor instanceof i.CodeMirrorEditor&&t.content.editor.setOptions(e)}))}function C(){return null!==t.currentWidget&&t.currentWidget===e.shell.currentWidget}if(Promise.all([n.load(f),u]).then((async([e])=>{await x(e),M(),e.changed.connect((async()=>{await x(e),M()}))})).catch((e=>{console.error(e.message),M()})),t.widgetAdded.connect(((e,t)=>{const s={keyMap:h,theme:g,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k};t.content.editor instanceof i.CodeMirrorEditor&&t.content.editor.setOptions(s)})),m.addCommand(o.changeTheme,{label:e=>{var t;return"default"===e.theme?l.__("codemirror"):l.__(null!==(t=e.theme)&&void 0!==t?t:g)},execute:e=>{var t;const s=g=null!==(t=e.theme)&&void 0!==t?t:g;return n.set(f,"theme",s).catch((e=>{console.error(`Failed to set ${f}:theme - ${e.message}`)}))},isToggled:e=>e.theme===g}),m.addCommand(o.changeKeyMap,{label:e=>{var t;const s=null!==(t=e.keyMap)&&void 0!==t?t:h;return"sublime"===s?l.__("Sublime Text"):l.__(s)},execute:e=>{var t;const s=h=null!==(t=e.keyMap)&&void 0!==t?t:h;return n.set(f,"keyMap",s).catch((e=>{console.error(`Failed to set ${f}:keyMap - ${e.message}`)}))},isToggled:e=>e.keyMap===h}),m.addCommand(o.find,{label:l.__("Find…"),execute:()=>{const e=t.currentWidget;e&&e.content.editor.execCommand("find")},isEnabled:C}),m.addCommand(o.goToLine,{label:l.__("Go to Line…"),execute:()=>{const e=t.currentWidget;e&&e.content.editor.execCommand("jumpToLine")},isEnabled:C}),m.addCommand(o.changeMode,{label:e=>e.name,execute:e=>{const s=e.name,o=t.currentWidget;if(s&&o){const e=i.Mode.findByName(s);e&&(o.content.model.mimeType=e.mime)}},isEnabled:C,isToggled:e=>{const s=t.currentWidget;if(!s)return!1;const o=s.content.model.mimeType,n=i.Mode.findByMIME(o),r=n&&n.name;return e.name===r}}),a){const e=null===(d=a.viewMenu.items.find((e=>{var t;return"submenu"===e.type&&"jp-mainmenu-view-codemirror-theme"===(null===(t=e.submenu)||void 0===t?void 0:t.id)})))||void 0===d?void 0:d.submenu;e&&i.Mode.getModeInfo().sort(((e,t)=>{const s=e.name||"",o=t.name||"";return s.localeCompare(o)})).forEach((t=>{0!==t.mode.indexOf("brainf")&&e.addItem({command:o.changeMode,args:Object.assign({},t)})})),a.editMenu.goToLiners.add({tracker:t,goToLine:e=>{e.content.editor.execCommand("jumpToLine")}})}},autoStart:!0},b={id:"@jupyterlab/codemirror-extension:editor-syntax-status",autoStart:!0,requires:[c.IEditorTracker,n.ILabShell,m.ITranslator],optional:[l.IStatusBar],activate:(e,t,s,o,n)=>{if(!n)return;const r=new i.EditorSyntaxStatus({commands:e.commands,translator:o});s.currentChanged.connect((()=>{const e=s.currentWidget;e&&t.has(e)&&r.model&&(r.model.editor=e.content.editor)})),n.registerStatusItem("@jupyterlab/codemirror-extension:editor-syntax-status",{item:r,align:"left",rank:0,isActive:()=>!!s.currentWidget&&!!t.currentWidget&&s.currentWidget===t.currentWidget})}},v=[y,p,b,h],f=y.id;class k{get CodeMirror(){return g()}async ensureVimKeymap(){"Vim"in g()||await Promise.all([s.e(3326),s.e(8133),s.e(832)]).then(s.t.bind(s,50832,23))}}},98908:(e,t,s)=>{var o={"./3024-day.css":[2881,2881],"./3024-night.css":[74765,4765],"./abbott.css":[57786,7786],"./abcdef.css":[23519,3519],"./ambiance-mobile.css":[73567,3567],"./ambiance.css":[79481,9481],"./ayu-dark.css":[60530,530],"./ayu-mirage.css":[69322,9322],"./base16-dark.css":[72532,2532],"./base16-light.css":[31680,1680],"./bespin.css":[88871,8871],"./blackboard.css":[52443,2443],"./cobalt.css":[9728,9728],"./colorforth.css":[14059,4059],"./darcula.css":[87448,7448],"./dracula.css":[12623,2623],"./duotone-dark.css":[93281,3281],"./duotone-light.css":[30691,691],"./eclipse.css":[45551,5551],"./elegant.css":[55198,5198],"./erlang-dark.css":[37633,7633],"./gruvbox-dark.css":[97010,7010],"./hopscotch.css":[60635,635],"./icecoder.css":[23252,3252],"./idea.css":[22380,2380],"./isotope.css":[54551,4551],"./lesser-dark.css":[19455,9455],"./liquibyte.css":[13830,3830],"./lucario.css":[77418,7418],"./material-darker.css":[65968,5968],"./material-ocean.css":[87572,7572],"./material-palenight.css":[55644,5644],"./material.css":[23855,3855],"./mbo.css":[75382,5382],"./mdn-like.css":[9484,9484],"./midnight.css":[15310,5310],"./monokai.css":[30163,163],"./moxer.css":[61907,1907],"./neat.css":[86134,6134],"./neo.css":[90222,222],"./night.css":[22421,2421],"./nord.css":[92859,2859],"./oceanic-next.css":[88504,8504],"./panda-syntax.css":[72415,2415],"./paraiso-dark.css":[84239,4239],"./paraiso-light.css":[28918,8918],"./pastel-on-dark.css":[1269,1269],"./railscasts.css":[43183,3183],"./rubyblue.css":[10117,117],"./seti.css":[46149,6149],"./shadowfox.css":[59772,9772],"./solarized.css":[7813,7813],"./ssms.css":[68610,8610],"./the-matrix.css":[63648,3648],"./tomorrow-night-bright.css":[4991,4991],"./tomorrow-night-eighties.css":[90285,285],"./ttcn.css":[18331,8331],"./twilight.css":[46519,6519],"./vibrant-ink.css":[65127,5127],"./xq-dark.css":[25023,5023],"./xq-light.css":[28300,8300],"./yeti.css":[83278,3278],"./yonce.css":[68983,8983],"./zenburn.css":[95295,5295]};function n(e){if(!s.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return s.e(t[1]).then((()=>s.t(n,23)))}n.keys=()=>Object.keys(o),n.id=98908,e.exports=n}}]);
//# sourceMappingURL=2099.f49398a323362a446a1b.js.map