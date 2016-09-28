(function(){

//DOM 
var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.onclick = function() {
        var key = this.innerHTML;
        calculator.process(key);
    }
}

})();