const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll(`li.item`);
console.log(`Namber of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const categoryTitle = item.querySelector(`h2`).textContent;
    const subCategories = item.querySelectorAll(`ul > li`)
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${subCategories.length}`);
    });
