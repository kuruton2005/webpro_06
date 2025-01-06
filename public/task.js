document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="mark">完了</button>
            <button class="delete">削除</button>
        `;

        document.getElementById('taskList').appendChild(li);

        // 完了ボタン
        const markButton = li.querySelector('.mark');
        markButton.addEventListener('click', function () {
            const taskText = li.querySelector('.task-text');
            taskText.classList.toggle('completed');
        });

        // 削除ボタン
        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        taskInput.value = ''; // 入力フィールドをクリア
    } else {
        alert('タスクを入力してください。');
    }
});
