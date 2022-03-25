(this["webpackJsonp06-react-intro"]=this["webpackJsonp06-react-intro"]||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(11),i=c.n(a),r=c(5),s=c(10),j=c(12),l=c(4),o=c(9),b=c.n(o),d=c(2),u=(c(19),c(0));function h(e){var t=e.inputValue,c=e.setInputValue,n=e.getData;return Object(u.jsxs)("form",{className:"search__bar",onSubmit:function(e){e.preventDefault(),c("")},children:[Object(u.jsx)("input",{type:"text",className:"search__bar-input",placeholder:"City...",value:t,onChange:function(e){var t=e.target;c(t.value)}}),Object(u.jsx)("button",{className:"search__bar-button btn btn-success",onClick:function(){n()},children:"Search"})]})}var x=c(13);c(21);function m(e){var t=e.name,c=e.main,n=e.weather,a=e.id,i=e.deleteCity,s=Object(l.a)(n,1)[0],j="http://openweathermap.org/img/wn/".concat(s.icon,"@2x.png");return Object(u.jsxs)("div",{className:"card animate__animated animate__rollIn",children:[Object(u.jsx)("div",{className:"button__container",children:Object(u.jsx)("span",{className:"close-card__button btn btn-danger",onClick:function(){i()},children:Object(u.jsx)("ion-icon",{name:"close-outline"})})}),Object(u.jsx)(r.b,{to:"/city/".concat(a),children:Object(u.jsx)("h3",{className:"city__name",children:t})}),Object(u.jsxs)("div",{className:"temperature__info-container",children:[Object(u.jsxs)("div",{className:"temperature__info-box",children:[Object(u.jsx)("h4",{children:"Min"}),Object(u.jsxs)("span",{children:[c.temp_min," \xb0F"]})]}),Object(u.jsxs)("div",{className:"temperature__info-box",children:[Object(u.jsx)("h4",{children:"Max"}),Object(u.jsxs)("span",{children:[c.temp_max," \xb0F"]})]}),Object(u.jsx)("div",{className:"temperature__info-icon",children:Object(u.jsx)("img",{src:j,alt:"Weather Icon"})})]})]})}c(22);function O(e){var t=e.cities,c=e.deleteCity;return Object(u.jsx)("div",{className:"cards__list",children:t.map((function(e,t){return Object(u.jsx)(m,Object(x.a)({deleteCity:function(){return c(e)}},e),t)}))})}var p=c.p+"static/media/weather-image.0ea4f128.svg";c(23);var f=function(e){var t=e.inputValue,c=e.setInputValue,n=e.getData,a=e.cities,i=e.deleteCity;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(h,{inputValue:t,setInputValue:c,getData:n}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{children:0!==a.length?Object(u.jsx)(O,{cities:a,deleteCity:i}):Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"weather__loader-text",children:"Search for a city weather!"}),Object(u.jsx)("div",{className:"weather__image",children:Object(u.jsx)("img",{src:p,alt:"weather"})})]})}),Object(u.jsx)("hr",{})]})})};c(24);function _(){return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)(r.b,{to:"/",className:"navbar__link",children:Object(u.jsx)("span",{children:"Home"})}),Object(u.jsx)(r.b,{to:"/about",className:"navbar__link",children:Object(u.jsx)("span",{children:"About"})})]})}c(25);function v(){return Object(u.jsxs)("div",{className:"about__container",children:[Object(u.jsx)("h2",{children:"What is weather app?"}),Object(u.jsx)("p",{children:"Weather App is a simple web application whichs allows you to search for a city's current weather. It lets you know some data like max, min temperature, pressure, humidity and more interesting information. "})]})}c(26);function g(e){var t=e.cities,c=Object(d.h)().cityId;console.log(c),console.log(t);var n=t.find((function(e){return e.id===Number(c)}));if(console.log(n),!n)return Object(u.jsx)(d.a,{to:"/"});var a=n.name,i=n.main,r=i.humidity,s=i.pressure,j=i.temp,o=i.temp_max,b=i.temp_min,h=n.coord,x=h.lat,m=h.lon,O=n.weather,p=Object(l.a)(O,1)[0],f="http://openweathermap.org/img/wn/".concat(p.icon,"@2x.png");return Object(u.jsxs)("div",{className:"card__info",children:[Object(u.jsx)("h3",{className:"card__info-title",children:a}),Object(u.jsxs)("div",{className:"card__info-container",children:[Object(u.jsxs)("div",{className:"card__info-text",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Temperature: "}),j," \xb0F"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Max temperature: "}),o," \xb0F"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Min temperature: "}),b," \xb0F"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Humidity: "}),r," g/m3"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Pressure: "}),s," kPa"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Latitude: "}),x,"\xb0"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Longitude: "}),m,"\xb0"]})]}),Object(u.jsxs)("div",{className:"card__info-image",children:[Object(u.jsx)("div",{className:"card__info-image-container",children:Object(u.jsx)("img",{src:f,alt:"Weather icon"})}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Current weather: "}),p.description]})]})]})]})}var N=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),r=Object(l.a)(i,2),o=r[0],h=r[1],x="https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=").concat("44631f5b9e67ba59de39951f6745f559"),m=function(){var e=Object(j.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x);case 2:return t=e.sent,e.next=5,t.json();case 5:200===(c=e.sent).cod?h((function(e){return[].concat(Object(s.a)(e),[c])})):h((function(e){return Object(s.a)(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(_,{}),Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{path:"/",element:Object(u.jsx)(f,{inputValue:c,setInputValue:a,cities:o,getData:m,deleteCity:function(e){var t=o.filter((function(t){return t.id!==e.id}));h(t)}})}),Object(u.jsx)(d.b,{path:"/about",element:Object(u.jsx)(v,{})}),Object(u.jsx)(d.b,{path:"/city/:cityId",element:Object(u.jsx)(g,{cities:o})})]})]})};c(27);i.a.render(Object(u.jsx)(r.a,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.88ff0435.chunk.js.map