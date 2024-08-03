// union program 






try{
    arr=[1,2,2,3,4,4,4,5,6,7,3,4,5,6,7,6,1,1,2,3,4,32]
    
    for(var i=0;i<arr.length;i++){

        var flag=0;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                flag=1;
                
            }

        }
        if(flag==0){
            console.log(arr[i],":",)
        }
    }





    // arr.forEach((element,index) => {
    //     // console.log(index)
    //     var flag=0;
    //     for(var i=index+1;i<arr.length;i++){
    //         if (element==arr[i]) {
    //             flag=1;
    //             // console.log(element)
    //         }
    //     }
    //     if(flag==1){
    //         console.log(element)
    //     }
    // });

}catch(error){
    console.log(error)
}


