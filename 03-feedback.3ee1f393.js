!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function S(e){return l=e,f=setTimeout(h,t),s?j(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=g();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?v(n,a-(e-l)):n}(e))}function w(e){return f=void 0,p&&o?j(e):(o=i=void 0,u)}function O(){var e=g(),n=T(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(h,t),j(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:w(g())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const j={},S="feedback-form-state",T=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form textarea"),w=document.querySelector(".feedback-form input");T.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(j))}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),w.value&&h.value?(console.log(j),e.currentTarget.reset(),localStorage.removeItem(S),j[w.name]="",j[h.name]=""):alert("Заповніть всі поля")})),function(){const e=localStorage.getItem(S),t=JSON.parse(e);e&&(t.email&&(j[w.name]=t.email,w.value=t.email),t.message&&(j[h.name]=t.message,h.value=t.message))}()}();
//# sourceMappingURL=03-feedback.3ee1f393.js.map