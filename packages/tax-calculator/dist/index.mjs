function n(r){let e=r*12;return e<=2e6?0:e<=5e6?(e-2e6)*.05:e<=1e7?(e-5e6)*.1+15e4:e<=2e7?(e-1e7)*.15+5e5:e<=3e7?(e-2e7)*.2+2e6:(e-3e7)*.25+4e6}function t(r){let e=r*12;if(e<=15e4)return 0;if(e<=3e5)return (e-15e4)*.05;if(e<=5e5)return (e-3e5)*.1+7500;if(e<=75e4)return (e-5e5)*.15+27500;if(e<=1e6)return (e-75e4)*.2+65e3;if(e<=2e6)return (e-1e6)*.25+115e3;if(e<=5e6)return (e-2e6)*.3+365e3}function u(r,e){switch(e){case"MM":return n(r);case"TH":return t(r);default:return 0}}

export { u as calculatePersonalIncomeTax };
