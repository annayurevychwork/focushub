document.addEventListener('DOMContentLoaded', () => {
    const savedStore = localStorage.getItem('focusHubStore');
    if (savedStore) {
        window.store = JSON.parse(savedStore);
    } else {
        window.store = { todos: [], habits: [], budget: [] };
    }
    window.saveStore = () => localStorage.setItem('focusHubStore', JSON.stringify(window.store));
});
