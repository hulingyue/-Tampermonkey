// ==UserScript==
// @name         YoutubeTools
// @namespace    http://www.love-365.cn/YoutubeTools
// @version      0.1
// @description  Youtube去广告
// @author       HuLingYue
// @match        https://www.youtube.com/watch?*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    setInterval(function() { var saver = document.getElementsByClassName("ytp-ad-overlay-close-button");
                            var ad_skip = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
                             var ad_iframe = document.getElementById("player-ads");
                             if(saver.length!=0){
                                 saver[0].click();
                             }
                             if(ad_skip.length!=0){
                                 ad_skip[0].click();
                             }
                              if(ad_iframe.length!=0){
                                 ad_iframe.parentNode.removeChild(ad_iframe);
                              }
                            },0);
    // Your code here...
})();
