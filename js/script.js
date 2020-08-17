let rakahcounter = 1;
let boner = ['Morgonbönen', 'Middagsbönen', 'Eftermiddagsbönen', 'Solnedgångsbönen', 'Kvällsbönen'];
let pageCounter = 1;
let positionCounter = 1;

// add 1 on the filename and target iframe
function nextClick() {
    if (document.getElementById("prayertype").innerHTML === "Morgonbönen") {
        if (pageCounter < 13) {
            pageCounter++;
            changePage();
            changeSound();
        }
    }
    if (pageCounter === 7 || pageCounter === 14) {
        rakahcounter++;
        changeRakah();
    }
    if (pageCounter === 4 || pageCounter === 5 || pageCounter === 9 || pageCounter === 10 || pageCounter === 12) {
        positionCounter++;
        changePosition();
    }
    if (pageCounter === 7) {
        positionCounter -= 2;
        changePosition();
    }
}

// subtract 1 on the filename and target iframe
function backClick() {
    if (pageCounter > 1) {
        pageCounter--;
        changePage();
        changeSound();
    }
    if (pageCounter === 6 || pageCounter === 13) {
        rakahcounter--;
        changeRakah();
    } 
    if (pageCounter === 3 || pageCounter === 4 || pageCounter === 8 || pageCounter === 9 || pageCounter === 11) {
        positionCounter--;
        changePosition();
    } 
    if (pageCounter === 6) {
        positionCounter += 2;
        changePosition();
    }
}

function changePosition() {
    if (positionCounter === 1) {
        document.getElementById("position").innerHTML = "Stå upp";
    } else if (positionCounter === 2) {
        document.getElementById("position").innerHTML = "Buga";
    } else if (positionCounter === 3) {
        document.getElementById("position").innerHTML = "Buga mot marken";
    } else if (positionCounter === 4) {
        document.getElementById("position").innerHTML = "Sitt";
    }
}

function changeRakah() {
    if (rakahcounter === 1) {
        document.getElementById("rakahnumber").innerHTML = "1";
    } else if (rakahcounter === 2) {
        document.getElementById("rakahnumber").innerHTML = "2";
    } else if (rakahcounter === 3) {
        document.getElementById("rakahnumber").innerHTML = "3";
    } else if (rakahcounter === 4) {
        document.getElementById("rakahnumber").innerHTML = "4";
    }
}

// target iframe with the current number in the iframe
function swedishClick() {
    document.getElementById("myiframe").src = "sven" + pageCounter + ".htm";
}

// target iframe with the current number in the iframe
function transliterationClick() {
    document.getElementById("myiframe").src = "tran" + pageCounter + ".htm";
}

// target iframe with the current number in the iframe
function arabicClick() {
    document.getElementById("myiframe").src = "arab" + pageCounter + ".htm";
}

function changeSound() {
    document.getElementById("audioplayer").src = "sound/sound" + pageCounter + ".mp3";
    let audio = document.getElementById('audio');
    audio.load();
}

function changePage() {
    let iframeSource = document.getElementById("myiframe").src;
    if (iframeSource.charAt(iframeSource.length - 9) === "a") {
        document.getElementById("myiframe").src = "arab" + pageCounter + ".htm";
    } else if (iframeSource.charAt(iframeSource.length - 10) === "a") {
        document.getElementById("myiframe").src = "arab" + pageCounter + ".htm";
    } else if (iframeSource.charAt(iframeSource.length - 9) === "s") {
        document.getElementById("myiframe").src = "sven" + pageCounter + ".htm";
    } else if (iframeSource.charAt(iframeSource.length - 10) === "s") {
        document.getElementById("myiframe").src = "sven" + pageCounter + ".htm";
    } else if (iframeSource.charAt(iframeSource.length - 9) === "t") {
        document.getElementById("myiframe").src = "tran" + pageCounter + ".htm";
    } else if (iframeSource.charAt(iframeSource.length - 10) === "t") {
        document.getElementById("myiframe").src = "tran" + pageCounter + ".htm";
    } 
}