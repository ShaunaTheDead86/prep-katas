const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let ingredientCount;

  for (const entry of recipes) {  // iterate through the recipes
    ingredientCount = 0;  // reset ingredientCount on each step through recipes

    for (const item of entry.ingredients) { // iterate through the items
      if (bakeryA.includes(item) || bakeryB.includes(item)) { // check if either bakery has the item
        ingredientCount++;  // add 1 to ingredient count if above is true
      }
    }

    if (ingredientCount === entry.ingredients.length) { // check if all of the ingredients are available
      return entry.name;  // return the name of the recipe
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));