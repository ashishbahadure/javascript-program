// 008. Write a program to print simple interest SI = (PNR)/100 in C language


try{

    function interest(P,N,R) {
        var SI =Number(P)*Number(N)*Number(R)/100;
        return SI;
    }
    console.log(interest(10,20,30))

}catch(error){
    console.log(error);
}