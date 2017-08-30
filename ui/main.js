console.log('Loaded!');
var btn = document.getElementById('counterBtnId');
// var counter = 0;
btn.onclick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONe) {
            if(request.status === 200) {
                var counter = request.responseText;
                log.console(counter);
                var span = document.getElementById('counterValue');
                span.innerHTML = counter.toString();
            }
        }
    };
    // counter = counter + 1;
    request.open('GET', 'http://mdfazil30.imad.hasura-app.io/counter', true);
    request.send(null);
};