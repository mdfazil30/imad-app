console.log('Loaded!');
var btn = document.getElementById('counterBtnId');
// var counter = 0;
btn.onclick = function() {
    var request = new XMLHttpRequest();
    console.log("check1");
    request.onreadystatechange = function() {
        console.log("check2");
        if(request.readyState === XMLHttpRequest.DONE) {
            console.log("check3");
            if(request.status === 200) {
                console.log("check4");
                var counter = request.responseText;
                console.log(counter.toString());
                var span = document.getElementById('counterValue');
                span.innerHTML = counter.toString();
            }
        }
    };
    // counter = counter + 1;
    request.open('GET', 'http://mdfazil30.imad.hasura-app.io/counter', true);
    request.send(null);
};