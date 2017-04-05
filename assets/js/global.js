/* //= includes/plugin_name.js */

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.noDev();
      page.navigation();
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },
    navigation: function () {
      var wrap = $('html');
      var menuBtn = $('.menu-btn');
      var mainNav = $('.main-nav');
      menuBtn.on('click', function () {
        wrap.toggleClass('no-scroll');
        mainNav.toggleClass('open');
        $(this).toggleClass('active-btn');
      } );
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
