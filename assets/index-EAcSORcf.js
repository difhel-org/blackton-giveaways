var e,t,s,a,n,r=Object.defineProperty,i=(e,t,s)=>(((e,t,s)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s),o=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},c=(e,t,s)=>(((e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)})(e,t,"access private method"),s);import{r as l,a as d,R as u}from"./react-BaJRSMKB.js";import{L as h}from"./lottie-qFjY609k.js";import{p as m}from"./animationParty-BlkckteE.js";import{s as g}from"./animationSad-dh3UVT3t.js";import{g as w}from"./animationGem-CUNHsIGX.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var x={exports:{}},p={},f=l,j=Symbol.for("react.element"),_=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,y=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,s){var a,n={},r=null,i=null;for(a in void 0!==s&&(r=""+s),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(i=t.ref),t)v.call(t,a)&&!b.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:j,type:e,key:r,ref:i,props:n,_owner:y.current}}p.Fragment=_,p.jsx=k,p.jsxs=k,x.exports=p;var N=x.exports,$={},C=d;$.createRoot=C.createRoot,$.hydrateRoot=C.hydrateRoot;class P{constructor(t){o(this,e),o(this,s),o(this,n),i(this,"baseUrl"),i(this,"initData"),this.baseUrl="https://tgbot.blackonthe.casino/giveaways",this.initData=t}async getGiveaway(n){return await c(this,e,t).call(this,await c(this,s,a).call(this,"getGiveawayInfo",{giveaway_id:n}))}async join(e){return await new Promise((e=>setTimeout(e,1e3))),{ok:!0}}}e=new WeakSet,t=function(e,t=!1){return e.error?{ok:!1,error:e.detail}:{ok:!0,response:t?e:e.response}},s=new WeakSet,a=async function(e,t={}){try{const s=new URLSearchParams(t).toString(),a=await fetch(`${this.baseUrl}/${e}?${s}`,{headers:{Authorization:`TGMA ${this.initData}`}});return await a.json()}catch(s){console.error(`Failed to call API method ${e}`,s)}},n=new WeakSet;const D=()=>{const{initData:e}=I();return new P(e)},S=l.createContext({}),B=()=>{const e=l.useContext(S),{value:t,setter:s}=e.currentPage;return{currentPage:t,setCurrentPage:s}},R=()=>{const e=l.useContext(S).giveaway,t=D();return{giveaway:e.value,fetchGiveaway:async s=>{const a=await t.getGiveaway(s);if(!a.ok)throw new Error("Failed to fetch giveaway");return e.setter({...a.response,id:s}),a.response}}},I=()=>{const e=l.useContext(S).initData;return{initData:e.value,setInitData:e.setter}},L=()=>{const e=l.useContext(S).userId;return{userId:e.value,setUserId:e.setter}},A="Wr9fYa_avatar",O=({id:e})=>N.jsx("img",{src:`https://tgbot.blackonthe.casino/giveaways/getAvatar?id=${e}`,className:A}),T="PRzcYq_activeButton",q="PRzcYq_channel",E="PRzcYq_channelBlock",W="PRzcYq_inactiveButton",M=({channel:e,joined:t})=>N.jsxs("div",{className:q,onClick:()=>{window.open(e.channel_link,"_blank")},children:[N.jsxs("div",{className:E,children:[N.jsx(O,{id:e.channel_id}),e.channel_name]}),t?N.jsx("button",{className:W,children:"Вы подписаны"}):N.jsx("button",{className:T,children:"Подписаться"})]}),F="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%20width='200'%20height='200'%20style='shape-rendering:%20auto;%20display:%20block;%20background:%20transparent;'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpath%20style='transform:scale(0.8);transform-origin:50px%2050px'%20stroke-linecap='round'%20d='M24.3%2030C11.4%2030%205%2043.3%205%2050s6.4%2020%2019.3%2020c19.3%200%2032.1-40%2051.4-40%20C88.6%2030%2095%2043.3%2095%2050s-6.4%2020-19.3%2020C56.4%2070%2043.6%2030%2024.3%2030z'%20stroke-dasharray='42.76482137044271%2042.76482137044271'%20stroke-width='8'%20stroke='%23eeeeee'%20fill='none'%3e%3canimate%20values='0;256.58892822265625'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20attributeName='stroke-dashoffset'%3e%3c/animate%3e%3c/path%3e%3cg%3e%3c/g%3e%3c/g%3e%3c!--%20[ldio]%20generated%20by%20https://loading.io%20--%3e%3c/svg%3e",U="d1X8-a_buttonClicked",G="d1X8-a_channelsBlock",Y="d1X8-a_deadline",z="d1X8-a_giveaway",X="d1X8-a_header",Z="d1X8-a_participateButton",H=()=>{const e=D(),{setCurrentPage:t}=B(),{giveaway:s}=R();if(!s)return null;const a=new Date(1e3*s.deadline.time),n=`${a.getDate()} ${["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][a.getMonth()]} в ${a.getHours()}:${a.getMinutes()}`,[r,i]=l.useState(!1);return N.jsxs("div",{className:z,children:[N.jsx("div",{className:X}),N.jsxs("h1",{children:["Розыгрыш ",s.amount," 💎"]}),N.jsx("span",{children:s.winners_count>1?`${s.winners_count} победителей разделят ${s.amount} алмазов ($${s.amount}) в BlackTON Casino, каждый получит по ${s.amount/s.winners_count} 💎.`:`Один победитель получит ${s.amount} алмазов`}),N.jsx("br",{}),N.jsxs("span",{children:["Подпишитесь на канал",s.channels.length>1&&"ы"," ниже и нажмите ",N.jsx("b",{children:'"Принять участие"'}),":"]}),N.jsx("br",{}),N.jsx("div",{className:G,children:s.channels.map((e=>N.jsx(M,{channel:e,joined:s.subscription_status[e.channel_id]||!1},e.channel_id)))}),N.jsxs("span",{className:Y,children:["Бот автоматически подведет итоги розыгрыша ",N.jsx("b",{children:n}),"."]}),N.jsx("button",{className:`${Z} ${r?U:""}`,onClick:()=>{i(!0),e.join(s.id).then((e=>{if(!1===e.ok)return i(!1),void t("registrationFailed");t("registrationSuccess")}))},children:r?N.jsx("img",{src:F}):"Принять участие"})]})},K="cuBLlq_closeButton",J="cuBLlq_lottie",Q="cuBLlq_registrationSuccess",V=()=>{const{giveaway:e}=R();if(!e)return null;const t=new Date(1e3*e.deadline.time),s=`${t.getDate()} ${["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][t.getMonth()]} в ${t.getHours()}:${t.getMinutes()}`;return N.jsxs("div",{className:Q,children:[N.jsx(h,{animationData:m,className:J}),N.jsx("h1",{children:"Вы участвуете"}),N.jsxs("span",{children:["Бот автоматически подведет итоги розыгрыша ",N.jsx("b",{children:s}),"."]}),N.jsx("button",{className:K,onClick:window.close,children:"Закрыть"})]})},ee="_4sBAbW_closeButton",te="_4sBAbW_lottie",se="_4sBAbW_registrationFailed",ae=()=>{const{setCurrentPage:e}=B();return N.jsxs("div",{className:se,children:[N.jsx(h,{animationData:g,className:te}),N.jsx("h1",{children:"Не удалось зарегистрироваться"}),N.jsx("span",{children:"Подпишитесь на все каналы в списке."}),N.jsx("button",{className:ee,onClick:()=>{e("giveaway")},children:"Вернуться"})]})},ne="SFNfsq_loader",re=()=>N.jsx("div",{className:ne,children:N.jsx("img",{src:F})}),ie="_1L8oCq_closeButton",oe="_1L8oCq_lottie",ce="_1L8oCq_showResults",le="_1L8oCq_usersBlock",de="_4uZhda_index",ue="_4uZhda_me",he="_4uZhda_user",me="_4uZhda_userBlock",ge=({user:e,isMe:t,index:s})=>N.jsx("div",{className:`${he} ${t?ue:""}`,children:N.jsxs("div",{className:me,children:[N.jsxs("span",{className:de,children:[s,"."]}),N.jsx(O,{id:e.id}),e.name]})}),we=()=>{const{giveaway:e}=R();if(!e)return null;if("finish"!==e.status)return"Розыгрыш еще не завершен";const t=e.participants.filter((e=>e.is_winner)),{userId:s}=L(),a=t.some((e=>e.id===s));return N.jsxs("div",{className:ce,children:[a?N.jsxs(N.Fragment,{children:[N.jsx(h,{animationData:w,className:oe}),N.jsx("h1",{children:"Вы победитель! 🎉"})]}):N.jsxs(N.Fragment,{children:[N.jsx(h,{animationData:g,className:oe}),N.jsx("h1",{children:"Не в этот раз"})]}),N.jsx("span",{children:e.winners_count>1?`${e.winners_count} победителей разделили ${e.amount} алмазов ($${e.amount}) в BlackTON Casino, каждый получил по ${e.amount/e.winners_count} 💎.`:`Один победитель получил ${e.amount} алмазов.`}),N.jsx("div",{className:le,children:t.map(((e,t)=>N.jsx(ge,{user:e,isMe:e.id===s,index:t+1},e.id)))}),N.jsx("button",{className:ie,onClick:window.close,children:"Закрыть"})]})};function xe(){const{currentPage:e,setCurrentPage:t}=B(),{fetchGiveaway:s}=R(),{initData:a,setInitData:n}=I(),{userId:r,setUserId:i}=L();if(l.useEffect((()=>{window.close=window.Telegram.WebApp.close;const e=window.Telegram.WebApp.initData;n(e);const t=window.Telegram.WebApp.initDataUnsafe.user.id;i(t)})),!a||!r)return null;switch(e){case"loader":return s(window.Telegram.WebApp.initDataUnsafe.start_param).then((e=>{"finish"===e.status?t("showResults"):t("giveaway")})),N.jsx(re,{});case"giveaway":return N.jsx(H,{});case"registrationSuccess":return N.jsx(V,{});case"registrationFailed":return N.jsx(ae,{});case"showResults":return N.jsx(we,{});default:return N.jsxs("div",{children:['Error: unknown state "',e,'" :(']})}}const pe=({children:e})=>{const[t,s]=l.useState("loader"),[a,n]=l.useState(null),[r,i]=l.useState(null),[o,c]=l.useState(null),d={currentPage:{value:t,setter:s},giveaway:{value:a,setter:n},initData:{value:r,setter:i},userId:{value:o,setter:c}};return N.jsx(S.Provider,{value:d,children:e})};$.createRoot(document.getElementById("root")).render(N.jsx(u.StrictMode,{children:N.jsx(pe,{children:N.jsx(xe,{})})}));
