//added cloning support
$(".draggable").draggable({
    helper: 'clone',
    revert: true,
    stop: function(event, ui) {
        ui.helper.css('background-color', 'red');
        console.log('dragging done;');
    }
});
var itemsDropped = 0;
var maxItems = 2;
$(".droppable").droppable({
    accept: '.toy',
    drop: function(event, ui) {
        if (itemsDropped < maxItems) {
            itemsDropped++;
            //comment this for not clone
            var item = ui.draggable.clone();
            //uncomment this for not clone
            //var item = ui.draggable
            $(this).append(item);
            item.css('border', '1px solid blue')
            // uncomment these for not clone
            //item.draggable("option", "revert", false);
            //item.draggable('disable');
            item.css({ left: itemsDropped * 52 + 100, top: 50, 'z-index': 1000, position: 'absolute' });
            $(this).css('border', 'none');
        }
    },
    activate: function(event, ui) {
        ui.helper.css({ left: 100, top: 0, 'z-index': 1000, position: 'absolute' });
        ui.helper.css('border', '1px solid red');
        $(this).css('background-color', 'yellow');
    },
    deactivate: function(event, ui) {
        ui.helper.css('border', 'none');
        $(this).css('background-color', 'lightgray');
    },
    over: function(event, ui) {
        $(this).css('border', '1px solid red');
    },
    out: function(event, ui) {
        $(this).css('border', 'none');
    }
});

$('#enable').click(function() {
    $('.draggable').draggable('enable');
});

$('#disable').click(function() {
    $('.draggable').draggable('disable');
});
