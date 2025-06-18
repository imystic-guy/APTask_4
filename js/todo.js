const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const addBtn = document.getElementById('add-task');

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.title = 'Click to remove task';
    li.onclick = () => removeTask(index);
    list.appendChild(li);
  });
}

function addTask() {
  const task = input.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    loadTasks();
  } else {
    alert('Please enter a task.');
  }
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

document.addEventListener('DOMContentLoaded', loadTasks);
