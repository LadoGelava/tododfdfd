//Task List
let tasks=[
    {
        id: 1,
        title: 'Meeting with boss',
        checked: false
    },
    {
        id: 2,
        title: 'Deener with wife',
        checked: false
    },
    {
        id: 3,
        title: 'Clean pool',
        checked: true
    }
]


//Display Tasks on page
function getTasks(){
let outputUl = tasks.map((task)=>`<li class="taskItem">
${task.title} <input type="checkbox" class="checkbox">
 <button class="btn btn-danger btnDelete" onclick = 'onBtnDeleteClick()' >Delete</button>
 <input type="text" class="editTaskInput">
 <button class="btn btn-primary btnEdit">Edit</button>
</li>`).join('');

let taskList = document.getElementById('taskList');
taskList.innerHTML = outputUl;
}

getTasks();
//Add Task
let addTaskBtn = document.querySelector('.addTaskBtn');
addTaskBtn.addEventListener('click', onAddTaskClick);

function onAddTaskClick(e){
    e.preventDefault(e);
    let addTaskInput = document.querySelector('.addTaskInput');
    if(addTaskInput.value !== ''){
        let obj = {};
        obj["id"] = Date.now();
        obj["title"] = addTaskInput.value;
        obj["checked"] = false;
        tasks.push(obj);
        addTaskInput.value='';
        outputUl = tasks.map((task)=>`<li class="taskItem">
        ${task.title} <input type="checkbox" class="checkbox">
         <button class="btn btn-danger btnDelete" onclick = 'onBtnDeleteClick(this)'>Delete</button>
         <input type="text" class="editTaskInput">
         <button class="btn btn-primary btnEdit">Edit</button>
        </li>`).join('');
        
        taskList.innerHTML=outputUl;

        
    }else{
        alert("Give the task a name");
    }
}

//Delete Button
// let btnDelete = document.querySelectorAll('.btnDelete');
// btnDelete.forEach(element => {
//     element.addEventListener('click', onBtnDeleteClick)
// });

function onBtnDeleteClick(){
   this.addEventListener('click', function(e){
        tasks.filter((task) => {
            if (task.id === 1){
                alert('ome');
            }
        });
    });
}
