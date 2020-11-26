(() => {
    'use strict';
    const fix = ev => {
                    if (ev) { window.removeEventListener(ev.type, fix, true); }
                    try {
                        const framed = document.getElementById("PageContainerFrame");
                        const frame2 = framed.contentWindow.document.getElementById("frame2");
                        frame2.setAttribute("cols","1px,*");
                    } catch { }
    };
          fix();

})();
