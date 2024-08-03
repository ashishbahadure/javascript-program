// 021. Write a program to accept three numbers from user and print them in ascending and descending order in C language 


try{
    function ascending(a,b,c) {

        if(a>=b && a>=c){
            if(b>=c){
                console.log(`dessending order ${a},${b},${c}`);
                console.log(`assending order ${c},${b},${a}`);
            }else{
                console.log(`dessending order ${a},${c},${b}`);
                console.log(`assending order ${b},${c},${a}`);

            }
        } else if(b>=c && b>=a){
            if(a>=c){
                console.log(`dessending order ${b},${a},${c}`);
                console.log(`assending order ${c},${a},${b}`);
            }else{
                console.log(`dessending order ${b},${c},${a}`);
                console.log(`assending order ${a},${c},${b}`);
            }
        }
        else if(c>=a && c>=b){
            if(a>=b){
                console.log(`dessending order ${c},${a},${b}`);
                console.log(`assending order ${b},${a},${c}`);
            }
            else {
                console.log(`dessending order ${c},${b},${a}`);
                console.log(`assending order ${a},${b},${c}`);
            }
        }
    
    



    }
    ascending(12,131,432)

}catch(error){
    console.log(error);
}