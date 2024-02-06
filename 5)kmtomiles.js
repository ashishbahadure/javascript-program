// conversion of kms to miles  

// 1 kilometers =0.621371;
// miles = kilometers * factor


try{

    function kilometer(n){
        const fatcor=0.621371;
        const miles=Number(n)*Number(fatcor);
        return miles;
    }
    console.log(kilometer(4))
}catch(error){
    console.log(error)
}