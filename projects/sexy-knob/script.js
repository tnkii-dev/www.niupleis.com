function exampleKnob() {
    var exampleKnob = document.getElementById('exampleKnob');
    var intKnob = document.getElementById('intKnob');

    exampleKnob.addEventListener('drag', function(event) {
      intKnob.textContent = event.detail;
    });
}

function maxKnob() {
    var maxKnob = document.getElementById('maxTypeKnob');
    var max = document.getElementById('maxKnob');

    maxKnob.addEventListener('drag', function(event) {
      max.textContent = event.detail;
    });
}

function minKnob() {
    var minKnob = document.getElementById('minTypeKnob');
    var min = document.getElementById('minKnob');

    minKnob.addEventListener('drag', function(event) {
      min.textContent = event.detail;
    });
}

function limKnob() {
    var limKnob = document.getElementById('limTypeKnob');
    var lim = document.getElementById('limKnob');

    limKnob.addEventListener('drag', function(event) {
      lim.textContent = event.detail;
    });
}

function init1() {
    var init1Knob = document.getElementById('init1Knob');
    var init1 = document.getElementById('init1');

    init1Knob.addEventListener('drag', function(event) {
      init1.textContent = event.detail;
    });
}

function init2() {
    var init2Knob = document.getElementById('init2Knob');
    var init2 = document.getElementById('init2');

    init2Knob.addEventListener('drag', function(event) {
      init2.textContent = event.detail;
    });
}

function init3() {
    var init3Knob = document.getElementById('init3Knob');
    var init3 = document.getElementById('init3');

    init3Knob.addEventListener('drag', function(event) {
      init3.textContent = event.detail;
    });
}