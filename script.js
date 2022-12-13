const totalWorkers = document.querySelector("#TotalWorkers");
const totalTip = document.querySelector("#TotalTip");
const workerSection = document.querySelector(".workerSection");

let totalHours = 0;

totalWorkers.addEventListener('input', createWorkers);
totalTip.addEventListener('input', calculate);



function createWorkers(gotNumberWorkers){
    deleteWorkers();
    let numberWorkers = minMaxInput(gotNumberWorkers);
    for(let i = 0; i < numberWorkers; i++){
        const newDiv = document.createElement("input");
        newDiv.type = "number"
        newDiv.classList.add("worker");
        workerSection.appendChild(newDiv);
    }
    addEventWorkers();
}

function deleteWorkers(){
    while(workerSection.firstChild){
        workerSection.removeChild(workerSection.firstChild);
    }
}

function minMaxInput(inputNumber){
    let number = inputNumber.target.valueAsNumber;
    if(number > 10){
        number = 10;
    }
    else if(number < 0){
        number = 0;
    }
    inputNumber.textContent = number;
    return number;
}

function addEventWorkers(){
    const workers = document.querySelectorAll(".worker");
    workers.forEach(worker => worker.addEventListener('input', element => {
        totalHours += element.target.valueAsNumber
        console.log(totalHours)
    }));
    
}

function getHours(){
    let workers = document.querySelectorAll(".worker");
    workers.forEach(worker => console.log(worker.target.valueAsNumber));
}
