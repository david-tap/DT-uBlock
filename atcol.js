(() => {
    'use strict';
    const selector = '{{1}}';
    if ( selector === '' || selector === '{{1}}' ) {
        return;
    }
    const tag = '{{2}}';
    const fix = ev => {
                    if (ev) { window.removeEventListener(ev.type, fix, true); }
                    try {
                        const element = document.getElementById(frame2);
                            element.setAttribute("cols","1px,*");
                        }   
                    } catch { }
    };
    if (document.readyState === 'loading') {
              window.addEventListener('DOMContentLoaded', fix, true);
    } else {
          fix();
    }
})();
