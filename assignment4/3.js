var nc=0
var sc=0
var oc=0
function a(l){

for(i=0;i<l.length;i++){
    if(typeof(l[i])=="number")
    nc+=1
    else if(typeof(l[i])=="string")
    sc+=1
    else
    oc+=1
}
}
l=[1,2,"Sita",{ram:1}]
a(l)
console.log(nc)
console.log(sc)
console.log(oc)