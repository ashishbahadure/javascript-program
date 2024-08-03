//swapping of two number 


try{
    function swapping(n,m){
        const o=n;
              n=m;
              m=o;
              console.log(m,n);
              return m,n;
    }
    swapping(12,10);
}catch(error){
    
console.log(error)

}