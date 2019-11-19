const body = document.body

function show(element) {
    element.style.display = 'block'
}

function hide(element) {
    element.style.display = 'none'
}

fetch('https://meal-planner-back-end.herokuapp.com/menus')
    .then(response => response.json())
    .then(showMenu)
    .then(createMenu)


    
    

    function showMenu(menus){
        const menuContainter = document.getElementById('menuContainer')
        
        menus.forEach(menu => {
            const menuCard = document.createElement('div')
            menuCard.id = 'menuCard'

            const showWeekday = document.createElement('p')
            showWeekday.innerText = menu.weekday

            const showMeal = document.createElement('p')
            showMeal.innerText = menu.meal

            const showRecipe = document.createElement('p')
            showRecipe.innerText = menu.recipe.name

            const showRecipeImage = document.createElement('img')
            showRecipeImage.src = menu.recipe.image_url

            const showRecipeIngredients = document.createElement('p')
            showRecipeIngredients.id = 'showRecipeIngredients'
            showRecipeIngredients.innerText = menu.recipe.ingredients

            const showRecipeInstructions = document.createElement('p')
            showRecipeInstructions.id = 'showRecipeInstructions'
            showRecipeInstructions.innerText = menu.recipe.instructions

            const moreInfo= document.createElement('h4')                
                moreInfo.id = 'moreInfo'
                moreInfo.innerHTML = '<p><i class="arrow down"></i></p>'

            const deleteMenuButton = document.createElement('button')
            deleteMenuButton.id = 'deleteMenuButton'
            deleteMenuButton.innerText = 'Delete Menu'

            
            
            menuCard.append(showWeekday, showMeal, showRecipe, showRecipeImage, showRecipeIngredients, moreInfo, showRecipeInstructions, deleteMenuButton)
            menuContainter.appendChild(menuCard)
            body.appendChild(menuContainter)

            moreInfo.addEventListener('click', e => {

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

    const menuFormHolder = document.getElementById('menuFormHolder')
    const menuForm = document.createElement('form')
    menuForm.id = 'menuForm'

    const selectWeekday = document.createElement('p')
    selectWeekday.id = 'selectWeekday'

    
    selectWeekday.innerHTML = 
    `<label>Day</label>
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

    fetch('https://meal-planner-back-end.herokuapp.com/recipes')
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
  


    menuSubmitButton.addEventListener('click', function (event){
        // event.preventDefault()
        const formData = new FormData(menuForm)
        
    
        const menu = {
            weekday: formData.get("weekday"),
            meal: formData.get("meal"),
            recipe_id: formData.get("recipe_id"),
        }
    
        fetch(`https://meal-planner-back-end.herokuapp.com/menus`,{
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
    fetch(`https://meal-planner-back-end.herokuapp.com/menus/${id}`, {
        method: 'DELETE'
    })
    
}


 