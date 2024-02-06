//javascript program to check if a number is positive negative or zero 


try{

    function finding(n){
        if(n>0){
            const b=console.log(n,'number is positive');
            return b;
        } else if(n<0){
            const b=console.log(n,'number is negitive');
            return b
        }
        else if(n===0){
            const b=console.log(n,'number is 0');
            return b
        }


        
    }
    finding(0)

}catch(error){
    console.log(error);
}