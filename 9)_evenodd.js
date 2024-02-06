// javascript program to check if a number is odd or even 


try{

    function  evenodd(n) {
            if(n%2===0)
            {
                return console.log('even');
            }
            else{
                return console.log('odd');
            }

    }
          evenodd(101);
}catch(error){
    console.log(error);
}