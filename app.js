const inputFoodName = () => {
    const searchMeal = document.getElementById('food-name').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals));
}
const searchIngredient = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals.strIngredient}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals.strIngredient));
}
const displayFood = food => {
    const foodContainer = document.getElementById('food-container');
    food.forEach(foodName => {
        food.map(foodNumber => {
            const foodDiv = document.createElement('div');
            foodDiv.className = "col-md-4 foodSection";
            foodDiv.innerHTML = `          
            <img onclick = "searchIngredient()" class="foodImg" src="${foodNumber.strMealThumb}">
            <h3 class="foodName" >${foodNumber.strMeal}</h3>
            </div>
            `;
            foodContainer.appendChild(foodDiv);
        })
    })
}