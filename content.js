// ==UserScript==
// @name         Hidden zhihu Modal
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hidden zhihu login modal
// @author       recall704
// @match        *://*.zhihu.com/*
// @require https://scriptcat.org/lib/513/2.0.0/ElementGetter.js
// @grant        GM_wait
// @grant        GM_addStyle
// ==/UserScript==


// 回调写法
(function() {
    elmGetter.get('.Modal-closeButton').then(parentDiv => {
    console.log("hidden modal");
    const button = document.querySelector('.Modal-closeButton');
        if (button) {
            button.click();
        }
    });
})();
