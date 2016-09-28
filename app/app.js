//change css of first li
$('li:first').css('color', 'purple')

//change css of li on click
$('li').click(function() {
    $(this).css('color', 'green');
});

//change color for link whose href attribute starts with www.g
$('a[href^="www.g"]').css('color', 'gray');

//change color of link whose href attribute end with n.com
$('a[href$="n.com"]').css('color', 'pink');

//change color of link whose href attribute has ceb anywhere
$('a[href*="ceb"]').css('color', 'orange');

//change attr of last link 
$('a:last').attr({
    target: '_blank',
    href: 'http://www.twitter.com'
});

// give a background to even rows, similar to even there are other selectors like :odd, :first, :last
$('#some-id li:even').css({
	'background-color': 'lightgray'
});

// on click of 4th clild change font style
$('#some-id li:nth-child(4)').click(function () {
	$(this).css('font-style', 'italic')
});

// append at last, prepend is similar
$('#some-id ul').append('<li>sixth</li>')

//after,  before is similar
$('#some-id li:last').after('<li>seventh</li>')

// remove and relaceWith
$('li:last').remove();
$('li:last').replaceWith('<li>sixth - edited</li>');

// addClass, removeClass and toggleClass
$('li').click(function () {
	$('li').removeClass('highlighted');
	$(this).addClass('highlighted');
});

// other events
$('li').dblclick(function () {
	$(this).css({
		'font-weight': 'bold'
	});
});

// input events
$('#input-box1').focus(function () {
	$(this).css('border', '3px solid red')
})
$('#input-box1').blur(function () {
	$(this).css('border', '3px solid yellow')
})
$('#input-box1').select(function () {
	$(this).css('border', '3px solid green')
})

//animate the box
$('.box').click(function() {
    $(this).animate({
        'left': 100,
    }, 1000, "swing", function() {
        $(this).animate({
            'left': 10,
        }, 1000)
    })
})
