fetch('http://localhost:3000/recipes')
.then(response => response.json())
.then(recipeCard)
.then(createRecipe)



var show = function (elem) {
    elem.style.display = 'block';
};

var hide = function (elem) {
    elem.style.display = 'none';
};

const body = document.body
const recipeHolder = document.getElementById('recipeCardHolder')
const addRecipeButton = document.getElementById('createRecipeButton')

function recipeCard(recipes){
    recipes.forEach(recipe => {
        const eachRecipeCard = document.createElement('div')
        eachRecipeCard.className = 'recipeCard'
        
        const recipeName = document.createElement('h3')
        const picture = document.createElement('img')
        const ingredientList = document.createElement('ul')
        const eachIngredient = document.createElement('li')
        const moreInfo = document.createElement('p')
        const recipeInstructions = document.createElement('p')
        const deleteButton = document.createElement('button')

        deleteButton.id = 'deleteRecipeButton'
        recipeInstructions.id = 'instructions'
        moreInfo.id = 'moreInfo'
        
        
        recipeName.innerText = recipe.name 
        picture.src = recipe.image_url 
        eachIngredient.innerText = recipe.ingredients
        moreInfo.innerHTML = '<p><i class="arrow down"></i></p>'
        recipeInstructions.innerText = recipe.instructions
        deleteButton.innerText = 'Delete Recipe'

        ingredientList.append(eachIngredient)
        eachRecipeCard.append(recipeName, picture, ingredientList, moreInfo, recipeInstructions, deleteButton)

        recipeHolder.appendChild(eachRecipeCard)

        
        moreInfo.addEventListener('click', e => {
            
            if (window.getComputedStyle(recipeInstructions).display === 'none') {
                show(recipeInstructions)
                show(deleteButton)
                return
            }
            else 
            hide(recipeInstructions)
            hide(deleteButton)

        })

        deleteButton.addEventListener('click', e => deleteRecipe(recipe.id, e))
    })
}

addRecipeButton.addEventListener('click', () =>{
    if (window.getComputedStyle(recipeFormHolder).display === 'none') {
        show(recipeFormHolder);
        return;
    }
    else 
    hide(recipeFormHolder)
})

function createRecipe(){
    const recipeFormHolder = document.getElementById('recipeFormHolder')
    const recipeForm = document.createElement('form')
    const recipeName = document.createElement('p')
    const recipeImage = document.createElement('p')
    const recipeIngredients = document.createElement('p')
    const recipeInstructions = document.createElement('p')
    const submitButton = document.createElement('p')

    recipeName.innerHTML = `<label for='name'>Recipe Name</label>\n<input type='text' class='formInput' id='recipeName' name='name'/>`
    recipeImage.innerHTML = `<label for='image'>Picture URL</label>\n<input type='text' class='formInput' id='recipeImage' name='image'/>`
    recipeIngredients.innerHTML = `<label for='ingredient'>Ingredients</label>\n<textarea type='text' class='formInput' id='recipeIngredient' name='ingredient'/>`
    recipeInstructions.innerHTML = `<label for='instructions'>Instructions</label>\n<textarea type='text' class='formInput' id='recipeInstructions' name='instructions'/>\n\n `
    submitButton.innerHTML = `<input type='submit'>`    

    recipeForm.append(recipeName, recipeImage, recipeIngredients, recipeInstructions, submitButton)
    recipeFormHolder.appendChild(recipeForm)

    recipeForm.addEventListener('submit', event =>{
        event.preventDefault()
        const formData = new FormData(recipeForm)
        console.log('form data', formData)
        recipeForm.reset()
    
        const recipe = {
            name: formData.get("name"),
            image_url: formData.get("image"),
            ingredients: formData.get("ingredient"),
            instructions: formData.get("instructions")
        }
    
        fetch(`http://localhost:3000/recipes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
    
            body: JSON.stringify({ recipe })
        }).then(response => response.json())
      
    })
}

function deleteRecipe(id, e) {
    e.target.parentNode.remove()
    console.log(id)

    fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'DELETE'
    })
    
}