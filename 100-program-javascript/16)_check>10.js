// 016. Write a program to accept a number and check if it is >10, <10 or =10 in C language


try{

    function check(n) {
        if(n>10){
            console.log(`${n} number is grater than >10`)
        }else if(n<10){
            console.log(`${n} number is less than <10`)
        }else{
            console.log(`${n} number is equal than =10`)

        }

    }
    check(10)


}catch(error){
    console.log(error);
}