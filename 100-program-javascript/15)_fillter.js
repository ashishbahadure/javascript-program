


const students=[
    {
        name:'ashish',
        marks:49,
    },
    {
        name:'ram',
        marks:98,
    },
    {
        name:'rushi',
        marks:88
    },
    {
        name:'balaji',
        marks:32,
    }


]

const field= students.filter((student)=>{
    if(student.marks < 45){
        return true
    }
    return false;
})
console.log(field)
