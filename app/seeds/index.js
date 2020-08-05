const db = require('../models')

usersList = [
    {
        username: 'alex',
        displayName: 'alex',
        password: 'test',
        email: 'example@example.com'
    }
]

usersList.forEach(newUser =>{
   db.User.findOrCreate({
    where: newUser
  }).then((user)=>{
    if(user[1]) {
        console.log('User Created:',newUser.firstName, newUser.lastName)
    } else {
        console.log('User Exists:',newUser.firstName, newUser.lastName)
    }
  }).catch((err)=>{
    console.log('ERROR:',err)
  })
})


