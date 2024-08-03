//  you can provied one string you find this string longest word and show output 
// You will be given a string in which you want to print the largest word



try{
    function lognestword(str){
        let words=str.split(" ");
        let lognestword=" ";

        for(let word of words){
        
            if(word.length > lognestword.length){
                lognestword=word;
            }
        
        }

        return lognestword;

    }
    console.log(lognestword("I went straight on the beachachs"));

}catch(error){
    console.log(error);
}