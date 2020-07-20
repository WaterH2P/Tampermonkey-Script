// ==UserScript==
// @name        H2P: GF 界面清爽
// @namespace   http://tampermonkey.net/
// @version     0.0.1
// @icon        https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1
// @description GF 界面清爽
// @author      H2P
// @compatible  chrome
// @match       *://greasyfork.org/*/users/*
// @note        2020.07.20-V0.0.01      近期评论、Script Sets
// ==/UserScript==

(function() {
  'use strict';

  const $H2P = function (xpath, one = true) {
    if (one) { return document.querySelector(xpath); }
    else { return Array.from(document.querySelectorAll(xpath)); }
  }

  let eleStyle = document.createElement('style');

  eleStyle.innerHTML += `
    div.width-constraint > section:nth-child(n+2) { display: none!important; }
  `;
  eleStyle.innerHTML += `
    #script-list-set, #script-language-filter { display: none!important; }
  `;
  document.head.appendChild(eleStyle);
  })();