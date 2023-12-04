function searchMeals() {
    const searchInput = document.getElementById('searchInput').value;

    
    if (searchInput.trim() !== '') {
        
        document.getElementById('mealResults').innerHTML = '';

        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`)
            .then(response => response.json())
            .then(data => displayMeals(data.meals))
            // .catch(error => console.error('Error fetching data:', error));
    }
}

function displayMeals(meals) {
    const resultsContainer = document.getElementById('mealResults');

    
    meals.slice(0, 5).forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('meal-card');

        const mealImage = document.createElement('img');
        mealImage.src = meal.strMealThumb;
        mealImage.alt = meal.strMeal;

        const mealName = document.createElement('p');
        mealName.textContent = meal.strMeal;

        mealCard.appendChild(mealImage);
        mealCard.appendChild(mealName);
        resultsContainer.appendChild(mealCard);
    });
}
