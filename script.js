jQuery(document).ready(function () {
  // ////// METHOD ONE -- FAILED //////

  // if (jQuery("#green").is(":checked")) {
  //     // jQuery("#main_img").attr("src","./img/hero_blue.jpg");
  //     alert("gchecked");
  // }
  // if (jQuery("#blue").is(":checked")) {
  //     // jQuery("#main_img").attr("src","./img/hero_blue.jpg");
  //    alert("bchecked");
  // }

  //   jQuery("#green").click(function () {
  //     jQuery("#main_img").fadeOut(400, function(){
  //     jQuery(this).attr('src','./img/hero_green.jpg').fadeIn(400);
  //   });
  // });

  // jQuery("#blue").click(function () {
  //   jQuery("#main_img").fadeOut(400, function(){
  //   jQuery(this).attr('src','./img/hero_blue.jpg').fadeIn(400);
  // });
  // });

  // ////// METHOD TWO -- FAILED //////

  //   jQuery("#green").click(function () {
  //     jQuery("#main_img").fadeOut(100, function(){
  //       jQuery(this).attr("src", "./img/hero_green.jpg").fadeIn(400);
  //     })
  //   });

  // jQuery("#blue").click(function () {
  //     jQuery("#main_img").fadeOut(100, function(){
  //       jQuery(this).attr("src", "./img/hero_blue.jpg").fadeIn(400);
  //     })
  //   });

  // ////// METHOD ONE -- PASS //////

  jQuery("#green").click(function () {
    jQuery("#main_img").attr("src", "./img/hero_green.jpg").fadeIn(slow);
  });

  jQuery("#blue").click(function () {
    jQuery("#main_img").attr("src", "./img/hero_blue.jpg").fadeIn(slow);
  });

  jQuery("#midnight").click(function () {
    jQuery("#main_img").attr("src", "./img/hero_midnight.jpg").fadeIn(slow);
  });

  jQuery("#starlight").click(function () {
    jQuery("#main_img").attr("src", "./img/hero_starlight.jpg").fadeIn(slow);
  });
  jQuery("#pink").click(function () {
    jQuery("#main_img").attr("src", "./img/hero_pink.jpg").fadeIn(slow);
  });
  jQuery("#red").click(function () {
    jQuery("#main_img").attr("src", "./img/hero_red.jpg").fadeIn(slow);
  });
});
