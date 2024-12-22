const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const taskList = document.getElementById('taskList');

        // Add task function
        addTaskButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }

            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            taskInput.value = '';
        });

        // Press Enter to add task
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTaskButton.click();
            }
        });