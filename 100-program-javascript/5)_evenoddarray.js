// how to print even and odd position all arrays elements 


var as=[10,20,3,4,5,6,3,8,9,98];


    // function sum(array) {
    //         var a=[];
    //     for(var i=0;i<array.length;i++) {
    //         if(i%2==0){
    //             a.push(array[i])
    //         }
    //     }
    //     console.log(a);
    // }
    // sum()

    function questionEven(array){
        let arr=[];
        for(let i=0;i<array.length;i++) {
            if(i%2!== 0){
                arr.push(array[i]);
            }

        }
        return arr;
        // console.log()
    } 
    console.log(questionEven(as))