/* //= includes/plugin_name.js */

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.noDev();
      page.mainNav();
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    mainNav: function () {
      var
        mainWrap = $('html'),
        header = $('.header_'),
        menuBtn = $('.menu-btn');
      menuBtn.on('click', function () {
        mainWrap.toggleClass('no-scroll');
        header.toggleClass('active');
      })
    },
    load: function () {
    },
    resize: function () {
    },
    scroll: function () {
    }
  };

  $(document).ready(page.init);
  $(window).on({
    'load': page.load,
    'resize': page.resize,
    'scroll': page.scroll
  });

  window.isDevice = page.isDev;

})(jQuery, window, document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogLy89IGluY2x1ZGVzL3BsdWdpbl9uYW1lLmpzICovXG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2Uubm9EZXYoKTtcbiAgICAgIHBhZ2UubWFpbk5hdigpO1xuICAgIH0sXG4gICAgbm9EZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignSUVNb2JpbGUnKSAhPT0gLTEpKSB7XG4gICAgICAgICQoJy5uby1kZXYnKS5yZW1vdmVDbGFzcygnbm8tZGV2Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc0RldjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEkKCdodG1sJykuaGFzQ2xhc3MoJ25vLWRldicpIHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgMTI4MDtcbiAgICB9LFxuICAgIG1haW5OYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhclxuICAgICAgICBtYWluV3JhcCA9ICQoJ2h0bWwnKSxcbiAgICAgICAgaGVhZGVyID0gJCgnLmhlYWRlcl8nKSxcbiAgICAgICAgbWVudUJ0biA9ICQoJy5tZW51LWJ0bicpO1xuICAgICAgbWVudUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1haW5XcmFwLnRvZ2dsZUNsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgaGVhZGVyLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICByZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShwYWdlLmluaXQpO1xuICAkKHdpbmRvdykub24oe1xuICAgICdsb2FkJzogcGFnZS5sb2FkLFxuICAgICdyZXNpemUnOiBwYWdlLnJlc2l6ZSxcbiAgICAnc2Nyb2xsJzogcGFnZS5zY3JvbGxcbiAgfSk7XG5cbiAgd2luZG93LmlzRGV2aWNlID0gcGFnZS5pc0RldjtcblxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcbiJdLCJmaWxlIjoiZ2xvYmFsLmpzIn0=
