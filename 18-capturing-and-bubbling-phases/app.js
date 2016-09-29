//Event propagation, capturing phase
document
    .getElementsByClassName('d1')[0]
    .addEventListener("click", function(e) {
        console.log('handler of d1', e.target, this);
    }, true);

document
    .getElementsByClassName('d2')[0]
    .addEventListener("click", function(e) {
        console.log('handler of d2', e.target, this);
    }, true);
document
    .getElementsByClassName('d3')[0]
    .addEventListener("click", function(e) {
        console.log('handler of d3', e.target, this);
    }, true);

    //Event propagation, bubbling phase phase
document
    .getElementsByClassName('d1')[0]
    .addEventListener("click", function(e) {
        console.log('handler of d1', e.target, this);
    });

document
    .getElementsByClassName('d2')[0]
    .addEventListener("click", function(e) {
        console.log('handler of d2', e.target, this);
    });
document
    .getElementsByClassName('d3')[0]
    .addEventListener("click", function(e) {
        console.log('handler of d3', e.target, this);
    });
