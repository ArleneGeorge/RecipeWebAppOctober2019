fetch('http://localhost:3000/recipes')
.then(response => response.json())
.then(recipeCard)
.then(createRecipe)



function show(element) {
    element.style.display = 'block'
}

function hide(element) {
    element.style.display = 'none'
}

const body = document.body
const recipeHolder = document.getElementById('recipeCardHolder')
const addRecipeButton = document.getElementById('createRecipeButton')

function recipeCard(recipes){
    recipes.forEach(recipe => {
        const eachRecipeCard = document.createElement('div')
        eachRecipeCard.className = 'recipeCard'
        
        const recipeName = document.createElement('h3')
        recipeName.id = 'recipeName'
        recipeName.innerText = recipe.name 

        const picture = document.createElement('img')
        picture.id = 'picture'
        picture.src = recipe.image_url 

        const ingredientList = document.createElement('ul')
        ingredientList.id = 'ingredientList'

        const eachIngredient = document.createElement('li')
        eachIngredient.id = 'eachIngredient'
        eachIngredient.innerText = recipe.ingredients

        const moreInfo = document.createElement('h4')
        moreInfo.id = 'moreInfo'
        moreInfo.innerHTML = '<p><i class="arrow down"></i></p>'

        const recipeInstructions = document.createElement('p')
        recipeInstructions.id = 'instructions'
        recipeInstructions.innerText = recipe.instructions
        
        const deleteButton = document.createElement('button')
        deleteButton.id = 'deleteRecipeButton'
        deleteButton.innerText = 'Delete Recipe'

        const editButton = document.createElement('button')
        editButton.id = 'editRecipeButton'
        editButton.innerText = 'Edit Recipe'

        const submitChangesButton = document.createElement('button')
        submitChangesButton.id = 'submitRecipeChangesButton'
        submitChangesButton.innerText = 'Submit Changes'

        const buttonHolder = document.createElement('div')
        buttonHolder.id = 'recipeButtonHolder'

        ingredientList.append(eachIngredient)
        buttonHolder.append(deleteButton, editButton)
        eachRecipeCard.append(recipeName, picture, ingredientList, moreInfo, recipeInstructions, buttonHolder)

        recipeHolder.appendChild(eachRecipeCard)

        
        moreInfo.addEventListener('click', () => {
            
            if (window.getComputedStyle(ingredientList).display === 'none') {
                show(ingredientList)
                show(recipeInstructions)
                show(deleteButton)
                show(editButton)
                return
            }
            else 
            hide(ingredientList)
            hide(recipeInstructions)
            hide(deleteButton)
            hide(editButton)

        })


        editButton.addEventListener('click', e => {
            if (eachRecipeCard.contentEditable == 'false'){
                eachRecipeCard.contentEditable = 'true'
                editButton.innerText = 'Submit Changes'
                eachRecipeCard.style.background = "white"
                editButton.addEventListener('click', e => {

                    const nameOfRecipe = recipeName.innerText
                    const imageForRecipe = picture.src
                    const ingredientsForRecipe = eachIngredient.innerText
                    const instructionsForRecipe = recipeInstructions.innerText
                  
                    fetch(`https://meal-planner-back-end.herokuapp.com//recipes/${recipe.id}`,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
            
                    body: JSON.stringify({ name: nameOfRecipe,
                        image_url: imageForRecipe,
                        ingredients: ingredientsForRecipe,
                        instructions: instructionsForRecipe })
                    
                })
                
                })
            }
                
            else {
                eachRecipeCard.contentEditable = 'false'
                editButton.innerText = 'Edit Recipe'
                eachRecipeCard.style.background =  'rgba(121, 189, 154, 0.5)'
            }
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
    recipeImage.innerHTML = `<label for='image'>Picture URL</label>\n<input type='text' class='formInput' id='recipeImage' name='image' placeholder='https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/262096_125562217532303_6227025_n.jpg?_nc_cat=106&_nc_ohc=UENRv7azCRgAQnb7ZUeJC9ho2MJwCz6bFuWjWmdA1YVKRiCw_XnV0xiuQ&_nc_ht=scontent-ort2-2.xx&oh=f7749d28db104ad8d0125b875044200e&oe=5E67AAB3'/>`
    recipeIngredients.innerHTML = `<label for='ingredient'>Ingredients</label>\n<textarea type='text' class='formInput' id='recipeIngredients' name='ingredients'/>\n\n `
    recipeInstructions.innerHTML = `<label for='instructions'>Instructions</label>\n<textarea type='text' class='formInput' id='recipeInstructions' name='instructions'/>\n\n `
    submitButton.innerHTML = `<input id='recipeSubmitButton' type='submit'>`    

    recipeForm.append(recipeName, recipeImage, recipeIngredients, recipeInstructions, submitButton)
    recipeFormHolder.appendChild(recipeForm)

    recipeForm.addEventListener('submit', event =>{
        event.preventDefault()

        const formData = new FormData(recipeForm)
        recipeForm.reset()
    
        const recipe = {
            name: formData.get("name"),
            image_url: formData.get("image"),
            ingredients: formData.get("ingredients"),
            instructions: formData.get("instructions")
        }

        console.log('recipe', recipe)
    
        fetch(`http://localhost:3000/recipes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
    
            body: JSON.stringify({ recipe })
        })
      
    })
}

function deleteRecipe(id, e) {
    e.target.parentNode.remove()

    fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'DELETE'
    })
    
}