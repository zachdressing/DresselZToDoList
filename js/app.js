//3 Object Arrays that are populated/Populate via LocalStorage
//Buttons that allow you to edit the objects and change which array the object is in

//On start, LocalStorage to TaskList, Split Tasklist by object.priority, generate cards based on the lists, populate columns with cards
//On change priority, change priority of object then repopulate.
let addTskBtn = document.getElementById('addTskBtn');

let taskList =[];

const addTask = () => {
    let priorities = ["low", "med", "high"];
    let task;
    if (tskName.value == '') { alert('you have an incorrect object in this task') }
    else if (!priorities.includes(priority.value.toLowerCase())) { alert('you have an incorrect object in this task') }
    else {
        task = { taskName: tskName.value, taskDesc: tskDesc.value, dDate: dDate.value, status: stat.value, priority: priority.value };
        taskList.push(task)
        console.log(taskList);
        saveLS(task);
        getLS();
    }
}


const saveLS = (task) => {
    //let taskList = getLS();
    console.log(taskList);
    low.innerHTML = '';
    med.innerHTML = '';
    high.innerHTML = '';
    localStorage.setItem('tasks', JSON.stringify(taskList));
    //genList(taskList);
}

const getLS = () => {
    let lsData = localStorage.getItem('tasks');
    if (lsData == null) {
        return []
    } else {
        console.log(JSON.parse(lsData));
        return JSON.parse(lsData);
    }
}

const removeLS = (task, taskList) => {
    let namedIndex = taskList.indexOf(task);
    favorites.splice(namedIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

addTskBtn.addEventListener('click', () => { addTask() });

const genList = (array) => {
    array.map(task => {
        let div1 = document.createElement('div');
        div1.classList.add("max-w-sm h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5")
        
        let h5 = document.createElement('h5');
        h5.classList.add("mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white")
        h5.innerText = `${task.taskName}`;
        
        let p1 = document.createElement('p');
        p1.classList.add("mb-3 font-normal text-gray-700 dark:text-gray-400")
        p1.innerText = `${task.taskDesc}`;

        let p2 = document.createElement('p');
        p2.classList.add("mb-3 font-normal text-gray-700 dark:text-gray-400")
        p2.innerText = `${task.dDate}`;

        let p3 = document.createElement('p');
        p3.classList.add("mb-3 font-normal text-gray-700 dark:text-gray-400")
        p3.innerText = `${task.status}`;
        
        let btn1 = document.createElement('button');
        btn1.classList.add("text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800");
        btn1.innerText = "change Priority"
        btn1.setAttribute("id", "priorityDDownBtn")
        btn1.setAttribute("data-dropdown-toggle", "priorityDDown");

        let svg1 = document.createElement('svg');
        svg1.classList.add("w-2.5 h-2.5 ms-3");
        path1.setAttribute("aria-hidden", "true");
        path1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        path1.setAttribute("fill", "none");
        path1.setAttribute("viewBox", "0 0 10 6");

        let path1 = document.createElement('path');
        path1.setAttribute("stroke", "currentColor");
        path1.setAttribute("stroke-linecap", "round");
        path1.setAttribute("stroke-linejoin", "round");
        path1.setAttribute("stroke-width", "2");


        let div2 = document.createElement('div');
        div2.setAttribute("id", "priorityDDown");
        div2.classList.add("z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700");

        let ul1 = document.createElement('ul');
        ul1.setAttribute("aria-labelledby", "dropdownDefaultButton");
        ul1.classList.add("py-2 text-sm text-gray-700 dark:text-gray-200");

        let li1 = document.createElement('li');
        let a1 = document.createElement('a');
        let li2 = document.createElement('li');
        let a2 = document.createElement('a');
        let li3 = document.createElement('li');
        let a3 = document.createElement('a');
        let btn2 = document.createElement('button');
        


        
    })
}


//

/*
div-1<div class="max-w-sm h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
h5-1    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Example Task</h5>
p-1    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This is the description of the task and on on on </p>
button-1    <button id="priortyDDownBtn" data-dropdown-toggle="priorityDDown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Change Priority 
svg-1        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
path-1        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
    </button>

                        <!-- Dropdown menu -->
div-2   <div id="priorityDDown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
ul-1            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
li-1                <li>
a-1                    <a
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">to
                        Low</a>
                </li>
li-2                <li>
a-2                    <a
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">to
                        Medium</a>
                </li>
li-3                <li>
a-3                    <a
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">to
                        High</a>
                </li>
            </ul>
        </div>

button-2        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>

                    </div>
                    */
