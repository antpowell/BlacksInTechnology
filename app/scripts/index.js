'use strict';

(function($){
  $(document).ready(function(){
    $('#signInBtn').on('click', function(){
      console.log('sign in button clicked');
      $('.dropdown-menu').css('display', 'none');
    });
  });
})(jQuery);
