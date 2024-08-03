
const user=[
    {
        name:'abc',
        id:1,
    },{
        name:'xyz',
        id:3
    },
    {
        name:'opq',
        id:4
    }
    
]

const myUser = user.find((user) =>{
    if(user.id ===3) {
        return true;
    }
    return false
})

console.log(myUser)