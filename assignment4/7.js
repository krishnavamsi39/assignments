a={1: "One",2: "Two" }
b={}
for(var c in a){
    b[a[c]]=c
}
console.log(b)
