// Dancing Cat

// Create a variable to store a reference to the img DOM Node
let img = document.querySelector("img");

// Change the style of the img to have a "left" position of "0px", so that it starts at the left hand side of the screen
let left = 0
img.style.left = left + "px";
// Create a function called catWalk that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// Hint: setTimeout or setInterval might come in handy here!

function catWalk() {
    left += 10;
    img.style.left = left + "px";
    if (left < (window.innerWidth - 300)){
        setTimeout(catWalk, 50);
    }
}

// Bonuses
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). They should keep walking from left to right across the screen, forever and ever.

function catLoop() {
    left += 10;
    img.style.left = left + "px";
    if (left < (window.innerWidth)){
        setTimeout(catWalk, 50);
    } else {
        left = -300;
        catWalk();
    }
}

// Bonus #2: When the cat reaches the right-hand side of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. If you want to make it actually look like it is walking backwards - try setting the transform property to scaleX(-1)

let backwards = false;
function catWalkBackAndForth() {
    img.style.left = left + "px";
    if (!backwards){
        left += 10;
        if (left < (window.innerWidth - 300)){
            setTimeout(catWalk, 50);
        } else {
            backwards = true;
            catWalk();
        } 
    } else {
        left -= 10;
        if (left > 0){
            setTimeout(catWalk, 50);
        } else {
            backwards = false;
            catWalk();
        }
    }
}

// Bonus #3: When the cat reaches the middle of the screen, replace the img's src with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img's src with the original image and have it continue the walk.

let dance = true;
function catDanceLoop() {
    left += 10;
    if (dance === true && left > (window.innerWidth /2) - 200) {
        img.src = "https://media.giphy.com/media/J4li4awWEbGStTIeOf/giphy.gif";
        setTimeout(danceCat, 10000);
    } else{
        img.style.left = left + "px";
        if (left < (window.innerWidth)){
            setTimeout(catWalk, 50);
        } else {
          dance = true;
          left = -300;
           catWalk();
        }
    }
    
}

function danceCat() {
    dance = false;
    img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    catWalk();
}

catDanceLoop();