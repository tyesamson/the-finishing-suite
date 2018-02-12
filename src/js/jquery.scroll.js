
$(document).ready(function ($) {
  // Cache selectors
  var lastId,
    topMenu = $("#nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var href = $(this).attr('href');
      if (href.substring(0,1) !== '#') {
        return null;
      }
      var item = $($(this).attr("href"));
      if (href.substring(0,1) === '#' && item.length) { return item; }
    });

  $("nav a[data-scroll]").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });

    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;

      // Set/remove active class
      $('.active', '#nav').removeClass('active');
      $(`[href="#${id}"]`, '#nav').addClass('active');
      return;
    }
  });
});
