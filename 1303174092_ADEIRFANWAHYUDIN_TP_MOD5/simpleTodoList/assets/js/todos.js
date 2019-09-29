$('li').click(function() {
  if ($(this).css('color') === 'rgb(128, 128, 128)') {
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    });
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});
$('#semangat').append(
  "<audio controls autoplay hidden> <source src='../css/semangat.mp3' type='audio/mpeg' /></audio>"
);
// lengkapi jquery untuk menlist hasil dari todolist yang di inputkan
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed')
  });
  $('ul').on('click', "span" , function(event){
  	$(this).parent().fadeOut(500,function(){
  		$(this).remove();
  	});
  	event.stopPropagation();
  });
  $('input[type=text]').on('keypress', function(e){
        if(e.which === 13){
            let todoText = $(this).val()
            $('ul').append('<li><span><i class="fa fa-trash"></i> </span>' + todoText + '</li>')
            $(this).val('')
        }
    })

  $(".fa-plus").click(function(){
  	$("input[type='text']").fadeToggle()
  })
