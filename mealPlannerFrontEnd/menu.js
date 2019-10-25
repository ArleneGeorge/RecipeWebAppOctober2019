const body = document.body

let show = function (elem) {
    elem.style.display = 'block';
};

let hide = function (elem) {
    elem.style.display = 'none';
};

fetch('http://localhost:3000/menus')
    .then(response => response.json())
    .then(showMenu)
    .then(createMenu)


    
    

    function showMenu(menus){
        const menuContainter = document.getElementById('menuContainer')
        
        menus.forEach(menu => {
            const menuCard = document.createElement('div')
            menuCard.id = 'menuCard'

            const showWeekday = document.createElement('p')
            const showMeal = document.createElement('p')
            const showRecipe = document.createElement('p')
            const showRecipeImage = document.createElement('img')
            const showRecipeIngredients = document.createElement('p')
            const showRecipeInstructions = document.createElement('p')

            const deleteMenuButton = document.createElement('button')
            deleteMenuButton.id = 'deleteMenuButton'
            deleteMenuButton.innerText = 'Delete Menu'

            showRecipeIngredients.id = 'showRecipeIngredients'
            showRecipeInstructions.id = 'showRecipeInstructions'

            showWeekday.innerText = menu.weekday
            showMeal.innerText = menu.meal
            showRecipe.innerText = menu.recipe.name
            showRecipeImage.src = menu.recipe.image_url
            showRecipeIngredients.innerText = menu.recipe.ingredients
            showRecipeInstructions.innerText = menu.recipe.instructions
            menuCard.append(showWeekday, showMeal, showRecipe, showRecipeImage, showRecipeIngredients, showRecipeInstructions, deleteMenuButton)
            menuContainter.appendChild(menuCard)
            body.appendChild(menuContainter)

            showRecipeImage.addEventListener('click', e => {
                console.log('menu', menuCard)

                if (window.getComputedStyle(showRecipeInstructions).display === 'none') {
                    show(showRecipeInstructions)
                    show(showRecipeIngredients)
                    show(deleteMenuButton)
                    return
                }
                else 
                hide(showRecipeInstructions)
                hide(showRecipeIngredients)
                hide(deleteMenuButton)

            })
            deleteMenuButton.addEventListener('click', e => deleteMenu(menu.id, e))
        })


        
    }

   

    
    

function createMenu(){
    const menuName = document.createElement('p')
    menuName.innerHTML = `<label for='name'>Menu Name</label>\n<input type='text' class='formInput' id='menuName' name='name'/>`

    const menuFormHolder = document.getElementById('menuFormHolder')
    const menuForm = document.createElement('form')
    menuForm.id = 'menuForm'

    const selectWeekday = document.createElement('p')
    selectWeekday.id = 'selectWeekday'

    
    selectWeekday.innerHTML = 
    `<label>Weekday</label>
    <select name="weekday", id='weekday_dropdown'>
      <option value="Sunday">Sunday</option>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
    </select>`

    const selectMeal = document.createElement('p')
    selectMeal.id = 'selectMeal'
    selectMeal.innerHTML =     
    `<label>Meal</label>
    <select name='meal' id='meal_dropdown'>
    <option value="Breakfast">Breakfast</option>
    <option value="Morning Snack">Morning Snack</option>
    <option value="Lunch">Lunch</option>
    <option value="Afternoon Snack">Afternoon Snack</option>
    <option value="Dinner">Dinner</option>
    <option value="Dessert">Dessert</option></select>`
    

    const selectRecipe = document.createElement('p')
    selectRecipe.id = 'selectRecipe'
    selectRecipe.innerHTML = `<label>Recipe</label><select name='recipe_id' id='recipe_dropdown'></select>`


    const menuSubmitButton = document.createElement('p')
    // menuSubmitButton.id = 'menuSubmitButton'

    menuSubmitButton.innerHTML = `<input id='menuSubmitButton' type='submit'>`

    fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipeOptions)

function recipeOptions(recipes){
    recipes.forEach(recipe => {
        const recipeDropdown = document.getElementById('recipe_dropdown')
        const recipeOption = document.createElement('option')
        recipeOption.innerText = recipe.name
        recipeOption.value = recipe.id
        recipeDropdown.appendChild(recipeOption)
    })
    
}
   
    menuForm.append(selectWeekday, selectMeal, selectRecipe, menuSubmitButton)
    menuFormHolder.appendChild(menuForm)
  


    menuSubmitButton.addEventListener('click', event =>{
        event.preventDefault()
        const formData = new FormData(menuForm)
        
    
        const menu = {
            weekday: formData.get("weekday"),
            meal: formData.get("meal"),
            recipe_id: formData.get("recipe_id"),
        }
    
        fetch(`http://localhost:3000/menus`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
    
            body: JSON.stringify({ menu })
        })
      
    })


}

function deleteMenu(id, e) {
     target = e.target.parentNode.remove()
    console.log('target', target)
    fetch(`http://localhost:3000/menus/${id}`, {
        method: 'DELETE'
    })
    
}


 