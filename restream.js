// A $( document ).ready() block.
$(function() {

  console.log('Restream overlay here, healthy and ready');

  $(".jss284").waitUntilExists(function () {
    $(".jss284").before( '<highlight-chat></highlight-chat><button class="btn-clear">CLEAR</button>' );
    console.log('.jss284 appeared!');
  });

  console.log('Restream overlay completed');

});
