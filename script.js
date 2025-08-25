let prediction1 = "" ;
let prediction2 = "" ;
let classifier;

Webcan.set ({
    width: 350,
    heigth: 275,
    imageFormat: 'png'

});

Webcan.attach('#camera');

function takeSnapshot() {
    Webcan.snap(function (datauri)) {
        document.getElementById("result").innerHTML = `<img id="captureImage" src="${datauri}">`;
    }
}

console.log('ml5 version:', ml5.version);

