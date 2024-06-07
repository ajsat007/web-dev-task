let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const priorityInput = document.getElementById('priorityInput');
    
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    const task = {
        id: Date.now(),
        text: taskText,
        priority: priorityInput.value,
        status: 'pending'
    };
    
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function editTask(id) {
    const newTaskText = prompt('Edit your task:');
    if (newTaskText) {
        tasks = tasks.map(task => task.id === id ? {...task, text: newTaskText} : task);
        renderTasks();
    }
}

function updateStatus(id, newStatus) {
    tasks = tasks.map(task => task.id === id ? {...task, status: newStatus} : task);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');
        
        const taskText = document.createElement('span');
        taskText.textContent = `${task.text} (${task.priority})`; // Fix template literal
        
        const statusSelect = document.createElement('select');
        statusSelect.innerHTML = `
            <option value="pending" ${task.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="processing" ${task.status === 'processing' ? 'selected' : ''}>Processing</option>
            <option value="completed" ${task.status === 'completed' ? 'selected' : ''}>Completed</option>
        `;
        statusSelect.addEventListener('change', (e) => updateStatus(task.id, e.target.value)); // Use addEventListener
        
        taskInfo.appendChild(taskText);
        taskInfo.appendChild(statusSelect);
        
        const actions = document.createElement('div');
        actions.classList.add('actions');
        
        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = '✏';
        editButton.onclick = () => editTask(task.id);
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '❌';
        deleteButton.onclick = () => deleteTask(task.id);
        
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(actions);
        
        taskList.appendChild(taskItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});
