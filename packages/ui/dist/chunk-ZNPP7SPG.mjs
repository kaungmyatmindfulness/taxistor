import { jsxs, jsx } from 'react/jsx-runtime';

function a(t){let{label:r,currency:n,id:i,...s}=t;return jsxs("div",{children:[jsx("label",{className:"ui-block ui-text-sm ui-font-medium ui-leading-6 ui-text-gray-900",htmlFor:i,children:r}),jsxs("div",{className:"ui-relative ui-mt-2 ui-rounded-md ui-shadow-sm",children:[jsx("div",{className:"ui-pointer-events-none ui-absolute ui-inset-y-0 ui-left-0 ui-flex ui-items-center ui-pl-3",children:jsx("span",{className:"ui-text-gray-500 sm:text-sm",children:n})}),jsx("input",{"aria-describedby":`${i}-currency`,className:"ui-block ui-w-full ui-rounded-md ui-border-0 ui-py-1.5 ui-pl-9 ui-text-gray-900 ui-ring-1 ui-ring-inset ui-ring-gray-300 ui-placeholder:text-gray-400 ui-focus:ring-2 ui-focus:ring-inset ui-focus:ring-indigo-600 ui-sm:text-sm sm:leading-6",id:i,name:i,placeholder:"0.00",...s})]})]})}

export { a };
