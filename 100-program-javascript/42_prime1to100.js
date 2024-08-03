// prime number 1 to 100 print 



try{
    function db(n){
        // console.log(n)
        for(var i=1;i<=n;i++){
            var flag=0;

         for(var j=1;j<=i;j++){
            if(i%j==0){
                flag++; 
            }
        }
           
        
        if(flag==2){
            console.log(i)
        
        }}
        
    }
    db(55)
    
}catch(error){
    console.log(error)
}