// $(document).ready(function() {
// $('#bs-nas-demo').click(function(e) {
// $(this).toggleClass('active');
// $('.data-target').toggleClass('active');
// e.preventDefault();
// });
// });

// $(".navbar-fixed-top").click(function{
//   $(".navbar-fixed-top").slideUp();
// });
// $(".navbar-fixed-top").on("click", function(){
// 	 $(".navbar-fixed-top").slideUp();
// 	alert("navbar-right was clicked!");
// });

// newsletter signup

$(function() {
  $('.popup').click(function() {
    $('.newsletter').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $('.newsletter');
    if (!container.is(e.target)
        && container.has(e.target).length === 0)
        {
            container.fadeOut();
          }
        });
      });
