$(window).on("load", function() {
  $(".marshall-slider").each(function() {
    function h() {
      i.find(".slider-item").removeClass("reveal").eq(c).addClass("reveal"),
      i.find(".paging-list .thumb").removeClass("highlight").eq(c).addClass("highlight")
    }

    function a() {
      c = i.find(".paging-list .thumb.highlight").index(), c === e ? c = 0 : ++c, h(c)
    }

    function b() {
      clearInterval(j), j = setInterval(function() {
        a()
      }, 5000)
    }
    var c, i = $(this),
      e = i.find(".paging-list .thumb").length - 1;
    i.find(".paging-list .thumb").first().addClass("highlight"),
    i.find(".slider-item").first().addClass("reveal"),
    i.find(".paging-list .thumb").on("click", function() {
      i.find(this).hasClass("highlight") || (c = i.find(this).index(), h(c), b())
    }),
    i.find(".nextbtn").on("click", function() {
      c = i.find(".paging-list .thumb.highlight").index(), c === e ? c = 0 : ++c, h(c), b()
    }),
    i.find(".prevbtn").on("click", function() {
      c = i.find(".paging-list .thumb.highlight").index(), e = i.find(".paging-list .thumb").length - 1, 0 === c ? c = e : --c, h(c), b()
    });
    var j = setInterval(function() {
      a()
    }, 5000)
  })
})
