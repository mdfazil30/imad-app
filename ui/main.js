console.log('Loaded!');
var btn = document.getElementById('counterBtnId');
// var counter = 0;
btn.onclick = function() {
    var request = new XMLHttpRequest();
    log.console("check1");
    request.onreadystatechange = function() {
        log.console("check2");
        if(request.readyState === XMLHttpRequest.DONe) {
            log.console("check3");
            if(request.status === 200) {
                log.console("check4");
                var counter = request.responseText;
                log.console(counter.toString());
                var span = document.getElementById('counterValue');
                span.innerHTML = counter.toString();
            }
        }
    };
    // counter = counter + 1;
    request.open('GET', 'http://mdfazil30.imad.hasura-app.io/counter', true);
    request.send(null);
};