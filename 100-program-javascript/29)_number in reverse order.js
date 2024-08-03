// 029. Write a Program to accept a number and print the number in reverse order. E.g. if 1324 is the number then the output will be 4231 in js language

try{

    function revers1(n) {
        var rem;
        var reverse=0;

       while(n>0){
          rem=n%10;
        // console.log('rem =',rem)
        reverse=reverse*10+rem;
        // console.log('revesres =',reverse)
        n=parseInt(n/10)
        // console.log('n =',n)
       }
    //    console.log(reverse)

    } 
    revers1(2354987656)

}catch(error){
    console.log(error);
}




try{

    function reveres(n){
        var rem;
        var reveres=0;
        while(n>0){
            rem=n%10;
            reveres=reveres*10+rem;
            n=parseInt(n/10);
        }
        // console.log(reveres);
        

    }
    // reveres(45678)

}catch(error){
    console.log(error)
}




try{

    function reveres(n){
        var rem;
        var reveres=0;
        
        while(n>0){
            rem=n%10;
            reveres=reveres*10+rem;
            n=parseInt(n/10);
        }
        console.log(reveres);

    }
    reveres(983)

}catch(error){
    console.log(error);
}