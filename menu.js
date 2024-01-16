options = ['steak', 'chicken', 'pasta'];

function createMenu(options, days = 7, meals = ['lunch', 'dinner']) {
let menu = [];
const getOption = () => options[Math.floor(Math.random() * options.length)];
for (let i = 0; i < days; i++) {
    const today = new Date();
    let timeStamp = new Date(today.setDate(today.getDate() + i)).toLocaleDateString();
    for (let ii = 0; ii < meals.length; ii++) {
    menu.push({day: timeStamp, meal: meals[ii], having: getOption()});
    }
}
    return menu;
}