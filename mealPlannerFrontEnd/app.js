const  body = document.body
fetch('http://localhost:3000/users')
.then(response => response.json())
// .then(createUserCard)
.then(addAUser)

let show = function (elem) {
    elem.style.display = 'block';
};

let hide = function (elem) {
    elem.style.display = 'none';
};

function addAUser(){
    const newUserFormHolder = document.getElementById('newUserFormHolder')

    const newUserForm = document.createElement('form')
    newUserForm.id = 'newUserForm'

    const nameOfUser = document.createElement('p')
    nameOfUser.innerHTML = `<label for='name'>Name</label>\n<input type='text' class='formInput' id='nameOfUser' name='nameOfUser'/>`

    const username = document.createElement('p')
    username.id = 'createUsername'
    username.innerHTML = `<label for='username'>Create Username</label>\n<input type='text' class='formInput' id='createUsername' name='createUsername'/>`

    const userImage = document.createElement('p')
    userImage.id = 'userImage'
    userImage.innerHTML = `<label for='username'>Add Image URL</label>\n<input type='text' class='formInput' id='addUserImage' name='addUserImage'/>`


    const password = document.createElement('p')
    password.id = 'createPassword'
    password.innerHTML = `<label for='name'>Create Password</label>\n<input type='text' class='formInput' id='createPassword' name='createPassword'/>`

    const newUserSubmitButton = document.createElement('p')
    newUserSubmitButton.innerHTML = `<input id='newUserSubmitButton' type='submit'>` 

    newUserForm.append(nameOfUser, userImage, username, newUserSubmitButton)
    newUserFormHolder.appendChild(newUserForm)

    newUserForm.addEventListener('submit', event =>{
        event.preventDefault()
        const formData = new FormData(newUserForm)
        
        newUserForm.reset()
    
        const user = {
            name: formData.get("nameOfUser"),
            username: formData.get("createUsername"),
            image_url: formData.get("addUserImage"),
            password: formData.get("createPassword")
        }

    
        fetch(`https://meal-planner-back-end.herokuapp.com/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
    
            body: JSON.stringify({ user })
        })
      
    })
    

}


createNewUserButton.addEventListener('click', () =>{
    if (window.getComputedStyle(newUserFormHolder).display === 'none') {
        show(newUserFormHolder);
        return;
    }
    else 
    hide(newUserFormHolder)
})

function createUserCard(users){
    const userCardHolder = document.getElementById('userCardHolder')

    users.forEach(user => {
        const userCard = document.createElement('div')
        userCard.id = "userCard"

        const showUsername = document.createElement('p')
        showUsername.id = "showUsername"
        showUsername.innerText = user.username
        
        const showUserImage = document.createElement('img')
        showUserImage.id = 'showUseImage'
        showUserImage.src = user.image_url

        userCard.append(showUsername, showUserImage)

        userCardHolder.append(userCard)

        
    })

}