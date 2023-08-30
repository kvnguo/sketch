const screen = document.querySelector(".container");
const clearButton = document.getElementById("clearBtn");
const eraserButton = document.getElementById("eraserBtn");
const slider = document.querySelector(".slider"); 
const sliderValue = document.querySelector(".slidervalue"); 
const colorPicker = document.querySelector(".color");
const hoverElement = document.querySelectorAll(".hover");
let toggleErase = false; 

function hoverFunction() {
    hoverElement.forEach(e => {
        e.addEventListener("mouseover", ()=> {
            e.classList.add("hovered");
        });

        e.addEventListener("mouseout", ()=> {
            e.classList.remove("hovered");
        });
    });
}

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
        const drawn = document.querySelectorAll(".pixel");
        drawn.forEach(e => {
            e.style.backgroundColor = "";
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

function getSliderValue() {
    switch (slider.value) {
        case "0":
            return 640; 

        case "10":
            return 160;

        case "20":
            return 40;
        case "30":
            return 20;

        case "40":
            return 10; 

        case "50":
            return 5;
    } 
}

function getPixelNumber(pixelSize) {
    switch (pixelSize) {
        case 640:
            return 1; 

        case 160:
            return 4; 

        case 40:
            return 16;

        case 20:
            return 32; 

        case 10: 
            return 64; 
            
        case 5: 
            return 128; 
    }
}

function changePixelSize(pixelSize)  {
    const pixel = document.querySelectorAll(".pixel"); 
    pixel.forEach(e => {
        e.style.width = `${pixelSize}px`;
        e.style.height = `${pixelSize}px`; 
    });
}

function changeScreenSize() {
    slider.addEventListener("input", ()=> {
        const pixelSize = getSliderValue();
        const pixelNumber = getPixelNumber(pixelSize); 
        screen.textContent = ""; 
        createCanvas(pixelNumber, 640);  
        changePixelSize(pixelSize);
        pixelFunction();
        sliderValue.textContent = `${pixelNumber} x ${pixelNumber}`;
    })
}

function pixelFunction() {
    const selected = document.querySelectorAll(".pixel"); 
    let isMouseDown = false; 
    selected.forEach(e => {
        e.addEventListener("click", () => {
            if(toggleErase) {
                e.style.backgroundColor = "";
            }
            else {
                e.style.backgroundColor = colorPicker.value;
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
                    e.style.backgroundColor = "";
                }
                else {
                    e.style.backgroundColor = colorPicker.value;
                }
            }
        });
    });
}


createCanvas(32, 640); 
clearCanvas(); 
clickErase(); 
pixelFunction();
changeScreenSize(); 
hoverFunction();




