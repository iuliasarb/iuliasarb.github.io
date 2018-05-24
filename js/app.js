
$(function() {
  
 // ===== text rotator ===== 
 var arr = [
    'I\'m an optimist',
    'I\'m a dreamer',
    'I\'m a curious person',
    'I\'m an explorer',
    'I\'m a planner',
    'I\'m a stubborn person',
    'I\'m a challenger',
    'I\'m a games player',
    'I\'m a stranger',
    'I\'m a maker'
    ];
  
  $('.rotator')
    .data('intervalLink', window.setInterval(function() {
      var i = arguments.callee.i ? arguments.callee.i : 0,
        message = arr[i];
      $('.rotator').animate({
        opacity: 0
      }, 500, function() {
        $(this).html(message);
      }).animate({
        opacity: 1
      }, 500);
      arguments.callee.i = (i++ == (arr.length - 1)) ? 0 : i++;
    }, 3000));
  
  // ===== smooth scroll ===== 
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  // ===== show year ===== 
  var date = new Date();
  var yr = date.getFullYear();
  $('#year').text(yr);

});

  // ===== animation start ===== 


    var contain = document.querySelector('.bg-3');
    var bar1 = document.querySelector('.bar1');
    bar1.firstChild.nextSibling.innerHTML = bar1.dataset.percent;
    var bar2 = document.querySelector('.bar2');
    bar2.firstChild.nextSibling.innerHTML = bar2.dataset.percent;
    var bar3 = document.querySelector('.bar3');
    bar3.firstChild.nextSibling.innerHTML = bar3.dataset.percent;
    var bar4 = document.querySelector('.bar4');
    bar4.firstChild.nextSibling.innerHTML = bar4.dataset.percent;
    var bar5 = document.querySelector('.bar5');
    bar5.firstChild.nextSibling.innerHTML = bar5.dataset.percent;
    var bar6 = document.querySelector('.bar6');
    bar6.firstChild.nextSibling.innerHTML = bar6.dataset.percent;

    contain.onmouseenter = function(){
      bar1.style['animationPlayState'] = 'inherit';
      bar2.style['animationPlayState'] = 'inherit';
      bar3.style['animationPlayState'] = 'inherit';
      bar4.style['animationPlayState'] = 'inherit';
      bar5.style['animationPlayState'] = 'inherit';
      bar6.style['animationPlayState'] = 'inherit';
    };

    contain.addEventListener('touchstart', function(){
          bar1.style['animationPlayState'] = 'inherit';
          bar2.style['animationPlayState'] = 'inherit';
          bar3.style['animationPlayState'] = 'inherit';
          bar4.style['animationPlayState'] = 'inherit';
          bar5.style['animationPlayState'] = 'inherit';
          bar6.style['animationPlayState'] = 'inherit';
    }, false)





