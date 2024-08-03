// uniqe




try{
    var arr=[1,2,3,4,4,5,6,4,2,5,1,7,2,6,3,89];
    
    for(var i=0;i<arr.length;i++){
        
        var flag=0;

        for(var j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                flag++;
            
                
                
            }
        }
        if(flag==1){
            console.log(arr[i])
        }
    }



}catch(error){
    console.log(error);
}