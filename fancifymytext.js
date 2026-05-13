// Mkaes the text bigger
function makeBigger() {
    document.getElementById("text").style.fontSize = "24px";
}

// Makes the text fancy
function fancyShmancy() {
    // Get the text box
    const textBox = document.getElementById("text");
    
    // Make the text bold
    textBox.style.fontWeight = "bold";

    // Make the text blue
    textBox.style.color = "blue";

    // Make the text underlined
    textBox.style.textDecoration = "underline";

    // alert the user
    alert("Text has been fancicfied");
}

// Make the text boring
function boringBetty() {
    // Get the text box
    const textBox = document.getElementById("text");
    
    // Make the text normal
    textBox.style.fontWeight = "normal";

    // Make the text black
    textBox.style.color = "black";

    // Make the text underlined
    textBox.style.textDecoration = "none";
}


// Uppercase and add -Moo at the end of sentances
function moo() {
    // Get the text box
    const textBox = document.getElementById("text");

    // Extract the string
    let str = textBox.value;

    // uppcase the string
    str.toUpperCase();

    // split the string
    let parts = str.split(".");

    // join the parts together and add -Moo
    str = parts.join("-Moo.")

    textBox.value = str;
}