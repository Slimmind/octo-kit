/* //= includes/plugin_name.js */

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
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

})(jQuery, window, document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIC8vPSBpbmNsdWRlcy9wbHVnaW5fbmFtZS5qcyAqL1xuXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgcGFnZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBub0RldjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCh0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdJRU1vYmlsZScpICE9PSAtMSkpIHtcbiAgICAgICAgJCgnLm5vLWRldicpLnJlbW92ZUNsYXNzKCduby1kZXYnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRGV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISQoJ2h0bWwnKS5oYXNDbGFzcygnbm8tZGV2JykgfHwgd2luZG93LmlubmVyV2lkdGggPCAxMjgwO1xuICAgIH0sXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkocGFnZS5pbml0KTtcbiAgJCh3aW5kb3cpLm9uKHtcbiAgICAnbG9hZCc6IHBhZ2UubG9hZCxcbiAgICAncmVzaXplJzogcGFnZS5yZXNpemUsXG4gICAgJ3Njcm9sbCc6IHBhZ2Uuc2Nyb2xsXG4gIH0pO1xuXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpOyJdLCJmaWxlIjoiaG9tZS5qcyJ9
