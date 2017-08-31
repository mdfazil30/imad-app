console.log('Loaded!');
var loginBtn = document.getElementById('loginBtn');
// var counter = 0;
loginBtn.onclick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('counterValue');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://mdfazil30.imad.hasura-app.io/counter', true);
    request.send(null);
};