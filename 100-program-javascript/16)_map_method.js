
// map method in js  

const users =[
    {
        fname:'ashish',
        lname:'bahadure'
    },
    {
        fname:'ram',
        lname:'latke'
    }, {
        fname:'ram',
        lname:'latke'
    }
]


const finalUsers = users.map((user)=>{
    return user.fname +" "+ user.lname
})
console.log(finalUsers);