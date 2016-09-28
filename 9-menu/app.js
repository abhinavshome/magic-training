$( "#menu" ).menu({
  classes: {
    "ui-menu": "highlight",
    position: { my: "left top", at: "right-5 top+5" }
  }
});

$('button').click(function () {
	$('#menu').menu('collapse');
})

$( "#menu" ).on( "menuselect", function( event, ui ) {
	console.log(event, ui);
});
