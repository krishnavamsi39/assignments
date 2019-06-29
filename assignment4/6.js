l=['a','a','b','c','d']
var p={}
function freq(l){
    for(i=0;i<l.length;i++){
        c=0
        for(j=0;j<l.length;j++){
            if(l[j]==l[i])
            c+=1
        }
        p[l[i]]=c
    }
}
freq(l)
console.log(p)