// how to find array length without length method use in array 



const a =[10,20,30,40,50];

function find1() {
         length=0;

         while(a[length]!==undefined) {
            length++;
         }
         console.log(length)
}

find1()