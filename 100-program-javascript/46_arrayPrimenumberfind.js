// second largest number find 



try{
const arr=[1,2,3,4,5,6,7,8,9,54,34,22];

    for(var i=0;i<arr.length;i++){
        var flag=0;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                flag=1;
                
            }
        }
        if(flag==0){
            console.log(arr[i])
        }

    }

    

}catch(error){
    console.log(error)
}