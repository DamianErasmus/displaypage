//Event listener click
const left_btn = document.getElementById("scroll_left");
const right_btn = document.getElementById("scroll_right");

//Left Side
const tshirtImages = document.querySelectorAll(".tshirts .tshirt");

let currTshirtCount = 0;
let prevTshirtCount = (tshirtImages.length) - 1;
let nextTshirtCount = 1;


tshirtImages[prevTshirtCount].style.transform = "translate(-100%)";
tshirtImages[nextTshirtCount].style.transform = "translate(100%)";

function nextTshirt() {
    setTimeout(function(){
        tshirtImages[prevTshirtCount].style.opacity = 0;
        tshirtImages[nextTshirtCount].style.opacity = 1;
        tshirtImages[currTshirtCount].style.transform = "translateX(-100%)";
        tshirtImages[nextTshirtCount].style.transform = "translateX(0)";
        
        tshirtImages[prevTshirtCount].style.transform = "translateX(100%)";

        prevTshirtCount = currTshirtCount;
        currTshirtCount = nextTshirtCount;
        nextTshirtCount = (nextTshirtCount+1) % tshirtImages.length;
        tshirtImages[prevTshirtCount].style.transform = "translateX(-100%)";
        tshirtImages[nextTshirtCount].style.transform = "translateX(100%)";
    },500);
}


function prevTshirt() {
    setTimeout(function(){
        tshirtImages[nextTshirtCount].style.opacity = 0;
        tshirtImages[prevTshirtCount].style.opacity = 1;
        tshirtImages[currTshirtCount].style.transform = "translateX(100%)";
        tshirtImages[prevTshirtCount].style.transform = "translateX(0)";
        tshirtImages[prevTshirtCount].style.opacity = 1;
        tshirtImages[nextTshirtCount].style.transform = "translateX(-100%)";

        
        nextTshirtCount = currTshirtCount;
        currTshirtCount = prevTshirtCount;

        if (prevTshirtCount != 0) {
            prevTshirtCount = (prevTshirtCount-1);
        } else {
            prevTshirtCount = (tshirtImages.length)-1;
        }
        tshirtImages[prevTshirtCount].style.transform = "translateX(-100%)";
        tshirtImages[nextTshirtCount].style.transform = "translateX(100%)";
    },500);        
}





























//Right Side
const frontArt = document.querySelectorAll(".front_art");
const backArt = document.querySelectorAll(".back_art");

let currArtCount = 0;
let prevArtCount = (frontArt.length)-1;
let nextArtCount = 1;


function shutterArtForward () {
    frontArt[currArtCount].style.width = "0%";
    backArt[currArtCount].style.width = "0%";

    right_btn.disabled = true;

    setTimeout(function(){
        frontArt[nextArtCount].style.width = "100%"
        backArt[nextArtCount].style.width = "100%"
        prevArtCount = currArtCount,
        currArtCount = nextArtCount,
        nextArtCount = (nextArtCount + 1) % frontArt.length
    }, 500);
    setTimeout(function(){
        right_btn.disabled = false; 
    }, 1000);   
}

function shutterArtBack () {
    frontArt[currArtCount].style.width = "0%";
    backArt[currArtCount].style.width = "0%";

    left_btn.disabled = true;
    
    if (prevArtCount!=0){
        setTimeout(function(){
            frontArt[prevArtCount].style.width = "100%"
            backArt[prevArtCount].style.width = "100%"
            nextArtCount = currArtCount,
            currArtCount = prevArtCount,
            prevArtCount = prevArtCount-1
        }, 500);
    } else {
        setTimeout(function(){
            frontArt[prevArtCount].style.width = "100%"
            backArt[prevArtCount].style.width = "100%"
            nextArtCount = currArtCount,
            currArtCount = prevArtCount,
            prevArtCount = frontArt.length-1
        }, 500);
    }
    setTimeout(function(){
        left_btn.disabled = false; 
    }, 1000);
}



left_btn.addEventListener("click", prevTshirt);
left_btn.addEventListener("click", shutterArtBack);
right_btn.addEventListener("click", nextTshirt);
right_btn.addEventListener("click", shutterArtForward);