// 011. Write a program to accept roll no and marks of 3 subjects of a student, Calculate total of 3 subjects and average in C language

try{
    function marks(roll,marathi,math,english) {
        const average =Number(marathi)+Number(math)+Number(english)/3;
        return {average,roll};
    }
    console.log(marks(12,50,50,50));

}catch(error) {
    console.log(error)
}