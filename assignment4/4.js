function election(l){
    for(i=0;i<l.length;i++){
        if(l[i].age>=18){
            p.push(l[i])
        }
    }
}
p=[]
l=[{fullname:"ram",age:18},{fullname:"bharat",age:19},{fullname:"krishna",age:15}]
election(l)
console.log(p)