// how to object pass in function 


function price(objany) {
    console.log(`my name is ${objany.username} and price ${objany.price}`)
    console.log(`${objany.myhobby.game}`);
    console.log(`${objany.myhobby.ground[0]}`)


}

const user={
    username:'ashish',
    price:400,
    myhobby:{
                game:'hooky',
                sport:'cricket',
                ground:[
                        'swiming','metter','fitter','ashish'
                       
                    ]
    }   
}
price(user)



