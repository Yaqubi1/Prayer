let rakat = [1, 2, 3, 4];
let boner = ['Morgonbönen', 'Middagsbönen', 'Eftermiddagsbönen', 'Solnedgångsbönen', 'Kvällsbönen'];
let swedishCounter = 1;
let arabicCounter = 1;

// add 1 on the filename and target iframe
function nextClick() {
    swedishCounter++;
    arabicCounter++;
}

// subtract 1 on the filename and target iframe
function backClick() {
    swedishCounter--;
    arabicCounter--;
}

// target iframe with the current number in the iframe
function swedishClick() {
    document.getElementById("myiframe").src = "svenska" + swedishCounter + ".htm";
}

// // target iframe with the current number in the iframe
// function transliterationClick() {
    
// }

// target iframe with the current number in the iframe
function arabicClick() {
    document.getElementById("myiframe").src = "arabiska" + arabicCounter + ".htm";
}