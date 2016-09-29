function returnAfterLongTime() {
    var now = new Date();
    while(new Date() - now < 5000)
        ;
    return 'something you waited for';
}
var res = returnAfterLongTime();
this.postMessage(res);