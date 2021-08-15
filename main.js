Webcam.set({
    height: 250, 
    Width:250,
    image_format:'png',
    png_quality:125
})

cam=document.getElementById("camshot");

Webcam.attach(cam);

function shotsnap() {
    Webcam.snap(function(data_uri) {
        document.getElementById("Capdiv").innerHTML = '<img id="ok" src="'+data_uri+'">'
        })

}

console.log(ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dUVPQyQ5j/model.json', Loaded)

function Loaded() {
console.log("Loaded")
}

function capc() {
    img = document.getElementById("ok");
    classifier.classify(img, gotResult);
}


function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    else {
            console.log(result);
            document.getElementById("pred1").innerHTML = result[0].label;
            document.getElementById("pred2").innerHTML = result[1].label;

    }
    if (result[0].label == "Sad") {
        document.getElementById("emo1").innerHTML = "&#x1f61e;";
    }
    if  (result[0].label =="Happy") {
        document.getElementById("emo1").innerHTML = "&#128513;";
    }
    if  (result[0].label =="Angry") {
        document.getElementById("emo1").innerHTML = "&#128545;";
    }
    if (result[1].label == "Sad") {
        document.getElementById("emo2").innerHTML = "&#x1f61e;";
    }
    if  (result[1].label =="Happy") {
        document.getElementById("emo2").innerHTML = "&#128513;";
    }
    if  (result[1].label =="Angry") {
        document.getElementById("emo2").innerHTML = "&#128545;";
    }
}