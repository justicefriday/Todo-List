const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', addTodo);

    // Listen for "Enter" key
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        addTodo();
      }
    });

    function addTodo() {
      const task = input.value.trim();
      if (task === '') return;

      const li = document.createElement('li');
      li.textContent = task;

      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        confirm('Are You Sure?')
        li.remove();
      });

      li.appendChild(delBtn);
      list.appendChild(li);
      input.value = '';
    }