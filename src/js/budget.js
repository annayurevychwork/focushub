document.addEventListener('DOMContentLoaded', () => {
    const budgetName = document.getElementById('budget-name');
    const budgetAmount = document.getElementById('budget-amount');
    const budgetType = document.getElementById('budget-type');
    const addBudgetBtn = document.getElementById('add-budget');
    const budgetList = document.getElementById('budget-list');

    if (!store.budget) store.budget = [];

    function updateOverview() {
        const tasksCount = store.todos ? store.todos.length : 0;
        const habitsCount = store.habits ? store.habits.length : 0;
        const budgetTotal = store.budget.reduce(
            (sum, item) => sum + (item.type === 'income' ? item.amount : -item.amount),
            0
        );
        document.getElementById('overview-tasks').textContent = tasksCount;
        document.getElementById('overview-habits').textContent = habitsCount;
        document.getElementById('overview-budget').textContent = budgetTotal.toFixed(2); 
        if (window.saveStore) window.saveStore();
    }

    function renderBudget() {
        budgetList.innerHTML = '';
        let total = 0;

        store.budget.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = `transaction-item ${item.type}`;
            const info = document.createElement('span');
            info.textContent = `${item.name} - ${item.type === 'income' ? '+' : '-'}${item.amount.toFixed(2)}`;
            const btnContainer = document.createElement('div');
            btnContainer.style.display = 'flex';
            btnContainer.style.gap = '5px';

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'small secondary';
            editBtn.onclick = () => {
                const newName = prompt('Edit name', item.name);
                const newAmount = prompt('Edit amount', item.amount);
                if (newName) item.name = newName.trim();
                if (newAmount) item.amount = Number(newAmount);
                renderBudget();
            };

            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.className = 'small';
            delBtn.onclick = () => {
                store.budget.splice(index, 1);
                renderBudget();
            };

            btnContainer.appendChild(editBtn);
            btnContainer.appendChild(delBtn);
            li.appendChild(info);
            li.appendChild(btnContainer);
            budgetList.appendChild(li);
            total += item.type === 'income' ? item.amount : -item.amount;
        });

        document.getElementById('budget-total').textContent = total.toFixed(2);
        updateOverview();
    }

    addBudgetBtn.onclick = () => {
        const name = budgetName.value.trim();
        const amount = Number(budgetAmount.value);
        const type = budgetType.value;
        if (name && amount > 0) {
            store.budget.push({ name, amount, type });
            budgetName.value = '';
            budgetAmount.value = '';
            renderBudget();
        } else {
            alert("Please, enter correct data.");
        }
    };

    renderBudget();
});
