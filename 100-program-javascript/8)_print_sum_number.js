// Write a program to print sum of given first n numbers in JavaScript ?




try{

    function sum(n){
        let sum=0;
        for( var i=1;i<=n;i++)
        {
            sum+=i;
        }

            console.log(sum);

    }

    sum(10)
    

}catch(error){
    console.log(error);
}