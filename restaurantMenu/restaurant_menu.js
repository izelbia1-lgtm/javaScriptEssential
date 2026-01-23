// Menu arrays with prices
const breakfastMenu = [
    'Pancakes - $12',
    'Eggs Benedict - $22.99',
    'Oatmeal - $21.99',
    'Frittata - $15'
  ];
  
  const mainCourseMenu = [
    'Steak - $45',
    'Pasta - $28',
    'Burger - $25',
    'Salmon - $38'
  ];
  
  const dessertMenu = [
    'Cake - $10',
    'Ice Cream - $8',
    'Pudding - $9',
    'Fruit Salad - $7'
  ];
  
  // Breakfast menu using map()
  const breakfastMenuItemsHTML = breakfastMenu
    .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
    .join('');
  
  document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
  
  // Main course menu using forEach()
  let mainCourseItem = '';
  
  mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
  });
  
  document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
  
  // Dessert menu using for loop
  let dessertItem = '';
  
  for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
  }
  
  document.getElementById('dessertMenuItems').innerHTML = dessertItem;
  