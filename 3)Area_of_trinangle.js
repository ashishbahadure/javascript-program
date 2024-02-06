//javascript program to find area of a triangle 
// genearl forumula (base * height)/2

try{
  
    function trangle(b,h){
        const num= Number(b) * Number(h)/2;
        return num;
    }
     console.log(trangle(12,10));

}catch(error){
    console.log(error);
}