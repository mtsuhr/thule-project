window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementById("sticky-main-navbar").style.top = "0";
  } else {
    document.getElementById("sticky-main-navbar").style.top = "-110px";
  }

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("sticky-compact-navbar").style.top = "0";
  } else {
    document.getElementById("sticky-compact-navbar").style.top = "-80px";
  }
};


function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("sidebar-overlay").style.left = "0";
};

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-100%";
  document.getElementById("sidebar-overlay").style.left = "-100%";
};


var acc = document.getElementsByClassName("button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
};