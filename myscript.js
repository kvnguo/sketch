const screen = document.querySelector(".container");
const clearButton = document.getElementById("clearBtn");
const eraserButton = document.getElementById("eraserBtn");
let toggleErase = false; 

function createCanvas(pixels, screenSize) {
    const pixelSize = screenSize / pixels; 
    screen.style.gridTemplateColumns = `repeat(${pixels}, ${pixelSize}px)`;
    screen.style.gridTemplateRows = `repeat(${pixels}, ${pixelSize}px)`;

    for(let i = 0; i < pixels * pixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel"); 
        screen.appendChild(pixel); 
    }
}

function clearCanvas() {
    clearButton.addEventListener("click", ()=> {
        const drawn = document.querySelectorAll(".selected");
        drawn.forEach(e => {
            e.classList.remove("selected");
        });
    });
}

function clickErase() {
    eraserButton.addEventListener("click", ()=> {
        if (toggleErase) {
            toggleErase = false;
            eraserButton.style.backgroundColor = "white"; 
            eraserButton.style.color = "black";
        }
        else {
            toggleErase = true; 
            eraserButton.style.backgroundColor = "dimgray"; 
            eraserButton.style.color = "white";
        }
    });
}

function pixelFunction() {
    const selected = document.querySelectorAll(".pixel"); 
    let isMouseDown = false; 
    selected.forEach(e => {
        e.addEventListener("click", () => {
            if(toggleErase) {
                e.classList.remove("selected");
            }
            else {
                e.classList.add("selected");
            }
        });

        e.addEventListener("mousemove", () => {
            document.addEventListener("mousedown", () => {
                isMouseDown = true;
            });
        
            document.addEventListener("mouseup", () => {
                isMouseDown = false;
            });

            if (isMouseDown) {
                if(toggleErase) {
                    e.classList.remove("selected");
                }
                else {
                e.classList.add("selected");
                }
            }
        });
    });
}

createCanvas(128, 640); 
clearCanvas(); 
clickErase(); 
pixelFunction();
