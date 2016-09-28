$('button').click(function() {
    $("#dialog").dialog({
        dialogClass: "no-close",
        classes: {
            "ui-dialog": "highlight"
        },
        buttons: [{
            text: "OK",
            click: function() {
                console.log('OK clicked');
                $(this).dialog("close");
            }
        }]
    });
})
