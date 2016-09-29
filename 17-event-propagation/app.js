//Event propagation

document.getElementsByClassName('d1')[0].onclick = function (e) {
    console.log('handler of d1', e.target, this);
}

document.getElementsByClassName('d2')[0].onclick = function (e) {
    console.log('handler of d2',e.target, this);

}

document.getElementsByClassName('d3')[0].ondblclick = function (e) {
    console.log('dbl clk handler of d3',e.target, this);
    e.stopPropagation();
}

document.getElementsByClassName('d3')[0].onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
}