// 006. Write a program to print area of a circle. A(circle)= 3.142 * R * R in C language


try{


    function area_of_circle(R) {
        
        var areaOf =3.14 *Number(R)*Number(R);

        return areaOf;
        

    }
    console.log(area_of_circle(20)); 

}catch(error){
    console.log(error)
}