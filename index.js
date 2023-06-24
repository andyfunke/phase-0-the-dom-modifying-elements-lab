// Write your code here!
const main = document.getElementById("main");
main.remove();

// 1) has a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Andy is the champion";
document.body.append(newHeader);

// 1) the 'newHeader' variable that points to the <h1> node has an id of 'victory'

// AssertionError: Make sure your <h1> with id 'victory' includes the text "is the champion" 
// inside it: expected '' to include 'is the champion'