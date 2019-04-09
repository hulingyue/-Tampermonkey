// ==UserScript==
// @name         51Tools
// @namespace    http://www.love-365.cn/51Tools
// @version      0.1
// @description  try to take over the world!
// @author       HuLingYue
// @match        https://edu.51cto.com/center/course/lesson/index?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload=function(){
        console.log("加载完毕！");
    }
    setTimeout(function () {console.log("等待……")
                            var m = document.getElementsByClassName("pop_tosignbox");
                            m[0].parentNode.removeChild(m[0]);
                            var _script = document.getElementsByTagName("script");
                            _script[11].parentNode.removeChild(_script[11]);
                        }, 2000)
    setInterval(function() { var saver = document.getElementsByClassName("saver");
                             if(saver.length!=0){
                                 saver[0].parentNode.removeChild(saver[0]);
                             } },0);
})();
