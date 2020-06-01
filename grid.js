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

//list of div class
function classArray(square){
    let classArray = [];
    let squared = square ** 2;
    for(let i = 0; i < squared; i++){
        classArray.push(`divInit${i}`);
    }
    return classArray;
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

console.log(initTemplate(16));


