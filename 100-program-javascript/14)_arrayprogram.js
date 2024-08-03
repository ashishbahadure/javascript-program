

const payment=[
    {
        name:'ashish',
        payment:900,
    },
    {
        name:'ram',
        payment:300,
    },
    {
        name:'kaviram',
        payment:600,
    }
]


// for(var i=0;i<payment.length;i++){
//     payment[i]=payment[i].payment-10;
// }
// console.log(payment);

payment.forEach((payment)=>{
    payment.payment =payment.payment-20;
});

for(let payment  of payment){
    payment.payment =payment.payment-20;

}

console.log(payment)