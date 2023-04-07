// ==UserScript==
// @name         Hidden zhihu Modal
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hidden zhihu login modal
// @author       recall704
// @match        *://*.zhihu.com/*
// @grant        GM_wait
// @grant        GM_addStyle
// ==/UserScript==

/*-- Wait for pages to load before injecting code
    Credit: Petr Gazarov (https://stackoverflow.com/a/26831113/3315085)
*/
window.onload = function() {
    GM_wait();
};

function GM_wait() {
    const button = document.querySelector('.Modal-closeButton');
        if (button) {
            button.click();
        }
}
