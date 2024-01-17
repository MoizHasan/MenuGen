options = [
    'Tinfoil Chicken', 
    'Chicken Fajitas', 
    'Beef Tacos', 
    'Stir Fry', 
    'Daal Chawal', 
    'Chicken Karahi',
    'Jambalaya',
    'Burgers',
    'Keema Curry with Rice and Veggies',
    'Salmon with Rice and Veggies',
    'Sushi',
    'Salmon with Pasta and Veggies',
    'Spaghetti',
    'Chili',
    'Shredded Beef With Potato',
    'Baked Potato',
    'Roast Chicken',
    'Gyro Sandwich',
    'Chicken Tenders + Fries',
    'Fried Chicken',
    'Breakfast for Dinner',
    'Meatloaf',
    'Pork Chops',
    'Lo Mein',
    'Mac & Cheese',
    'Eating Out/Pick Up',
    'Steak',
    'Tuna Salad',
    'Honey Garlic Chicken',
    'Chuck Roast',
    'Enchiladas',
    'Pizza',
    'Meatballs with Rice/Naan',
    'Hotdogs',
    'Ramen',
    'Omelette',
    `Shepherd's Pie`,
    'Find a new Recipe',
];

function createMenu(options, days = 7, meals = ['lunch', 'dinner']) {
let menu = [];
let optionsCopy = [...options];
const getOption = () => {
    const o = Math.floor(Math.random() * optionsCopy.length);
    const option = optionsCopy[o];
    optionsCopy.splice(o, 1);
    return option;
}
for (let i = 0; i < days; i++) {
    const today = new Date();
    let timeStamp = new Date(today.setDate(today.getDate() + i)).toLocaleDateString();
    for (let ii = 0; ii < meals.length; ii++) {
    menu.push({day: timeStamp, meal: meals[ii], dish: getOption()});
    }
    if (i % 7 === 0) {
        // refresh options
        optionsCopy = [...options];
    }
}
    return menu;
}

function formatPrint(menu) {
    menu.forEach(x => {
        console.log(`${x.day} - ${x.dish}`);
    })
}
