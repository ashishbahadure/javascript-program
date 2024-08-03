// 015. Write a program to accept a number and print if the number is Positive/Negative in C language


try{
    function checked(n) {
        if(n>0){
            console.log(`${n} this number postive`)
        } else if(n==0){
            console.log(`${n} this number 0`)
        }
        else{
            console.log(`${n} this number Negative`)

        }
    }
    checked(0)

}catch(error){
    console.log(error);
}