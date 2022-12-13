const totalWorkers = document.querySelector("#TotalWorkers");
const totalTip = document.querySelector("#TotalTip");
const workerSection = document.querySelector(".workerSection");
const total = document.querySelector(".total");

let totalHours = 0;

totalWorkers.addEventListener('input', createWorkers);
totalTip.addEventListener('input', calculate);

totalWorkers.addEventListener('touchstart', createWorkers);
totalTip.addEventListener('touchstart', calculate);




function createWorkers(gotNumberWorkers){
    deleteWorkers();
    let numberWorkers = minMaxInput(gotNumberWorkers);
    for(let i = 0; i < numberWorkers; i++){
        const newContainer = document.createElement("div");
        newContainer.classList.add("tipContainer");
        workerSection.appendChild(newContainer);

            const newInput = document.createElement("input");
            newInput.type = "number"
            newInput.placeholder = "Worker Hours"
            newInput.classList.add("worker");
            newContainer.appendChild(newInput);

            const newDiv = document.createElement("div");
            newDiv.classList.add("workerTip");
            newContainer.appendChild(newDiv);
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
    workers.forEach(worker => worker.addEventListener('input', getHoursAndTip));
    
}

function getHoursAndTip(element){
    const workers = document.querySelectorAll(".worker");
    totalHours = 0;
    workers.forEach(worker => totalHours += worker.valueAsNumber);
    calculate();
}

function calculate(){
    let tipAmount = totalTip.valueAsNumber;
    let tipPerHour = tipAmount/totalHours;
    console.log(tipAmount/totalHours);
    const workers = document.querySelectorAll(".worker");
    const workerTip = document.querySelectorAll(".workerTip");

    for(let i = 0; i < workers.length; i++){
        let tip = workers[i].valueAsNumber * tipPerHour;
        if(!isNaN(tip)){
            workerTip[i].textContent = tip;
        }
    }

}
