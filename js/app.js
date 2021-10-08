let button = document.getElementById('form');



button.addEventListener('submit',function saveTask(event){
    
let titulo = document.getElementById('title').value;
let descripcion = document.getElementById('decription').value;
    const task = {
        title : titulo,
        description : descripcion
    };


    if (localStorage.getItem('tareas') === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tareas', JSON.stringify(tasks));
    }else{
        let tasks = JSON.parse(localStorage.getItem('tareas'))
        tasks.push(task);
        localStorage.setItem ('tareas', JSON.stringify(tasks));
    }
    getTasks();
    document.getElementById('form').reset();
    event.preventDefault();
})

function deleteTask(title, description){
    let listaTareas = JSON.parse(localStorage.getItem('tareas'));
    for (let i = 0; i < listaTareas.length; i++){
        if (listaTareas[i].title == title && listaTareas[i].description == description){
            listaTareas.splice(i , 1)
        }
    }
    localStorage.setItem('tareas', JSON.stringify(listaTareas));
    getTasks()
}

function getTasks(){
    let listaTareas = JSON.parse(localStorage.getItem('tareas'));
    let taskView = document.getElementById('tasks');
    taskView.innerHTML = '';

    for (let i = 0; i < listaTareas.length; i++){

        let title = listaTareas[i].title;
        let description = listaTareas[i].description;

        
        taskView.innerHTML += `<div class= "card mb-3">
            <div class= "card-body">
                <p>${title} - ${description}</p>
                <a class = "btn btn-danger" onclick="deleteTask('${title}', '${description}')">Delete</a>
            </div>
        </div>`
    }
}
getTasks()