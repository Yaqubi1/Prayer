let rakat = [1, 2, 3, 4];
let boner = ['Morgonbönen', 'Middagsbönen', 'Eftermiddagsbönen', 'Solnedgångsbönen', 'Kvällsbönen'];
let pageCounter = 1;

// add 1 on the filename and target iframe
function nextClick() {
    if (document.getElementById("prayertype").innerHTML === "Morgonbönen") {
        if (pageCounter < 13) {
            pageCounter++;
            changePage();
            changeSound();
        }
    }
    
}

// subtract 1 on the filename and target iframe
function backClick() {
    if (pageCounter > 1) {
        pageCounter--;
        changePage();
        changeSound();
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