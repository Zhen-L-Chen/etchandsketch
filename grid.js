// select the class containing the grid
const gridiv = document.querySelector(".grid");

// single div value
function initDiv(num){
    for(let i = 0; i < num; i++){
        const divInit = document.createElement("div");
        divInit.style.backgroundColor = "blue";
        divInit.style.height = 20;
        divInit.style.width = 20;
        divInit.style.border = "thin dotted black";
        gridiv.appendChild(divInit);
    } 
}

// initiate the Template

function initTemplate(square){
    gridiv.style.gridTemplateColumns = `repeat(${square}, 20px)`;
    gridiv.style.gridTemplateRows = `repeat(${square}, 20px)`;  
    initDiv(square**2);
}

console.log(initTemplate(16));


