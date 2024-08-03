// 018. Write a program to accept a number from user and print if it is divisible by 7 in C language



try{

    function divisible(n) {
        if(n%7==0){
            console.log(`${n} this number is divisble by 7`)
        }else{
            console.log(`${n} this number is not be divisble by 7`)

        }
    }
    divisible(501)
    
}catch(error){
    console.log(error)
}