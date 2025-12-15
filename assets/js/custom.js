// navigation search-bar
const topSearch = document.getElementById("search-bar-bt");
if (topSearch) {
  topSearch.onclick = () => {
    const SearchBar = document.getElementById("search-bar");
    if (!SearchBar) return;
    SearchBar.style.height = "100vh";
    SearchBar.style.display = "flex";
    document.body.style.overflow = "hidden";
  };
}

const btn = document.getElementById("remove-btn");
if (btn) {
  btn.onclick = () => {
    const remov = document.getElementById("search-bar");
    if (!remov) return;
    remov.style.display = "none";
    document.body.style.overflow = "unset";
  };
}


// right-sidebar
function open_right_side() {
    "use strict";
    const sidepanel = document.getElementById("right_side");
    if (sidepanel) {
        sidepanel.style.right = "0";
    } else {
        console.error("Error: Side panel element not found!");
    }
}

function close_right_sade() {
    "use strict";
    const sidepanel = document.getElementById("right_side");
    if (sidepanel) {
        sidepanel.style.right = "-355px";
    } else {
        console.error("Error: Side panel element not found!");
    }
}

// navbar side-slide

// navbar side-slide

function openNav() {
    document.getElementById("mySidenav").style.width = '280px';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
const slid = document.getElementById("slid-btn");
if (slid) {
  slid.onclick = () => {
    const drop = document.getElementById("slid-drop");
    if (!drop) return;
    drop.classList.toggle("myst");
  };
}

// ========= sliders (safe init)
(function initSliders() {
  if (!window.jQuery) return;
  const $ = window.jQuery;
  if (!$.fn || typeof $.fn.slick !== 'function') return;

  function safeSlick(selector, options) {
    const $el = $(selector);
    if (!$el.length) return;
    if ($el.hasClass('slick-initialized')) return;
    $el.slick(options);
  }

  $(document).ready(function () {
    safeSlick('.logo_ispsum_slider', {
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      slidesToShow: 4,
      cssEase: 'linear',
      responsive: [
        { breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: false } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: false } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 450, settings: { slidesToShow: 2, slidesToScroll: 1 } }
      ]
    });

    safeSlick('.visa-logo', {
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      slidesToShow: 4,
      cssEase: 'linear',
      responsive: [
        { breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: false } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: false } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 450, settings: { slidesToShow: 2, slidesToScroll: 1 } }
      ]
    });

    safeSlick('.prof-slider', {
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
    });
  });
})();


// footer logo ispsum
$('.footer_ispsum_slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    slidesToShow: 2,
    cssEase: 'linear',

    pauseOnHover: true,
    responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
    {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                // speed: 9000,
                // autoplaySpeed: 5,
            }
        },
    ]
});

// number counter
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this),
                r = n,
                i = function() {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || [])
                        .length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f)
                            .toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString()
                                .replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function() {
                        t.text(t.data("counterup-nums")
                            .shift());
                        if (t.data("counterup-nums")
                            .length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);

jQuery(document)
    .ready(function($) {
        $('.count')
            .counterUp({
                delay: 10,
                time: 5000
            });
    });


    // button back to top
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: "smooth"
    });
}

// accordian of faq page

const accordionItems = document.querySelectorAll('.accordion-item1');

accordionItems.forEach((item, index) => {
  const header = item.querySelector('.accordion-header1');
  const toggleIcon = item.querySelector('.accordion-toggle1');

  if (index === 0) {
    item.classList.add('active');
    toggleIcon.classList.add('active');
    item.querySelector('.accordion-content').style.maxHeight = '1000px'; // Adjust this value
  }

  header.addEventListener('click', () => {
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-content').style.maxHeight = '0';
        otherItem.querySelector('.accordion-toggle1').classList.remove('active');
      }
    });

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      toggleIcon.classList.add('active');
    } else {
      toggleIcon.classList.remove('active');
    }

    const content = item.querySelector('.accordion-content');
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});


// form Subscribe message (guarded)
const aboutFor = document.getElementById('footer-sub2');
const aboutMessag = document.getElementById('Succes-box2');
if (aboutFor && aboutMessag) {
  aboutFor.addEventListener('submit', (event) => {
    event.preventDefault();
    aboutMessag.innerHTML = 'You Subscribe successfully!';
    aboutMessag.style.display = 'block';
    aboutFor.reset();
    setTimeout(() => {
      aboutMessag.style.display = 'none';
    }, 3000);
  });
}