$(document).ready(function () {
  var url = window.location.href;
  if (url.indexOf('#') != -1) {
    $('.hello').addClass('hidden');
    $('#about').removeClass('hidden');
  }
  if ($('.hello').hasClass('hidden') == false) {
    for (let i = 1; i < 6; i++) {
      $('.hello h1:nth-child(' + i + ')').addClass('vhidden');
    }

    for (let i = 1; i < 6; i++) {
      setTimeout(function () {
        $('.hello h1:nth-child(' + i + ')').removeClass('vhidden');
        $('.hello h1:nth-child(' + i + ')').css({
          "animation": "fade-up 1s ease-in"
        })
      }, 750 * i);
    }

    setTimeout(function () {
      $('.hello').addClass('hidden'),
        $('#about').removeClass('hidden'),
        $('#about').css({
          "animation": "fade-up 1s ease-in"
        })
    }, 4800);
  }

  // if ($(".hello").first().is(":hidden")) {
  //   // $(".hello").show("slow");
  //   for (let i = 1; i < 6; i++) {
  //     $('.hello h1:nth-child(' + i + ')').show("slow");
  //   }
  // } else {
  //   for (let i = 1; i < 6; i++) {
  //     $('.hello h1:nth-child(' + i + ')').slideDown("slow");
  //   }
  // }





})