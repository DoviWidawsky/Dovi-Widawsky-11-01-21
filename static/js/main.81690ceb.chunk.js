(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{59:function(e,t,a){},79:function(e,t,a){},87:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),r=a.n(n),s=a(22),i=a.n(s),o=(a(59),a(35)),u=a(11),l=a(4),d=a(5),j=a.n(d),h=a(17),f="GwAkCuDeGMuLbTGPd8AJ4qf5OXaGOyDc",v=a(28),b=a.n(v),p="https://dataservice.accuweather.com/",y="v1",O=function(e){return"".concat(p,"locations/").concat(y,"/cities/geoposition/search?apikey=").concat(f,"&q=").concat(e)},m=function(e){return"".concat(p,"forecasts/").concat(y,"/daily/5day/").concat(e,"?apikey=").concat(f)},x=function(e){return"".concat(p,"locations/").concat(y,"/cities/autocomplete?apikey=").concat(f,"&q=").concat(e)},C=function(e){return"".concat(p,"currentconditions/").concat(y,"/").concat(e,"?apikey=").concat(f)};function k(e){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(O(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(C(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return W.apply(this,arguments)}function W(){return(W=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(m(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=a(110),D=a(21);a(79);var S=function(e){return Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("div",{className:"buttonContainer",children:Object(c.jsx)(T.a,{onClick:e.modeChange,children:Object(c.jsx)("div",{children:" Change Mode "})})}),Object(c.jsx)("div",{children:"Herolo Weather Task"})]}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("div",{className:"buttonContainer",children:Object(c.jsx)(D.b,{to:"/",onClick:function(){e.setCurrentPage("home")},children:Object(c.jsx)("div",{className:"home"===e.currentPage?"clicked":"notClicked",children:" Home "})})}),Object(c.jsx)("div",{className:"buttonContainer",children:Object(c.jsx)(D.b,{to:"/favorites",onClick:function(){e.setCurrentPage("favorites")},children:Object(c.jsx)("div",{className:"favorites"===e.currentPage?"clicked":"notClicked",children:" Favorites "})})})]})]})})};a(87);function A(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),l=o[0],d=o[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),b=v[0],p=v[1],y=Object(n.useState)(0),O=Object(u.a)(y,2),m=O[0],x=O[1],C=function(){s(""),d([]),x(0),p("")},g=function(){var e=Object(h.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=4;break}C(),e.next=9;break;case 4:return s(t),e.next=7,k(t);case 7:a=e.sent,d(a.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var t=Object(h.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a.Key).then(function(){var t=Object(h.a)(j.a.mark((function t(c){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.LocalizedName+","+a.Country.ID,t.next=3,e.setCityForcast(n,a.Key,c.data.DailyForecasts);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:C();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"CountrySelector",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{placeholder:"Search city...",value:r,onKeyDown:function(e){38===e.keyCode&&x(0===m?l.length-1:m-1),40===e.keyCode&&(m===l.length-1?x():x(m+1)),13===e.keyCode&&0!==l.length&&N(l[m])},onChange:function(e){return g(e.target.value)},className:"form-control input-search"}),Object(c.jsx)("div",{className:"error",children:b}),Object(c.jsx)("div",{className:"autocomplete-items",children:0===l.length&&""!==r?Object(c.jsx)("div",{children:"No match results"}):l.map((function(e,t){return function(e,t){return Object(c.jsxs)("div",{onClick:function(){return N(e)},className:m===t?"autocomplete-item active":"autocomplete-item",children:[Object(c.jsx)("strong",{children:r.charAt(0).toUpperCase()}),e.LocalizedName.toString().replace(r.charAt(0).toUpperCase(),"")]},e.Key)}(e,t)}))})]})})}var L=a(50),K=a.n(L),P=a(49),E=a.n(P),Y=a(48),_=a.n(Y),z="black",G=!0,R=function(e){var t=e.size||400,a="CLEAR_DAY";switch(e.icon){case 1:case 2:a="CLEAR_DAY";break;case 33:case 34:a="CLEAR_NIGHT";break;case 3:case 4:case 5:a="PARTLY_CLOUDY_DAY";break;case 35:case 36:case 37:a="PARTLY_CLOUDY_NIGHT";break;case 6:case 7:case 8:case 38:a="CLOUDY";break;case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 26:case 39:case 40:case 41:case 42:a="RAIN";break;case 24:case 25:a="SLEET";break;case 19:case 20:case 21:case 22:case 23:case 29:case 43:case 44:a="SNOW";break;case 32:a="WIND";break;case 11:a="FOG";break;default:a="CLEAR_DAY"}return Object(c.jsx)(_.a,{icon:a,color:z,size:t,animate:G})};a(90);var B=function(e){return Object(c.jsxs)("div",{className:"details-container",children:[Object(c.jsx)("div",{className:"details-title",children:e.title}),Object(c.jsxs)("div",{className:"details-currentWeather",children:[e.value,"\xb0"]}),Object(c.jsxs)("div",{className:"details-weatherIcon",children:[e.WeatherText,Object(c.jsx)(R,{icon:e.WeatherIcon,size:120})]})]})};a(91);var M=function(e){var t,a,r,s,i,o=Object(n.useState)(e.isSetAsFavorite(e.currentCityKey)),l=Object(u.a)(o,2),d=l[0],j=l[1];e.isSetAsFavorite(e.currentCityKey)!==d&&j(e.isSetAsFavorite(e.currentCityKey));var h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=e.weekForcast&&e.weekForcast.map((function(e,t){return Object(c.jsx)("div",{className:"WeekForcastComponent",children:Object(c.jsx)(B,{title:h[new Date(e.Date).getDay()],value:(a=e.Temperature,(a.Maximum.Value+a.Minimum.Value)/2),WeatherText:e.Day.IconPhrase,WeatherIcon:e.Day.Icon})},t);var a}));return Object(c.jsxs)("div",{className:"home-container",children:[Object(c.jsx)("div",{className:"searchBar",children:Object(c.jsx)(A,{setCityForcast:e.setCityForcast})}),Object(c.jsxs)("div",{className:"infoHeader",children:[Object(c.jsxs)("div",{className:"infotitle",children:[Object(c.jsx)("div",{children:e.currentCity}),Object(c.jsxs)("div",{children:[null===(t=e.currentForcast)||void 0===t||null===(a=t.Temperature)||void 0===a||null===(r=a.Imperial)||void 0===r?void 0:r.Value,"\xb0"]})]}),Object(c.jsx)(T.a,{variant:"contained",color:"primary",startIcon:d?Object(c.jsx)(E.a,{}):Object(c.jsx)(K.a,{}),onClick:function(){j(!d),e.addFavorite({key:e.currentCityKey,city:e.currentCity})},children:"Add to favorites"})]}),Object(c.jsxs)("div",{className:"currentWeather",children:[null===(s=e.currentForcast)||void 0===s?void 0:s.WeatherText,Object(c.jsx)(R,{icon:null===(i=e.currentForcast)||void 0===i?void 0:i.WeatherIcon,size:200})]}),Object(c.jsx)("div",{className:"week-day-forecast",children:f})]})};a(93);var H=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1],i=Object(l.f)();Object(n.useEffect)((function(){var t=[];e.favoritesList.map(function(){var e=Object(h.a)(j.a.mark((function e(a,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(a.key).then((function(e){var c=e.data[0];s([].concat(t,[{key:a.key,title:a.city,value:c.Temperature.Imperial.Value,WeatherText:c.WeatherText,WeatherIcon:c.WeatherIcon}])),t.push({key:a.key,title:a.city,value:c.Temperature.Imperial.Value,WeatherText:c.WeatherText,WeatherIcon:c.WeatherIcon})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}),[e.favoritesList]);var o=0!==r.length?r.map((function(t,a){return Object(c.jsx)("div",{className:"favoriteForcastComponent",onClick:function(){return a=t.key,c=t.title,e.setCityForcast(c,a),e.setCurrentPage("home"),void i.push("/");var a,c},children:Object(c.jsx)(B,{title:t.title,value:t.value,WeatherText:t.WeatherText,WeatherIcon:t.WeatherIcon})},a)})):Object(c.jsx)("div",{});return Object(c.jsx)("div",{className:"favorite-container",children:o})};a(94);var U=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({currentCityKey:null,currentCity:null,weekForcast:null,currentForcast:null}),i=Object(u.a)(s,2),d=i[0],j=i[1],h=Object(n.useState)("home"),f=Object(u.a)(h,2),v=f[0],b=f[1];Object(n.useEffect)((function(){var e,t,a,c,n=function(n,r){(function(e){return N.apply(this,arguments)})(n+","+r).then((function(n){var r=n.data.ParentCity||n.data;t=r.LocalizedName+" , "+n.data.Country.ID,e=r.Key,F(r.Key).then((function(e){c=e.data[0]})),I(r.Key).then((function(n){a=n.data.DailyForecasts,j({currentCityKey:e,currentCity:t,weekForcast:a,currentForcast:c})}))}))};navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,c=t.longitude;n(a,c)})):n(32.0853,34.7818)}),[]);var p=function(e,t,a){var c=a;c?F(t).then((function(a){return j({currentCityKey:t,currentCity:e,weekForcast:c,currentForcast:a.data[0]})})):I(t).then((function(a){c=a.data.DailyForecasts,F(t).then((function(a){return j({currentCityKey:t,currentCity:e,weekForcast:c,currentForcast:a.data[0]})}))}))},y=function(e){for(var t=0;t<a.length;t++)if(a[t].key===e)return!0;return!1};return Object(c.jsxs)("div",{id:"app",className:"light-theme",children:[Object(c.jsx)(S,{modeChange:function(){"light-theme"===document.getElementById("app").className?document.getElementById("app").className="dark-theme":document.getElementById("app").className="light-theme"},setCurrentPage:b,currentPage:v}),Object(c.jsx)("div",{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(M,Object(o.a)(Object(o.a)({addFavorite:function(e){var t=a;y(e.key)?t=t.filter((function(t){return t.key!==e.key})):t.push(e),r(t)},isSetAsFavorite:y,favoritesKeys:a},d),{},{setCityForcast:p}))}),Object(c.jsx)(l.a,{path:"/favorites",children:Object(c.jsx)(H,{favoritesList:a,setCityForcast:p,setCurrentPage:b})})]})})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D.a,{children:Object(c.jsx)(U,{})})}),document.getElementById("root")),V()}},[[96,1,2]]]);
//# sourceMappingURL=main.81690ceb.chunk.js.map