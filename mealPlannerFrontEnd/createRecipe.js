const recipe_form = document.getElementById('recipeForm')
console.log(recipeForm)

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
    console.log('recipe', recipe)


    fetch(`http://localhost:3000/recipes`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ recipe })
    }).then(response => response.json())
  
})