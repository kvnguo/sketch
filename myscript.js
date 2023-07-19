const screen = document.querySelector(".container");
const selected = document.querySelectorAll(".pixel");

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

    item.addEventListener("mousedown", ()=> {
        item.classList.add("selected");
        
    }) 
    item.addEventListener("mousemove", ()=> {
        if(isMouseDown) {
            item.classList.add("selected");
        }
    }) 
}



function createCanvas(xPixels, yPixels) {
    for(let i = 0; i < yPixels; i++) {
        const columnId = "column-" + i;
        createPixel(screen, "column", columnId);
        const start = document.querySelector("." + columnId);
        for(let j = 0; j < xPixels; j++) {
            createPixel(start, "pixel");
        }
    }
}

createCanvas(64, 64); 

