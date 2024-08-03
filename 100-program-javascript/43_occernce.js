



try{

    const arr=[1,2,2,2,3,4,5,6,7,7,8,9,1,6,7,9,3,5,2,32,65]
    for(var i=0;i<arr.length;i++){
        var flag=1;
        
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                
            flag++;
            arr.splice(j,1);
            j--
            }
            
        }
        console.log(arr[i],':' ,flag)
    }



}catch(error){
    console.log(error)
}






