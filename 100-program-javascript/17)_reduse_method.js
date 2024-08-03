
const movies = [
    {
        name:'ved',
        budget:100
    },
    {
        name:'social',
        budget:140
    },
    {
        name:"network",
        budget:300
    }
]


// let total =0;


//     movies.forEach((movie)=>{
//         total += movie.budget
//     })

    const total = movies.reduce((acc,movie)=>{
        acc = acc + movie.budget;
        return acc
    },0)

    console.log(total)