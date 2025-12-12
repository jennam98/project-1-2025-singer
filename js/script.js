


const pageURL = window.location.href;
const navLinks = document.querySelectorAll('nav > ul > li > a');
let linkURL;

navLinks.forEach((element) => {
    linkURL = element.href;
    if (linkURL === pageURL) {
        element.classList.add('current');
    };   
    
});


//Inspiration taken from: https://www.geeksforgeeks.org/javascript/star-rating-using-html-css-and-javascript/
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

function rating(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating: " + n + "/5";
}
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}