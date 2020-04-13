var clicks = 0;
function linkClick() {
    document.getElementsByClassName('leImage').value = ++clicks;
}

document.write('<a href="#" onclick="linkClick()">Click Me!</a>');