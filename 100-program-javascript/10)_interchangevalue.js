// 010. Write a program to accept two values a & b and interchange their values in C language


try{

    function interchange(a,b) {
        var temp=a;
            a=b;
            b=temp;
            return {temp,a,b}

    }
    console.log(interchange(22,44));

}catch(error){
    console.log(error);
}