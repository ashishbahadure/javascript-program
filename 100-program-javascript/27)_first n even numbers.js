// 027. Write a Program to print first n even numbers in js language 




try{

    function evennumber(n) {
        // let number=2;
        // for(var i=1;i<=n;i++){

        //         console.log(`even = ${number}`)
        //         number+=2;
        // }
       

        for(var i=1;i<=n;i++){
            
            if(i%2==0){
                console.log(`even = ${i}`)
                
            }
        }

        

    }
    evennumber(22);

}catch(error){
    console.log(error);
}

