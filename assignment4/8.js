var sentence="You progress the nation follows"
var words=sentence.split(" ")
var a=''
ma=-1
for(i=0;i<words.length;i++){
    if(words[i].length>ma){
        ma=words[i].length
        a=words[i]
    }
   
}
console.log(a)