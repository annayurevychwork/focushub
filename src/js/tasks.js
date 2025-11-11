document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todo-input');
  const addTodoBtn = document.getElementById('add-todo');
  const todoList = document.getElementById('todo-list');

  if (!store.todos) store.todos = [];

  function updateOverview() {
    if (window.updateOverview) window.updateOverview();
  }

  function renderTodos() {
    todoList.innerHTML = '';
    store.todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = 'task-item';
      if (todo.done) li.classList.add('done');

      const taskText = document.createElement('div');
      taskText.className = 'task-text';
      const title = document.createElement('span');
      title.textContent = todo.text;
      title.className = 'task-title title';
      taskText.appendChild(title);

      if (todo.desc) {
        const desc = document.createElement('span');
        desc.textContent = todo.desc;
        desc.className = 'task-desc';
        taskText.appendChild(desc);
      }

      const btnContainer = document.createElement('div');
      btnContainer.style.display = 'flex';
      btnContainer.style.gap = '4px';
      btnContainer.style.marginLeft = 'auto';

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.className = 'small secondary';
      editBtn.onclick = () => {
        const newText = prompt('Edit task title', todo.text);
        if (newText) todo.text = newText.trim();
        const newDesc = prompt('Edit description', todo.desc || '');
        todo.desc = newDesc ? newDesc.trim() : '';
        renderTodos();
        updateOverview();
      };

      const doneBtn = document.createElement('button');
      doneBtn.textContent = todo.done ? 'Undo' : 'Done';
      doneBtn.className = 'small secondary';
      doneBtn.onclick = () => {
        todo.done = !todo.done;
        renderTodos();
        updateOverview();
      };

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.className = 'small';
      delBtn.onclick = () => {
        store.todos.splice(index, 1);
        renderTodos();
        updateOverview();
      };

      btnContainer.appendChild(editBtn);
      btnContainer.appendChild(doneBtn);
      btnContainer.appendChild(delBtn);
      li.appendChild(taskText);
      li.appendChild(btnContainer);
      todoList.appendChild(li);
    });
  }

  addTodoBtn.onclick = () => {
    const text = todoInput.value.trim();
    if (text !== '') {
      store.todos.push({ text, desc:'', done: false });
      todoInput.value = '';
      document.getElementById('todo-desc').value = '';
      renderTodos();
      updateOverview();
    }
  };

  renderTodos();
  updateOverview();
});
