//3 Object Arrays that are populated/Populate via LocalStorage
//Buttons that allow you to edit the objects and change which array the object is in

//On start, LocalStorage to TaskList, Split Tasklist by object.priority, generate cards based on the lists, populate columns with cards
//On change priority, change priority of object then repopulate.
let addTskBtn = document.getElementById('addTskBtn');

let taskList = [];

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
        genList(taskList);
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
        let div1Classes = ['max-w-sm', 'h-fit', 'p-6', 'bg-gray-800', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'my-5'];
        div1Classes.map(clas => {
            div1.classList.add(`${clas}`);
        })

        let h5 = document.createElement('h5');
        let h5Classes = ['mb-2', 'text-2xl', 'font-bold', 'tracking-tight', 'text-white']
        h5Classes.map(clas => {
            h5.classList.add(`${clas}`);
        })
        h5.innerText = `${task.taskName}`;

        let p1 = document.createElement('p');
        let p1Classes = ['mb-3', 'font-normal', 'text-gray-400']
        p1Classes.map(clas => {
            p1.classList.add(`${clas}`);
        })
        p1.innerText = `${task.taskDesc}`;

        let p2 = document.createElement('p');
        let p2Classes = ['mb-3', 'font-normal', 'text-gray-400']
        p2Classes.map(clas => {
            p2.classList.add(`${clas}`);
        })
        p2.innerText = `${task.dDate}`;

        let p3 = document.createElement('p');
        let p3Classes = ['mb-3', 'font-normal', 'text-gray-400']
        p3Classes.map(clas => {
            p3.classList.add(`${clas}`);
        })
        p3.innerText = `${task.status}`;

        let btn1 = document.createElement('button');
        let btn1Classes = ['text-white', 'bg-blue-700', 'hover:bg-blue-800', 'focus:ring-4', 'focus:outline-none', 'focus:ring-blue-300', 'font-medium', 'rounded-lg', 'text-sm', 'px-5', 'py-2.5', 'text-center', 'inline-flex', 'items-center']
        btn1Classes.map(clas => {
            btn1.classList.add(`${clas}`);
        })
        btn1.innerText = "Change Priority"
        btn1.setAttribute("id", "priorityDDownBtn")
        btn1.setAttribute("data-dropdown-toggle", "priorityDDown");

        let svg1 = document.createElement('svg');
        let svg1Classes = ['w-2.5', 'h-2.5', 'ms-3'];
        svg1Classes.map(clas => {
            svg1.classList.add(`${clas}`);
        })
        svg1.setAttribute("aria-hidden", "true");
        svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg1.setAttribute("fill", "none");
        svg1.setAttribute("viewBox", "0 0 10 6");

        let path1 = document.createElement('path');
        path1.setAttribute("stroke", "currentColor");
        path1.setAttribute("stroke-linecap", "round");
        path1.setAttribute("stroke-linejoin", "round");
        path1.setAttribute("stroke-width", "2");

        let div2 = document.createElement('div');
        div2.setAttribute("id", "priorityDDown");
        let div2Classes = ['z-10', 'hidden', 'bg-gray-800', 'divide-y', 'divide-gray-100', 'rounded-lg', 'shadow', 'w-44'];
        div2Classes.map(clas => {
            div2.classList.add(`${clas}`);
        })

        let ul1 = document.createElement('ul');
        ul1.setAttribute("aria-labelledby", "dropdownDefaultButton");
        let ulClasses = ['py-2', 'text-sm', 'text-gray-400']
        ulClasses.map(clas =>{
            ul1.classList.add(`${clas}`);
        })

        let li1 = document.createElement('li');

        let a1 = document.createElement('a');
        let a1Classes = ['block', 'px-4', 'py-2', 'hover:bg-gray-100'];
        a1Classes.map(clas => {
            a1.classList.add(`${clas}`);
        })
        a1.innerText = "to Low";

        let li2 = document.createElement('li');

        let a2 = document.createElement('a');
        let a2Classes = ['block', 'px-4', 'py-2', 'hover:bg-gray-100'];
        a2Classes.map(clas => {
            a2.classList.add(`${clas}`);
        })        
        a2.innerText = "to Med";

        let li3 = document.createElement('li');

        let a3 = document.createElement('a');
        let a3Classes = ['block', 'px-4', 'py-2', 'hover:bg-gray-100'];
        a3Classes.map(clas => {
            a3.classList.add(`${clas}`);
        })        
        a3.innerText = "to High";

        let btn2 = document.createElement('button');
        btn2.setAttribute("type", "button");
        btn2.setAttribute("id", "removeBtn");
        let btn2Classes = ['focus:outline-none', 'text-white', 'bg-red-700', 'hover:bg-red-800', 'focus:ring-4', 'focus:ring-red-300', 'font-medium', 'rounded-lg', 'text-sm', 'px-5', 'py-2.5', 'me-2', 'mb-2'];
        btn2Classes.map(clas => {
            btn2.classList.add(`${clas}`);
        })
        btn2.innerText= "Remove";

        //Dropdown Items
        li3.appendChild(a3);
        li2.appendChild(a2);
        li1.appendChild(a1);
        ul1.appendChild(li1);
        ul1.appendChild(li2);
        ul1.appendChild(li3);
        div2.appendChild(ul1);

        //Dropdown Change Priority Button
        svg1.appendChild(path1);
        btn1.appendChild(svg1);

        //add all to main div
        div1.appendChild(h5);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        div1.appendChild(btn1);
        div1.appendChild(div2);
        div1.appendChild(btn2);
        //Check if Low/Med/High and then append there
        if (task.priority.toLowerCase() == "low") {
            low.appendChild(div1);
        }
        else if (task.priority.toLowerCase() == "med") {
            med.appendChild(div1);
        }
        else {
            high.appendChild(div1)
        }
    })
}