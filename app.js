

const inputFoodName = food =>{
    console.log(document.getElementById("food-name").value);
    let mealName = document.getElementById('food-name').value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
   // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}
const displayFood = container =>{
    const foodItemContainer = document.getElementById('container');
    for (let i = 0; i < container.length; i++) {
        const  = container[i];
        
    }
}
   document.getElementById('input-button').addEventListener('click', function(){
    inputFoodName();
   })

