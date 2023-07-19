const screen = document.querySelector(".container");

function createPixel(append, ...args) { 
    const pixel = document.createElement("div");
    for(let i = 0; i < args.length; i++) {
         pixel.classList.add(args[i]); 
    }
    append.appendChild(pixel); 
}

function createCanvas(pixels) {
    for(let i = 0; i < pixels; i++) {
        const columnId = "column-" + i;
        createPixel(screen, "column", columnId);
        const start = document.querySelector("." + columnId);
        for(let j = 0; j < pixels; j++) {
            createPixel(start, "pixel");
        }
    }
}



createCanvas(64); 