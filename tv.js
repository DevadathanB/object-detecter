status = "";


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = 'Status Detecting Object';
}

function preload() {
    img = loadImage('tv.jpg');
}

function modelloaded() {
    console.log('Model Loaded');
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        object = results;
    }
}

function draw() {
    image(img, 0, 0, 380, 380);
    objectDetector.detect(img, gotResult);
    if (object.length > 0) {
        document.getElementById("status").innerHTML = 'Status Detected Object';
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :" + object.length;

    }
}

function back() {
    window.location = 'index.html';
}