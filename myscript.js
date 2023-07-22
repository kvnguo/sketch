const screen = document.querySelector(".container");
const selected = document.querySelectorAll(".pixel");
const clearButton = document.getElementById("clearBtn");

function createPixel(append, ...args) { 
    const pixel = document.createElement("div");
    for(let i = 0; i < args.length; i++) {
         pixel.classList.add(args[i]); 
    }
    append.appendChild(pixel); 
    selectPixel(pixel); 
    
}

function selectPixel(item) {
    let isMouseDown = false;

    document.addEventListener("mousedown", () => {
        isMouseDown = true;
    });

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    item.addEventListener("mousedown", () => {
        item.classList.add("selected");
        
    }) 
    item.addEventListener("mousemove", () => {
        if(isMouseDown) {
            item.classList.add("selected");
        }
    }) 
}

function clearCanvas() {
    clearButton.addEventListener("click", ()=> {
        const drawn = document.querySelectorAll(".selected");
        drawn.forEach(e => {
            e.classList.remove("selected");
        })
    })
}

function createCanvas(pixels, screenSize) {
    const pixelSize = screenSize / pixels; 
    screen.style.gridTemplateColumns = `repeat(${pixels}, ${pixelSize}px)`;
    screen.style.gridTemplateRows = `repeat(${pixels}, ${pixelSize}px)`;

    for(let i = 0; i < pixels * pixels; i++) {
        createPixel(screen, "pixel");
    }
}

createCanvas(64, 640); 
clearCanvas(); 

