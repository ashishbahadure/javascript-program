// 024. Write a Program to accept user’s marital status, gender and age to check if he/she is eligible for marriage or not. 

try{

    function marital_status(status,gender,age) {
        if(status=='m'){
            console.log('you alrady married')
        }else if(status==='u'){
            if(gender==='male'){
                if(age>=21){
                    console.log('he is eligible for marriage')
                }else{
                    console.log('he is not eligible;')
                }
            }else if(gender==='female'){
                if(age>=18){
                    console.log('she is eligible for marriage');
                }else{
                    console.log('she is not eligible')
                }
            }else{
                console.log("invalid gender")
            }
        }else{
            console.log('wrong info')
        }


      
    }
    marital_status("u",'female',18)

}catch(error){
    console.log(error);
}