document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => {
                taskList.removeChild(li);
            };

            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = ''; // Clear input
        }
    };

    // Event listener for the add button
    addButton.addEventListener('click', addTask);

    // Allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
