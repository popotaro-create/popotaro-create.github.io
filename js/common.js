// メニューバーの色を変化させる
function changeColor() {
if (document.getElementById("eyecatch") != null) {
  let scrollY = window.pageYOffset;
  let body = document.body;

  let eyecatch = document.getElementById('eyecatch');
  let nav = document.getElementById('globalnav');

  let top = eyecatch.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
  let bottom = eyecatch.getBoundingClientRect().bottom; // ウィンドウ上からの要素の位置

  let area = bottom - top;

  if( scrollY < area ) {
    nav.classList.add('colorchange');
  } else {
    nav.classList.remove('colorchange');
  }
 }
}

window.addEventListener('scroll', changeColor);

// ハンバーガーメニュー実装
const checkbox = document.getElementById('menubtn');
const navmenu = document.getElementById('navmenu');

function openMenu() {
  if (navmenu.className == '') {
    navmenu.classList.add('checked');
    checkbox.style.color = 'black';
  } else {
    navmenu.classList.remove('checked');
    checkbox.style.color = '';
  }
}
checkbox.addEventListener('click', openMenu);

jQuery(function() {
  jQuery(document).on('click', function(e) {
      if(!jQuery(e.target).is('#navmenu, #menubtn') && $(window).width() < 750 && navmenu.className == 'checked') {
          navmenu.classList.remove('checked');
          checkbox.style.color = '';
      }
    });
});

// ぬるっと上までスクロール
jQuery(function() {
  var windowWidth = $(window).width();
  var windowSm = 768;
  var headerHeight;
  if (windowSm >= windowWidth) {
    var headerHeight = 50;
  } else {
    var headerHeight = 80;
  }
  var documentUrl = location.origin + location.pathname + location.search;
  jQuery(document).on('click', 'a[href*="#"]', function(event) {
    var anchor = event.currentTarget;
    var anchorUrl = anchor.protocol + '//' + anchor.host + anchor.pathname + anchor.search;
    if (documentUrl !== anchorUrl) {
      return true;
    }

    var checkbox = document.getElementById( "menubtn" );
    checkbox.checked = false;

    var speed = 500;
    var position = $(anchor.hash).offset().top - headerHeight;
    jQuery('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    event.preventDefault();
    return false;
  });
});
