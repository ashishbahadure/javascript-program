// 009. Write a program to accept a number from user and print it’s square & cube in C language


try{

    function square_and_cube(num){
            var square=Number(num)*Number(num);
            var cube =Number(num)*Number(num)*Number(num);
            return {square,cube};

    }
    console.log(square_and_cube(2))
    console.log(square_and_cube(2))

}catch(error) 
{
    console.log(error)
}