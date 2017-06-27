// ==UserScript==
// @name        ancapnews
// @namespace   com.cemerick
// @description bring out HN's true colors
// @include     about:addons
// @version     1
// @grant       none
// @match https://news.ycombinator.com/*
// @match http://news.ycombinator.com/*
// ==/UserScript==

(function () {
  document.querySelector(".hnname a").innerHTML = "Ancap News";
  
  var angle = document.createElement("div");
  angle.innerHTML = "◤";
  angle.setAttribute("id", "angle")
  
  var rightSelector = "td[bgcolor='#ff6600'] table td:last-child";
  var rightCell = document.querySelector(rightSelector);
  rightCell.prepend(angle);
  rightCell.setAttribute("id", "userinfo");
  
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = "td[bgcolor='#ff6600'] { background-color: yellow }" +
                    "td[bgcolor='#ff6600'] > table { padding: 0px !important }" +
                    "td#userinfo { background-color: black; color: #ccc; overflow:hidden}" +
                    "td#userinfo * { color: #eee }" +
                    "div#angle { color: yellow;float: left;margin: -2px 0 0 -3px; }";
  document.body.appendChild(style);
  
  var resize = function () {
    var height = rightCell.clientHeight;
    if (height) {
      angle.style["line-height"] = (12 * height / 20) + "px";
      angle.style["font-size"] = (36 * height / 20) + "px";
      angle.style["margin-left"] = (-3 * height / 20) + "px";
    }
  };
  
  window.addEventListener("resize", resize);
  resize();
})();