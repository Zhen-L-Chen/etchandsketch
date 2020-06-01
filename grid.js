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
        divInit.className = `divInit${i}`;
    } 
}

// initiate the Template
function initTemplate(square){
    gridiv.style.gridTemplateColumns = `repeat(${square}, 20px)`;
    gridiv.style.gridTemplateRows = `repeat(${square}, 20px)`;  
    initDiv(square**2);
    //hover effect
    gridiv.addEventListener("mouseover", function(e){
        if(e.target.className === "grid"){
            target = e.target;
        }
        else{
            e.target.style.backgroundColor = "purple";
        }
    })
};

// clear the etch 
function clear(){
    gridLength = gridiv.children.length;
    for(let i = 0; i < gridLength; i++){
        gridiv.children[i].style.backgroundColor = "blue";
    }
}

let btnClear = document.querySelector(".btnclear");
btnClear.addEventListener("click", clear);

let value = prompt("enter a number above 10");

function main(){
    initTemplate(value);
}

let btnPlay = document.querySelector(".btnplay");
btnPlay.addEventListener("click", main)




