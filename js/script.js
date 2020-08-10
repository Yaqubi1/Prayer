let rakat = [1, 2, 3, 4];
let boner = ['Morgonbönen', 'Middagsbönen', 'Eftermiddagsbönen', 'Solnedgångsbönen', 'Kvällsbönen'];
let swedishCounter = 1;
let arabicCounter = 1;

// add 1 on the filename and target iframe
function nextClick() {
    swedishCounter++;
    arabicCounter++;
    changeToCurrentPage();
}

// subtract 1 on the filename and target iframe
function backClick() {
    swedishCounter--;
    arabicCounter--;
    changeToCurrentPage();
}

// target iframe with the current number in the iframe
function swedishClick() {
    document.getElementById("myiframe").src = "sven" + swedishCounter + ".htm";
}

// // target iframe with the current number in the iframe
// function transliterationClick() {
    
// }

// target iframe with the current number in the iframe
function arabicClick() {
    document.getElementById("myiframe").src = "arab" + arabicCounter + ".htm";
}

function changeToCurrentPage() {
    let determineSource = document.getElementById("myiframe").src;
    if (determineSource.charAt(determineSource.length - 9) === "a") {
        document.getElementById("myiframe").src = "arab" + swedishCounter + ".htm";
    } else if (determineSource.charAt(determineSource.length - 9) === "s") {
        document.getElementById("myiframe").src = "sven" + swedishCounter + ".htm";
    } else if (determineSource.charAt(determineSource.length - 9) === "t") {
        document.getElementById("myiframe").src = "tran" + swedishCounter + ".htm";
    }
}