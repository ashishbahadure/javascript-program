// 028. Write a Program to print first n odd numbers in C language 




try{

    function odd1(n) {
        for(var i=1;i<=n;i++){
            
            if(i%2!=0){
            console.log(`${i}`);
            
            }

        }
    }
    odd1(23)

}catch(error){
    console.log(error)
}