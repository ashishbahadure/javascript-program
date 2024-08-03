

function sum1() {
    var sum=0;
    for(let i in arguments){
        sum+=arguments[i];
    }
    // console.log(sum);
    // console.log("<br>",sum) 
    // console.log(sum)
}
sum1(20,30,40)
sum1(30,23,40,50)


function sum(name,sub,...args) {
        var sum=0;
    for(var i in args) {

        sum+=args[i];


    }
    console.log(sum);
    console.log(name)
    console.log(sub)

}

sum("ashish","rushi",20,30,40);