//print the table use while loop in js


try{

    function table(n){
        var i=1;
        while(i<=10){
            const table=n*i;
            console.log(table);
            i++;

        }



    }
    table(13);

}catch(error){
    console.log(error);
}