console.log('Loaded!');
var btn = document.getElementById('counterBtnId');
var counter;
btn.onclick = function() {
    counter = counter + 1;
    var span = document.getElementById('counterValue');
    span.innerHTML = counter.toString();
};