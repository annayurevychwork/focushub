document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if(target) target.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.sidebar a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const initialHash = window.location.hash || '#overview';
    document.querySelector(`.sidebar a[href="${initialHash}"]`)?.classList.add('active');

    window.updateOverview = () => {
        if (!store.todos || !store.habits || !store.budget) return;
        document.getElementById('overview-tasks').textContent = store.todos.length;
        document.getElementById('overview-habits').textContent = store.habits.length;
        const total = store.budget.reduce((sum, b) => sum + (b.type === 'income' ? b.amount : -b.amount), 0);
        document.getElementById('overview-budget').textContent = total.toFixed(2);
        if (window.saveStore) window.saveStore();
    };
});
