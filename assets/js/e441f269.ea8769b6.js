"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1977],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(k,l(l({ref:e},u),{},{components:a})):n.createElement(k,l({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5370:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"AWS Route53 Dynamic DNS Updater"},l=void 0,i={unversionedId:"applications/system-tools/route53_ddns",id:"applications/system-tools/route53_ddns",title:"AWS Route53 Dynamic DNS Updater",description:"ddns-route53:",source:"@site/docs/applications/system-tools/route53_ddns.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/route53_ddns",permalink:"/docs/applications/system-tools/route53_ddns",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/system-tools/route53_ddns.md",tags:[],version:"current",frontMatter:{title:"AWS Route53 Dynamic DNS Updater"},sidebar:"tutorialSidebar",previous:{title:"Portainer",permalink:"/docs/applications/system-tools/portainer"},next:{title:"Syncthing",permalink:"/docs/applications/system-tools/syncthing"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"AWS Access Credentials",id:"aws-access-credentials",level:3},{value:"Networking",id:"networking",level:3},{value:"Application",id:"application",level:3}],u={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ddns-route53: ",(0,r.kt)("a",{parentName:"p",href:"https://crazymax.dev/ddns-route53/"},"https://crazymax.dev/ddns-route53/")),(0,r.kt)("p",null,"AWS Route53: ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/route53/"},"https://aws.amazon.com/route53/")),(0,r.kt)("p",null,"If you want your Ansible-NAS accessible externally then you need a domain name. You will also need to set a wildcard host ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," record to point to your static IP, or enable this container to automatically update AWS Route53 with your dynamic IP address."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"route53_ddns_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"Set required AWS access credentials from the AWS Console. (See below.)"),(0,r.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,r.kt)("p",null,"Make sure you set your domain (if different than the ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible-nas")," default) and access details within your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"To set up Route53 to work with the service, please review the ",(0,r.kt)("a",{parentName:"p",href:"https://crazymax.dev/ddns-route53/usage/prerequisites/"},"Prerequisites")," page. In short, you will need to set up a Route53 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-working-with.html"},"Hosted Zone"),", an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html"},"IAM Policy"),", and an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM User")," with API credentials."),(0,r.kt)("h3",{id:"aws-access-credentials"},"AWS Access Credentials"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route53_key_id"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS access key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"mandatory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route53_secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS secret key"),(0,r.kt)("td",{parentName:"tr",align:null},"mandatory")))),(0,r.kt)("h3",{id:"networking"},"Networking"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route53_hosted_zone_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Route53 hosted zone ID"),(0,r.kt)("td",{parentName:"tr",align:null},"mandatory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route53_ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"Time-to-live for the DNS entry"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route53_host"),(0,r.kt)("td",{parentName:"tr",align:null},"Wildcard domain to update"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route53_schedule"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/github.com/robfig/cron?utm_source=godoc#hdr-CRON_Expression_Format"},"CRON")," schedule for checking and updating DNS entry"),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);