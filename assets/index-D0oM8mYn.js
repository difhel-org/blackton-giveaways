var e,t,a,s,n,r,i=Object.defineProperty,o=(e,t,a)=>(((e,t,a)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a),c=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},l=(e,t,a)=>(((e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)})(e,t,"access private method"),a);import{r as d,a as u,R as h}from"./react-BaJRSMKB.js";import{L as m}from"./lottie-qFjY609k.js";import{p as g}from"./animationParty-BlkckteE.js";import{s as w}from"./animationSad-dh3UVT3t.js";import{g as p}from"./animationGem-CUNHsIGX.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var x={exports:{}},j={},f=d,_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,b=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,a){var s,n={},r=null,i=null;for(s in void 0!==a&&(r=""+a),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(i=t.ref),t)y.call(t,s)&&!k.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:_,type:e,key:r,ref:i,props:n,_owner:b.current}}j.Fragment=v,j.jsx=$,j.jsxs=$,x.exports=j;var N=x.exports,C={},S=u;C.createRoot=S.createRoot,C.hydrateRoot=S.hydrateRoot;class P{constructor(t){c(this,e),c(this,a),c(this,n),o(this,"baseUrl"),o(this,"initData"),this.baseUrl="https://tgbot.blackonthe.casino/giveaways",this.initData=t}async getGiveaway(n){return await l(this,e,t).call(this,await l(this,a,s).call(this,"getGiveawayInfo",{giveaway_id:n}))}async join(a){return await l(this,e,t).call(this,await l(this,n,r).call(this,"join",{giveaway_id:a}))}}e=new WeakSet,t=function(e,t=!1){return e.error?{ok:!1,error:e.error}:{ok:!0,response:t?e:e.response}},a=new WeakSet,s=async function(e,t={}){try{const a=new URLSearchParams(t).toString(),s=await fetch(`${this.baseUrl}/${e}?${a}`,{headers:{Authorization:`TGMA ${this.initData}`}});return await s.json()}catch(a){console.error(`Failed to call API method ${e}`,a)}},n=new WeakSet,r=async function(e,t={}){try{const a=await fetch(`${this.baseUrl}/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`TGMA ${this.initData}`},body:JSON.stringify(t)});return await a.json()}catch(a){console.error(`Failed to call API method ${e}`,a)}};const D=()=>{const{initData:e}=I();return new P(e)},B=d.createContext({}),R=()=>{const e=d.useContext(B),{value:t,setter:a}=e.currentPage;return{currentPage:t,setCurrentPage:a}},A=()=>{const e=d.useContext(B).giveaway,t=D();return{giveaway:e.value,fetchGiveaway:async a=>{const s=await t.getGiveaway(a);if(!s.ok)throw new Error("Failed to fetch giveaway");return e.setter({...s.response,id:a}),s.response}}},I=()=>{const e=d.useContext(B).initData;return{initData:e.value,setInitData:e.setter}},L=()=>{const e=d.useContext(B).userId;return{userId:e.value,setUserId:e.setter}},O="Wr9fYa_avatar",T=({id:e})=>N.jsx("img",{src:`https://tgbot.blackonthe.casino/giveaways/getAvatar?id=${e}`,className:O}),q="PRzcYq_activeButton",E="PRzcYq_channel",M="PRzcYq_channelBlock",W="PRzcYq_inactiveButton",F=({channel:e,joined:t})=>N.jsxs("div",{className:E,onClick:()=>{window.open(e.channel_link,"_blank")},children:[N.jsxs("div",{className:M,children:[N.jsx(T,{id:e.channel_id}),e.channel_name]}),t?N.jsx("button",{className:W,children:"Вы подписаны"}):N.jsx("button",{className:q,children:"Подписаться"})]}),U="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%20width='200'%20height='200'%20style='shape-rendering:%20auto;%20display:%20block;%20background:%20transparent;'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpath%20style='transform:scale(0.8);transform-origin:50px%2050px'%20stroke-linecap='round'%20d='M24.3%2030C11.4%2030%205%2043.3%205%2050s6.4%2020%2019.3%2020c19.3%200%2032.1-40%2051.4-40%20C88.6%2030%2095%2043.3%2095%2050s-6.4%2020-19.3%2020C56.4%2070%2043.6%2030%2024.3%2030z'%20stroke-dasharray='42.76482137044271%2042.76482137044271'%20stroke-width='8'%20stroke='%23eeeeee'%20fill='none'%3e%3canimate%20values='0;256.58892822265625'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20attributeName='stroke-dashoffset'%3e%3c/animate%3e%3c/path%3e%3cg%3e%3c/g%3e%3c/g%3e%3c!--%20[ldio]%20generated%20by%20https://loading.io%20--%3e%3c/svg%3e",G="d1X8-a_buttonClicked",z="d1X8-a_channelsBlock",X="d1X8-a_deadline",Y="d1X8-a_giveaway",Z="d1X8-a_header",H="d1X8-a_joined",J="d1X8-a_participateButton",K=()=>{const e=D(),{setCurrentPage:t}=R(),{giveaway:a}=A();if(!a)return null;const s=new Date(1e3*a.deadline.time),n=`${s.getDate()} ${["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][s.getMonth()]} в ${(s.getHours()+"").padStart(2,"0")}:${(s.getMinutes()+"").padStart(2,"0")}`,[r,i]=d.useState(!1);return N.jsxs("div",{className:Y,children:[N.jsx("div",{className:Z}),N.jsxs("h1",{children:["Розыгрыш ",a.amount," 💎"]}),N.jsx("span",{children:a.winners_count>1?`${a.winners_count} победителей разделят ${a.amount} алмазов ($${a.amount}) в BlackTON Casino, каждый получит по ${a.amount/a.winners_count} 💎.`:`Один победитель получит ${a.amount} алмазов`}),N.jsx("br",{}),N.jsxs("span",{children:["Подпишитесь на канал",a.channels.length>1&&"ы"," ниже и нажмите ",N.jsx("b",{children:'"Принять участие"'}),":"]}),N.jsx("br",{}),N.jsx("div",{className:z,children:a.channels.map((e=>N.jsx(F,{channel:e,joined:a.subscription_status[e.channel_id]||!1},e.channel_id)))}),N.jsxs("span",{className:X,children:["Бот автоматически подведет итоги розыгрыша ",N.jsx("b",{children:n}),"."]}),N.jsx("button",{className:`${J} ${r?G:""} ${a.joined?H:""}`,onClick:()=>{i(!0),e.join(a.id).then((e=>{if(!1===e.ok)return i(!1),void t("registrationFailed");t("registrationSuccess")}))},children:r?N.jsx("img",{src:U}):a.joined?"Вы участвуете":"Принять участие"})]})},Q="cuBLlq_closeButton",V="cuBLlq_lottie",ee="cuBLlq_registrationSuccess",te=()=>{const{giveaway:e}=A();if(!e)return null;const t=new Date(1e3*e.deadline.time),a=`${t.getDate()} ${["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][t.getMonth()]} в ${t.getHours()}:${t.getMinutes()}`;return N.jsxs("div",{className:ee,children:[N.jsx(m,{animationData:g,className:V}),N.jsx("h1",{children:"Вы участвуете"}),N.jsxs("span",{children:["Бот автоматически подведет итоги розыгрыша ",N.jsx("b",{children:a}),"."]}),N.jsx("button",{className:Q,onClick:window.close,children:"Закрыть"})]})},ae="_4sBAbW_closeButton",se="_4sBAbW_lottie",ne="_4sBAbW_registrationFailed",re=()=>{const{setCurrentPage:e}=R();return N.jsxs("div",{className:ne,children:[N.jsx(m,{animationData:w,className:se}),N.jsx("h1",{children:"Не удалось зарегистрироваться"}),N.jsx("span",{children:"Подпишитесь на все каналы в списке."}),N.jsx("button",{className:ae,onClick:()=>{e("giveaway")},children:"Вернуться"})]})},ie="SFNfsq_loader",oe=()=>N.jsx("div",{className:ie,children:N.jsx("img",{src:U})}),ce="_1L8oCq_closeButton",le="_1L8oCq_lottie",de="_1L8oCq_showResults",ue="_1L8oCq_usersBlock",he="_4uZhda_index",me="_4uZhda_me",ge="_4uZhda_user",we="_4uZhda_userBlock",pe=({user:e,isMe:t,index:a})=>N.jsx("div",{className:`${ge} ${t?me:""}`,children:N.jsxs("div",{className:we,children:[N.jsxs("span",{className:he,children:[a,"."]}),N.jsx(T,{id:e.id}),e.name]})}),xe=()=>{const{giveaway:e}=A();if(!e)return null;if("finish"!==e.status)return"Розыгрыш еще не завершен";const t=e.participants.filter((e=>e.is_winner)),{userId:a}=L(),s=t.some((e=>e.id===a));return N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:de,children:[s?N.jsxs(N.Fragment,{children:[N.jsx(m,{animationData:p,className:le}),N.jsx("h1",{children:"Вы победитель! 🎉"})]}):N.jsxs(N.Fragment,{children:[N.jsx(m,{animationData:w,className:le}),N.jsx("h1",{children:"Не в этот раз"})]}),N.jsx("span",{children:e.winners_count>1?`${e.winners_count} победителей разделили ${e.amount} алмазов ($${e.amount}) в BlackTON Casino, каждый получил по ${e.amount/e.winners_count} 💎.`:`Один победитель получил ${e.amount} алмазов.`}),N.jsx("div",{className:ue,children:t.map(((e,t)=>N.jsx(pe,{user:e,isMe:e.id===a,index:t+1},e.id)))})]}),N.jsx("button",{className:ce,onClick:window.close,children:"Закрыть"})]})};function je(){const{currentPage:e,setCurrentPage:t}=R(),{fetchGiveaway:a}=A(),{initData:s,setInitData:n}=I(),{userId:r,setUserId:i}=L();if(d.useEffect((()=>{window.close=window.Telegram.WebApp.close;const e=window.Telegram.WebApp.initData;n(e);const t=window.Telegram.WebApp.initDataUnsafe.user.id;i(t)})),!s||!r)return null;switch(e){case"loader":return a(window.Telegram.WebApp.initDataUnsafe.start_param).then((e=>{"finish"===e.status?t("showResults"):t("giveaway")})),N.jsx(oe,{});case"giveaway":return N.jsx(K,{});case"registrationSuccess":return N.jsx(te,{});case"registrationFailed":return N.jsx(re,{});case"showResults":return N.jsx(xe,{});default:return N.jsxs("div",{children:['Error: unknown state "',e,'" :(']})}}const fe=({children:e})=>{const[t,a]=d.useState("loader"),[s,n]=d.useState(null),[r,i]=d.useState(null),[o,c]=d.useState(null),l={currentPage:{value:t,setter:a},giveaway:{value:s,setter:n},initData:{value:r,setter:i},userId:{value:o,setter:c}};return N.jsx(B.Provider,{value:l,children:e})};C.createRoot(document.getElementById("root")).render(N.jsx(h.StrictMode,{children:N.jsx(fe,{children:N.jsx(je,{})})}));
