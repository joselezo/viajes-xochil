$(document).ready(function() {
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});




  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });

  
  
  
  
  
  
  
  
  $(document).ready(function(){
var header = $('.main_banner ');

var backgrounds = new Array(
    'url(img/boda2.jpg)'
  , 'url(img/boda3.jpg)'
	 , 'url(img/boda4.jpg)'
  
  
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 5000);

header.css('background-image', backgrounds[0]);
});



