// 003. Write a program to accept values of two numbers and print their subtraction


try{

    function sub(n,m){
        var c=Number(n) - Number(m);
        return c;
    }
    console.log(sub(32,23))

}catch(error){

    console.log(error);
}