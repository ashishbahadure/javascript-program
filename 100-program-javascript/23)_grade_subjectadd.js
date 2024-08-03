// 023. Write a program to accept roll number ,and marks for three subjects, print total marks and average, also print grade by considering following conditions 



try{

    function average(roll,marathi,math,science) {

        const total=marathi+math+science;
        const average=total/3;

        
        if(average>=65){
            console.log(`roll number ${roll} total marks = ${total} average =${average} and grade = A `);

        }else if(average>=45) {

            console.log(`roll number ${roll} total marks = ${total} average =${average} and grade = B `);
        }else if(average>35){
            console.log(`roll number ${roll}  total marks = ${total} average =${average} and grade = fail `);
        }
            



    }
    average(12,54,34,55);

}catch(error){
    console.log(error)
}
