/* //= includes/plugin_name.js */

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.noDev();
   
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogLy89IGluY2x1ZGVzL3BsdWdpbl9uYW1lLmpzICovXG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2Uubm9EZXYoKTtcbiAgIFxuICAgIH0sXG4gICAgbm9EZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignSUVNb2JpbGUnKSAhPT0gLTEpKSB7XG4gICAgICAgICQoJy5uby1kZXYnKS5yZW1vdmVDbGFzcygnbm8tZGV2Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc0RldjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEkKCdodG1sJykuaGFzQ2xhc3MoJ25vLWRldicpIHx8IHdpbmRvdy5pbm5lcldpZHRoIDwgMTI4MDtcbiAgICB9LFxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgc2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG4gICAgfVxuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KHBhZ2UuaW5pdCk7XG4gICQod2luZG93KS5vbih7XG4gICAgJ2xvYWQnOiBwYWdlLmxvYWQsXG4gICAgJ3Jlc2l6ZSc6IHBhZ2UucmVzaXplLFxuICAgICdzY3JvbGwnOiBwYWdlLnNjcm9sbFxuICB9KTtcbiAgXG4gIHdpbmRvdy5pc0RldmljZSA9IHBhZ2UuaXNEZXY7XG5cbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG4iXSwiZmlsZSI6Imdsb2JhbC5qcyJ9
