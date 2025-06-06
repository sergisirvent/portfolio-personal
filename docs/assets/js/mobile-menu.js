let menuEnabled = false;

const allFilter = document.getElementById('all-filter');
allFilter.classList.add('active')

const consoleActivator = document.getElementById('console-activator');
const consoleMenu = document.getElementById('console-menu');
const consoleMenuItems = document.querySelectorAll('.console-menu-item');

// Toggle the console menu on click
consoleActivator.addEventListener('click', () => {
    menuEnabled = !menuEnabled;
    consoleMenu.classList.toggle('active', menuEnabled);
    consoleActivator.classList.toggle('active', menuEnabled);
});

consoleMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const value = item.getAttribute('data-filter');

        // simulate click on the filter
        const filter = document.querySelector(`.filter[data-filter="${value}"]`);
        if (filter) {
            filter.click();
            const consoleText = document.getElementById('console-text');
            consoleText.textContent = filter.textContent;
            consoleMenuItems.forEach(item => item.classList.remove('active'))
            e.currentTarget.classList.add('active');
        }

    });
});

const filters = document.querySelectorAll('.filter');
filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        e.preventDefault();
        const value = filter.getAttribute('data-filter');

        // Remove active class from all filters
        filters.forEach(f => f.classList.remove('active'));
        // Add active class to the clicked filter
        filter.classList.add('active');

        // Filter the portfolio items
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            if (item.matches(value) || value === '*') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
})