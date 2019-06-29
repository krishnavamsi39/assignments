a="IBHUBS"
b="U"
var c=a.indexOf(b)
d=''
if(c==-1){
    console.log("Given value do not exist")
}
else if(c==0){
    console.log(a[1])
}
else if(c==a.length-1){
    console.log(a.length-2)
}
else{
d=a[c-1]+a[c+1]
console.log(d)
}