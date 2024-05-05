function darkMode() {
  $("body").css("backgroundColor", "black");
  $("body").css("color", "white");
  $("a").css("color", "white");
  $("h1").css("color", "white");
  $("h2").css("color", "white");
  $("h3").css("color", "white");
  $("h4").css("color", "white");
  $("h5").css("color", "white");
  $("h6").css("color", "white");
  $("p").css("color", "white");
  $(".Testimonial-p ").css("color", "black");
  $(".h4-testimonial ").css("color", "black");
  $(".p-testimonial").css("color", "black");
  $("button").css("backgroundColor", "blue");
  $(".navbar-toggler").css("backgroundColor", "white");
  $(".social-icon-1").attr("src", "icon-1-new.webp");
  $(".social-icon-2").attr("src", "icon-2-new.webp");
  $(".social-icon-3").attr("src", "icon-3-new.png");
  $(".social-icon-4").attr("src", "icon-4-new.png");
  $(".social-icon-5").attr("src", "icon-5-new.webp");
}

function lightMode() {
  $("body").css("backgroundColor", "white");
  $("body").css("color", "black");
  $("a").css("color", "black");
  $("h1").css("color", "black");
  $("h2").css("color", "black");
  $("h3").css("color", "black");
  $("h4").css("color", "black");
  $("h5").css("color", "black");
  $("h6").css("color", "black");
  $("p").css("color", "black");
  $(".Testimonial-p ").css("color", "black");
  $(".h4-testimonial ").css("color", "black");
  $(".p-testimonial").css("color", "black");
  $("button").css("backgroundColor", "black");
  $(".navbar-toggler").css("backgroundColor", "white");
  $(".social-icon-1").attr("src", "social-logo-2.png");
  $(".social-icon-2").attr("src", "social-logo-4.png");
  $(".social-icon-3").attr("src", "email-icon.png");
  $(".social-icon-4").attr("src", "github-icon.png");
  $(".social-icon-5").attr("src", "linkedin-icon.png");
}

let sunMoonCount = 0;

$(".sun-moon").on("click", function () {
  if (sunMoonCount == 0) {
    $(".sun-moon").attr("src", "sun.png");
    darkMode();
    sunMoonCount = 1;
  } else {
    $(".sun-moon").attr("src", "moon.png");
    lightMode();
    sunMoonCount = 0;
  }
});
