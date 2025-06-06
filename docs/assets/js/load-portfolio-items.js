const portfolioGrid = document.getElementById('portfolio-grid');
const items = database.home.items.map(item => {
    portfolioGrid.innerHTML += `
        <landing-item
          class="landing-item"
          filter="${item.filter}"
          id="${item.id}"
          title="${item.title}"
          language="${item.language}"
          image="${item.image}"></landing-item>
      `;
})