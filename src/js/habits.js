document.addEventListener('DOMContentLoaded', () => {
    const habitInput = document.getElementById('habit-input');
    const addHabitBtn = document.getElementById('add-habit');
    const habitList = document.getElementById('habit-list');

    if (!store.habits) store.habits = [];

    function updateOverview() {
        const tasksCount = store.todos ? store.todos.length : 0;
        const habitsCount = store.habits.length;
        const budgetTotal = store.budget ? store.budget.reduce((sum, item) => sum + (item.type === 'income' ? item.amount : -item.amount), 0) : 0;
        
        document.getElementById('overview-tasks').textContent = tasksCount;
        document.getElementById('overview-habits').textContent = habitsCount;
        document.getElementById('overview-budget').textContent = budgetTotal.toFixed(2);

        if (window.saveStore) window.saveStore();
    }

    function resetHabitsIfNewDay() {
        const today = new Date().toISOString().slice(0, 10);
        store.habits.forEach(habit => {
            if (habit.lastUpdated !== today) {
                habit.doneToday = false;
                habit.lastUpdated = today;
            }
        });
    }

    function renderHabits() {
        resetHabitsIfNewDay();

        habitList.innerHTML = '';

        store.habits.forEach((habit, index) => {
            const li = document.createElement('li');
            li.className = 'habit-item';
            if (habit.doneToday) li.classList.add('done');

            const span = document.createElement('span');
            span.textContent = habit.name;
            span.className = 'title';

            const btnContainer = document.createElement('div');
            btnContainer.style.display = 'flex';
            btnContainer.style.gap = '5px';

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'small secondary';
            editBtn.onclick = () => {
                const newName = prompt('Edit habit', habit.name);
                if (newName) habit.name = newName.trim();
                renderHabits();
            };

            const doneBtn = document.createElement('button');
            doneBtn.textContent = habit.doneToday ? 'Undo' : 'Done';
            doneBtn.className = 'small secondary';
            doneBtn.onclick = () => {
                habit.doneToday = !habit.doneToday;
                habit.lastUpdated = new Date().toISOString().slice(0, 10);
                renderHabits();
            };

            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.className = 'small';
            delBtn.onclick = () => {
                store.habits.splice(index, 1);
                renderHabits();
            };

            btnContainer.appendChild(editBtn);
            btnContainer.appendChild(doneBtn);
            btnContainer.appendChild(delBtn);
            li.appendChild(span);
            li.appendChild(btnContainer);
            habitList.appendChild(li);
        });

        updateOverview();
    }

    addHabitBtn.onclick = () => {
        const name = habitInput.value.trim();
        if (name !== '') {
            const today = new Date().toISOString().slice(0, 10);
            store.habits.push({ name, doneToday: false, lastUpdated: today });
            habitInput.value = '';
            renderHabits();
        }
    };

    renderHabits();
});
