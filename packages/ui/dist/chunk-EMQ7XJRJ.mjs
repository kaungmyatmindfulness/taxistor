import { jsx } from 'react/jsx-runtime';

function i(r){var o,e,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(e=i(r[o]))&&(t&&(t+=" "),t+=e);else for(o in r)r[o]&&(t&&(t+=" "),t+=o);return t}function a(){for(var r,o,e=0,t="";e<arguments.length;)(r=arguments[e++])&&(o=i(r))&&(t&&(t+=" "),t+=o);return t}var n=a;function d(r){let{children:o,className:e}=r;return jsx("div",{className:n(e,"ui-w-80 ui-rounded ui-overflow-hidden ui-shadow-lg ui-p-4"),children:o})}

export { d as a };
