document.getElementsByTagName('button')[0].onclick = function () {
    console.log('clicked');
}

var worker = new Worker('worker.js');

worker.onmessage = function (e) {
    console.log(e.data);    
}

var chatWorker = new Worker('chatWorker.js');

document.getElementById('send').onclick = function () {
    var msg = document.getElementById('msg').value;
    chatWorker.postMessage(msg);
}

chatWorker.onmessage = function (e) {
    document.getElementById('chatroom').innerHTML += e.data;
}