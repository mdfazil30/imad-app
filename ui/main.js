console.log('Loaded!');
var btn = document.getElementById('counterBtnId');
var counter = 0;
btn.onclick = function() {
    counter = counter + 1;
    var span = document.getElementById('counterValue');
    span.innerHTML = counter.toString();
};